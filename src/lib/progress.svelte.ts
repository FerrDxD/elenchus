interface LevelProgress {
  levelId: string;
  completed: boolean;
  bestComponents: number;
}

export function createProgressStore() {
  let progress = $state<Record<string, LevelProgress>>({});

  // Load from localStorage on init if in browser
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('elenchus_progress');
    if (saved) {
      progress = JSON.parse(saved);
    }
  }

  function save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('elenchus_progress', JSON.stringify(progress));
    }
  }

  return {
    get progress() { return progress; },
    completeLevel(levelId: string, componentsUsed: number) {
      const current = progress[levelId];
      if (!current) {
        progress[levelId] = { levelId, completed: true, bestComponents: componentsUsed };
      } else {
        current.completed = true;
        current.bestComponents = Math.min(current.bestComponents, componentsUsed);
      }
      save();
    },
    isCompleted(levelId: string) {
      return progress[levelId]?.completed ?? false;
    }
  };
}

export const progressStore = createProgressStore();
