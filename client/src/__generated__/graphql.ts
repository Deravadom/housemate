/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTimelineItem?: Maybe<TimelineItem>;
  login?: Maybe<Scalars['JSON']['output']>;
  signup?: Maybe<Scalars['JSON']['output']>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};


export type MutationCreateTimelineItemArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  foo?: Maybe<Scalars['String']['output']>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
  timelineItems?: Maybe<Array<TimelineItem>>;
};

export type TimelineItem = {
  __typename?: 'TimelineItem';
  body?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  dueAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type TimelineItemFragment = { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null } & { ' $fragmentName'?: 'TimelineItemFragment' };

export type CreateTimelineItemMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateTimelineItemMutation = { __typename?: 'Mutation', createTimelineItem?: (
    { __typename?: 'TimelineItem' }
    & { ' $fragmentRefs'?: { 'TimelineItemFragment': TimelineItemFragment } }
  ) | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: any | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', email: string } | null };

export type TestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type TestFieldQuery = { __typename?: 'Query', testField: string };

export type TimelineItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type TimelineItemsQuery = { __typename?: 'Query', timelineItems?: Array<(
    { __typename?: 'TimelineItem' }
    & { ' $fragmentRefs'?: { 'TimelineItemFragment': TimelineItemFragment } }
  )> | null };

export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'Query', foo?: string | null };

export const TimelineItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]} as unknown as DocumentNode<TimelineItemFragment, unknown>;
export const CreateTimelineItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTimelineItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequencyUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequencyValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ISO8601DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTimelineItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequencyUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequencyUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequencyValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequencyValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"dueAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]} as unknown as DocumentNode<CreateTimelineItemMutation, CreateTimelineItemMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const TestFieldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"testField"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testField"}}]}}]} as unknown as DocumentNode<TestFieldQuery, TestFieldQueryVariables>;
export const TimelineItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"timelineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timelineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]} as unknown as DocumentNode<TimelineItemsQuery, TimelineItemsQueryVariables>;
export const FooDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"foo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foo"}}]}}]} as unknown as DocumentNode<FooQuery, FooQueryVariables>;