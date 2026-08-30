import type { Circuit, CircuitNode, CircuitWire, ComponentType, GridPosition } from '../engine/types';

export function createCircuitStore() {
  let nodes = $state<CircuitNode[]>([]);
  let wires = $state<CircuitWire[]>([]);
  let nextNodeId = 1;
  let nextWireId = 1;

  return {
    get nodes() { return nodes; },
    get wires() { return wires; },
    
    addNode(type: ComponentType, position: GridPosition, ioId?: string) {
      const id = `n_${nextNodeId++}`;
      nodes.push({ id, type, position, ioId });
      return id;
    },
    
    removeNode(id: string) {
      nodes = nodes.filter(n => n.id !== id);
      // Remove connected wires
      wires = wires.filter(w => w.fromNodeId !== id && w.toNodeId !== id);
    },
    
    addWire(fromNodeId: string, toNodeId: string, path: GridPosition[]) {
      const id = `w_${nextWireId++}`;
      wires.push({ id, fromNodeId, toNodeId, path });
      return id;
    },

    removeWire(id: string) {
      wires = wires.filter(w => w.id !== id);
    },

    clear() {
      nodes = [];
      wires = [];
    },

    getCircuit(): Circuit {
      return { nodes: [...nodes], wires: [...wires] };
    }
  };
}
