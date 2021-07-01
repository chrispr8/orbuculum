import React, { useEffect } from "react"
import { Vector3 } from "three"
import { Line } from "@react-three/drei"
import { observer } from "mobx-react-lite"

import { useGraph } from "../stores/Graph.store"


function Edge({ id }) {
    const graph = useGraph()
    const edge = graph.edges.get(id)

    useEffect(() => {
        // console.log("Edge:", edge.id, edge.position)
    }, [edge.id, edge.position])

    return (
        <Line
            onUpdate={self => self.verticesNeedUpdate = true}
            points={edge.position.map((v) => new Vector3(...v))}
            lineWidth={1}
            dashed={false}
            color={0xFFFFFF}
            transparent={true}
            opacity={0.8}
        />
    )
}

export default observer(Edge)