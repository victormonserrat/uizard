import deepEquals from '~/index'

describe('deepEquals', () => {
  it.concurrent('compares objects', () => {
    const a = 0
    const b = 0
    const c = 1

    expect(deepEquals(a, b)).toBe(true)
    expect(deepEquals(a, c)).toBe(false)
  })
})
