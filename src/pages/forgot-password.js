import React from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import LoginForm from 'grommet/components/LoginForm'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import PasswordInput from 'grommet/components/PasswordInput'
import TextInput from 'grommet/components/TextInput'
import Link, { withPrefix } from 'gatsby-link'

export default () => {
  return (
    <Box
      className="ForgotPassword"
      justify="center"
      align="center"
      pad="medium"
    >
      <Heading className="ForgotPassword__title" align="center" margin="medium">
        Forgot Password
      </Heading>
      <Paragraph>
        Please select buyer or seller, and provide your company email address.
        You will receive a link to reset your password. Don't have an account?{' '}
      </Paragraph>
      <Form>
        <fieldset className="ForgotPassword__user-type">
          <RadioButton id="userTypeBuyer" label="I am a buyer" />
          <RadioButton id="userTypeSeller" label="I am a seller" />
        </fieldset>
        <fieldset>
          <legend>Tell us a little bit about yourself</legend>
          <FormField label="Email*">
            <TextInput />
          </FormField>
        </fieldset>
        <div>
          <Button
            label="Continue"
            primary={true}
            onClick={() => {
              console.log('placeholder')
            }}
          />
        </div>
      </Form>
      <Link to="/login">Back to Login</Link>
    </Box>
  )
}
