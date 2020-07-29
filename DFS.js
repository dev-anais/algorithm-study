/** refered to https://ryusm.tistory.com/m/48 */
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const dfs = (graph, startNode) => {
  let needVisit = [];
  let visitedNodeQueue = [];
  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visitedNodeQueue.includes(node)) {
      visitedNodeQueue.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visitedNodeQueue;
};
