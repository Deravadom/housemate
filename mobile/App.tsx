import "./global.css"
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context"
import * as SecureStore from "expo-secure-store"
import { Slot } from 'expo-router';

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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Slot />
    </ApolloProvider>
  );
} 