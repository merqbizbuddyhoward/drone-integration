import isEmail from 'validator/lib/isEmail'

const PRESET_RULES = {
  'is-required': {
    message: 'This is a required field',
    validator: val => {
      const userInput = val.trim()
      return userInput.length >= 1
    }
  },
  'is-email': {
    message: 'Invalid email given',
    validator: val => isEmail(val)
  }
}
export default class FormProperty {
  constructor({ context, name, value = '', rules = [] }) {
    this.context = context
    this.name = name
    this._value = value
    this.errors = []
    this.rules = rules
  }
  get value() {
    return this._value
  }
  set value(val) {
    this._value = val
    this.validate()
  }
  get firstError() {
    return this.errors[0] || null
  }
  _updateState() {
    this.context.setState({ ...this.context.state })
  }
  validate() {
    this.errors = []
    this.rules.forEach(rule => {
      const isPresetRule = typeof rule === 'string' && PRESET_RULES[rule]
      const validator = isPresetRule
        ? PRESET_RULES[rule].validator
        : rule.validator
      const message = isPresetRule ? PRESET_RULES[rule].message : rule.message
      const isValid = validator(this.value)

      if (isValid === false) {
        this.errors.push(message)
      }
    })
    this._updateState()
  }
}

export function serializeProperties(formProperties) {
  const data = {}
  Object.keys(formProperties).forEach(key => {
    const formProperty = formProperties[key]
    if (formProperty instanceof FormProperty) {
      data[formProperty.name] = formProperty.value
    }
  })

  return JSON.stringify(data)
}

export function validateProperties(formProperties) {
  let isValid = true

  Object.keys(formProperties).forEach(key => {
    const formProperty = formProperties[key]
    if (formProperty instanceof FormProperty) {
      formProperty.validate()
      if (formProperty.firstError) {
        isValid = false
      }
    }
  })

  return isValid
}
