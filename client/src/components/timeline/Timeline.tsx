import React from 'react'
import Item, { ItemProps } from './Item'

const items: ItemProps[] = [
  {
    id: 1,
    title: 'Trash',
    body: 'Take out the trash',
    frequencyUnit: 'week',
    frequencyValue: 1,
    dueAt: new Date(),
    color: 'green'
  },
  {
    id: 2,
    title: 'Laundry',
    body: 'Do the laundry',
    frequencyUnit: 'week',
    frequencyValue: 1,
    dueAt: new Date(),
    color: 'blue'
  }
]

const Timeline = () => {
  return (
    <div className='flex flex-column ba b--red'>
      {items.map(item => <Item {...item} key={item.id} />)}
    </div>
  )
}

export default Timeline
