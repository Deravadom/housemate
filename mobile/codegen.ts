import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:3000/graphql',
    documents: ["graphql/**/*.gql"],
    generates: {
        "./__generated__/types.ts": {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
        }
    }
};

export default config;