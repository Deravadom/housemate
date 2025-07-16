import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/components/auth/AuthProvider';
import RequireAuth from '@/components/auth/RequireAuth';

const pages = [
  { path: '/testapi', label: 'Test API' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/leftovers', label: 'Leftovers' },
  { path: '/households', label: 'Households' },
];

const DashboardPage = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <RequireAuth>
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
        <TouchableOpacity
          onPress={handleLogout}
          className="mt-8 p-4 rounded-lg border border-red-500 min-w-60 items-center bg-red-50"
        >
          <Text className="text-red-500 text-lg font-bold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </RequireAuth>
  );
};

export default DashboardPage; 