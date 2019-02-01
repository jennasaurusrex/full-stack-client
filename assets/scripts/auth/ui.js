'use strict'
const store = require('../store')

const onSignUpSuccess = (response) => {
  console.log(`success is: ${response}`)
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Signed up!</div>')
}

const onSignInSuccess = (response) => {
  $('#user-message').html(`<div class="text-center alert alert-success" role="alert">Hello, ${response.user.email}!</div>`)
  store.user = response.user
  $('.welcome').hide()
  $('.navbar').show()
}

const onChangePasswordSuccess = () => {
  $('#user-message').html('<div class="text-center alert alert-success" role="alert">Changed password!</div>')
}

const onSignOutSuccess = () => {
  $('#user-message').html(`<div class="text-center alert alert-success" role="alert">Signed out</div>`)
  $('.welcome').show()
  $('.navbar').hide()
  $('#index').hide()
  store.user = null
}

const onFailure = (response) => {
  console.log('error is:', response)
  $('#user-message').html('<div class="text-center alert alert-danger" role="alert">Error. Please try again.</div>')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onFailure
}
