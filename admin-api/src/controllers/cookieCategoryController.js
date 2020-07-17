const setError = require('../errorHandler');


const Categories = require('../models/categories')

// Get all cookie categories
exports.getCookieCategory = async (req, reply, err) => {
  try {
    const cookieCategoryDetails = await Categories.find()
    reply
      .code(200)
      .send(cookieCategoryDetails)
  } catch (err) {
    setError(req,err)
  }
}


// Add a new category
exports.addCookieCategory = async (req, reply) => {
  try {
    const cookieCategoryData = new Categories(req.body)
    return cookieCategoryData.save()
  } catch (err) {
    setError(req,err)
  }
}

// Get active category list
exports.getActiveCookieCategoryList = async (req, reply) => {
  try {
    const currentStatus = req.params.status
    const cookieCategoryData = await Categories.find({status:currentStatus})
    reply
      .code(200)
      .send(cookieCategoryData)
  } catch (err) {
    setError(req,err)
  }
}

// Update an existing category details
exports.updateCookieCategory = async (req, reply) => {
  try {
    const id = req.params.id
    const categoryData = req.body
    const { ...updateData } = categoryData
    const update = await Categories.findByIdAndUpdate(id, updateData, { new: true })
    reply
    .code(200)
    .send(update)
  } catch (err) {
    setError(req,err)
  }
}


