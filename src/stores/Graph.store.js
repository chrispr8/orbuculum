import { createContext, useContext } from "react"
import { onSnapshot } from "mobx-state-tree"
import Graph from "../models/Graph.model"


let initialState = Graph.create({
    id: "graph",
    nodes: {},
    edges: {},
})


/* TODO: implement localStorage/offline first
const data = localStorage.getItem("graphState")

if (data) {
    const json = JSON.parse(data)
    if (Graph.is(json)) {
        initialState = Graph.create(json)
    }
} else {
    initialState.createPhantomData()
}
*/

initialState.createPhantomData(100, 300)
export const GraphStore = initialState

onSnapshot(GraphStore, snapshot => {
    localStorage.setItem("graphState", JSON.stringify(snapshot))
})

const GraphContext = createContext()

export const GraphProvider = GraphContext.Provider

export function useGraph() {
    const store = useContext(GraphContext)
    if (store === null) {
        throw new Error("Your GraphStore is invalid")
    }
    if (store === undefined) {
        throw new Error("GraphStore is undefined!")
    }
    return store
}