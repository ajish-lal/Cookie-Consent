const setError = require('../errorHandler');


const Cookies = require('../models/cookies')

// Get all cookies
exports.getCookies = async (req, reply, err) => {
  try {
    const cookieDetails = await Cookies.find()
    reply
      .code(200)
      .send(cookieDetails)
  } catch (err) {
    setError(req,err)
  }
}


// Add a new cookie
exports.addCookie= async (req, reply) => {
  try {
    const cookieData = new Cookies(req.body)
    return cookieData.save()
  } catch (err) {
    setError(req,err)
  }
}


