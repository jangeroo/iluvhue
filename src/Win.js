import React from "react";

export default function Win() {
  const winStyle = {
    position: "absolute",
    fontWeight: "bold",
    color: "blue",
    borderRadius: 50,
    backgroundColor: "white",
    boxShadow: "0px 0px 4px 5px white",
    zIndex: 2,
  };

  return <div style={winStyle}>YOU WIN!!!</div>;
}
