// const { environment } = require("./src/app/environments/environment");
//require("env");
/*eslint-env node*/

module.exports = {
  schema: [
    {
      "http://127.0.0.1:8080/v1/graphql": {
        headers: {
          "X-Hasura-Admin-Secret": "myadminsecretkey",
        },
      },
    },
  ],
  documents: ["src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-apollo-angular",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
