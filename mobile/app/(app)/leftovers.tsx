import { Text, View } from 'react-native';
import RequireAuth from '@/components/auth/RequireAuth';
// TODO: Import and use the relevant Apollo query for leftovers

const LeftoversPage = () => {
  // TODO: Use Apollo query to fetch leftovers
  return (
    <RequireAuth>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Leftovers</Text>
        {/* TODO: Render leftovers here */}
      </View>
    </RequireAuth>
  );
};

export default LeftoversPage; 