const {PhoneNumberFormat, PhoneNumberUtil} = require('google-libphonenumber')
const util = PhoneNumberUtil.getInstance()
const parse = ({tel, country}) => util.parse(tel, country)
const format = ({tel, country}) => util.format(parse(tel, country), PhoneNumberFormat.INTERNATIONAL)
const wordMap = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}
;[16, 17, 18, 19].reduce((map, i) => {
  map[i] = `${map[i - 10]}teen`
  return map
}, wordMap)

;[20, 30, 40, 50, 60, 70, 80, 90].forEach((base) => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((map, i) => {
        map[base + i] = `${map[base]}-${map[i]}`
        return map
    }, wordMap)
})

const tell = ({tel = '', country = 'US'}) =>
  format({tel, country})
    .split(/\D/)
    .filter((s) => s !== '')
    .reduce((result, chunk) => {
      const hundred = chunk.substr(1)
      if (hundred === '00') {
        result.push(`${chunk[0]} hundred.`)
        return result
      }
      if (chunk.length === 2) {
        result.push(`${wordMap[chunk]}.`)
        return result
      }
      result.push(`${chunk.split('').join(' ')}.`)
      return result
    }, [])
    .join(' ')

// tell('8001234567')
// tell('0139348815','MY')
