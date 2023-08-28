import { itIsNamed } from '@victormonserrat/name-type'

import Exception from '~/models/exception'
import {
  expectHasACode,
  expectHasAMessage,
  expectHasATrace,
} from '~/test/closures/exception'

describe('Exception', () => {
  const __name__ = 'Exception'
  const code = 'code'
  const message = 'message'
  const exception = Exception.with({
    __name__,
    code,
    message,
  })

  itIsNamed(exception)

  it.concurrent('has a code', () => {
    expectHasACode(exception)
  })

  it.concurrent('has a message', () => {
    expectHasAMessage(exception)
  })

  it.concurrent('has a trace', () => {
    expectHasATrace(exception)
  })

  it.concurrent('can be created', () => {
    expect(exception.__name__).toBe(__name__)
    expect(exception.code).toBe(code)
    expect(exception.message).toBe(message)
    expect(exception.trace).toMatch(new RegExp(`^${__name__}: ${message}`))
  })

  it.concurrent('can be created with numeric code', () => {
    const numericCode = 400
    const numericCodeException = Exception.with({
      __name__,
      code: numericCode,
      message,
    })

    expect(numericCodeException.__name__).toBe(__name__)
    expect(numericCodeException.code).toBe(numericCode)
    expect(numericCodeException.message).toBe(message)
    expect(numericCodeException.trace).toMatch(
      new RegExp(`^${__name__}: ${message}`),
    )
  })

  it.concurrent('can be converted to string', () => {
    expect(exception.toString()).toMatch(new RegExp(`^${__name__}: ${message}`))
  })
})
