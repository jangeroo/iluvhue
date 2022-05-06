import { calculateHue, rgbArray, shuffle } from "./utils.js";

const initialState = {
  dimensions: { width: 5, height: 8 },
  blocks: [],
  selectedBlock: null,
  started: false,
  won: false,
};

const init = (state) => {
  const topLeft = rgbArray();
  const topRight = rgbArray();
  const bottomLeft = rgbArray();
  const bottomRight = rgbArray();
  const corners = { topLeft, topRight, bottomLeft, bottomRight };

  const { height, width } = state.dimensions;
  const blocks = [];

  [...Array(height).keys()].forEach((y) => {
    [...Array(width).keys()].forEach((x) => {
      blocks.push({
        id: blocks.length + 1,
        location: { x, y },
        home: { x, y },
        isPinned: false,
        colour: calculateHue([x, y], corners, state.dimensions),
      });
    });
  });

  const pins = [
    { x: 0, y: 0 },
    { x: width - 1, y: 0 },
    { x: 0, y: height - 1 },
    { x: width - 1, y: height - 1 },
  ];

  pins.forEach((pin) => {
    const block = blocks.find(
      (block) => block.home.x === pin.x && block.home.y === pin.y
    );
    block.isPinned = true;
  });

  return { ...state, blocks };
};

const reducer = (state, action) => {
  let { blocks } = state;
  switch (action.type) {
    case "SHUFFLE":
      blocks = shuffle(blocks);
      let { height, width } = state.dimensions;
      let nextBlock = 0;
      [...Array(height).keys()].forEach((y) => {
        [...Array(width).keys()].forEach((x) => {
          blocks[nextBlock].location = { x, y };
          nextBlock++;
        });
      });
      return { ...state, blocks, started: true };
    case "SELECT":
      return { ...state, selectedBlock: action.block };
    case "SWAP":
      let idA = blocks.indexOf(
        blocks.find((b) => b.id === state.selectedBlock)
      );
      let idB = blocks.indexOf(blocks.find((b) => b.id === action.block));

      [blocks[idA].location, blocks[idB].location] = [
        blocks[idB].location,
        blocks[idA].location,
      ];

      return { ...state, blocks, selectedBlock: null };
    case "WIN":
      return { ...state, won: true };
    default:
      return state;
  }
};

export { reducer, initialState, init };
