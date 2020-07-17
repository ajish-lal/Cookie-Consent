const setError = require('../errorHandler');


const Appconfig = require('../models/appconfig')

// Get all appconfig data
exports.getAppconfig = async (req, reply, err) => {
  try {
    const appConfigDetails = await Appconfig.find()
    reply
      .code(200)
      .send(appConfigDetails)
  } catch (err) {
    setError(req,err)
  }
}


// Add a new app config details
exports.addAppconfig = async (req, reply) => {
  try {
    const appConfigData = new Appconfig(req.body)
    return appConfigData.save()
  } catch (err) {
    setError(req,err)
  }
}

// Get single config details by ID
exports.getSingleAppconfig = async (req, reply) => {
  try {
    const id = req.params.id
    const appConfigData = await Appconfig.findById(id)
    reply
      .code(200)
      .send(appConfigData)
  } catch (err) {
    setError(req,err)
  }
}

// Update an existing app config details
exports.updateAppconfig = async (req, reply) => {
  try {
    const id = req.params.id
    const configData = req.body
    const { ...updateData } = configData
    const update = await Appconfig.findByIdAndUpdate(id, updateData, { new: true })
    reply
    .code(200)
    .send(update)
  } catch (err) {
    setError(req,err)
  }
}
// Delete app config
exports.deleteAppconfig = async (req, reply) => {
  try {
    const id = req.params.id
    const appConfig = await Appconfig.findByIdAndRemove(id)
    reply
    .code(200)
    .send(appConfig)
  } catch (err) {
    setError(req,err)
  }
}


