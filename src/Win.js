import React from "react";

export default function Win() {
  const winStyle = {
    position: "absolute",
    fontWeight: "bold",
    color: "blue",
    textShadow: "0px 0px 20px white" + ",0px 0px 20px white".repeat(9),
    zIndex: 2,
    // textAlign: "center",
  };

  return <div style={winStyle}>YOU WIN!!!</div>;
}
