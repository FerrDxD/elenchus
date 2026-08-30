import type { Circuit, Level, SimulationResult } from './types';
import { CircuitSimulator } from './simulator';

export function validateCircuit(circuit: Circuit, level: Level): SimulationResult {
  const simulator = new CircuitSimulator(circuit);
  
  let allPassed = true;
  let finalActualOutputs: Record<string, 0 | 1> = {};

  for (const testCase of level.testCases) {
    const actualOutputs = simulator.simulate(testCase.inputValues);
    
    if (!actualOutputs) {
      // Loop detected or invalid
      return { passed: false, actualOutputs: {}, ticks: 0 };
    }

    finalActualOutputs = actualOutputs;

    for (const [outId, expectedVal] of Object.entries(testCase.expectedOutputs)) {
      if (actualOutputs[outId] !== expectedVal) {
        allPassed = false;
        break;
      }
    }

    if (!allPassed) break;
  }

  // Count components (excluding inputs and outputs)
  let componentsUsed = 0;
  for (const node of circuit.nodes) {
    if (node.type !== 'INPUT' && node.type !== 'OUTPUT' && node.type !== 'WIRE') {
      componentsUsed++;
    }
  }

  return {
    passed: allPassed,
    actualOutputs: finalActualOutputs,
    ticks: componentsUsed // for MVP, ticks could just be components used as a metric
  };
}
