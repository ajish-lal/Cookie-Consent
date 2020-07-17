const appConfigController = require('../controllers/appConfigController');
const cookieCategoryController = require('../controllers/cookieCategoryController')
const cookieController = require('../controllers/cookieController')


const routes = [
  {
    method: 'GET',
    url: '/api/cookie-consent/appconfig',
    handler: appConfigController.getAppconfig
  }, 
  {
    method: 'POST',
    url: '/api/cookie-consent/appconfig',
    handler: appConfigController.addAppconfig
  },
  {
    method: 'GET',
    url: '/api/cookie-consent/appconfig/:id',
    handler: appConfigController.getSingleAppconfig
  },
  {
    method: 'PUT',
    url: '/api/cookie-consent/appconfig/:id',
    handler: appConfigController.updateAppconfig
  },
  {
    method: 'DELETE',
    url: '/api/cookie-consent/appconfig/:id',
    handler: appConfigController.deleteAppconfig
  },
  {
    method: 'GET',
    url: '/api/cookie-consent/categories',
    handler: cookieCategoryController.getCookieCategory
  }, 
  {
    method: 'POST',
    url: '/api/cookie-consent/categories',
    handler: cookieCategoryController.addCookieCategory
  },
  {
    method: 'GET',
    url: '/api/cookie-consent/categories/:status',
    handler: cookieCategoryController.getActiveCookieCategoryList
  },
  {
    method: 'PUT',
    url: '/api/cookie-consent/categories/:id',
    handler: cookieCategoryController.updateCookieCategory
  },
  {
    method: 'GET',
    url: '/api/cookie-consent/cookies',
    handler: cookieController.getCookies
  }, 
  {
    method: 'POST',
    url: '/api/cookie-consent/cookies',
    handler: cookieController.addCookie
  }
]

module.exports = routes