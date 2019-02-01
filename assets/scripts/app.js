'use strict'

const authEvents = require('./auth/events')
const recipeEvents = require('./recipes/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.welcome').show()
  $('.index').hide()
  $('.navbar').hide()
  $('#index').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#create-recipe').on('submit', recipeEvents.onCreateRecipe)
  $('#show-recipes').on('click', recipeEvents.onShowRecipes)
  $('body').on('submit', '.update-recipe', recipeEvents.onUpdateRecipe)
  $('body').on('click', '.remove', recipeEvents.onDestroyRecipe)
})
