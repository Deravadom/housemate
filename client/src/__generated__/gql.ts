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
    "fragment Leftover on Leftover {\n  id\n  name\n  allergens\n  useBy\n  trashBy\n}": types.LeftoverFragmentDoc,
    "fragment TimelineItem on TimelineItem {\n  id\n  title\n  body\n  color\n  dueAt\n  lastCompletedAt\n  frequency\n  frequencyUnit\n  frequencyValue\n}": types.TimelineItemFragmentDoc,
    "mutation createLeftover($name: String!, $trashBy: ISO8601DateTime!, $allergens: String, $useBy: ISO8601DateTime) {\n  createLeftover(\n    name: $name\n    trashBy: $trashBy\n    allergens: $allergens\n    useBy: $useBy\n  ) {\n    ...Leftover\n  }\n}": types.CreateLeftoverDocument,
    "mutation createTimelineItem($title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {\n  createTimelineItem(\n    title: $title\n    body: $body\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    lastCompletedAt: $lastCompletedAt\n  ) {\n    ...TimelineItem\n  }\n}": types.CreateTimelineItemDocument,
    "mutation deleteTimelineItem($id: ID!) {\n  deleteTimelineItem(id: $id)\n}": types.DeleteTimelineItemDocument,
    "mutation editTimelineItem($id: ID!, $title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {\n  editTimelineItem(\n    id: $id\n    title: $title\n    body: $body\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    lastCompletedAt: $lastCompletedAt\n  ) {\n    ...TimelineItem\n  }\n}": types.EditTimelineItemDocument,
    "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}": types.LoginDocument,
    "mutation setHousehold($id: ID!) {\n  setHousehold(id: $id) {\n    id\n    name\n    users {\n      name\n      email\n    }\n  }\n}": types.SetHouseholdDocument,
    "mutation signup($email: String!, $password: String!, $name: String!) {\n  signup(email: $email, password: $password, name: $name)\n}": types.SignupDocument,
    "query currentUser {\n  currentUser {\n    email\n    name\n    householdId\n  }\n}": types.CurrentUserDocument,
    "query households {\n  households {\n    id\n    name\n    users {\n      name\n      email\n    }\n  }\n}": types.HouseholdsDocument,
    "query leftovers {\n  leftovers {\n    ...Leftover\n  }\n}": types.LeftoversDocument,
    "query testField {\n  testField\n}": types.TestFieldDocument,
    "query timelineItem($id: ID!) {\n  timelineItem(id: $id) {\n    ...TimelineItem\n  }\n}": types.TimelineItemDocument,
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
export function gql(source: "fragment Leftover on Leftover {\n  id\n  name\n  allergens\n  useBy\n  trashBy\n}"): (typeof documents)["fragment Leftover on Leftover {\n  id\n  name\n  allergens\n  useBy\n  trashBy\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TimelineItem on TimelineItem {\n  id\n  title\n  body\n  color\n  dueAt\n  lastCompletedAt\n  frequency\n  frequencyUnit\n  frequencyValue\n}"): (typeof documents)["fragment TimelineItem on TimelineItem {\n  id\n  title\n  body\n  color\n  dueAt\n  lastCompletedAt\n  frequency\n  frequencyUnit\n  frequencyValue\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation createLeftover($name: String!, $trashBy: ISO8601DateTime!, $allergens: String, $useBy: ISO8601DateTime) {\n  createLeftover(\n    name: $name\n    trashBy: $trashBy\n    allergens: $allergens\n    useBy: $useBy\n  ) {\n    ...Leftover\n  }\n}"): (typeof documents)["mutation createLeftover($name: String!, $trashBy: ISO8601DateTime!, $allergens: String, $useBy: ISO8601DateTime) {\n  createLeftover(\n    name: $name\n    trashBy: $trashBy\n    allergens: $allergens\n    useBy: $useBy\n  ) {\n    ...Leftover\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation createTimelineItem($title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {\n  createTimelineItem(\n    title: $title\n    body: $body\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    lastCompletedAt: $lastCompletedAt\n  ) {\n    ...TimelineItem\n  }\n}"): (typeof documents)["mutation createTimelineItem($title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {\n  createTimelineItem(\n    title: $title\n    body: $body\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    lastCompletedAt: $lastCompletedAt\n  ) {\n    ...TimelineItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation deleteTimelineItem($id: ID!) {\n  deleteTimelineItem(id: $id)\n}"): (typeof documents)["mutation deleteTimelineItem($id: ID!) {\n  deleteTimelineItem(id: $id)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation editTimelineItem($id: ID!, $title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {\n  editTimelineItem(\n    id: $id\n    title: $title\n    body: $body\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    lastCompletedAt: $lastCompletedAt\n  ) {\n    ...TimelineItem\n  }\n}"): (typeof documents)["mutation editTimelineItem($id: ID!, $title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {\n  editTimelineItem(\n    id: $id\n    title: $title\n    body: $body\n    frequencyUnit: $frequencyUnit\n    frequencyValue: $frequencyValue\n    lastCompletedAt: $lastCompletedAt\n  ) {\n    ...TimelineItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}"): (typeof documents)["mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation setHousehold($id: ID!) {\n  setHousehold(id: $id) {\n    id\n    name\n    users {\n      name\n      email\n    }\n  }\n}"): (typeof documents)["mutation setHousehold($id: ID!) {\n  setHousehold(id: $id) {\n    id\n    name\n    users {\n      name\n      email\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation signup($email: String!, $password: String!, $name: String!) {\n  signup(email: $email, password: $password, name: $name)\n}"): (typeof documents)["mutation signup($email: String!, $password: String!, $name: String!) {\n  signup(email: $email, password: $password, name: $name)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query currentUser {\n  currentUser {\n    email\n    name\n    householdId\n  }\n}"): (typeof documents)["query currentUser {\n  currentUser {\n    email\n    name\n    householdId\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query households {\n  households {\n    id\n    name\n    users {\n      name\n      email\n    }\n  }\n}"): (typeof documents)["query households {\n  households {\n    id\n    name\n    users {\n      name\n      email\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query leftovers {\n  leftovers {\n    ...Leftover\n  }\n}"): (typeof documents)["query leftovers {\n  leftovers {\n    ...Leftover\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query testField {\n  testField\n}"): (typeof documents)["query testField {\n  testField\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query timelineItem($id: ID!) {\n  timelineItem(id: $id) {\n    ...TimelineItem\n  }\n}"): (typeof documents)["query timelineItem($id: ID!) {\n  timelineItem(id: $id) {\n    ...TimelineItem\n  }\n}"];
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