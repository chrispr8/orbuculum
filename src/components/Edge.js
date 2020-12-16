import React, { useEffect, useState } from "react"
import { Vector3 } from "three"
import { observer } from "mobx-react-lite"

import { useGraph } from "../stores/Graph.store"


function Edge({ id }) {
    const [hovered, setHover] = useState(false)

    const graph = useGraph()
    const edge = graph.edges.get(id)

    useEffect(() => {
        console.log("Edge:", edge.id, edge.position)
    }, [edge.position])

    return (
        <line
            onPointerOver={e => {
                e.stopPropagation()
                setHover(true)
            }}
            onPointerOut={e => {
                setHover(false)
            }}>
            <geometry
                attach={"geometry"}
                vertices={edge.position.map((v) => new Vector3(...v))}
                onUpdate={self => self.verticesNeedUpdate = true}
            />
            <lineBasicMaterial
                attach={"material"}
                color={0x232323}
                linewidth={hovered ? 2 : 1}
                transparent={true}
                opacity={0.8}
            />
        </line>
    )
}

export default observer(Edge)