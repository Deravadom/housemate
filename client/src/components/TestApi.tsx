import { useQuery } from '@apollo/client';
import { TestFieldDocument } from '../__generated__/graphql';

const TestApi = () => {
  const { data } = useQuery(TestFieldDocument)

  console.log(data)

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default TestApi;