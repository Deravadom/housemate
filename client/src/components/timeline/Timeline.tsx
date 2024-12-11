import { useQuery } from '@apollo/client'
import Item, { ItemProps } from './Item'
import { TimelineItem, TimelineItemsDocument } from '../../__generated__/graphql'

// const items: ItemProps[] = [
//   {
//     id: 1,
//     title: 'Trash',
//     body: 'Take out the trash',
//     frequencyUnit: 'week',
//     frequencyValue: 1,
//     dueAt: new Date(),
//     color: 'green'
//   },
//   {
//     id: 2,
//     title: 'Laundry',
//     body: 'Do the laundry',
//     frequencyUnit: 'week',
//     frequencyValue: 1,
//     dueAt: new Date(),
//     color: 'blue'
//   }
// ]

const Timeline = () => {
  const { data, loading} = useQuery(TimelineItemsDocument)

  if(loading || !data?.timelineItems) {
    return <>Loading</>
  }

  const items = data.timelineItems as TimelineItem[]

  return (
    <div className='flex flex-column ba b--red'>
      {items.map(item => <Item {...item} key={item.id} />)}
    </div>
  )
}

export default Timeline
