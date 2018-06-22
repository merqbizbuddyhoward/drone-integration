import React from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import Label from 'grommet/components/Label'
import PasswordInput from 'grommet/components/PasswordInput'

import FormProperty, { validateProperties } from '../../utils/form-property'

import './styles.scss'

export default class UpdatePasswordPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: new FormProperty({
        context: this,
        name: 'password',
        rules: ['is-required']
      }),
      confirmPassword: new FormProperty({
        context: this,
        name: 'confirm_password',
        rules: [
          'is-required',
          {
            message: 'Please enter the same value again.',
            validator: val => this._passwordMatches(val)
          }
        ]
      }),
      passwordStrength: ''
    }

    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    )
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  _passwordMatches(confirmPassword) {
    return this.state.password.value === confirmPassword
  }

  handlePasswordChange(event) {
    const { name, value } = event.target
    this.state[name].value = value

    const STRONG_REGEX = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
    const MEDIUM_REGEX = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    )

    let strengthValue = ''
    if (STRONG_REGEX.test(value)) {
      strengthValue = 'strong'
    } else if (MEDIUM_REGEX.test(value)) {
      strengthValue = 'medium'
    } else if (value) {
      strengthValue = 'poor'
    } else {
      strengthValue = ''
    }
    validateProperties(this.state)
    this.setState({
      passwordStrength: strengthValue
    })
  }

  handleConfirmPasswordChange(event) {
    const { name, value } = event.target
    this.state[name].value = value
  }

  handleSubmit(event) {
    event.preventDefault()

    if (validateProperties(this.state)) {
      alert(`${this.state.password.value} was submitted`) // eslint-disable-line
    }
  }

  render() {
    return (
      <div className="UpdatePasswordPage">
        <Box pad="large" align="center">
          <Heading
            className="UpdatePasswordPage__heading"
            align="center"
            strong
          >
            Set a New Password
          </Heading>
          <hr className="UpdatePasswordPage__divider" />
          <Form
            className="UpdatePasswordPage__form"
            onSubmit={this.handleSubmit}
          >
            <Box margin={{ vertical: 'medium' }}>
              <FormField
                label="Password *"
                error={this.state.password.firstError}
              >
                <PasswordInput
                  name="password"
                  value={this.state.password.value}
                  onChange={this.handlePasswordChange}
                />
              </FormField>
            </Box>
            <Label className="UpdatePasswordPage_label">
              {`Password Strength: ${this.state.passwordStrength}`}
            </Label>
            <div className="UpdatePasswordPage__password-strength-meter">
              <div
                className={`UpdatePasswordPage__password-strength is-${
                  this.state.passwordStrength
                }`}
              />
            </div>
            <Box margin={{ vertical: 'medium' }}>
              <FormField
                label="Confirm Password *"
                error={this.state.confirmPassword.firstError}
              >
                <PasswordInput
                  name="confirmPassword"
                  value={this.state.confirmPassword.value}
                  onChange={this.handleConfirmPasswordChange}
                />
              </FormField>
            </Box>
            <Button
              className="UpdatePasswordPage__button"
              label="Change Password"
              type="submit"
              primary
              fill
            />
          </Form>
        </Box>
      </div>
    )
  }
}
