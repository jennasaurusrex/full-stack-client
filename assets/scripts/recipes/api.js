'use strict'

const store = require('../store')
const config = require('../config')

const createRecipe = (formData) => {
  console.log('data: ', formData)
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createRecipe
}
