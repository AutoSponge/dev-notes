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

const DIGIT = /\d/g
const DIGITS = /\d+/g
const NON_DIGITS = /[^.\d]/g
const HUNDREDS = /(\d)00\D/g

const say = (phoneNumber) => 
  phoneNumber
    .replace(DIGITS, '$&.')
    .replace(NON_DIGITS, '')
    .replace(HUNDREDS, '$1 hundred.')
    .replace(DIGIT, ' $&')
    .substr(1)

say('(800) 123-4567') // "8 hundred. 1 2 3. 4 5 6 7."
say('1-800-123-4567') // "1. 8 hundred. 1 2 3. 4 5 6 7."
