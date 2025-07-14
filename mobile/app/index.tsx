import "../global.css"
import { Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context"
import TestApi from "@/components/TestApi";
import * as SecureStore from "expo-secure-store"

const httpLink = new HttpLink({
  uri: 'https://light-promptly-primate.ngrok-free.app/graphql'
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('housemate-bearer');
  console.log('token', token)
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
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
        <TestApi />
      </View>
    </ApolloProvider>
  );
}