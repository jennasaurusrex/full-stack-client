'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  store.credentials = formData

  api.signUp(formData)
    .then(onSignUpIn)
    .catch(ui.onFailure)

  $('form').trigger('reset')
  $('#exampleModal').modal('hide')
}

const onSignUpIn = (event) => {
  delete store.credentials.password_confirmation
  const dataWithoutPC = store.credentials
  api.signIn(dataWithoutPC)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
  $('#exampleModal2').modal('hide')
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
  $('#exampleModal3').modal('hide')
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
