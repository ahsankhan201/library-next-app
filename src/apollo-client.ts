import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://5a72-124-109-45-157.au.ngrok.io/grapql",
    cache: new InMemoryCache(),
});

export default client