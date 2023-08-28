import Uuid from '~/index'

describe('Uuid', () => {
  it.concurrent('generates an uuid', () => {
    const uuid = Uuid.generate()
    const uuidRegExp =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

    expect(uuidRegExp.test(uuid)).toBe(true)
  })

  it.concurrent('validates an uuid', () => {
    const uuid = '54e31582-ce36-4a6f-ba72-81d0ae728121'

    expect(Uuid.validate(uuid)).toBe(true)
  })
})
