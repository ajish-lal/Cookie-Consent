const mongoose = require('mongoose')

const appConfigSchema = new mongoose.Schema({
  app_id:           { type: String, required: true, unique: true },
  app_name:         { type: String, required: true },
  app_url:          { type: String, required: true },
  app_key:          { type: String, required: true },
  max_url:          { type: String, required: true },
  include_list:     { type: String, required: true },
  ignore_list:      { type: String, required: true },
  scan_frequency:   { type: String, required: true },
  last_scanned_at:  { type: Date, required: true },
  active:           { type: Boolean, required: true },
  created_by:       { type: String, required: true },
  last_updated_by:  { type: String, required: true }
},
{ timestamps: true }
)


module.exports = mongoose.model('Appconfig', appConfigSchema)