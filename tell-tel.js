const {PhoneNumberFormat, PhoneNumberUtil} = require('google-libphonenumber')
const util = PhoneNumberUtil.getInstance()
const parse = (tel, country) => util.parse(tel, country)
const format = (tel, country) => util.format(parse(tel, country), PhoneNumberFormat.INTERNATIONAL)

const tell = (tel = '', country = 'US') =>
  format(tel, country)
    .split(/\D/)
    .filter((s) => s !== '')
    .reduce((result, chunk) => {
      const hundred = chunk.substr(1)
      if (hundred === '00') {
        result.push(`${chunk[0]} hundred.`)
        return result
      }
      result.push(`${chunk.split('').join(' ')}.`)
      return result
    }, [])
    .join(' ')

// tell('8001234567')
