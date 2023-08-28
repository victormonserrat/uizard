import Either from '@victormonserrat/either'
import Uuid from '@victormonserrat/uuid'
import {
  MouseEventHandler,
  TouchEventHandler,
  useCallback,
  useState,
} from 'react'

import Node from '~/domain/models/node'
import NodeId from '~/domain/models/node-id'
import NodePosition from '~/domain/models/node-position'

import useEvents from '../hooks/useEvents'
import useNodes from '../hooks/useNodes'

export const useIndex = () => {
  const { add, edit, nodes, remove } = useNodes()
  const [currentNodeIndex, setCurrentNodeIndex] = useState<number>()
  const [draggingOffset, setDraggingOffset] = useState<{
    x: number
    y: number
  }>()
  const events = useEvents()
  const existsCurrent = currentNodeIndex !== undefined
  const isDragging = !!draggingOffset

  const handleAddNodeClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      const id = NodeId.fromString(Uuid.generate())
      const position = NodePosition.fromCoordinates({
        x: window.innerWidth / 2 - 64,
        y: window.innerHeight / 2 - 64,
      })

      if (Either.isLeft(id)) return

      const node = Node.with({
        id: id.value,
        position,
      })

      await add(node)
      await events.publish(...node.__events__)
      event.stopPropagation()
    },
    [add, events],
  )

  const handleMainClick: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (event.target !== event.currentTarget) return

      setCurrentNodeIndex(undefined)
    },
    [],
  )

  const handleMainMove = useCallback(
    async ({ x, y }: { x: number; y: number }) => {
      if (!(existsCurrent && isDragging)) return

      const position = NodePosition.fromCoordinates({
        x: x - draggingOffset.x,
        y: y - draggingOffset.y,
      })

      await edit({ ...nodes[currentNodeIndex], position })
    },
    [currentNodeIndex, draggingOffset, edit, existsCurrent, isDragging, nodes],
  )

  const handleMainMouseMove: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      handleMainMove({
        x: event.pageX ?? event.clientX + window.scrollX,
        y: event.pageY ?? event.clientY + window.scrollY,
      })
    },
    [handleMainMove],
  )

  const handleMainTouchMove: TouchEventHandler<HTMLElement> = useCallback(
    (event) => {
      handleMainMove({
        x: event.touches[0].pageX ?? event.touches[0].clientX + window.scrollX,
        y: event.touches[0].pageY ?? event.touches[0].clientY + window.scrollY,
      })
    },
    [handleMainMove],
  )

  const handleMainUnpressed = useCallback(
    async ({ x, y }: { x: number; y: number }) => {
      if (!(existsCurrent && isDragging)) return

      const position = NodePosition.fromCoordinates({
        x: x - draggingOffset.x,
        y: y - draggingOffset.y,
      })
      const node = Node.moveTo(nodes[currentNodeIndex], position)

      await edit(node)
      await events.publish(...node.__events__)
      setDraggingOffset(undefined)
    },
    [
      currentNodeIndex,
      draggingOffset,
      edit,
      events,
      existsCurrent,
      isDragging,
      nodes,
    ],
  )

  const handleMainMouseUp: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      handleMainUnpressed({
        x: event.pageX ?? event.clientX + window.scrollX,
        y: event.pageY ?? event.clientY + window.scrollY,
      })
    },
    [handleMainUnpressed],
  )

  const handleMainTouchEnd: TouchEventHandler<HTMLElement> = useCallback(
    (event) => {
      handleMainUnpressed({
        x: event.touches[0].pageX ?? event.touches[0].clientX + window.scrollX,
        y: event.touches[0].pageY ?? event.touches[0].clientY + window.scrollY,
      })
    },
    [handleMainUnpressed],
  )

  const handleNodeClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.stopPropagation()
    },
    [],
  )

  const handleNodePressed = useCallback(
    ({ node, x, y }: { node: HTMLDivElement; x: number; y: number }) => {
      const dataIndex = node.dataset.index

      if (!dataIndex) return

      const index = Number(dataIndex)
      const rect = node.getBoundingClientRect()
      const position = {
        x: rect.x + window.scrollX,
        y: rect.y + window.scrollY,
      }
      const offset = {
        x: x - position.x,
        y: y - position.y,
      }

      setCurrentNodeIndex(index)
      setDraggingOffset(offset)
    },
    [],
  )

  const handleNodeMouseDown: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      handleNodePressed({
        node: event.currentTarget,
        x: event.pageX ?? event.clientX + window.scrollX,
        y: event.pageY ?? event.clientY + window.scrollY,
      })
    },
    [handleNodePressed],
  )

  const handleNodeTouchStart: TouchEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      handleNodePressed({
        node: event.currentTarget,
        x: event.touches[0].pageX ?? event.touches[0].clientX + window.scrollX,
        y: event.touches[0].pageY ?? event.touches[0].clientY + window.scrollY,
      })
    },
    [handleNodePressed],
  )

  const handleRemoveClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(async () => {
      if (!existsCurrent) return

      const node = Node.remove(nodes[currentNodeIndex])

      await remove(node)
      await events.publish(...node.__events__)
    }, [currentNodeIndex, events, existsCurrent, nodes, remove])

  return {
    currentNodeIndex,
    existsCurrent,
    handleAddNodeClick,
    handleMainClick,
    handleMainMouseMove,
    handleMainMouseUp,
    handleMainTouchEnd,
    handleMainTouchMove,
    handleNodeClick,
    handleNodeMouseDown,
    handleNodeTouchStart,
    handleRemoveClick,
    isDragging,
    nodes,
  }
}
