import { types } from "mobx-state-tree"


const Config = types
    .model("Config", {
        body_flyout: types.optional(types.boolean, false),
        gravity: types.optional(types.number, 0.00),
    })
    .views(self => ({
        get isFlyout() {
            return self.body_flyout
        },
        get getGravity() {
            return self.gravity
        }
    }))
    .actions(self => ({
        toggleFlyout() {
            self.body_flyout = !self.body_flyout
        },
        setGravity(g) {
            self.gravity = g
        }
    }))

export default Config
