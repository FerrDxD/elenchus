<script lang="ts">
  import { levels } from './data/levels';
  import LevelSelect from './components/LevelSelect.svelte';
  import ComponentPalette from './components/ComponentPalette.svelte';
  import Grid from './components/Grid.svelte';
  import ResultPanel from './components/ResultPanel.svelte';
  import { createCircuitStore } from './lib/circuit.svelte';
  import { validateCircuit } from './engine/validator';
  import { progressStore } from './lib/progress.svelte';
  import type { ComponentType, SimulationResult } from './engine/types';

  let currentLevelId = $state<string | null>(null);
  let selectedComponent = $state<ComponentType | null>(null);
  let simulationResult = $state<SimulationResult | null>(null);

  const circuitStore = createCircuitStore();

  let level = $derived(levels.find(l => l.id === currentLevelId));

  function startLevel(id: string) {
    currentLevelId = id;
    circuitStore.clear();
    simulationResult = null;
    selectedComponent = null;

    const lvl = levels.find(l => l.id === id);
    if (lvl) {
      // Setup fixed inputs and outputs
      for (const input of lvl.inputs) {
        circuitStore.addNode('INPUT', input.position, input.id);
      }
      for (const output of lvl.outputs) {
        circuitStore.addNode('OUTPUT', output.position, output.id);
      }
    }
  }

  function handleRun() {
    if (!level) return;
    simulationResult = validateCircuit(circuitStore.getCircuit(), level);
    if (simulationResult.passed) {
      progressStore.completeLevel(level.id, simulationResult.ticks);
    }
  }

  function goBack() {
    currentLevelId = null;
  }
</script>

<main class="min-h-screen text-[var(--color-foreground)] bg-[var(--color-background)] selection:bg-[var(--color-primary)] selection:text-white">
  {#if !currentLevelId || !level}
    <LevelSelect onSelectLevel={startLevel} />
  {:else}
    <div class="h-screen flex flex-col relative overflow-hidden">
      <!-- Background Cyber Grid -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(var(--color-primary)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

      <header class="h-auto min-h-[4rem] cyber-panel border-b-2 border-[var(--color-primary)] flex flex-wrap items-center px-4 md:px-6 py-2 gap-2 justify-between shadow-[0_5px_20px_rgba(236,72,153,0.15)] relative z-20 rounded-none !clip-none">
        <div class="flex items-center gap-3 md:gap-6 shrink-0">
          <button onclick={goBack} class="cyber-button-alt px-3 py-1.5 md:px-4 text-xs flex items-center gap-1 md:gap-2 group">
            <span class="text-lg leading-none group-hover:-translate-x-1 transition-transform">&larr;</span> <span class="hidden sm:inline">ABORT</span>
          </button>
          <div class="h-6 w-0.5 bg-[var(--color-border)] hidden sm:block"></div>
          <h1 class="text-sm md:text-xl font-bold font-heading tracking-widest drop-shadow-[0_0_8px_var(--color-primary)] flex items-center gap-2">
            <span class="text-[var(--color-primary)]">SYS.{level.order}</span>
            <span class="text-white hidden sm:inline">{level.group}</span>
          </h1>
        </div>
        <div class="flex shrink-0">
          <button 
            onclick={handleRun}
            class="cyber-button px-5 md:px-8 py-2 md:py-2 text-[var(--color-on-primary)] shadow-[0_0_15px_rgba(236,72,153,0.4)] text-xs md:text-sm font-black"
          >
            EXECUTE
          </button>
        </div>
      </header>
      
      <div class="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10 min-h-0">
        <!-- Sidebar: Bottom on mobile, Left on desktop -->
        <div class="w-full md:w-80 h-[40vh] md:h-full cyber-panel rounded-none border-t-2 md:border-t-0 border-b-0 border-l-0 md:border-r-2 border-[var(--color-border)] p-4 md:p-5 flex flex-col gap-4 md:gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-primary)] scrollbar-track-transparent order-2 md:order-1 shrink-0">
          <ComponentPalette 
            availableComponents={level.availableComponents}
            selectedComponent={selectedComponent}
            onSelect={(c) => selectedComponent = c}
          />

          {#if level.description}
            <div class="cyber-panel p-4 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-secondary)] to-transparent"></div>
              <h3 class="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-2 font-heading">Transmission</h3>
              <p class="text-sm text-[var(--color-foreground)] whitespace-pre-wrap leading-relaxed opacity-90">{level.description}</p>
            </div>
          {/if}
          
          <div class="cyber-panel p-4 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-transparent"></div>
            <h3 class="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest mb-4 font-heading pl-2">Specifications</h3>
            <div class="text-sm">
              <div class="flex justify-between items-center bg-[var(--color-background)] p-3 border border-[var(--color-border)] mb-4 shadow-inner">
                <span class="text-[var(--color-muted-foreground)]">Par Components:</span>
                <span class="font-bold text-[var(--color-accent)] font-heading text-lg">{level.par.maxComponents}</span>
              </div>
              <div class="mt-4 overflow-x-auto">
                <p class="font-bold text-[10px] text-[var(--color-muted-foreground)] mb-2 uppercase tracking-widest">Truth Table</p>
                <div class="border border-[var(--color-border)] bg-[var(--color-background)] min-w-max">
                  <table class="w-full text-center border-collapse">
                    <thead class="bg-[var(--color-muted)] border-b border-[var(--color-border)]">
                      <tr>
                        {#each level.inputs as inp}
                          <th class="p-2 text-[10px] text-[var(--color-foreground)] uppercase">{inp.label}</th>
                        {/each}
                        <th class="p-2 text-[10px] text-[var(--color-primary)] uppercase border-l border-[var(--color-border)]">OUT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each level.testCases as tc, i}
                        <tr class={i % 2 === 0 ? 'bg-[rgba(30,41,59,0.3)]' : ''}>
                          {#each level.inputs as inp}
                            <td class="p-2 text-[var(--color-muted-foreground)] border-t border-[var(--color-border)]">{tc.inputValues[inp.id]}</td>
                          {/each}
                          <td class="p-2 border-l border-[var(--color-border)] border-t font-bold text-[var(--color-secondary)]">
                            {Object.values(tc.expectedOutputs)[0]}
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <ResultPanel 
            result={simulationResult} 
            level={level}
            onNext={goBack}
          />
        </div>

        <!-- Grid Area -->
        <div class="flex-1 p-2 md:p-8 flex items-center justify-center overflow-auto relative bg-[var(--color-card)] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-0 order-1 md:order-2 min-h-0">
          <!-- Background scanline effect & Grid -->
          <div class="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>
          <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(236,72,153,0.03),rgba(0,255,0,0.01),rgba(139,92,246,0.03))] bg-[length:100%_4px,3px_100%] z-0"></div>
          
          <div class="relative z-10 shadow-[0_0_50px_rgba(8,145,178,0.15)] rounded-lg">
            <Grid 
              level={level}
              nodes={circuitStore.nodes}
              wires={circuitStore.wires}
              selectedComponent={selectedComponent}
              onNodeAdd={circuitStore.addNode}
              onNodeRemove={circuitStore.removeNode}
              onWireAdd={circuitStore.addWire}
            />
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>
