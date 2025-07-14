import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const pages = [
  { path: '/testapi', label: 'Test API' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/leftovers', label: 'Leftovers' },
  { path: '/households', label: 'Households' },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 mb-8">Dashboard</Text>
      {pages.map(page => (
        <TouchableOpacity
          key={page.path}
          onPress={() => router.push(page.path as any)}
          className="my-2 p-4 rounded-lg border border-blue-500 min-w-60 items-center"
        >
          <Text className="text-blue-500 text-lg">{page.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DashboardPage; 