import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Block from "./Block.js";
import Win from "./Win.js";
import AppContext from "./AppContext.js";

import { calculateWinner } from "./utils.js";

export default function Grid(dimensions) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => dispatch({ type: "SHUFFLE" }), 2000);
  }, [dispatch]);

  const gameWon = calculateWinner(state);

  useEffect(() => {
    if (gameWon) {
      console.log("You Win");
      dispatch({ type: "WIN" });
    }
  }, [gameWon, dispatch]);

  return (
    <StyledGrid dimensions={state.dimensions}>
      {gameWon && <Win />}
      {state.blocks.map((block, i) => (
        <Block key={block.id} block={block} />
      ))}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  position: relative;
  margin: 10px auto;
  width: ${(props) => props.dimensions.width * 40 + "px"};
  height: ${(props) => props.dimensions.height * 50 + "px"};
`;
