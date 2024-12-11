import { useQuery } from '@apollo/client'
import Item from './Item'
import { TimelineItem, TimelineItemsDocument } from '../../__generated__/graphql'

const Timeline = () => {
  const { data, loading} = useQuery(TimelineItemsDocument)

  if(loading || !data?.timelineItems) {
    return <>Loading</>
  }

  const items = data.timelineItems as TimelineItem[]

  if(!items.length) {
    return <>Nothing to see here</>
  }

  return (
    <div className='flex flex-column ba b--red'>
      {items.map(item => <Item {...item} key={item.id} />)}
    </div>
  )
}

export default Timeline
