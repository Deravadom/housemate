import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from "expo-secure-store";
import "../global.css";
import AuthProvider from '@/components/auth/AuthProvider';
import RequireAuth from '@/components/auth/RequireAuth';

const httpLink = new HttpLink({
  uri: 'https://light-promptly-primate.ngrok-free.app/graphql'
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('housemate-bearer');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen
            name="dashboard"
            options={{
              headerShown: true,
              title: 'Dashboard',
              headerStyle: { backgroundColor: '#3b82f6' },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="timeline"
            options={{
              headerShown: true,
              title: 'Timeline',
              headerStyle: { backgroundColor: '#3b82f6' },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="leftovers"
            options={{
              headerShown: true,
              title: 'Leftovers',
              headerStyle: { backgroundColor: '#3b82f6' },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="households"
            options={{
              headerShown: true,
              title: 'Households',
              headerStyle: { backgroundColor: '#3b82f6' },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="household"
            options={{
              headerShown: true,
              title: 'Household Details',
              headerStyle: { backgroundColor: '#3b82f6' },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name="testapi"
            options={{
              headerShown: true,
              title: 'Test API',
              headerStyle: { backgroundColor: '#3b82f6' },
              headerTintColor: '#fff'
            }}
          />
        </Stack>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default RootLayout;
