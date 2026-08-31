<script lang="ts">
  import { levels } from '../data/levels';
  import { progressStore } from '../lib/progress.svelte';
  import { t } from '../lib/i18n';

  let { onSelectLevel } = $props<{
    onSelectLevel: (id: string) => void;
  }>();

  // Group levels
  const groups = Array.from(new Set(levels.map(l => l.group)));

  let showAlert = $state(false);

  function isUnlocked(level: typeof levels[0]): boolean {
    if (level.order === 1) return true;
    const prevLevel = levels.find(l => l.group === level.group && l.order === level.order - 1);
    if (!prevLevel) return true;
    return progressStore.isCompleted(prevLevel.id);
  }

  function handleSelect(level: typeof levels[0]) {
    if (isUnlocked(level)) {
      onSelectLevel(level.id);
    } else {
      showAlert = true;
      setTimeout(() => { showAlert = false; }, 3000);
    }
  }
</script>

<div class="min-h-dvh bg-[var(--color-background)] py-16 px-8 relative flex flex-col items-center justify-start overflow-auto">
  <!-- Decorative grid -->
  <div class="absolute inset-0 pointer-events-none opacity-20" style="background-image: linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px); background-size: 50px 50px; transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);"></div>
  
  {#if showAlert}
    <div class="fixed top-8 left-1/2 -translate-x-1/2 z-50 cyber-panel p-4 border-l-4 border-[var(--color-destructive)] bg-[rgba(15,23,42,0.95)] backdrop-blur shadow-[0_10px_30px_rgba(220,38,38,0.3)] min-w-[300px] flex items-center gap-4 animate-slide-down">
      <div class="w-8 h-8 flex items-center justify-center shrink-0">
        <div class="w-4 h-4 rounded-sm bg-[var(--color-destructive)] animate-pulse shadow-[0_0_10px_var(--color-destructive)]"></div>
      </div>
      <div>
        <p class="font-heading font-black text-[var(--color-destructive)] uppercase tracking-widest text-sm drop-shadow-[0_0_5px_var(--color-destructive)]">{t('ui.locked_alert').split(':')[0]}</p>
        <p class="text-xs text-[var(--color-foreground)] mt-1 font-mono">{t('ui.locked_alert').split(':')[1]}</p>
      </div>
    </div>
  {/if}

  <div class="w-full max-w-5xl cyber-panel p-10 relative z-10 my-10">
    <div class="flex flex-col md:flex-row items-center justify-between mb-12 border-b-2 border-[var(--color-secondary)] pb-6">
      <div class="text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] tracking-widest drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">ELENCHUS</h1>
        <p class="text-[var(--color-accent)] font-heading text-sm mt-2 tracking-widest uppercase">{t('ui.subtitle')}</p>
      </div>
      <div class="mt-6 md:mt-0 text-right text-xs text-[var(--color-muted-foreground)]">
        <p class="font-heading">{t('ui.status')}</p>
        <p class="font-heading">{t('ui.user')}</p>
      </div>
    </div>
    
    <div class="flex flex-col gap-12">
      {#each groups as group}
        <div class="relative">
          <h2 class="text-xl font-heading font-bold text-[var(--color-foreground)] border-l-4 border-[var(--color-primary)] pl-4 mb-6 uppercase tracking-widest drop-shadow-[0_0_5px_var(--color-primary)]">{t(`group.${group}` as any)}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {#each levels.filter(l => l.group === group) as level}
              <button 
                class="relative p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:scale-105 active:scale-95
                  {progressStore.isCompleted(level.id) 
                    ? 'cyber-panel ring-2 ring-[var(--color-primary)] bg-[var(--color-card)]' 
                    : isUnlocked(level) 
                      ? 'cyber-panel opacity-80 hover:opacity-100' 
                      : 'cyber-panel opacity-40 bg-[rgba(15,23,42,0.5)] cursor-not-allowed'}"
                onclick={() => handleSelect(level)}
              >
                <!-- Decorative scan line on hover -->
                {#if isUnlocked(level)}
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-scan pointer-events-none"></div>
                {/if}

                <span class="text-xs text-[var(--color-muted-foreground)] {isUnlocked(level) ? 'group-hover:text-[var(--color-primary)]' : ''} transition-colors">SYS.{level.order}</span>
                <span class="text-4xl font-heading font-black {progressStore.isCompleted(level.id) ? 'text-[var(--color-primary)] drop-shadow-[0_0_8px_var(--color-primary)]' : 'text-[var(--color-foreground)]'}">{level.order}</span>
                
                <div class="w-full mt-2 flex justify-center items-center">
                  {#if progressStore.isCompleted(level.id)}
                    <span class="text-[10px] text-[var(--color-accent)] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                      <div class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_5px_var(--color-accent)]"></div>
                      {t('ui.cleared')}
                    </span>
                  {:else if isUnlocked(level)}
                    <span class="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                      <div class="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse shadow-[0_0_5px_var(--color-secondary)]"></div>
                      {t('ui.pending')}
                    </span>
                  {:else}
                    <span class="text-[10px] text-[var(--color-destructive)] opacity-70 uppercase tracking-widest">{t('ui.locked')}</span>
                  {/if}
                </div>
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
