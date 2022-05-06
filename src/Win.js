import React from "react";
import styled from "styled-components";

export default function Win() {
  return <StyledWin>YOU WIN!!!</StyledWin>;
}

const StyledWin = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  font-weight: bold;
  color: blue;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 4px 5px white;
`;
