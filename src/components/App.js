import "../index.css"
import Body from "./Body"
import { ConfigProvider, ConfigStore, useConfig } from "../stores/Config.store"
import { GraphProvider, GraphStore } from "../stores/Graph.store"
import Header from "./Header"


function App() {
  return (
    <div className="App">
      <ConfigProvider value={ConfigStore}>
        <GraphProvider value={GraphStore}>
          <Header position="absolute" />
          <Body />
        </GraphProvider>
      </ConfigProvider>
    </div>
  )
}

export default App
