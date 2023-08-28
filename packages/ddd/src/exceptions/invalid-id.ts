import { UnnameType } from '@victormonserrat/name-type'

import Exception from '~/models/exception'

const __name__ = 'InvalidId'

type Code = 'blank'

type InvalidId = Exception<typeof __name__, Code>

const InvalidId = {
  causeIsBlank: (): InvalidId =>
    InvalidId.with({ code: 'blank', message: 'Id can not be blank' }),
  with: (props: UnnameType<InvalidId>): InvalidId =>
    Exception.with({ ...props, __name__ }),
} as const

export default InvalidId
