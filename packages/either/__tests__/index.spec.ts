import Either from '~/index'

describe('Either', () => {
  it.concurrent('creates left', () => {
    const value = 0
    const left = Either.left(value)

    expect(left.__name__).toBe('left')
    expect(left.value).toBe(value)
  })

  it.concurrent('creates right', () => {
    const value = 0
    const right = Either.right(value)

    expect(right.__name__).toBe('right')
    expect(right.value).toBe(value)
  })

  it.concurrent('checks if it is left', () => {
    const value = 0
    const left = Either.left(value)
    const right = Either.right(value)

    expect(Either.isLeft(left)).toBe(true)
    expect(Either.isLeft(right)).toBe(false)
  })

  it.concurrent('checks if it is right', () => {
    const value = 0
    const left = Either.left(value)
    const right = Either.right(value)

    expect(Either.isRight(left)).toBe(false)
    expect(Either.isRight(right)).toBe(true)
  })
})
