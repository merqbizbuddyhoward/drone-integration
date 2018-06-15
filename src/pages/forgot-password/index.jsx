import React from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import TextInput from 'grommet/components/TextInput'
import Link from 'gatsby-link'

import './styles.scss'

export default () => (
  <Box
    className="ForgotPasswordPage"
    justify="center"
    align="center"
    pad="medium"
  >
    <Heading
      className="ForgotPasswordPage_heading"
      align="center"
      margin="medium"
    >
      Forgot Password
    </Heading>
    <Paragraph className="ForgotPasswordPage_intro">
      Please select buyer or seller, and provide your company email address. You
      will receive a link to reset your password. Don't have an account?{' '}
    </Paragraph>
    <Form className="ForgotPasswordPage__form">
      <fieldset className="ForgotPasswordPage__fieldset">
        <RadioButton
          className="ForgotPasswordPage__radio-button"
          id="userTypeBuyer"
          label="I am a buyer"
        />
        <RadioButton
          className="ForgotPasswordPage__radio-button"
          id="userTypeSeller"
          label="I am a seller"
        />
      </fieldset>
      <fieldset className="ForgotPasswordPage__fieldset">
        <legend className="ForgotPasswordPage_legend">
          Tell us a little bit about yourself
        </legend>
        <FormField className="ForgotPasswordPage__form-field" label="Email*">
          <TextInput />
        </FormField>
      </fieldset>
      <Button
        className="ForgotPasswordPage__button"
        label="Continue"
        primary
        onClick={() => {}}
      />
    </Form>
    <Link className="ForgotPasswordPage_link" to="/login">
      Back to Login
    </Link>
  </Box>
)
