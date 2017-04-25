const {PhoneNumberFormat, PhoneNumberUtil} = require('google-libphonenumber')
const util = PhoneNumberUtil.getInstance()
const defaultCountry = typeof navigator === 'undefined' ? 'US' : navigator.language.substr(3)
const DIGIT = /\d/g
const DIGITS = /\d+/g
const NON_DIGITS = /[^.\d]/g
const ARIA_LABEL = 'aria-label'

module.exports = (tel = '', country = defaultCountry, format = PhoneNumberFormat.INTERNATIONAL) => {
  if (typeof tel !== 'string') return {}
  const text = (value.length < 2) ? value : util.format(util.parse(value, country), format)
  const href = `tel:${text}`
  return {
    text,
    href,
    [ARIA_LABEL]: text
      .replace(DIGITS, '$&.')
      .replace(NON_DIGITS, '')
      .replace(DIGIT, ' $&')
      .substr(1)
  }
}
