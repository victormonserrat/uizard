import * as RandExp from 'randexp'

type Uuid = string

const uuidRegExp =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

const Uuid = {
  generate: (): Uuid => new RandExp(uuidRegExp).gen(),
  validate: (value: string): boolean => uuidRegExp.test(value),
} as const

export default Uuid
