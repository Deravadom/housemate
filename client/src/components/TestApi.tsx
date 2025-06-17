import { useQuery } from '@apollo/client';
import { TestFieldDocument } from 'src/__generated__/types';

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