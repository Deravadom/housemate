import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Stack, Redirect } from 'expo-router';
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
          <Stack.Screen
            name="(app)"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="auth"
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default RootLayout;
