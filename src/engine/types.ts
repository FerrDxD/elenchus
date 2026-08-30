export type ComponentType =
  | 'INPUT'
  | 'OUTPUT'
  | 'WIRE'
  | 'AND'
  | 'OR'
  | 'NOT'
  | 'XOR'
  | 'SPLITTER';

export interface GridSize {
  width: number;
  height: number;
}

export interface GridPosition {
  x: number;
  y: number;
}

export interface CircuitNode {
  id: string;
  type: ComponentType;
  position: GridPosition;
  // For inputs/outputs, the ID maps to the spec.
  ioId?: string;
}

export interface CircuitWire {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  path: GridPosition[]; // Visual path for rendering
}

export interface Circuit {
  nodes: CircuitNode[];
  wires: CircuitWire[];
}

export interface TestCase {
  inputValues: Record<string, 0 | 1>;
  expectedOutputs: Record<string, 0 | 1>;
}

export interface Level {
  id: string;
  group: string;
  order: number;
  gridSize: GridSize;
  availableComponents: ComponentType[];
  inputs: { id: string; label: string; position: GridPosition }[];
  outputs: { id: string; label: string; position: GridPosition }[];
  testCases: TestCase[];
  description?: string; // Added for tutorials
  par: {
    maxComponents: number;
    maxTicks: number;
  };
}

export interface SimulationResult {
  passed: boolean;
  actualOutputs: Record<string, 0 | 1>;
  ticks: number;
}
