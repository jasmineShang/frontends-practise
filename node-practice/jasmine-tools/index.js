const date = require('./dateFormat')
const escape = require('./htmlEscape')


module.exports = {
    ...date,
    ...escape
}
