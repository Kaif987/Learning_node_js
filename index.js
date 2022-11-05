const fs = require("fs")
const rs = fs.createReadStream("./summer.html")
rs.on("open",function(){
    console.log("reading the file")
})

