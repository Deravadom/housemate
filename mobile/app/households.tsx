import { useHouseholdsQuery } from '@/__generated__/types';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import RequireAuth from '@/components/auth/RequireAuth';

const HouseholdsPage = () => {
  const { data, loading } = useHouseholdsQuery();
  const router = useRouter();

  if (loading) {
    return (
      <RequireAuth>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-lg text-gray-600">Loading households...</Text>
        </View>
      </RequireAuth>
    );
  }

  return (
    <RequireAuth>
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="text-2xl font-bold text-blue-500 mb-6 text-center">Households</Text>

        {data?.households?.map((household) => (
          <TouchableOpacity
            key={household.id}
            className="mb-4 bg-gray-50 rounded-lg p-4 border border-gray-200"
            onPress={() => router.push(`/household/${household.id}`)}
          >
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-gray-800">{household.name}</Text>
              <Text className="text-sm text-gray-500">
                {household.users?.length || 0} members
              </Text>
            </View>

            {household.users && household.users.length > 0 && (
              <View className="mt-2">
                <Text className="text-sm text-gray-600 mb-1">Members:</Text>
                {household.users.slice(0, 3).map((user, index) => (
                  <Text key={`${household.id}-user-${index}`} className="text-sm text-gray-500">
                    • {user.name || 'Unnamed User'} ({user.email})
                  </Text>
                ))}
                {household.users.length > 3 && (
                  <Text className="text-sm text-gray-400">
                    +{household.users.length - 3} more members
                  </Text>
                )}
              </View>
            )}

            <Text className="text-blue-500 text-sm mt-2">Tap to view details →</Text>
          </TouchableOpacity>
        ))}

        {(!data?.households || data.households.length === 0) && (
          <View className="flex-1 items-center justify-center py-8">
            <Text className="text-lg text-gray-500 text-center">No households found</Text>
            <TouchableOpacity
              className="bg-blue-500 px-6 py-3 rounded-md mt-4"
              onPress={() => {
                console.log('Create new household')
              }}
            >
              <Text className="text-white font-medium">Create Household</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </RequireAuth>
  );
};

export default HouseholdsPage; 