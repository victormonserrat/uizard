import { useTranslation } from 'react-i18next'

import Button from '~/infrastructure/components/Button'

import { useIndex } from './hooks'
import { Controls, Main, Node } from './styles'

const Index = () => {
  const {
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
  } = useIndex()
  const { t } = useTranslation('index')

  return (
    <Main
      onClick={handleMainClick}
      onMouseMove={isDragging ? handleMainMouseMove : undefined}
      onTouchMove={isDragging ? handleMainTouchMove : undefined}
      onMouseUp={isDragging ? handleMainMouseUp : undefined}
      onTouchEnd={isDragging ? handleMainTouchEnd : undefined}
    >
      <Controls>
        <Button onClick={handleAddNodeClick}>{t('nodes.add')}</Button>
        <Button disabled={!existsCurrent} onClick={handleRemoveClick}>
          {t('nodes.remove')}
        </Button>
      </Controls>
      {nodes.map((node, index) => {
        const isCurrent = index === currentNodeIndex
        const isCurrentDragging = isCurrent && isDragging

        return (
          <Node
            $dragging={isCurrentDragging}
            aria-current={isCurrent}
            aria-label={
              isCurrentDragging ? t('nodes.dragging') : t('nodes.draggable')
            }
            aria-live="polite"
            data-index={index}
            key={node.id.value}
            onClick={handleNodeClick}
            onMouseDown={handleNodeMouseDown}
            onTouchStart={handleNodeTouchStart}
            style={{ left: node.position.value.x, top: node.position.value.y }}
          />
        )
      })}
    </Main>
  )
}

export default Index
