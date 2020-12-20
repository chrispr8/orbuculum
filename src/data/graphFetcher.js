import { TerminusClient } from "@terminusdb/terminusdb-client"

/* TODO
const client = new TerminusClient.WOQLClient("http://localhost:6363/", {
    dbid: "orb",
    user: "test",
    key: "test"
})
*/

export const graphFetcher = (...args) => fetch(...args).then(res => res.json())

// export const graphPoster = (...)