import { Stack } from 'expo-router';

const pages = [
  { path: '/(app)/timeline', label: 'Timeline' },
  { path: '/(app)/leftovers', label: 'Leftovers' },
  { path: '/(app)/households', label: 'Households' },
];

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
      {pages.map(page => (
        <Stack.Screen
          key={page.path}
          name={page.path}
          options={{
            title: page.label
          }}
        />
      ))}
    </Stack>
  );
};

export default AppLayout; 