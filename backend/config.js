var mongo = require('mongoose')

var db = mongo.connect("mongodb+srv://thegovernorbrown:G0vern0r.!@cluster0.tpecad1.mongodb.net/crudapp", (err,response) => {
if(err){
    console.log("Failed to connect" + db)
}
else{
    console.log("Connected" + db)
}
})

module.exports = db