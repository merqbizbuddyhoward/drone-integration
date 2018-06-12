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
      className="ThankYou"
      justify="center"
      align="center"
      flex={false}
      pad="medium"
    >
      <Heading className="ThankYou__title" align="center" margin="medium">
        Thank you for registering with us.
      </Heading>
      {/* <Paragraph>Thank you text will go here</Paragraph> */}
      <Link to="/">Back to merQbiz.com</Link>
    </Box>
  )
}
