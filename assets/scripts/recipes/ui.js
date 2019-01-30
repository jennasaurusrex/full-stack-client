'use strict'

const showRecipesTemplate = require('../templates/helpers/recipelisting.handlebars')

const onCreateRecipeSuccess = (response) => {
  $('#user-message').text('New recipe created.')
}

const onShowRecipesSuccess = (response) => {
  console.log('onShowRecipesSuccess ran!')
  console.log(response)
  const showRecipesHtml = showRecipesTemplate({ recipes: response.recipes })
  //  console.log(showRecipesHtml)
  $('#user-message').html(showRecipesHtml)
}

const onShowRecipeSuccess = (response) => {
  $('#user-message').text('Show recipe success.')
}

const onUpdateRecipeSuccess = () => {
  $('#user-message').text('Update recipe success.')
}

const onDestroyRecipeSuccess = () => {
  $('#user-message').text('Delete recipe success.')
}

const onFailure = (response) => {
  $('#user-message').text('Error. Try again.')
}

module.exports = {
  onCreateRecipeSuccess,
  onShowRecipesSuccess,
  onShowRecipeSuccess,
  onUpdateRecipeSuccess,
  onDestroyRecipeSuccess,
  onFailure
}
