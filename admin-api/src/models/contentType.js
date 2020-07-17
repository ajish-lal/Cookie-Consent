
const mongoose = require('mongoose')

const categoryContentTypeSchema = new mongoose.Schema({
    lang: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
}
)


module.exports = mongoose.model('CategoryContentType', categoryContentTypeSchema)