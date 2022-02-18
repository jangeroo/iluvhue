import React from "react";

function Block({ colour }) {
  let style = {
    height: "40px",
    width: "40px",
    // border: "2px solid black",
    backgroundColor: "rgb(" + colour + ")",
  };
  return <div className="block" style={style}></div>;
}

function Row({ width, start, end }) {
  let style = {
    display: "flex",
  };

  let offsets = start.map((startHue, i) => (end[i] - startHue) / width);

  let colours = new Array(width).fill([]);

  colours = colours.map((colour, idx) =>
    [0, 1, 2].map(
      (component) => start[component] + (idx + 1) * offsets[component]
    )
  );

  return (
    <div className="row" style={style}>
      {colours.map((colour, i) => (
        <Block key={i} colour={colour} />
      ))}
    </div>
  );
}

export default function Grid1({ width, height }) {
  let rgb = () => Math.floor(Math.random() * 256);
  console.log({ rgp: rgb() });

  let start = [0, 255, 255];
  let end = [255, 0, 255];
  // start = [rgb(), rgb(), rgb()];
  // end = [rgb(), rgb(), rgb()];

  return (
    <div>
      <Row width={width} start={start} end={end} />
    </div>
  );
}
