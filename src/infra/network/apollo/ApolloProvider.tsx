import { apolloClient } from './apollo-client';
import { 
  ApolloProvider as BaseApolloProvider,
} from '@apollo/client';

export type TApolloProviderProps = {
  children: JSX.Element;
}

export const ApolloProvider = ({ children }: TApolloProviderProps) => (
  <BaseApolloProvider client={apolloClient}>{children}</BaseApolloProvider>
)
