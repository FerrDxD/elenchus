<script lang="ts">
  import type { ComponentType } from '../engine/types';
  
  let { type, size, label = '' } = $props<{
    type: ComponentType;
    size: number;
    label?: string;
  }>();

  let cx = $derived(size / 2);
  let cy = $derived(size / 2);
</script>

<g class="transition-transform hover:scale-105 cursor-pointer">
  {#if type === 'INPUT'}
    <path d="M {size*0.15} {size*0.15} L {size*0.75} {size*0.15} L {size*0.85} {size*0.5} L {size*0.75} {size*0.85} L {size*0.15} {size*0.85} Z" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" stroke-linejoin="round" class="glow-effect" />
    <!-- Inner decorative lines -->
    <line x1={size * 0.25} y1={size * 0.25} x2={size * 0.35} y2={size * 0.25} stroke="var(--node-border)" stroke-width="1" opacity="0.5" />
    <text x={cx - size*0.02} y={cy} text-anchor="middle" dominant-baseline="central" fill="var(--text-color)" font-size="14" font-weight="900" font-family="monospace" letter-spacing="1">{label}</text>
  
  {:else if type === 'OUTPUT'}
    <path d="M {size*0.15} {size*0.15} L {size*0.85} {size*0.15} L {size*0.85} {size*0.85} L {size*0.15} {size*0.85} L {size*0.25} {size*0.5} Z" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" stroke-linejoin="round" class="glow-effect" />
    <!-- Inner decorative lines -->
    <line x1={size * 0.75} y1={size * 0.75} x2={size * 0.65} y2={size * 0.75} stroke="var(--node-border)" stroke-width="1" opacity="0.5" />
    <text x={cx + size*0.02} y={cy} text-anchor="middle" dominant-baseline="central" fill="var(--text-color)" font-size="14" font-weight="900" font-family="monospace" letter-spacing="1">{label}</text>
  
  {:else if type === 'AND'}
    <path d="M {size*0.2} {size*0.2} L {size*0.5} {size*0.2} A {size*0.3} {size*0.3} 0 0 1 {size*0.5} {size*0.8} L {size*0.2} {size*0.8} Z" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" class="glow-effect" />
    <text x={size*0.45} y={cy} text-anchor="middle" dominant-baseline="central" fill="var(--text-color)" font-size="14" font-family="monospace" font-weight="bold">&</text>

  {:else if type === 'OR'}
    <path d="M {size*0.2} {size*0.2} Q {size*0.4} {size*0.5} {size*0.2} {size*0.8} Q {size*0.7} {size*0.8} {size*0.8} {size*0.5} Q {size*0.7} {size*0.2} {size*0.2} {size*0.2} Z" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" class="glow-effect" />
    <text x={size*0.45} y={cy} text-anchor="middle" dominant-baseline="central" fill="var(--text-color)" font-size="14" font-family="monospace" font-weight="bold">≥</text>

  {:else if type === 'NOT'}
    <polygon points="{size*0.2},{size*0.2} {size*0.6},{size*0.5} {size*0.2},{size*0.8}" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" class="glow-effect" />
    <circle cx={size*0.7} cy={cy} r="5" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" class="glow-effect" />
    
  {:else if type === 'XOR'}
    <path d="M {size*0.1} {size*0.2} Q {size*0.3} {size*0.5} {size*0.1} {size*0.8}" fill="none" stroke="var(--node-border)" stroke-width="2" class="glow-effect" />
    <path d="M {size*0.2} {size*0.2} Q {size*0.4} {size*0.5} {size*0.2} {size*0.8} Q {size*0.7} {size*0.8} {size*0.8} {size*0.5} Q {size*0.7} {size*0.2} {size*0.2} {size*0.2} Z" fill="var(--node-bg)" stroke="var(--node-border)" stroke-width="2" class="glow-effect" />
    <text x={size*0.45} y={cy} text-anchor="middle" dominant-baseline="central" fill="var(--text-color)" font-size="12" font-family="monospace" font-weight="bold">=1</text>

  {:else if type === 'SPLITTER'}
    <circle cx={cx} cy={cy} r={size*0.15} fill="var(--node-border)" class="glow-effect-strong" />
  {/if}

  <!-- Connection ports hint -->
  <circle cx={size*0.1} cy={cy} r="3" fill="var(--node-bg)" stroke="var(--signal-on)" stroke-width="1.5" class="glow-effect" />
  <circle cx={size*0.9} cy={cy} r="3" fill="var(--node-bg)" stroke="var(--signal-on)" stroke-width="1.5" class="glow-effect" />
</g>
