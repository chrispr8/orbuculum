import { GPU, input, Input } from "gpu.js"



const calculateForce = (x) => { return x }

const applyForce = () => { }

const calculateEnergy = () => { }




export const forceLayoutSimulation = (
    adjacency_matrix,
    positions,
) => {
    // Sanitize input
    if (!adjacency_matrix || !positions) {
        throw new Error("Needs input!")
    }
    const iterations = 100

    // Set constants
    const N = positions.length

    // Initialize GPU and Kernel
    const gpu = new GPU({
        mode: "webgl",
    })

    const distance = (v, w) => {
        const d = ((v[0] * w[0]) ^ 2 + (v[1] * w[1]) ^ 2 + (v[2] * w[2]) ^ 2) ^ 0.5
        console.log(d)
        return d
    }


    const simulation = gpu.createKernelMap(function (adjacency_matrix, positions) {
        return distance(positions[this.thread.x], positions[this.thread.x])
    }).setOutput([100])

    const results = simulation(adjacency_matrix, positions)
    return results
}