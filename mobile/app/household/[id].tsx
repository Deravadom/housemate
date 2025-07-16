import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useHouseholdsQuery } from '@/__generated__/types';
import RequireAuth from '@/components/auth/RequireAuth';

const HouseholdDetailPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, loading } = useHouseholdsQuery();

  if (loading) {
    return (
      <RequireAuth>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-lg text-gray-600">Loading household...</Text>
        </View>
      </RequireAuth>
    );
  }

  const household = data?.households?.find(h => h.id === id);

  if (!household) {
    return (
      <RequireAuth>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-lg text-gray-600">Household not found</Text>
          <TouchableOpacity
            className="bg-blue-500 px-6 py-3 rounded-md mt-4"
            onPress={() => router.back()}
          >
            <Text className="text-white font-medium">Go Back</Text>
          </TouchableOpacity>
        </View>
      </RequireAuth>
    );
  }

  return (
    <RequireAuth>
      <ScrollView className="flex-1 bg-white p-4">
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            className="mr-4"
            onPress={() => router.back()}
          >
            <Text className="text-blue-500 text-lg">← Back</Text>
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800 flex-1">{household.name}</Text>
        </View>

        <View className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-gray-800">Household Details</Text>
            <TouchableOpacity
              className="bg-blue-500 px-3 py-1 rounded-md"
              onPress={() => {
                console.log('Edit household:', household)
              }}
            >
              <Text className="text-white text-sm font-medium">Edit</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-600 mb-2">
              Members ({household.users?.length || 0})
            </Text>
            {household.users && household.users.length > 0 ? (
              household.users.map((user, index) => (
                <View key={`${household.id}-user-${index}`} className="flex-row items-center py-3 border-b border-gray-100">
                  <View className="flex-1">
                    <Text className="text-base font-medium text-gray-800">
                      {user.name || 'Unnamed User'}
                    </Text>
                    <Text className="text-sm text-gray-500">{user.email}</Text>
                  </View>
                  <TouchableOpacity
                    className="bg-red-100 px-3 py-1 rounded-md"
                    onPress={() => {
                      console.log('Remove user:', user)
                    }}
                  >
                    <Text className="text-red-600 text-sm font-medium">Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text className="text-gray-500 italic">No members yet</Text>
            )}
          </View>

          <TouchableOpacity
            className="bg-green-500 py-3 rounded-md"
            onPress={() => {
              console.log('Add user to household:', household)
            }}
          >
            <Text className="text-white text-center font-medium">Add Member</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-red-50 rounded-lg p-4 border border-red-200">
          <Text className="text-lg font-semibold text-red-800 mb-2">Danger Zone</Text>
          <Text className="text-sm text-red-600 mb-4">
            Deleting this household will permanently remove it and all associated data.
          </Text>
          <TouchableOpacity
            className="bg-red-500 py-3 rounded-md"
            onPress={() => {
              console.log('Delete household:', household)
            }}
          >
            <Text className="text-white text-center font-medium">Delete Household</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </RequireAuth>
  );
};

export default HouseholdDetailPage; 