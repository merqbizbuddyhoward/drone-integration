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
      className="UpdatePassword"
      justify="center"
      align="center"
      pad="medium"
    >
      <Heading className="UpdatePassword__title" align="center" margin="medium">
        Set a New Password
      </Heading>
      <Form>
        <FormField label="Password*">
          <PasswordInput />
        </FormField>
        <FormField label="Confirm Password*">
          <PasswordInput />
        </FormField>
        <div>
          <Button
            label="Change Password"
            primary={true}
            onClick={() => {
              console.log('placeholder')
            }}
          />
        </div>
      </Form>
    </Box>
  )
}
