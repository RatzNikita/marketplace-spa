import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: 'http://localhost:3000/graphql',
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/gql/': {
             preset: 'client',
            config: {
                 avoidOptionals: {
                     field: true,
                     object: true,
                     inputValue: false,
                 },
                skipTypename: true,
            }
        },
    },
    ignoreNoDocuments: true,
};

export default config;