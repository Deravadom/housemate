import Item from './Item'
import { TimelineItem, useTimelineItemsQuery } from 'src/__generated__/types'

const Timeline = () => {
  const { data, loading } = useTimelineItemsQuery()

  if (loading || !data?.timelineItems) {
    return <>Loading</>
  }

  const items = data.timelineItems as TimelineItem[]

  if (!items.length) {
    return <>Nothing to see here</>
  }

  return (
    <div className='flex flex-column w-50-l ml3-l'>
      {items.map(item => <Item {...item} key={item.id} />)}
    </div>
  )
}

export default Timeline
