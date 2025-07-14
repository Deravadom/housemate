import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6',
      }}
    >
      <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="timeline" options={{ title: 'Timeline' }} />
      <Tabs.Screen name="leftovers" options={{ title: 'Leftovers' }} />
      <Tabs.Screen name="households" options={{ title: 'Households' }} />
      <Tabs.Screen name="testapi" options={{ title: 'Test API' }} />
    </Tabs>
  );
} 