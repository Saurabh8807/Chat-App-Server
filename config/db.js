const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("connecting to mongoose")
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useCreateIndex: true
        })
        // console.log(conn)
        console.log("mongoose connected")
    } catch (error) {
        console.log("mongoose not connected")
    }
}

module.exports = connectDB