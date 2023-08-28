import Uuid from '@victormonserrat/uuid'
import {
  MouseEventHandler,
  TouchEventHandler,
  useCallback,
  useState,
} from 'react'

import Node from '~/models/node'

export const useIndex = () => {
  const [currentNodeIndex, setCurrentNodeIndex] = useState<number>()
  const [draggingOffset, setDraggingOffset] = useState<{
    x: number
    y: number
  }>()
  const existsCurrent = currentNodeIndex !== undefined
  const isDragging = !!draggingOffset
  const [nodes, setNodes] = useState<Node[]>([])

  const handleAddNodeClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      const node = Node.with({
        id: Uuid.generate(),
        position: {
          x: window.innerWidth / 2 - 64,
          y: window.innerHeight / 2 - 64,
        },
      })

      setNodes((current) => [...current, node])
      event.stopPropagation()
    },
    [],
  )

  const handleMainClick: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (event.target !== event.currentTarget) return

      setCurrentNodeIndex(undefined)
    },
    [],
  )

  const handleMainMove = useCallback(
    ({ x, y }: { x: number; y: number }) => {
      if (!(existsCurrent && isDragging)) return

      const position = {
        x: x - draggingOffset.x,
        y: y - draggingOffset.y,
      }

      setNodes((current) => [
        ...current.slice(0, currentNodeIndex),
        Node.moveTo(current[currentNodeIndex], position),
        ...current.slice(currentNodeIndex + 1),
      ])
    },
    [currentNodeIndex, draggingOffset, existsCurrent, isDragging],
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

  const handleMainUnpressed = useCallback(() => {
    setDraggingOffset(undefined)
  }, [])

  const handleMainMouseUp: MouseEventHandler<HTMLElement> = useCallback(() => {
    handleMainUnpressed()
  }, [handleMainUnpressed])

  const handleMainTouchEnd: TouchEventHandler<HTMLElement> = useCallback(() => {
    handleMainUnpressed()
  }, [handleMainUnpressed])

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

  const handleRemoveClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (!existsCurrent) return

      setNodes((current) => [
        ...current.slice(0, currentNodeIndex),
        ...current.slice(currentNodeIndex + 1),
      ])
      setCurrentNodeIndex(undefined)
      event.stopPropagation()
    },
    [currentNodeIndex, existsCurrent],
  )

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
