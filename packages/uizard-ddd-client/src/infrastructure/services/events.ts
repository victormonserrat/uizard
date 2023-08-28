import NameType from '@victormonserrat/name-type'

import Events from '~/application/services/events'

const events: Events = {
  publish: async (...e: NameType<Record<string, unknown>>[]) => {
    for (const event of e) {
      dispatchEvent(
        new CustomEvent(event.__name__, {
          detail: event,
        }),
      )
    }
  },
} as const

export default events
