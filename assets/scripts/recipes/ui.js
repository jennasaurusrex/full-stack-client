'use strict'

const onCreateRecipeSuccess = (response) => {
  $('#user-message').text('New recipe created.')
}

const onShowRecipesSuccess = () => {
  $('#user-message').text('All recipes.')
}

const onShowRecipeSuccess = () => {
  $('#user-message').text('Show recipe succes.')
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
