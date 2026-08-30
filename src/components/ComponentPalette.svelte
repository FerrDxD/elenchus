<script lang="ts">
  import type { ComponentType } from '../engine/types';
  
  let { 
    availableComponents, 
    selectedComponent, 
    onSelect 
  } = $props<{
    availableComponents: ComponentType[];
    selectedComponent: ComponentType | null;
    onSelect: (comp: ComponentType | null) => void;
  }>();

</script>

<div class="cyber-panel p-4 flex flex-col gap-3 relative shrink-0">
  <div class="absolute top-0 right-0 w-2 h-2 bg-[var(--color-accent)] animate-pulse"></div>
  <h2 class="text-xs font-bold text-[var(--color-foreground)] uppercase tracking-widest flex items-center gap-2 font-heading shrink-0">
    <div class="w-3 h-3 bg-[var(--color-primary)] clip-triangle"></div>
    Hardware
  </h2>
  
  <div class="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-thin scrollbar-thumb-[var(--color-primary)] scrollbar-track-transparent snap-x">
    <button 
      class="px-4 py-3 text-left font-bold text-sm tracking-widest transition-all whitespace-nowrap shrink-0 snap-start {selectedComponent === null ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[0_0_15px_rgba(236,72,153,0.5)] scale-[1.02]' : 'bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'}"
      style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);"
      onclick={() => onSelect(null)}
    >
      <span class="opacity-50 mr-2 font-mono">00</span> POINTER
    </button>
    
    {#each availableComponents as comp, i}
      <button 
        class="px-4 py-3 text-left font-bold text-sm tracking-widest transition-all whitespace-nowrap shrink-0 snap-start {selectedComponent === comp ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[0_0_15px_rgba(236,72,153,0.5)] scale-[1.02]' : 'bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'}"
        style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);"
        onclick={() => onSelect(comp)}
      >
        <span class="opacity-50 mr-2 font-mono">{(i + 1).toString().padStart(2, '0')}</span> {comp}
      </button>
    {/each}
  </div>
</div>
