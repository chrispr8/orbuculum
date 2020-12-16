import { types } from "mobx-state-tree"

import Node from "./Node.model"


const Edge = types
    .model("Edge", {
        id: types.identifier,
        label: types.optional(types.string, ""),
        source: types.reference(types.late(() => Node)),
        target: types.reference(types.late(() => Node)),
        data: types.optional(types.string, ""),
    })
    .views(self => ({
        // Function to get the position of an edge
        get position() {
            return [self.source.position.slice(), self.target.position.slice()]
        }
    }))

export default Edge