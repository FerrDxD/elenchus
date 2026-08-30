import type { Level } from '../engine/types';

export const levels: Level[] = [
  {
    id: 'l0',
    group: 'Tutorial',
    order: 0,
    gridSize: { width: 8, height: 4 },
    availableComponents: ['WIRE'],
    description: "Welcome to Elencus. Your goal is to route the signal from INPUT to OUTPUT to match the truth table.\nSelect WIRE from the left, click the INPUT (A), then click the OUTPUT to connect them. Then press RUN.",
    inputs: [
      { id: 'in1', label: 'A', position: { x: 1, y: 1 } }
    ],
    outputs: [
      { id: 'out1', label: 'A', position: { x: 6, y: 1 } }
    ],
    testCases: [
      { inputValues: { in1: 0 }, expectedOutputs: { out1: 0 } },
      { inputValues: { in1: 1 }, expectedOutputs: { out1: 1 } }
    ],
    par: { maxComponents: 0, maxTicks: 1 }
  },
  {
    id: 'l1',
    group: 'Gerbang Dasar',
    order: 1,
    gridSize: { width: 10, height: 6 },
    availableComponents: ['WIRE', 'AND'],
    description: "Connect the INPUTs to an AND gate, then connect its output to the OUTPUT. The AND gate outputs 1 only when both inputs are 1.",
    inputs: [
      { id: 'in1', label: 'A', position: { x: 1, y: 2 } },
      { id: 'in2', label: 'B', position: { x: 1, y: 4 } }
    ],
    outputs: [
      { id: 'out1', label: 'A AND B', position: { x: 8, y: 3 } }
    ],
    testCases: [
      { inputValues: { in1: 0, in2: 0 }, expectedOutputs: { out1: 0 } },
      { inputValues: { in1: 0, in2: 1 }, expectedOutputs: { out1: 0 } },
      { inputValues: { in1: 1, in2: 0 }, expectedOutputs: { out1: 0 } },
      { inputValues: { in1: 1, in2: 1 }, expectedOutputs: { out1: 1 } },
    ],
    par: { maxComponents: 1, maxTicks: 1 }
  },
  {
    id: 'l2',
    group: 'Gerbang Dasar',
    order: 2,
    gridSize: { width: 10, height: 6 },
    availableComponents: ['WIRE', 'OR', 'NOT'],
    inputs: [
      { id: 'in1', label: 'A', position: { x: 1, y: 3 } }
    ],
    outputs: [
      { id: 'out1', label: 'NOT A', position: { x: 8, y: 3 } }
    ],
    testCases: [
      { inputValues: { in1: 0 }, expectedOutputs: { out1: 1 } },
      { inputValues: { in1: 1 }, expectedOutputs: { out1: 0 } }
    ],
    par: { maxComponents: 1, maxTicks: 1 }
  },
  {
    id: 'l3',
    group: 'Kombinasi Logika',
    order: 3,
    gridSize: { width: 12, height: 8 },
    availableComponents: ['WIRE', 'AND', 'OR', 'NOT'],
    inputs: [
      { id: 'in1', label: 'A', position: { x: 1, y: 2 } },
      { id: 'in2', label: 'B', position: { x: 1, y: 4 } },
      { id: 'in3', label: 'C', position: { x: 1, y: 6 } }
    ],
    outputs: [
      { id: 'out1', label: '(A AND B) OR C', position: { x: 10, y: 4 } }
    ],
    testCases: [
      { inputValues: { in1: 0, in2: 0, in3: 0 }, expectedOutputs: { out1: 0 } },
      { inputValues: { in1: 1, in2: 1, in3: 0 }, expectedOutputs: { out1: 1 } },
      { inputValues: { in1: 0, in2: 0, in3: 1 }, expectedOutputs: { out1: 1 } },
      { inputValues: { in1: 1, in2: 0, in3: 0 }, expectedOutputs: { out1: 0 } },
    ],
    par: { maxComponents: 2, maxTicks: 2 }
  }
];
