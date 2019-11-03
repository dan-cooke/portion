interface GraphqlOptions {
  endpoint: string;
  auth: string;
}
async function graphql(query: string, options: GraphqlOptions) {
  return fetch(`${options.endpoint}`, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `bearer ${options.auth}`,
      "Content-Type": "application/json"
    }
  });
}

export default graphql;
