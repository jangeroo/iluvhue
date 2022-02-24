import React, { useContext, useState, useEffect } from "react";
import "./Block.css";
import AppContext from "./AppContext.js";

export default function Block({ block }) {
  const { state, dispatch } = useContext(AppContext);
  const [selected, setSelected] = useState(false);

  let { location, colour } = block;
  let blockWidth = 40;
  let blockHeight = 50;

  let style = {
    backgroundColor: "rgb(" + colour + ")",
    left: location.x * blockWidth,
    top: location.y * blockHeight,
  };

  let handleClick = (e) => {
    if (!state.selected) {
      dispatch({ type: "SELECT", block: block.id });
    } else {
      dispatch({ type: "SWAP", block: block.id });
    }
  };

  useEffect(() => {
    setSelected(state.selected === block.id);
  }, [state.selected, block.id]);

  return (
    <div
      className={`block ${selected && "selected"}`}
      style={style}
      onClick={handleClick}
    >
      {/* <div>{block.id}</div>
      <div style={{ fontSize: "10pt" }}>
        [{location.x},{location.y}]
      </div> */}
      {/* {colour.map((component, i) => (
        <div key={i} style={{ fontSize: "3pt" }}>
          {component}
        </div>
      ))} */}
    </div>
  );
}
