import React from 'react'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import LoginForm from 'grommet/components/LoginForm'
import RadioButton from 'grommet/components/RadioButton'
import Paragraph from 'grommet/components/Paragraph'
import PasswordInput from 'grommet/components/PasswordInput'
import TextInput from 'grommet/components/TextInput'
import Tile from '../components/Tile'

import Link, { withPrefix } from 'gatsby-link'

export default () => {
  return (
    <Box className="JoinPage" justify="center" align="center" pad="medium">
      <Heading className="JoinPage_title" align="center" margin="medium">
        Join Now
      </Heading>
      <Form>
        <fieldset className="JoinPage__user-type">
          <legend>Do you buy or sell recycled paper?</legend>
          <RadioButton id="userTypeBuyer" label="I am a buyer" />
          <RadioButton id="userTypeSeller" label="I am a seller" />
        </fieldset>
        <fieldset>
          <legend>Tell us a little bit about yourself</legend>
          <FormField label="First Name *">
            <TextInput />
          </FormField>
          <FormField label="Last Name *">
            <TextInput />
          </FormField>
          <FormField label="Company Name *">
            <TextInput />
          </FormField>
          <FormField label="Email Address *">
            <TextInput />
          </FormField>
          <FormField label="Phone Number *">
            <TextInput />
          </FormField>
          <FormField label="Ext.">
            <TextInput />
          </FormField>
        </fieldset>
        <Button
          label="Submit"
          primary={true}
          onClick={() => {
            console.log('placeholder')
          }}
        />
      </Form>
      <Paragraph>
        By clicking the submit button, you accept merQbiz's{' '}
        <Link to="/user-agreement">user agreement</Link>,{' '}
        <Link to="/">privacy policy</Link>, and{' '}
        <Link to="/dispute-resolution-policy">dispute resolution policy</Link>.
      </Paragraph>
    </Box>
  )
}
