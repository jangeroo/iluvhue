import React, { useReducer } from "react";
import { reducer, initialState, init } from "./store.js";
import "./App.css";
import Grid from "./Grid.js";
import AppContext from "./AppContext.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h2>iLuvHue (a clone)</h2>
        <Grid />
      </div>
    </AppContext.Provider>
  );
}

export default App;
