import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import TextInput from 'grommet/components/TextInput'

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
      firstName: new FormProperty({
        context: this,
        name: 'firstname',
        rules: ['is-required']
      }),
      lastName: new FormProperty({
        context: this,
        name: 'lastname',
        rules: ['is-required']
      }),
      companyName: new FormProperty({
        context: this,
        name: 'company_name',
        rules: ['is-required']
      }),
      companyEmail: new FormProperty({
        context: this,
        name: 'company_email',
        rules: ['is-required', 'is-email']
      }),
      phone: new FormProperty({
        context: this,
        name: 'phone',
        rules: ['is-required']
      }),
      ext: new FormProperty({ context: this, name: 'ext' })
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  _addError(message) {
    this.setState(prev => {
      const errors = [...prev.errors, message]
      return {
        ...prev,
        errors
      }
    })
  }
  _successRedirect() {
    navigateTo('/thank-you')
  }
  _requestUserAccess() {
    fetch(process.env.REQUEST_ACCESS_URL, {
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
      this._requestUserAccess()
    }
  }
  render() {
    return (
      <Box
        className="JoinPage"
        justify="center"
        align="center"
        pad="small"
        size="large"
      >
        <Heading
          className="JoinPage_heading"
          align="center"
          margin="small"
          strong
        >
          Join Now
        </Heading>
        <hr className="JoinPage__divider" />
        <Form className="JoinPage__form" onSubmit={this.handleSubmit}>
          <Box align="center">
            <fieldset className="JoinPage__fieldset">
              <div className="JoinPage__legend">
                1. Do you buy or sell recycled paper?
              </div>
              <Box direction="row" justify="center" margin="small">
                <RadioButton
                  className="JoinPage__radio-button"
                  name="accountType"
                  id="accountTypeBuyer"
                  label="I am a buyer"
                  value="buyer"
                  defaultChecked={true}
                  onChange={this.handleInputChange}
                />
                <RadioButton
                  className="JoinPage__radio-button"
                  name="accountType"
                  id="accountTypeSeller"
                  label="I am a seller"
                  value="seller"
                  onChange={this.handleInputChange}
                />
              </Box>
            </fieldset>
            <hr className="JoinPage__divider" />
            <fieldset className="JoinPage__fieldset">
              <div className="JoinPage__legend">
                2. Tell us a little bit about yourself
              </div>
              <Box direction="row" justify="between" margin="small">
                <FormField
                  className="JoinPage__form-field"
                  label="First Name *"
                  error={this.state.firstName.firstError}
                >
                  <TextInput
                    className="JoinPage__text-input"
                    name="firstName"
                    value={this.state.firstName.value}
                    onDOMChange={this.handleInputChange}
                  />
                </FormField>
                <FormField
                  className="JoinPage__form-field"
                  label="Last Name *"
                  error={this.state.lastName.firstError}
                >
                  <TextInput
                    className="JoinPage__text-input"
                    name="lastName"
                    value={this.state.lastName.value}
                    onDOMChange={this.handleInputChange}
                  />
                </FormField>
              </Box>
              <Box direction="row" justify="center" margin="small">
                <FormField
                  className="JoinPage__form-field"
                  label="Company Name *"
                  error={this.state.companyName.firstError}
                >
                  <TextInput
                    className="JoinPage__text-input"
                    name="companyName"
                    value={this.state.companyName.value}
                    onDOMChange={this.handleInputChange}
                  />
                </FormField>
              </Box>
              <Box direction="row" justify="center" margin="small">
                <FormField
                  className="JoinPage__form-field"
                  label="Email Address *"
                  error={this.state.companyEmail.firstError}
                >
                  <TextInput
                    className="JoinPage__text-input"
                    name="companyEmail"
                    value={this.state.companyEmail.value}
                    onDOMChange={this.handleInputChange}
                  />
                </FormField>
              </Box>
              <Box direction="row" justify="center" margin="small">
                <FormField
                  className="JoinPage__form-field is-primary"
                  label="Phone Number *"
                  error={this.state.phone.firstError}
                >
                  <TextInput
                    className="JoinPage__text-input"
                    name="phone"
                    value={this.state.phone.value}
                    onDOMChange={this.handleInputChange}
                  />
                </FormField>
                <FormField
                  className="JoinPage__form-field is-secondary"
                  label="Ext."
                  error={this.state.ext.firstError}
                >
                  <TextInput
                    className="JoinPage__text-input"
                    name="ext"
                    value={this.state.ext.value}
                    onDOMChange={this.handleInputChange}
                  />
                </FormField>
              </Box>
            </fieldset>
            <Box direction="row" justify="center" margin="small">
              <Button
                className="JoinPage__button"
                type="submit"
                label="Submit"
                primary
                fill
                onClick={() => {}}
              />
            </Box>
          </Box>
          <Paragraph
            className="JoinPage__legal"
            margin="small"
            pad="small"
            size="small"
            align="center"
          >
            By clicking the submit button, you accept merQbiz's{' '}
            <Link to="/user-agreement">user agreement</Link>,{' '}
            <Link to="/">privacy policy</Link>, and{' '}
            <Link to="/dispute-resolution-policy">
              dispute resolution policy
            </Link>.
          </Paragraph>
        </Form>
      </Box>
    )
  }
}
