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

import './styles.scss'

export default () => (
  <Box
    className="LoginPage"
    justify="center"
    align="center"
    pad="small"
    size="medium"
  >
    <Heading className="LoginPage__title" align="center" margin="medium">
      Login
    </Heading>
    <hr className="LoginPage__divider" />
    <Form className="LoginPage__form">
      <Box
        justify="center"
        responsive="false"
        direction="row"
        align="center"
        margin="small"
      >
        <RadioButton id="userTypeBuyer" label="I am a buyer" />&nbsp;
        <RadioButton id="userTypeSeller" label="I am a seller" />
      </Box>
      <fieldset>
        <Box direction="row" justify="center" margin="small">
          <FormField label="Email*">
            <TextInput />
          </FormField>
        </Box>
        <Box direction="row" justify="center" margin="small">
          <FormField label="Password*">
            <PasswordInput />
          </FormField>
        </Box>
        <Box direction="column" justify="center" margin="small">
          <Link to="/forgot-password">Forgot your password?</Link>
          <Button
            className="LoginPage__button"
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
