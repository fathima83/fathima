
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://fathima:fathima@cluster0.5hjm8gt.mongodb.net/?appName=Cluster0")
.then(() => console.log('connected!'))
.catch((err) => console.log(err))