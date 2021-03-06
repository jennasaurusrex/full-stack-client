'use strict'

const store = require('../store')
const config = require('../config')

const createRecipe = (formData) => {
  // console.log('data: ', formData)
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const showRecipes = function () {
  // console.log('showRecipes ran!')
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showRecipe = function (recipe) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + recipe.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function (data, target) {
  // console.log('data is ', data)
  // console.log('target is: ', target)
  return $.ajax({
    url: config.apiUrl + '/recipes/' + target,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const destroyRecipe = function (id) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRecipe,
  showRecipes,
  showRecipe,
  updateRecipe,
  destroyRecipe
}
