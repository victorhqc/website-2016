/* eslint global-require: 0 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.production.jsx');
} else {
  module.exports = require('./Root.development.jsx');
}
