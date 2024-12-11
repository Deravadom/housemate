import React, { useState } from 'react'
import SwipeToRevealActions from 'react-swipe-to-reveal-actions/dist/esm/SwipeToRevealActions'
import useToggle from '../../hooks/useToggle'

type FrequencyUnit = 'day' | 'week' | 'month' | 'year'

export type ItemProps = {
  title: string
  body?: string | null
  // frequencyUnit: FrequencyUnit
  // frequencyValue: number
  frequency?: string | null
  lastCompletedAt?: Date | null
  dueAt?: Date | null
  color?: string | null
}

const ActionButton = () => (
  <div>Hi Katie</div>
)

const Item = ({
  title,
  body,
  // frequencyUnit,
  // frequencyValue,
  frequency,
  lastCompletedAt,
  dueAt,
  color
}: ItemProps) => {
  const [open, _, setOpen] = useToggle(false)
  const [showDetails, toggleShowDetails, setShowDetails] = useToggle(false)

  const onOpen = () => {
    setOpen(true)
    setShowDetails(false)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className={`flex flex-column w-100 justify-center ba b--${color} mv1 mh2`} onClick={toggleShowDetails}>
      <SwipeToRevealActions
        actionButtons={[{ content: <ActionButton />, onClick: () => window.alert('click') }]}
        actionButtonMinWidth={70}
        onOpen={onOpen}
        onClose={onClose}
      >
        <h1>{title}</h1>
      </SwipeToRevealActions>
      {showDetails && !open && (
        <div>
          {body && <p>{body}</p>}
          {/* <p>{frequencyValue} {frequencyUnit}</p>
          <p>{lastCompletedAt?.toLocaleDateString()}</p> */}
          {frequency && <p>{frequency}</p>}
          {dueAt && <p>{dueAt.toLocaleDateString()}</p>}
        </div>

      )}
    </div>
  )
}

export default Item
