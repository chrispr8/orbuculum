import React from "react"

import Graph from "./Graph"
import { GraphProvider, GraphStore } from "../stores/Graph.store"


function App() {

  return (
    <div className="App">
      <GraphProvider value={GraphStore}>
        <Graph />
      </GraphProvider>
    </div>
  )
}

export default App
