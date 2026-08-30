<script lang="ts">
  import type { Level, GridPosition, ComponentType, CircuitNode, CircuitWire } from '../engine/types';
  import Node from './Node.svelte';
  import Wire from './Wire.svelte';

  let { 
    level, 
    nodes, 
    wires, 
    onNodeAdd, 
    onNodeRemove, 
    onWireAdd,
    selectedComponent 
  } = $props<{
    level: Level;
    nodes: CircuitNode[];
    wires: CircuitWire[];
    onNodeAdd: (type: ComponentType, pos: GridPosition) => void;
    onNodeRemove: (id: string) => void;
    onWireAdd: (from: string, to: string, path: GridPosition[]) => void;
    selectedComponent: ComponentType | null;
  }>();

  const CELL_SIZE = 60;
  
  let gridWidth = $derived(level.gridSize.width * CELL_SIZE);
  let gridHeight = $derived(level.gridSize.height * CELL_SIZE);

  let drawingWireFrom = $state<string | null>(null);
  let mousePos = $state<{x: number, y: number} | null>(null);

  function handleGridPointerDown(e: PointerEvent) {
    if (e.button !== 0 && e.pointerType === 'mouse') return; // only left click
    if (!selectedComponent) return;

    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);

    if (x >= 0 && x < level.gridSize.width && y >= 0 && y < level.gridSize.height) {
      if (selectedComponent !== 'WIRE') {
        onNodeAdd(selectedComponent, { x, y });
      }
    }
  }

  function handleNodePointerDown(id: string, e: PointerEvent) {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.stopPropagation();
    if (selectedComponent === 'WIRE') {
      if (!drawingWireFrom) {
        drawingWireFrom = id;
      } else {
        if (drawingWireFrom !== id) {
          // Dummy path for now, straight line logic can be refined
          onWireAdd(drawingWireFrom, id, []);
        }
        drawingWireFrom = null;
      }
    } else if (selectedComponent === null) {
      // Remove or interact
      onNodeRemove(id);
    }
  }

  function handlePointerMove(e: PointerEvent) {
    if (drawingWireFrom) {
      const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
      mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }

  function getPortCoords(nodeId: string) {
    const node = nodes.find((n: CircuitNode) => n.id === nodeId);
    if (!node) return { x: 0, y: 0 };
    return {
      x: node.position.x * CELL_SIZE + CELL_SIZE / 2,
      y: node.position.y * CELL_SIZE + CELL_SIZE / 2
    };
  }
</script>

<div class="overflow-auto border-2 border-[var(--color-primary)] bg-[rgba(15,23,42,0.8)] shadow-[0_0_30px_rgba(236,72,153,0.15)] rounded-lg relative backdrop-blur-sm">
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <svg 
    role="application"
    width={gridWidth} 
    height={gridHeight} 
    class="block touch-none"
    onpointerdown={handleGridPointerDown}
    onpointermove={handlePointerMove}
  >
    <defs>
      <pattern id="gridPattern" width={CELL_SIZE} height={CELL_SIZE} patternUnits="userSpaceOnUse">
        <rect width={CELL_SIZE} height={CELL_SIZE} fill="none" stroke="var(--grid-color)" stroke-width="1" />
        <circle cx={CELL_SIZE/2} cy={CELL_SIZE/2} r="1" fill="var(--grid-color)" />
      </pattern>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#gridPattern)" />

    <!-- Wires -->
    {#each wires as wire}
      <Wire 
        start={getPortCoords(wire.fromNodeId)} 
        end={getPortCoords(wire.toNodeId)} 
        active={false} 
      />
    {/each}

    <!-- Drawing wire feedback -->
    {#if drawingWireFrom && mousePos}
      <line 
        x1={getPortCoords(drawingWireFrom).x} 
        y1={getPortCoords(drawingWireFrom).y} 
        x2={mousePos.x} 
        y2={mousePos.y} 
        stroke="var(--signal-on)" 
        stroke-width="2" 
        stroke-dasharray="6,4"
        class="glow-effect-strong animate-pulse"
      />
    {/if}

    <!-- Nodes -->
    {#each nodes as node}
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <g 
        role="button"
        tabindex="0"
        transform="translate({node.position.x * CELL_SIZE}, {node.position.y * CELL_SIZE})"
        onpointerdown={(e) => handleNodePointerDown(node.id, e)}
        class="cursor-pointer"
      >
        <Node type={node.type} size={CELL_SIZE} label={node.ioId || ''} />
      </g>
    {/each}
  </svg>
</div>
