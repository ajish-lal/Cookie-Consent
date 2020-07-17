const mongoose = require('mongoose')
const categoryContentType = require('./contentType')
const Schema = mongoose.Schema;

const categoriesSchema = new mongoose.Schema({
    category_name: { type: String, required: true },
    content: [{ type: Schema.Types.Object, ref: categoryContentType }],
    status: { type: String, default: "Active" }
},
    { timestamps: true }
)


module.exports = mongoose.model('Categories', categoriesSchema)