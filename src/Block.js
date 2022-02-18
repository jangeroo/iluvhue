import React, { useState } from "react";

export default function Block({ block }) {
  const [selected, setSelected] = useState(false);

  let { location, colour } = block;
  let blockWidth = 40;

  let style = {
    height: "50px",
    width: "40px",
    backgroundColor: "rgb(" + colour + ")",
    // boxShadow: "inset 0px 0px 0px 1px black",
    boxSizing: "border-box",
    // display: "inline",
    position: "absolute",
    left: location[0] * blockWidth,
    top: location[1] * blockWidth,
  };

  if (selected) style = { ...style, boxShadow: "inset 0px 0px 0px 1px black" };

  let handleClick = (e) => {
    console.log("You clicked", e.target);
    setSelected(true);
  };

  return (
    <div className="block" style={style} onClick={handleClick}>
      {/* <div style={{ fontSize: "10pt" }}>
        [{location[0]},{location[1]}]
      </div>

      {colour.map((component, i) => (
        <div key={i} style={{ fontSize: "3pt" }}>
          {component}
        </div>
      ))} */}
    </div>
  );
}
