import { expectIsNamed } from '@victormonserrat/name-type'

import Exception from '~/models/exception'

export const expectHasACode = (value: Exception<string>) => {
  expect(value).toHaveProperty('code')
}

export const expectHasAMessage = (value: Exception<string>) => {
  expect(value).toHaveProperty('message')
}

export const expectHasATrace = (value: Exception<string>) => {
  expect(value).toHaveProperty('trace')
}

export const itIsAnException = (value: Exception<string>) => {
  it.concurrent('is an exception', () => {
    expectIsNamed(value)
    expectHasACode(value)
    expectHasAMessage(value)
    expect(value).toHaveProperty('toString')
    expectHasATrace(value)
  })
}
