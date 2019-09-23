function* randomColors() {
  yield '#008000';
  yield '#00CED1';
  yield '#BA55D3';
  yield '#D2691E';
}

const randomColor = randomColors();

export function updateColor(setColor) {
  setColor(randomColor.next().value);
}
