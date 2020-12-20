import { types, flow } from "mobx-state-tree"

import { Graph } from "./models/Graph"
import { validateEmail } from "../utils/validator"
import { graphFetcher } from "../data/graphFetcher"

const User = types
    .model("User", {
        id: types.identifier,
        name: types.string,
        email: types.refinement("Email", types.string, value => validateEmail(value)),
        authtoken: types.string,
        graphs: types.map(types.reference(types.late(() => Graph))),
        state: types.enumeration("State", ["pending", "done", "error"])
    })
    .views(self => ({
        get name() {
            return self.name
        }
    }))
    .actions(self => ({
        fetchGraphs: flow(function* fetchGraphs() {
            try {
                self.graphs = yield graphFetcher(self.id)
            } catch (error) {
                console.log("Failed retrival.", error)
                self.state = "error"
            }
        }),
        createGraph(graph) {
            if (graph) {
                const G = Graph.create(graph)
                return self.graphs.put(G)
            } else {
                const G = Graph.create()
                return self.graphs.put(G)
            }
        }
    }))

export default User