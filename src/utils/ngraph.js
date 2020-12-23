import createGraph from "ngraph.graph"
import createLayout from "ngraph.forcelayout"


// TODO: Into Webworker, parameterize settings from UI
export const forceLayoutSimulation = (nodes, edges) => {

    let G = createGraph()

    for (const n of nodes) {
        G.addNode(n)
    }

    for (const e of edges) {
        G.addLink(e[0], e[1])
    }
    // Initialize layout simulation
    let layout = createLayout(G, {
        timeStep: 0.5,
        dimensions: 3,
        gravity: -12,
        theta: 0.8,
        springLength: 100,
        springCoefficient: 0.8,
        dragCoefficient: 0.8
    })
    for (let i = 0; i < 10000; i++) {
        layout.step()
    }

    const new_positions = []
    G.forEachNode((node) => {
        let pos = layout.getNodePosition(node.id)
        new_positions.push([node.id, [pos.x, pos.y, pos.z]])
    })

    return new_positions
}
