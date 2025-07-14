import { useTestFieldLazyQuery, useTestFieldQuery } from "@/__generated__/types"
import { Text, TouchableOpacity, View } from "react-native"

const TestApi = () => {
  const { data, error } = useTestFieldQuery()
  const [query, { data: foo }] = useTestFieldLazyQuery()

  console.log(data, error)
  console.log(foo)

  return <View>
    <Text>Foo</Text>
    <Text>{JSON.stringify(data, null, 2)}</Text>
    <Text>{JSON.stringify(foo, null, 2)}</Text>
    <TouchableOpacity onPress={() => query()}>
      <Text>Query</Text>
    </TouchableOpacity>
  </View>
}

export default TestApi