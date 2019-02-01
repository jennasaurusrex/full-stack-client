'use strict'

const showRecipesTemplate = require('../templates/helpers/recipelisting.handlebars')

const onCreateRecipeSuccess = (response) => {
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Success!</div>')
  $('#exampleModal4').modal('hide')
}

const onShowRecipesSuccess = (response) => {
  // console.log('onShowRecipesSuccess ran!')
  // console.log(response)
  const showRecipesHtml = showRecipesTemplate({ recipes: response.recipes })
  //  // console.log(showRecipesHtml)
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Listing recipes...</div>')
  $('#index').show()
  $('#index').html(showRecipesHtml)
}

const onUpdateRecipeSuccess = () => {
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Recipe updated!</div>')
}

const onDestroyRecipeSuccess = () => {
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Deleted.</div>')
}

const onFailure = (response) => {
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Please try again.</div>')
}

module.exports = {
  onCreateRecipeSuccess,
  onShowRecipesSuccess,
  onUpdateRecipeSuccess,
  onDestroyRecipeSuccess,
  onFailure
}
