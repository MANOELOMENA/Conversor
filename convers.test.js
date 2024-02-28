const { convertPraFah } = require('./script')

test('Conversão de Celsius para Fahrenheit', () => {
  expect(convertToFahrenheit(0)).toBeCloseTo(32)
  expect(convertToFahrenheit(100)).toBeCloseTo(212)
  expect(convertToFahrenheit(-40)).toBeCloseTo(-40)
})