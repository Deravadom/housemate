import { useHouseholdsQuery } from '@/__generated__/types';
import { Text, View, TouchableOpacity } from 'react-native';

const HouseholdsPage = () => {
  const { data } = useHouseholdsQuery()
  console.log(data)
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Households</Text>
      {data?.households?.map((household) => {
        return (
          <TouchableOpacity
            className="p-4 border border-gray-300 rounded-md"
            key={household.id}
            onPress={() => {
              console.log(household)
            }}
          >
            <Text>{household.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
};

export default HouseholdsPage; 