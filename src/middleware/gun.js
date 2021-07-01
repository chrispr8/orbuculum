import Gun from "gun/gun"

export const gun = Gun("localhost:3000/gun")
window.gun = gun

export function insert() {
    console.log("Gun: ", gun)
    gun.get("1").put({ "1": 1 })
}

