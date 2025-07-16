import { Stack } from 'expo-router';

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#3b82f6' },
        headerTintColor: '#fff',
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen
        name="dashboard"
        options={{
          title: 'Dashboard'
        }}
      />
      <Stack.Screen
        name="timeline"
        options={{
          title: 'Timeline'
        }}
      />
      <Stack.Screen
        name="leftovers"
        options={{
          title: 'Leftovers'
        }}
      />
      <Stack.Screen
        name="households"
        options={{
          title: 'Households'
        }}
      />
      <Stack.Screen
        name="household"
        options={{
          title: 'Household Details'
        }}
      />
      <Stack.Screen
        name="testapi"
        options={{
          title: 'Test API'
        }}
      />
    </Stack>
  );
};

export default AppLayout; 