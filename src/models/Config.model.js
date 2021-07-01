import { types } from "mobx-state-tree"


const Config = types
    .model("Config", {
        body_flyout: types.optional(types.boolean, false)
    })
    .views(self => ({
        get isFlyout() {
            return self.body_flyout
        }
    }))
    .actions(self => ({
        toggleFlyout() {
            self.body_flyout = !self.body_flyout
        }
    }))

export default Config
