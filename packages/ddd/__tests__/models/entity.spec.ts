import { itIsNamed } from '@victormonserrat/name-type'

import Entity from '~/models/entity'
import ValueObject from '~/models/value-object'
import { expectHasAnId } from '~/test/closures/entity'

describe('Entity', () => {
  const __name__ = 'Entity'
  const differentName = 'DifferentEntity'
  const idName = 'Id'
  const idValue = 'value'
  const differentIdName = 'DifferentId'
  const differentIdValue = 'different'
  const id = ValueObject.with<string, string>({
    __name__: idName,
    value: idValue,
  })
  const idWithDifferentValue = ValueObject.with<string, string>({
    __name__: idName,
    value: differentIdValue,
  })
  const differentIdWithSameValue = ValueObject.with<string, string>({
    __name__: differentIdName,
    value: idValue,
  })
  const differentIdWithDifferentValue = ValueObject.with<string, string>({
    __name__: differentIdName,
    value: differentIdValue,
  })
  const entity = Entity.with({ __name__, id })

  itIsNamed(entity)

  it.concurrent('has an id', () => {
    expectHasAnId(entity)
  })

  it.concurrent('can be created', () => {
    expect(entity.__name__).toBe(__name__)
    expect(entity.id).toBe(id)
  })

  it.concurrent(
    'checks that different entities with different ids are not the same',
    () => {
      const differentEntityWithDifferentId = Entity.with({
        __name__: differentName,
        id: differentIdWithSameValue,
      })
      const differentEntityWithDifferentIdWithSameValue = Entity.with({
        __name__: differentName,
        id: idWithDifferentValue,
      })
      const differentEntityWithDifferentIdWithDifferentValue = Entity.with({
        __name__: differentName,
        id: differentIdWithDifferentValue,
      })

      expect(Entity.same(entity, differentEntityWithDifferentId)).toBe(false)
      expect(
        Entity.same(entity, differentEntityWithDifferentIdWithSameValue),
      ).toBe(false)
      expect(
        Entity.same(entity, differentEntityWithDifferentIdWithDifferentValue),
      ).toBe(false)
    },
  )

  it.concurrent(
    'checks that different entities with same ids are not the same',
    () => {
      const differentEntity = Entity.with({ __name__: differentName, id })

      expect(Entity.same(entity, differentEntity)).toBe(false)
    },
  )

  it.concurrent(
    'checks that same entities with different ids are not the same',
    () => {
      const entityWithDifferentId = Entity.with({
        __name__,
        id: differentIdWithSameValue,
      })
      const entityWithDifferentIdWithSameValue = Entity.with({
        __name__,
        id: idWithDifferentValue,
      })
      const entityWithDifferentIdWithDifferentValue = Entity.with({
        __name__,
        id: differentIdWithDifferentValue,
      })

      expect(Entity.same(entity, entityWithDifferentId)).toBe(false)
      expect(Entity.same(entity, entityWithDifferentIdWithSameValue)).toBe(
        false,
      )
      expect(Entity.same(entity, entityWithDifferentIdWithDifferentValue)).toBe(
        false,
      )
    },
  )

  it.concurrent('checks that same entities with same ids are the same', () => {
    expect(Entity.same(entity, { ...entity })).toBe(true)
  })
})
