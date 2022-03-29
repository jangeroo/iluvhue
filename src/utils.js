const rgb = () => {
  return Math.floor(Math.random() * 256);
};

const calculateHue = (block, corners, dimensions) => {
  let [x, y] = block;
  let { topLeft, topRight, bottomLeft, bottomRight } = corners;
  let { height, width } = dimensions;

  let calcComponent = (i) => {
    let start = topLeft[i] + y * ((bottomLeft[i] - topLeft[i]) / (height - 1));
    let end = topRight[i] + y * ((bottomRight[i] - topRight[i]) / (height - 1));
    let component = start + (x * (end - start)) / (width - 1);
    return Math.round(component);
  };

  return [0, 1, 2].map((i) => calcComponent(i));
};

const shuffle = (array) => {
  console.log({ shuffling: array });
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    if (!shuffled[i].isPinned && !shuffled[j].isPinned) {
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }
  return shuffled;
  // ALTERNATIVE
  // return array
  //   .map((value) => ({ value, sort: Math.random() }))
  //   .sort((a, b) => a.sort - b.sort)
  //   .map(({ value }) => value);
};

const calculateWinner = (state) => {
  let incorrect = state.blocks.filter((block) => {
    let { location, home } = block;
    return location.x !== home.x || location.y !== home.y;
  });
  return state.started && incorrect.length === 0;
};

export { rgb, calculateHue, shuffle, calculateWinner };
