import { split, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { setContext } from '@apollo/client/link/context';
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from '@jumpn/utils-graphql';
import { HTTP_LINK_URL, WS_LINK_URL, USER_TOKEN } from '@env';


const httpLink = createHttpLink({
  uri: HTTP_LINK_URL,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: `Bearer ${USER_TOKEN}`
  }
}));

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket(WS_LINK_URL, {
  params: {
    token: USER_TOKEN
  }
});
  
const absintheSocket = AbsintheSocket.create(phoenixSocket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
  operation => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);

const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache
});
