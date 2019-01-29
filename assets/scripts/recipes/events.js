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

const onShowRecipes = function (event) {
  event.preventDefault()
  console.log('onShowRecipes ran!')

  api.showRecipes()
    .then(ui.onShowRecipesSuccess)
    .catch(ui.onFailure)
}

const onShowRecipe = function (event) {
  event.preventDefault()
  console.log('onShowRecipe ran!')

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.id.length !== 0) {
    api.showRecipe(recipe)
      .then(ui.onShowRecipeSuccess)
      .catch(ui.onFailure)
  } else {
    $('#user-message').html('<p>Please provide a recipe id!</p>')
    $('#user-message').css('background-color', 'red')
    console.log('Please enter a recipe id!')
  }
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  console.log('onUpdateRecipe ran!')

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.text === '') {
    $('#user-message').html('<p>Text is required</p>')
    $('#user-message').css('background-color', 'red')
    console.log('Recipe is required!')
    return false
  }
  if (recipe.id.length !== 0) {
    api.updateRecipe(data)
      .then(ui.onUpdateRecipeSuccess)
      .catch(ui.onFailure)
  } else {
    $('#user-message').html('<p>Please provide a recipe id!</p>')
    $('#user-message').css('background-color', 'red')
    console.log('Please provide a recipe id!')
  }
}

const onDestroyRecipe = function (event) {
  event.preventDefault()
  console.log('onDestroyRecipe ran!')

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.id.length !== 0) {
    api.destroyRecipe(recipe.id)
      .then(ui.onDestroyRecipeSuccess)
      .catch(ui.onFailure)
  } else {
    $('#user-message').html('<p>Please provide a recipe id!</p>')
    $('#user-message').css('background-color', 'red')
    console.log('Please provide a recipe id!')
  }
}

module.exports = {
  onCreateRecipe,
  onShowRecipes,
  onShowRecipe,
  onUpdateRecipe,
  onDestroyRecipe
}
