import keysOf from '~/index'

describe('keysOf', () => {
  it.concurrent('gets keys of objects', () => {
    const keys = ['key0', 'key1', 'key2', 'key3', 'key4']
    const object = {
      key0: 'value0',
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
    }

    expect(keysOf(object)).toStrictEqual(keys)
  })
})
