<script lang="ts">
  let { start, end, active = false } = $props<{
    start: { x: number; y: number };
    end: { x: number; y: number };
    active?: boolean;
  }>();

  // Draw orthogonal paths if possible
  let d = $derived(`M ${start.x} ${start.y} L ${(start.x + end.x)/2} ${start.y} L ${(start.x + end.x)/2} ${end.y} L ${end.x} ${end.y}`);
</script>

<!-- Inactive base line -->
<path 
  {d}
  fill="none" 
  stroke="var(--signal-off)" 
  stroke-width="4" 
  stroke-linejoin="round"
/>

<!-- Glow and active line -->
<path 
  {d}
  fill="none" 
  stroke={active ? "var(--signal-on)" : "rgba(14, 165, 233, 0.2)"} 
  stroke-width="2" 
  stroke-linejoin="round"
  class={active ? "glow-effect-strong" : ""}
/>
