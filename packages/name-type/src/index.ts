export type NamedType<Name extends string = string> = Readonly<{
  __name__: Name
}>

export type UnnameType<Type extends Record<string, unknown>> = Omit<
  Type,
  '__name__'
>

type NameType<
  Type extends Record<string, unknown>,
  Name extends string = string,
> = UnnameType<Type> & NamedType<Name>

export default NameType
