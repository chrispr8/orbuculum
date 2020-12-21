import Client from "@terminusdb/terminusdb-client"

// Instantiate database client
const DB = new Client.WOQLClient("https://127.0.0.1:6363/",
    { user: "admin", key: "root" })

// organization is like user here
DB.organization("arcaneon")

// connect
DB.connect()
    .then(() => hasDB())
    .catch(error => console.log("error", error))

// create Q alias to build queries
const Q = Client.WOQL

// check for DB, create if missing
const hasDB = () => {
    console.log("# checking db")
    // use system database for this query
    DB.db("_system")
    // check if a database with the label TodoMVC exists
    DB.query(Q
        .triple("v:DB', 'type', 'system:Database')
            .triple('v:DB', 'label', 'v:Label')
            .eq({ '@language': 'en', '@value': 'TodoMVC' }, 'v:Label')
        ).then(response => {
            if (response.bindings.length === 0) {
                console.log('# creating db')
                // create the database
                DB.createDatabase('TodoMVC', {
                    label: 'TodoMVC',
                    comment: 'DB for TodoMVC backend',
                    schema: true
                }, 'admin')
                    .then(() => hasSchema())
            } else {
                console.log('# has db')
                hasSchema()
            }
        }).catch(error => console.log('error', error))
}
