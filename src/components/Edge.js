import React, { useEffect } from "react"
import { Vector3 } from "three"
import { observer } from "mobx-react-lite"

import { useGraph } from "../stores/Graph.store"


function Edge({ id }) {
    const graph = useGraph()
    const edge = graph.edges.get(id)

    useEffect(() => {
        // console.log("Edge:", edge.id, edge.position)
    }, [edge.id, edge.position])

    return (
        <line>
            <geometry
                attach={"geometry"}
                vertices={edge.position.map((v) => new Vector3(...v))}
                onUpdate={self => self.verticesNeedUpdate = true}
            />
            <lineBasicMaterial
                attach={"material"}
                color={0xFFFFFF}
                linewidth={1}
                transparent={true}
                opacity={0.8}
            />
        </line>
    )
}

export default observer(Edge)