import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Stack } from 'expo-router';
import * as SecureStore from "expo-secure-store";
import "../global.css";

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
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  );
};

export default RootLayout;
