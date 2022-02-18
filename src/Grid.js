import React, { useState } from "react";
import Block from "./Block.js";
import { rgb, calculateHue } from "./utils.js";

export default function Grid(dimensions) {
  const [topLeft] = useState([rgb(), rgb(), rgb()]);
  const [topRight] = useState([rgb(), rgb(), rgb()]);
  const [bottomLeft] = useState([rgb(), rgb(), rgb()]);
  const [bottomRight] = useState([rgb(), rgb(), rgb()]);

  let corners = { topLeft, topRight, bottomLeft, bottomRight };

  const [blocks] = useState(() => {
    let blocks = [];

    [...Array(dimensions.height).keys()].forEach((y) => {
      [...Array(dimensions.width).keys()].forEach((x) => {
        blocks.push({
          location: [x, y],
          colour: calculateHue([x, y], corners, dimensions),
        });
      });
    });

    return blocks;
  });

  return (
    <div>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
