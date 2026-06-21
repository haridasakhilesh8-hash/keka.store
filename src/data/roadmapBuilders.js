// Small builder helpers so roleRoadmapsData.js doesn't repeat
// { id, title, type } boilerplate for every single node.

let _nodeCounter = 0;
let _phaseCounter = 0;

/** node(title, type = "required") */
export function node(title, type = "required") {
  _nodeCounter += 1;
  return { id: `n${_nodeCounter}`, title, type };
}

/** phase(title, nodes[]) */
export function phase(title, nodes) {
  _phaseCounter += 1;
  return { id: `p${_phaseCounter}`, title, nodes };
}

/** level(id, label, goal, phases[]) */
export function level(id, label, goal, phases) {
  return { id, label, goal, phases };
}
