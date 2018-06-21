import React from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Footer from 'grommet/components/Footer'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import TextInput from 'grommet/components/TextInput'
import Link from 'gatsby-link'

import './styles.scss'

export default () => (
  <div className="ForgotPasswordPage">
    <Box align="center" pad="large">
      <Heading className="ForgotPasswordPage_heading" align="center">
        Forgot Password
      </Heading>
      <hr className="ForgotPasswordPage__divider" />
      <Form className="ForgotPasswordPage__form">
        <Paragraph className="ForgotPasswordPage_intro">
          Please select buyer or seller, and provide your company email address.
          You will receive a link to reset your password.
        </Paragraph>
        <Box direction="row" responsive={false}>
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
        </Box>
        <Box margin={{ vertical: 'medium' }}>
          <FormField className="ForgotPasswordPage__form-field" label="Email *">
            <TextInput />
          </FormField>
        </Box>
        <Button
          className="ForgotPasswordPage__button"
          label="Continue"
          primary
          fill
          onClick={null}
        />
      </Form>
    </Box>
    <Footer pad="large" colorIndex="brand" direction="column">
      <Link className="ForgotPasswordPage_link" to="/login">
        Back to Log In
      </Link>
    </Footer>
  </div>
)
