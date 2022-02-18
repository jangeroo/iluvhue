import "./App.css";
import Grid from "./Grid.js";
import GridWithHooks from "./GridWithHooks.js";

import React, { useState, useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // setCount(count + 1);
  //   document.title = `${count} clicks`;
  // });
  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>Click me</button>
  //   </div>
  // );
  return (
    <div className="App">
      {/* <h3>iLoveHue Clone</h3> */}
      {/* <Grid width={10} height={3} /> */}
      <GridWithHooks width={6} height={8} />
    </div>
  );
}

export default App;
