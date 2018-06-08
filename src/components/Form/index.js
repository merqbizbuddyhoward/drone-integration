import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const Form = ({ children }) => {
  return <form className={`Form`}>{children}</form>
}
export const FormHeader = ({ children }) => {
  return <div className={`Form__header`}>{children}</div>
}
const FormLegend = ({ caption }) => {
  return <legend className={`Form_legend`}>{caption}</legend>
}
export const FormSection = ({ children, caption }) => {
  return (
    <fieldset className={`Form__section`}>
      {caption && <FormLegend caption={title} />}
      {children}
    </fieldset>
  )
}

export default Form
