let mongoose = require("mongoose")

let Schema = mongoose.Schema;
let booksData = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
})
let Data = mongoose.model("Data", booksData)
module.exports = Data;