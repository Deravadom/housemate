/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment TimelineItem on TimelineItem {\n  id\n  title\n  body\n  color\n  dueAt\n  frequency\n}": types.TimelineItemFragmentDoc,
    "mutation createTimelineItem($title: String!, $body: String, $color: String, $frequencyUnit: String, $frequencyValue: Int, $dueAt: ISO8601DateTime) {\n  createTimelineItem(\n    title: $title\n    body: $body\n    color: $color\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    dueAt: $dueAt\n  ) {\n    ...TimelineItem\n  }\n}": types.CreateTimelineItemDocument,
    "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}": types.LoginDocument,
    "query currentUser {\n  currentUser {\n    email\n  }\n}": types.CurrentUserDocument,
    "query testField {\n  testField\n}": types.TestFieldDocument,
    "query timelineItems {\n  timelineItems {\n    ...TimelineItem\n  }\n}": types.TimelineItemsDocument,
    "query foo {\n  foo\n}": types.FooDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TimelineItem on TimelineItem {\n  id\n  title\n  body\n  color\n  dueAt\n  frequency\n}"): (typeof documents)["fragment TimelineItem on TimelineItem {\n  id\n  title\n  body\n  color\n  dueAt\n  frequency\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation createTimelineItem($title: String!, $body: String, $color: String, $frequencyUnit: String, $frequencyValue: Int, $dueAt: ISO8601DateTime) {\n  createTimelineItem(\n    title: $title\n    body: $body\n    color: $color\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    dueAt: $dueAt\n  ) {\n    ...TimelineItem\n  }\n}"): (typeof documents)["mutation createTimelineItem($title: String!, $body: String, $color: String, $frequencyUnit: String, $frequencyValue: Int, $dueAt: ISO8601DateTime) {\n  createTimelineItem(\n    title: $title\n    body: $body\n    color: $color\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    dueAt: $dueAt\n  ) {\n    ...TimelineItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}"): (typeof documents)["mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query currentUser {\n  currentUser {\n    email\n  }\n}"): (typeof documents)["query currentUser {\n  currentUser {\n    email\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query testField {\n  testField\n}"): (typeof documents)["query testField {\n  testField\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query timelineItems {\n  timelineItems {\n    ...TimelineItem\n  }\n}"): (typeof documents)["query timelineItems {\n  timelineItems {\n    ...TimelineItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query foo {\n  foo\n}"): (typeof documents)["query foo {\n  foo\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;