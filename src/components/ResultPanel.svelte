<script lang="ts">
  import type { SimulationResult, Level } from '../engine/types';

  let { result, level, onNext } = $props<{
    result: SimulationResult | null;
    level: Level;
    onNext: () => void;
  }>();
</script>

{#if result}
  <div class="cyber-panel p-5 mt-auto border-t-[var(--color-primary)] border-t-2 {result.passed ? 'border-[var(--color-accent)]' : 'border-[var(--color-destructive)]'} relative overflow-hidden order-first md:order-last shrink-0">
    <div class="absolute inset-0 bg-gradient-to-br {result.passed ? 'from-[rgba(245,158,11,0.1)]' : 'from-[rgba(220,38,38,0.1)]'} to-transparent z-0"></div>
    <div class="relative z-10">
      <div class="flex items-center gap-3 border-b pb-3 mb-3 {result.passed ? 'border-[var(--color-accent)]' : 'border-[var(--color-destructive)]'}">
        <div class="w-3 h-3 rounded-full {result.passed ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-destructive)]'} animate-pulse shadow-[0_0_8px_currentColor]"></div>
        <h3 class="font-heading font-black tracking-widest text-lg uppercase {result.passed ? 'text-[var(--color-accent)] drop-shadow-[0_0_5px_var(--color-accent)]' : 'text-[var(--color-destructive)] drop-shadow-[0_0_5px_var(--color-destructive)]'}">
          {result.passed ? 'EXECUTION SUCCESS' : 'SYSTEM FAILURE'}
        </h3>
      </div>
      
      {#if result.passed}
        <div class="text-sm">
          <div class="flex justify-between items-center py-2 border-b border-[var(--color-border)]">
            <span class="text-[var(--color-muted-foreground)]">Hardware Utilization:</span>
            <span class="text-[var(--color-foreground)] font-bold">{result.ticks} <span class="text-[var(--color-muted-foreground)] text-xs">/ {level.par.maxComponents} MAX</span></span>
          </div>
          {#if result.ticks <= level.par.maxComponents}
            <div class="mt-3 bg-[var(--color-accent)] text-[var(--color-on-accent)] p-2 text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2" style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%);">
              <span class="text-[10px]">★</span> OPTIMAL CONFIGURATION <span class="text-[10px]">★</span>
            </div>
          {/if}
          <button 
            class="mt-4 w-full cyber-button-alt text-[var(--color-accent)] border-[var(--color-accent)] py-3 px-4 font-bold text-sm"
            onclick={onNext}
          >
            RETURN TO MATRIX
          </button>
        </div>
      {:else}
        <div class="bg-[rgba(220,38,38,0.1)] p-3 border-l-4 border-[var(--color-destructive)] text-[var(--color-destructive)] text-xs uppercase tracking-wider leading-relaxed mt-2 font-mono">
          <span class="font-bold">Error:</span> Logic mismatch detected. Output node conditions not satisfied. Check wiring sequence.
        </div>
      {/if}
    </div>
  </div>
{/if}
