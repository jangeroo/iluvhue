import React, { useContext, useEffect } from "react";
import Block from "./Block.js";
import Win from "./Win.js";
import AppContext from "./AppContext.js";
import { calculateWinner } from "./utils.js";

export default function Grid(dimensions) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => dispatch({ type: "SHUFFLE" }), 2000);
  }, [dispatch]);

  const style = {
    position: "relative",
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: state.dimensions.height * 50,
    width: state.dimensions.width * 40,
  };

  const gameWon = calculateWinner(state);

  useEffect(() => {
    if (gameWon) {
      console.log("You Win");
      dispatch({ type: "WIN" });
    }
  }, [gameWon, dispatch]);

  return (
    <div style={style}>
      {gameWon && <Win />}
      {state.blocks.map((block, i) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
}
