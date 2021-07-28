import { GraphQLClient } from "graphql-request";
export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer adb44064eae07d0ab89433d4dc8f9a`,
    },
  })
  return client.request(query, variables);
}
