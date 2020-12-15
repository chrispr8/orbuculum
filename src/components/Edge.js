import React, { useMemo, useState, useRef, useEffect } from "react"
import { Vector3 } from "three"
//import useGraph from './useGraph'




function Edge(props) {
    const vertices = useMemo(() =>
        [props.source.position, props.target.position]
            .map((v) => new Vector3(...v)),
        [props.source, props.target])
    return (
        <line>
            <geometry
                attach={"geometry"}
                vertices={vertices}
            />
            <lineBasicMaterial
                attach={"material"}
                color={0x232323}
                linewidth={1}
                transparent={true}
                opacity={0.8}
            />
        </line>
    )
}

export default Edge