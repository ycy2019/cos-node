const sqlite3 = require("sqlite3")
let database = new sqlite3.Database("./public/data/test.sqlite", function (e) {
    if(e){
        console.log(e)
    }
})
console.log(database)