import React, { useCallback, useEffect, useMemo, useState, useRef, useContext } from "react"
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { OrbitControls, Stats } from "drei"
import { values } from "mobx"
import { observer } from "mobx-react-lite"

import Edge from "./Edge"
import Node from "./Node"
import { useGraph } from "../stores/Graph.store"


function Graph(props) {
    const graphRef = useRef(null)
    const graph = useGraph()

    console.log(graph)

    return (
        <Canvas
            camera={{ position: [0, 0, 23] }}
            className="graph"
        >
            <ambientLight />
            <OrbitControls
                autoRotate={false}
                autoRotateSpeed={4}
                enableDamping={true}
                dampingFactor={0.3}
            />
            <Stats />
            <scene ref={graphRef}>
                {values(graph.nodes).map(n => {
                    return (
                        <Node
                            key={n.id}
                            node={n}
                        />
                    )
                })}
                {values(graph.edges).map(e => {
                    return (
                        <Edge
                            key={e.id}
                            id={e.id}
                            source={e.source}
                            target={e.target}
                        />
                    )
                })}
            </scene>
        </Canvas>
    )
}

export default Graph
