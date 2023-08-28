import NameType from '@victormonserrat/name-type'

type Events = Readonly<{
  publish: (...events: NameType<Record<string, unknown>>[]) => Promise<void>
}>

export default Events
