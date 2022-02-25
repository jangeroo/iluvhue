import React, { useContext, useEffect } from "react";
import Block from "./Block.js";
import AppContext from "./AppContext.js";

export default function Grid(dimensions) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => dispatch({ type: "SHUFFLE" }), 2000);
  }, [dispatch]);

  const style = {
    position: "relative",
    margin: "10px auto",
    height: state.dimensions.height * 50,
    width: state.dimensions.width * 40,
  };

  return (
    <div style={style}>
      {state.blocks.map((block, i) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
}
