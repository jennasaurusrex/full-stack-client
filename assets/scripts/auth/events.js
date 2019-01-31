'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  console.log(`sign up event is: ${event}`)
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('formdata is: ', formData)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
  $('#exampleModal').modal('hide')
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
