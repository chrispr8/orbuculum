import { values } from "mobx"
import { types } from "mobx-state-tree"

import Node from "./Node.model"
import Edge from "./Edge.model"


const Graph = types
    .model("Graph", {
        id: types.identifier,
        nodes: types.map(types.late(() => Node)),
        edges: types.map(types.late(() => Edge))
    })
    .views(self => ({
        // node count
        get N() {
            return values(self.nodes).length
        },
        // edge count
        get E() {
            return values(self.edges).length
        },
        get nodePositions() {
            return values(self.nodes).map(n => values(n.position))
        },
        get adjacencyMatrix() {
            const nodes = values(self.nodes)
            const node_ids = values(self.nodes).map(n => n.id)
            const adjm = nodes.map(n => {
                const neighbours = [].concat(values(n.to).map(n => n.id), values(n.from).map(n => n.id))
                return node_ids.map(nid => (neighbours.includes(nid)))
            })
            return adjm
        },
        get directedAdjacencyMatrix() {

            // TODO: Implement directedAdjacencyMatrix
            const [inm, outm] = [
                values(self.nodes).map(node =>
                    [
                        node.id,
                        values(node.from).map(n => n.id)
                    ]
                ),
                values(self.nodes).map(node =>
                    [
                        node.id,
                        values(node.to).map(n => n.id)
                    ]
                )
            ]
            return ({ "in": inm, "out": outm })
        }
    }))
    .actions(self => ({
        // Function to insert a node
        addNode(node) {
            const n = Node.create(node)
            self.nodes.put(n)
        },
        // Function that connects the source node with the target node
        connect(source, target) {
            const e = Edge.create(
                {
                    id: "" + source.id + target.id,
                    source: source,
                    target: target,
                    data: ""
                })
            self.edges.put(e)

            // Establish edge inside node
            source.connectTo(target)
            target.connectFrom(source)
        },
        nodeDistance(a, b) {
            const p_a = values(a.position)
            const p_b = values(b.position)
            return ((p_a[0] - p_b[0]) ^ 2 + (p_a[1] - p_b[1]) ^ 2 + (p_a[2] - p_b[2]) ^ 2) ^ 0.5
        },
        // Function that generates phantom data for testing. This is a naive unoptimized generator.   
        createPhantomData(N = 100, E = 300) {

            // Generate an array of N nodes
            const nodes = Array.from(Array(N), (x, i) => i + 1);

            for (var n of nodes) {
                const pos = [
                    Math.random() * 10 * (Math.round(Math.random()) * 2 - 1),
                    Math.random() * 10 * (Math.round(Math.random()) * 2 - 1),
                    Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)
                ]

                self.addNode({
                    id: "n" + n,
                    label: "n" + n,
                    position: pos,
                })
            }

            // Create E numbers of edges
            [...Array(E)].forEach(() => {
                // pick random node
                const rn_source = "n" + nodes[Math.floor(Math.random() * nodes.length)]

                // Helper function that picks a random Node to connect to
                function dedup(source_node) {
                    const n = "n" + nodes[Math.floor(Math.random() * nodes.length)];
                    if (n !== source_node) {
                        return (n)
                    } else {
                        return (dedup(source_node))
                    }
                }

                const rn_target = dedup(rn_source);

                self.connect(self.nodes.get(rn_source), self.nodes.get(rn_target))
            })
        }
    }))


export default Graph