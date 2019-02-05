'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = (event) => {
  event.preventDefault()
  // console.log('create recipe ran!')

  const data = getFormFields(event.target)
  //  console.log('data.recipe.name is: ', data.recipe.name)
  if (data.recipe.name !== '' && data.recipe.description !== '' && data.recipe.ingredients !== '' && data.recipe.instructions !== '') {
    api.createRecipe(data)
      .then(ui.onCreateRecipeSuccess)
      .catch(ui.onFailure)
  } else {
    ui.onFailure()
  }
  $('#exampleModal4').modal('hide')
  $('form').trigger('reset')
}

const onShowRecipes = function (event) {
  event.preventDefault()
  // console.log('onShowRecipes ran!')

  api.showRecipes()
    .then(ui.onShowRecipesSuccess)
    .catch(ui.onFailure)
  $('form').trigger('reset')
}

const onShowRecipe = function (event) {
  event.preventDefault()
  // console.log('onShowRecipe ran!')

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.id.length !== 0) {
    api.showRecipe(recipe)
      .then(ui.onShowRecipeSuccess)
      .catch(ui.onFailure)
  } else {
    $('#user-message').html('<p>Please provide a recipe id!</p>')
    $('#user-message').css('background-color', 'red')
    // console.log('Please enter a recipe id!')
  }
  $('form').trigger('reset')
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  // console.log('onUpdateRecipe ran!')
  // console.log($(event.target).closest('section'))
  const data = getFormFields(event.target)
  const target = $(event.target).closest('section').data('id')
  // console.log('events.js data is ', data)
  // console.log('event.target is ', $(event.target).serializeArray())
  if (data.recipe.name !== '' || data.recipe.description !== '' || data.recipe.ingredients !== '' || data.recipe.instructions !== '') {
    api.updateRecipe(data, target)
      .then(ui.onUpdateRecipeSuccess)
      .catch(ui.onFailure)
  } else {
    ui.onFailure()
  }
  $('#modal_' + target).modal('hide')
  $('.modal-backdrop').hide()
  $('body').toggleClass('modal-open')
  $('form').trigger('reset')
}

const onDestroyRecipe = function (event) {
  event.preventDefault()
  const target = $(event.target).closest('section').data('id')
  // console.log('onDestroyRecipe ran!')

  api.destroyRecipe(target)
    .then(ui.onDestroyRecipeSuccess)
    .then(() => onShowRecipes(event))
    .catch(ui.onFailure)
  // console.log('Please provide a recipe id!')
}

module.exports = {
  onCreateRecipe,
  onShowRecipes,
  onShowRecipe,
  onUpdateRecipe,
  onDestroyRecipe
}
