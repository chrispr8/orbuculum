import React, { useRef, useState, useEffect } from "react"
import { Html } from "drei"
import { Vector3 } from "three"
import { observer } from "mobx-react-lite"

import Logo from "./Logo"
import { useGraph } from "../stores/Graph.store"


const Node = ({ id }) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [visible, setVisible] = useState(true)
    const nodeRef = useRef()

    const graph = useGraph()
    const node = graph.nodes.get(id)

    useEffect(() => {
        console.log("Node: ", node.id, node.position.slice())
    }, [node.position])


    return (
        <sprite
            ref={nodeRef}
            key={node.id}
            position={new Vector3(...node.position.slice())}
            onClick={e => {
                e.stopPropagation()
                // setActive(!active)
                // setVisible(!visible)
                node.movePosition([
                    Math.random() * 10 * (Math.round(Math.random()) * 2 - 1),
                    Math.random() * 10 * (Math.round(Math.random()) * 2 - 1),
                    Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)
                ])
                //console.log(node.position)
            }}
            onPointerOver={e => {
                e.stopPropagation()
                setHover(true)
            }}
            onPointerOut={e => {
                setHover(false)
            }}
            scale={active ? [2, 2] : [1, 1]}
            visible={visible}
        >
            <circleBufferGeometry
                attach={"geometry"}
                args={[1, 32]}
            />
            <spriteMaterial
                attach={"material"}
                color={active ?
                    hovered ? "orange" : "hotpink" :
                    hovered ? "hotpink" : "orange"}
                transparent={true}
                opacity={0.8}
            />
            { active ?
                <Html
                    scaleFactor={10}
                    center
                    visible={false}
                >
                    <Logo />
                    <div className="content">
                        Hello World <br />
                        {node.id}
                    </div>
                </Html> : null}
        </sprite>)
}

export default observer(Node)