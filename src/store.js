import { calculateHue, rgb } from "./utils.js";

const initialState = {
  dimensions: { width: 5, height: 8 },
  blocks: [],
  selected: null,
};

const init = (state) => {
  const topLeft = [rgb(), rgb(), rgb()];
  const topRight = [rgb(), rgb(), rgb()];
  const bottomLeft = [rgb(), rgb(), rgb()];
  const bottomRight = [rgb(), rgb(), rgb()];
  const corners = { topLeft, topRight, bottomLeft, bottomRight };

  const { height, width } = state.dimensions;
  const blocks = [];

  [...Array(height).keys()].forEach((y) => {
    [...Array(width).keys()].forEach((x) => {
      blocks.push({
        id: blocks.length + 1,
        location: { x, y },
        colour: calculateHue([x, y], corners, state.dimensions),
      });
    });
  });

  return { ...state, blocks };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT":
      return { ...state, selected: action.block };
    case "SWAP":
      let { blocks } = state;

      let idA = blocks.indexOf(blocks.find((b) => b.id === state.selected));
      let idB = blocks.indexOf(blocks.find((b) => b.id === action.block));

      // console.log(
      //   `SWAP ${JSON.stringify(blocks[idA])} <> ${JSON.stringify(blocks[idB])}`
      // );

      [blocks[idA].location, blocks[idB].location] = [
        blocks[idB].location,
        blocks[idA].location,
      ];
      return { ...state, blocks, selected: null };
    default:
      return state;
  }
};

export { reducer, initialState, init };
