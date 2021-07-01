import "../index.css"
import { ConfigProvider, ConfigStore, useConfig } from "../stores/Config.store"
import { GraphProvider, GraphStore } from "../stores/Graph.store"
import Graph from "./Graph"
import Header from "./Header"
import Panel from "./Panel"


function App() {
  return (
    <div className="App">
      <ConfigProvider value={ConfigStore}>
        <GraphProvider value={GraphStore}>
          <Header position="absolute" />
          <Panel />
          <Graph />
        </GraphProvider>
      </ConfigProvider>
    </div>
  )
}

export default App
