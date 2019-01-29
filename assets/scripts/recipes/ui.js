'use strict'
const store = require('../store')

const onCreateRecipeSuccess = (response) => {
  $('#user-message').text('New recipe created.')
}

const onFailure = (response) => {
  $('#user-message').text('Error. Try again.')
}

module.exports = {
  onCreateRecipeSuccess,
  onFailure
}
