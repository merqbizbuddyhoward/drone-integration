import React from 'react'
import './styles.scss'
import Tile from '../../components/Tile'
import { Form, FormHeader, FormSection } from '../../components/Form'

const ForgotPasswordPage = ({ children }) => {
  const translation = {
    title: 'Forgot Password'
  }
  return (
    <div className="ForgotPasswordPage">
      <Tile>
        <Form>
          <FormHeader>{translation.title}</FormHeader>
          <FormSection>{/* Some related form elements */}</FormSection>
        </Form>
      </Tile>
    </div>
  )
}

export default ForgotPasswordPage
