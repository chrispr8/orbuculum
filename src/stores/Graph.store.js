import { createContext, useContext } from "react"
import { onSnapshot } from "mobx-state-tree"
import Graph from "../models/Graph.model"


let initialState = Graph.create({
    id: "graph",
    nodes: {},
    edges: {},
})

const data = localStorage.getItem("graphState")

if (data) {
    const json = JSON.parse(data)
    if (Graph.is(json)) {
        initialState = Graph.create(json)
    }
} else {
    initialState.createPhantomData()
}

export const GraphStore = initialState

onSnapshot(GraphStore, snapshot => {
    console.log("Graph", snapshot)
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
        throw new Error("Store is undefined!")
    }
    return store
}