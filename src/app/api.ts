import {ApolloClient, InMemoryCache} from "@apollo/client";
import {graphql} from "gql/";

export const DEFAULT_USER = '6779fab5-0fc0-4fec-9ff7-06050ec99087'


const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

export const getAllProducts = graphql(`
    query products($id: String) {
        products(user: $id) {
            id
            price
            title
            category {
                name
            }
            description
            images {
                image
            }
        }
    }
`)

export const getAllCategories = graphql(`
    query categories {
        categories {
            id
            name
        }
    }
`)

export const createProduct  = graphql(`
    mutation CreateProducts($form: CreateProductInput!) {
        createProduct(createProductInput: $form) {
            price
            id
            title
            category {
                name
            }
            description
            images {
                image
            }
        }
    }
`)


export default client