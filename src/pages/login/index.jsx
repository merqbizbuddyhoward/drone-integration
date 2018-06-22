import React, { Component } from 'react'

import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import PasswordInput from 'grommet/components/PasswordInput'
import TextInput from 'grommet/components/TextInput'
import Link from 'gatsby-link'

import FormProperty, {
  serializeProperties,
  validateProperties
} from '../../utils/form-property'

import './styles.scss'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accountType: new FormProperty({
        context: this,
        name: 'account_type',
        value: 'buyer',
        rules: ['is-required']
      }),
      email: new FormProperty({
        context: this,
        name: 'username',
        value: '',
        rules: ['is-required', 'is-email']
      }),
      password: new FormProperty({
        context: this,
        name: 'password',
        value: '',
        rules: ['is-required']
      })
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  _authenticateUser() {
    const authEndpoint =
      this.state.value === 'buyer'
        ? process.env.BUYER_LOGIN_URL
        : process.env.SELLER_LOGIN_URL
    fetch(authEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: serializeProperties(this.state)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          this._addError(data.error.message)
          return data
        }
        this._successRedirect()
        return null
      })
      .catch(err => {
        this._addError(err.message)
      })
  }
  _successRedirect() {
    // implement redirect to buyer or seller app once we have more information
  }
  handleInputChange(e) {
    const { target } = e
    const { name } = target
    const isToggledInput = ['checkbox', 'radio'].includes(target.type)
    const value = isToggledInput ? target.checked : target.value

    this.state[name].value = value // is calling setState internally
  }
  handleSubmit(e) {
    e.preventDefault()

    if (validateProperties(this.state)) {
      this._authenticateUser()
    }
  }
  render() {
    return (
      <Box
        className="LoginPage"
        justify="center"
        align="center"
        pad="small"
        size="medium"
      >
        <Heading
          className="LoginPage__title"
          align="center"
          margin="medium"
          strong
        >
          Login
        </Heading>
        <hr className="LoginPage__divider" />
        <Form className="LoginPage__form" onSubmit={this.handleSubmit}>
          <Box
            justify="center"
            responsive={false}
            direction="row"
            align="center"
            margin="small"
          >
            <RadioButton
              className="LoginPage__radio-button"
              name="accountType"
              id="accountTypeBuyer"
              label="I am a buyer"
              value="buyer"
              defaultChecked
              onChange={this.handleInputChange}
            />
            <RadioButton
              className="LoginPage__radio-button"
              name="accountType"
              id="accountTypeSeller"
              label="I am a seller"
              value="seller"
              onChange={this.handleInputChange}
            />
          </Box>
          <fieldset>
            <Box direction="row" justify="center" margin="small">
              <FormField label="Email*" error={this.state.email.firstError}>
                <TextInput
                  name="email"
                  value={this.state.email.value}
                  onDOMChange={this.handleInputChange}
                />
              </FormField>
            </Box>
            <Box direction="row" justify="center" margin="small">
              <FormField
                label="Password*"
                error={this.state.password.firstError}
              >
                <PasswordInput
                  name="password"
                  value={this.state.password.value}
                  onChange={this.handleInputChange}
                />
              </FormField>
            </Box>
            <Box direction="column" justify="center" margin="small">
              <Link to="/forgot-password">Forgot your password?</Link>
              <Button
                className="LoginPage__button"
                type="submit"
                label="Login"
                fill
                primary
                onClick={() => {}}
              />
            </Box>
          </fieldset>
        </Form>
        <Paragraph size="small">
          Don't have an account? <Link to="/join">Join Now</Link>
        </Paragraph>
      </Box>
    )
  }
}
