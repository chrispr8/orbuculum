import React, { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stats, Stars } from "@react-three/drei"
import { values } from "mobx"
import { observer } from "mobx-react-lite"
//import { useWorker, WORKER_STATUS } from "@koale/useworker"

import Edge from "./Edge"
import Node from "./Node"
import { GraphProvider, useGraph } from "../stores/Graph.store"
import { forceLayoutSimulation } from "../utils/ngraph"


function Graph(props) {
    const graphRef = useRef(null)
    const graph = useGraph()


    for (const pos of forceLayoutSimulation(values(graph.nodes).map(n => n.id),
        values(graph.edges).map(e => [e.source.id, e.target.id]))) {
        graph.nodes.get(pos[0]).movePosition(pos[1])
    }

    /*
    const forceLayout = (graph) => {
        const simulation = forceSimulation(graph.nodes)
            .force("link", forceLink(graph.links).distance(20).strength(.7))
            .force("charge", forceManyBody().strength(-400))
            .force('centerX', forceX(width / 2))
            .force('centerY', forceY(height / 2))
            .force('centerZ', forceZ(height / 2))
            .on("tick", ticked)
    }
    */


    return (
        <Canvas
            camera={{ position: [0, 0, 230] }}
            className="graph"
        >
            <ambientLight />
            <OrbitControls
                autoRotate={false}
                autoRotateSpeed={4}
                enableDamping={true}
                dampingFactor={0.3}
            />
            <scene ref={graphRef}>
                <GraphProvider value={graph}>
                    {values(graph.nodes).map(n => {
                        return (
                            <Node
                                key={n.id}
                                id={n.id}
                            />
                        )
                    })}
                    {values(graph.edges).map(e => {
                        return (
                            <Edge
                                key={e.id}
                                id={e.id}
                            />
                        )
                    })}
                </GraphProvider>
            </scene>
        </Canvas>
    )
}

export default observer(Graph)
