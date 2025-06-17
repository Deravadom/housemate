import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from "@apollo/client/link/context"
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { BrowserRouter } from 'react-router';

const apiBase = import.meta.env.VITE_API_URL;

const httpLink = createUploadLink({
  uri: `${apiBase}/graphql`
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('housemate-bearer');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  // link: authLink.concat(debounceLink.concat(httpLink)),
  link: authLink.concat(httpLink),

  cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)