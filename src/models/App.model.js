import { types } from "mobx-state-tree"

import User from "./User.model"

const AppState = types
    .model("AppState", {
        currentUser: types.reference(types.late(() => User))
    })
    .views(self => ({
        get isLoggedIn() {
            if (self.currentUser) {
                return (true, self.currentUser, _)
            }
            const error = new Error("Not logged in!")
            return (false, undefined, error)
        }
    }))