import InvalidId from '~/exceptions/invalid-id'
import { itIsAnException } from '~/test/closures/exception'

describe('InvalidId', () => {
  const __name__ = 'InvalidId'
  const invalidId = InvalidId.causeIsBlank()

  itIsAnException(invalidId)

  it.concurrent('can be cause is blank', () => {
    expect(invalidId.__name__).toBe(__name__)
    expect(invalidId.code).toBe('blank')
    expect(invalidId.message).toBe('Id can not be blank')
  })
})
