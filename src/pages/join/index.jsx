import React from 'react'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import TextInput from 'grommet/components/TextInput'

import Link from 'gatsby-link'

import './styles.scss'

export default () => (
  <Box className="JoinPage" justify="center" align="center" pad="medium">
    <Heading className="JoinPage_heading" align="center" margin="medium">
      Join Now
    </Heading>
    <Form className="JoinPage__form">
      <fieldset className="JoinPage__fieldset">
        <legend className="JoinPage__legend">
          Do you buy or sell recycled paper?
        </legend>
        <RadioButton
          className="JoinPage__radio-button"
          id="userTypeBuyer"
          label="I am a buyer"
        />
        <RadioButton
          className="JoinPage__radio-button"
          id="userTypeSeller"
          label="I am a seller"
        />
      </fieldset>
      <fieldset className="JoinPage__fieldset">
        <legend className="JoinPage__legend">
          Tell us a little bit about yourself
        </legend>
        <FormField className="JoinPage__form-field" label="First Name *">
          <TextInput className="JoinPage__text-input" />
        </FormField>
        <FormField className="JoinPage__form-field" label="Last Name *">
          <TextInput className="JoinPage__text-input" />
        </FormField>
        <FormField className="JoinPage__form-field" label="Company Name *">
          <TextInput className="JoinPage__text-input" />
        </FormField>
        <FormField className="JoinPage__form-field" label="Email Address *">
          <TextInput className="JoinPage__text-input" />
        </FormField>
        <FormField className="JoinPage__form-field" label="Phone Number *">
          <TextInput className="JoinPage__text-input is-phone-number" />
        </FormField>
        <FormField className="JoinPage__form-field" label="Ext.">
          <TextInput className="JoinPage__text-input is-phone-extension" />
        </FormField>
      </fieldset>
      <Button
        className="JoinPage__button"
        label="Submit"
        primary
        onClick={() => {}}
      />
    </Form>
    <Paragraph className="JoinPage__legal">
      By clicking the submit button, you accept merQbiz's{' '}
      <Link to="/user-agreement">user agreement</Link>,{' '}
      <Link to="/">privacy policy</Link>, and{' '}
      <Link to="/dispute-resolution-policy">dispute resolution policy</Link>.
    </Paragraph>
  </Box>
)
