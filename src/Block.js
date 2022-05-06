import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import AppContext from "./AppContext.js";

export default function Block({ block }) {
  const { state, dispatch } = useContext(AppContext);
  const [selectedBlock, setSelectedBlock] = useState(false);

  let handleClick = (e) => {
    if (state.won) return;

    if (!state.selectedBlock) {
      dispatch({ type: "SELECT", block: block.id });
    } else {
      dispatch({ type: "SWAP", block: block.id });
    }
  };

  useEffect(() => {
    setSelectedBlock(state.selectedBlock === block.id);
  }, [state.selectedBlock, block.id]);

  return (
    <StyledBlock
      className={`${selectedBlock && "selected"}`}
      onClick={state.started ? handleClick : null}
      block={block}
    >
      {block.isPinned && <Pin />}
    </StyledBlock>
  );
}

const StyledBlock = styled.div`
  position: absolute;
  top: ${({ block }) => block.location.y * 50}px;
  left: ${({ block }) => block.location.x * 40}px;
  height: 50px;
  width: 40px;
  background-color: ${({ block }) => "rgb(" + block.colour + ")"};

  &.selected {
    box-shadow: 0px 0px 10px 0px white;
    z-index: 1;
  }
`;

const Pin = styled.div`
  height: 10px;
  width: 10px;
  background-color: black;
  box-shadow: 0px 0px 1px 1px white;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
