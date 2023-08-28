import InvalidUuid from '~/exceptions/invalid-uuid'
import { itIsAnException } from '~/test/closures/exception'

describe('InvalidUuid', () => {
  const __name__ = 'InvalidUuid'
  const value = 'value'
  const invalidUuid = InvalidUuid.causeTheFormatIsNotValid(value)

  itIsAnException(invalidUuid)

  it.concurrent('can be cause the format is not valid', () => {
    expect(invalidUuid.__name__).toBe(__name__)
    expect(invalidUuid.code).toBe('format')
    expect(invalidUuid.message).toBe(`${value} has not a valid uuid format`)
  })
})
