'use strict'
const store = require('../store')

const onSignUpSuccess = (response) => {
  $('#user-message').text('Successfully signed up!')
}

const onSignInSuccess = (response) => {
  $('#user-message').text(`Hello, ${response.user.email}!`)
  store.user = response.user
}

const onChangePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password.')
}

const onSignOutSuccess = () => {
  $('#user-message').text('Successfully signed out.')
  store.user = null
}

const onFailure = (response) => {
  $('#user-message').text('Error. Try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onFailure
}
