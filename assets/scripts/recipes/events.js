'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = (event) => {
  event.preventDefault()
  console.log('create recipe ran!')

  const data = getFormFields(event.target)
  api.createRecipe(data)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onCreateRecipe
}
