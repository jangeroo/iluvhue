import React, { useState, useEffect } from "react";
import Block from "./Block.js";
import { rgb, calculateHue } from "./utils.js";

export default function Grid(dimensions) {
  const [topLeft, setTopLeft] = useState([rgb(), rgb(), rgb()]);
  const [topRight, setTopRight] = useState([rgb(), rgb(), rgb()]);
  const [bottomLeft, setBottomLeft] = useState([rgb(), rgb(), rgb()]);
  const [bottomRight, setBottomRight] = useState([rgb(), rgb(), rgb()]);

  let corners = { topLeft, topRight, bottomLeft, bottomRight };

  const [blocks, setBlocks] = useState(() => {
    let blocks = [];

    [...Array(dimensions.height).keys()].map((y) => {
      [...Array(dimensions.width).keys()].map((x) => {
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
