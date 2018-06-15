import React from 'react'
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

export default () => (
  <Box className="LoginPage" justify="center" align="center" pad="medium">
    <Heading className="LoginPage__title" align="center" margin="medium">
      Login Page
    </Heading>
    <Form>
      <fieldset className="LoginPage__user-type">
        <legend>Do you buy or sell recycled paper?</legend>
        <RadioButton id="userTypeBuyer" label="I am a buyer" />
        <RadioButton id="userTypeSeller" label="I am a seller" />
      </fieldset>
      <fieldset>
        <legend>Tell us a little bit about yourself</legend>
        <FormField label="Email*">
          <TextInput />
        </FormField>
        <FormField label="Password*">
          <PasswordInput />
        </FormField>
      </fieldset>
      <Link to="/forgot-password">Forgot your password?</Link>
      <div>
        <Button label="Login" primary onClick={() => {}} />
      </div>
    </Form>
    <Paragraph>
      Don't have an account? <Link to="/join">Join Now</Link>
    </Paragraph>
  </Box>
)
