"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
var apollo_server_lambda_1 = require("apollo-server-lambda");
var typeDefs = (0, apollo_server_lambda_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"])));
var resolvers = {
    Query: {
        hello: function () { return "Hello there!"; },
    },
};
var server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: true,
});
var graphql = server.createHandler({
    cors: {
        origin: "*",
        credentials: true,
    },
});
exports.graphql = graphql;
var templateObject_1;
//# sourceMappingURL=handler.js.map