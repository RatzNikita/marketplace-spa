import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from "../__generated__";


const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

export const GET_PRODUCTS = gql(`
    query getProducts {
        products{
            id
            description
            price
            rating
            title
        }
    }
`)

export const GET_CATEGORIES = gql(`
query getCa`)

export default client