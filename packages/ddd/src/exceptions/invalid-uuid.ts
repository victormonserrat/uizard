import { UnnameType } from '@victormonserrat/name-type'

import Exception from '~/models/exception'

const __name__ = 'InvalidUuid'

type Code = 'format'

type InvalidUuid = Exception<typeof __name__, Code>

const InvalidUuid = {
  causeTheFormatIsNotValid: (value: string): InvalidUuid =>
    InvalidUuid.with({
      code: 'format',
      message: `${value} has not a valid uuid format`,
    }),
  with: (props: UnnameType<InvalidUuid>): InvalidUuid =>
    Exception.with({ ...props, __name__ }),
} as const

export default InvalidUuid
