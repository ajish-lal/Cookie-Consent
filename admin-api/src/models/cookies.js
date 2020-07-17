const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const appConfig = require('./appconfig')
const category = require('./categories')
const categoryContentType = require('./contentType')

const cookieSchema = new mongoose.Schema({
  app_id:           { type: Schema.Types.ObjectId, ref: appConfig },
  cookie_key:       { type: String,  required: [true,'No cookie key found'], unique:true },
  host:             { type: String,  required: [true,'No host found'] },
  cookie_type:      { type: String,  required: [true,'No cookie type found'] },
  expiry:           { type: String, required: true },
  category_id:      { type: Schema.Types.ObjectId, ref: category},
  description:      [{ type: Schema.Types.Object, ref: categoryContentType }],
  collected_at:     { type: Date, required: true },
  status:           { type: String, required: true }
},
{ timestamps: true }
)


module.exports = mongoose.model('Cookie', cookieSchema)