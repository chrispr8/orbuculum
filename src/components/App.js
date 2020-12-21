import React from "react"

import Graph from "./Graph"
import { GraphProvider, GraphStore } from "../stores/Graph.store"
import Header from "./Header"


function App() {

  return (
    <div className="App">
      <Header />
      <GraphProvider value={GraphStore}>
        <Graph />
      </GraphProvider>
    </div>
  )
}

export default App
