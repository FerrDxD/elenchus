import type { Circuit, CircuitNode, CircuitWire, ComponentType } from './types';

export class CircuitSimulator {
  private graph = new Map<string, string[]>(); // nodeId -> children
  private reverseGraph = new Map<string, string[]>(); // nodeId -> parents
  private nodesMap = new Map<string, CircuitNode>();
  
  constructor(private circuit: Circuit) {
    this.buildGraph();
  }

  private buildGraph() {
    for (const node of this.circuit.nodes) {
      this.nodesMap.set(node.id, node);
      this.graph.set(node.id, []);
      this.reverseGraph.set(node.id, []);
    }

    for (const wire of this.circuit.wires) {
      if (this.nodesMap.has(wire.fromNodeId) && this.nodesMap.has(wire.toNodeId)) {
        this.graph.get(wire.fromNodeId)!.push(wire.toNodeId);
        this.reverseGraph.get(wire.toNodeId)!.push(wire.fromNodeId);
      }
    }
  }

  private getTopologicalOrder(): string[] | null {
    const inDegree = new Map<string, number>();
    for (const [nodeId, parents] of this.reverseGraph.entries()) {
      inDegree.set(nodeId, parents.length);
    }

    const queue: string[] = [];
    for (const [nodeId, degree] of inDegree.entries()) {
      if (degree === 0) {
        queue.push(nodeId);
      }
    }

    const order: string[] = [];
    while (queue.length > 0) {
      const current = queue.shift()!;
      order.push(current);

      for (const child of this.graph.get(current)!) {
        const currentInDegree = inDegree.get(child)!;
        inDegree.set(child, currentInDegree - 1);
        if (currentInDegree - 1 === 0) {
          queue.push(child);
        }
      }
    }

    if (order.length !== this.nodesMap.size) {
      return null; // Feedback loop detected, not supported in MVP
    }
    return order;
  }

  private evaluateNode(node: CircuitNode, inputs: number[]): number {
    switch (node.type) {
      case 'AND': return inputs.length >= 2 ? (inputs[0] & inputs[1]) : 0;
      case 'OR': return inputs.length >= 2 ? (inputs[0] | inputs[1]) : 0;
      case 'XOR': return inputs.length >= 2 ? (inputs[0] ^ inputs[1]) : 0;
      case 'NOT': return inputs.length >= 1 ? (inputs[0] === 0 ? 1 : 0) : 1;
      case 'SPLITTER': return inputs.length >= 1 ? inputs[0] : 0;
      case 'WIRE': return inputs.length >= 1 ? inputs[0] : 0;
      case 'OUTPUT': return inputs.length >= 1 ? inputs[0] : 0;
      case 'INPUT': return 0; // handled separately
      default: return 0;
    }
  }

  public simulate(inputValues: Record<string, 0 | 1>): Record<string, 0 | 1> | null {
    const order = this.getTopologicalOrder();
    if (!order) return null; // Invalid circuit

    const nodeOutputs = new Map<string, number>();

    for (const nodeId of order) {
      const node = this.nodesMap.get(nodeId)!;
      
      if (node.type === 'INPUT') {
        const val = inputValues[node.ioId!] ?? 0;
        nodeOutputs.set(nodeId, val);
        continue;
      }

      const parents = this.reverseGraph.get(nodeId)!;
      const inputVals = parents.map(p => nodeOutputs.get(p) ?? 0);
      const out = this.evaluateNode(node, inputVals);
      nodeOutputs.set(nodeId, out);
    }

    const finalOutputs: Record<string, 0 | 1> = {};
    for (const node of this.circuit.nodes) {
      if (node.type === 'OUTPUT' && node.ioId) {
        finalOutputs[node.ioId] = nodeOutputs.get(node.id) as 0 | 1 ?? 0;
      }
    }

    return finalOutputs;
  }
}
