import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const pages = [
  { path: '/testapi', label: 'Test API' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/leftovers', label: 'Leftovers' },
  { path: '/households', label: 'Households' },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 mb-8">Dashboard</Text>
      {pages.map(page => (
        <TouchableOpacity
          key={page.path}
          onPress={() => router.push(page.path as any)}
          style={{ marginVertical: 10, padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#3b82f6', minWidth: 200, alignItems: 'center' }}
        >
          <Text style={{ color: '#3b82f6', fontSize: 18 }}>{page.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
} 