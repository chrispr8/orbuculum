import { types } from "mobx-state-tree"


const Node = types
    .model("Node", {
        id: types.identifier,
        label: types.string,
        position: types.array(types.number),
        to: types.map(types.reference(types.late(() => Node))),
        from: types.map(types.reference(types.late(() => Node))),
        data: types.optional(types.string, ""),
    })
    .actions(self => ({
        connectTo(node) {
            self.to.put(node)
        },
        connectFrom(node) {
            self.from.put(node)
        },
        movePosition(pos) {
            self.position = pos
        }
    }))

export default Node