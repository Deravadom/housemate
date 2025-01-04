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

export enum FrequencyEnum {
  Day = 'day',
  Days = 'days',
  Month = 'month',
  Months = 'months',
  Week = 'week',
  Weeks = 'weeks'
}

export type Household = {
  __typename?: 'Household';
  name: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type Leftover = {
  __typename?: 'Leftover';
  allergens?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  trashBy?: Maybe<Scalars['ISO8601DateTime']['output']>;
  useBy?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLeftover?: Maybe<Leftover>;
  createTimelineItem?: Maybe<TimelineItem>;
  deleteLeftover: Scalars['Boolean']['output'];
  deleteTimelineItem: Scalars['Boolean']['output'];
  editHousehold?: Maybe<Household>;
  editLeftover: Leftover;
  editTimelineItem: TimelineItem;
  login?: Maybe<Scalars['JSON']['output']>;
  setHousehold?: Maybe<Household>;
  signup?: Maybe<Scalars['JSON']['output']>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};


export type MutationCreateLeftoverArgs = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  trashBy: Scalars['ISO8601DateTime']['input'];
  useBy?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


export type MutationCreateTimelineItemArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<FrequencyEnum>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  lastCompletedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  title: Scalars['String']['input'];
};


export type MutationDeleteLeftoverArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTimelineItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditHouseholdArgs = {
  name: Scalars['String']['input'];
};


export type MutationEditLeftoverArgs = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  trashBy: Scalars['ISO8601DateTime']['input'];
  useBy?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


export type MutationEditTimelineItemArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<FrequencyEnum>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  lastCompletedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  title: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSetHouseholdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  foo?: Maybe<Scalars['String']['output']>;
  households?: Maybe<Array<Household>>;
  leftover: Leftover;
  leftovers?: Maybe<Array<Leftover>>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
  timelineItem: TimelineItem;
  timelineItems?: Maybe<Array<TimelineItem>>;
};


export type QueryLeftoverArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTimelineItemArgs = {
  id: Scalars['ID']['input'];
};

export type TimelineItem = {
  __typename?: 'TimelineItem';
  body?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  dueAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  frequencyUnit?: Maybe<Scalars['String']['output']>;
  frequencyValue?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lastCompletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type LeftoverFragment = { __typename?: 'Leftover', id: string, name: string, allergens?: string | null, useBy?: any | null, trashBy?: any | null } & { ' $fragmentName'?: 'LeftoverFragment' };

export type TimelineItemFragment = { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, lastCompletedAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } & { ' $fragmentName'?: 'TimelineItemFragment' };

export type CreateLeftoverMutationVariables = Exact<{
  name: Scalars['String']['input'];
  trashBy: Scalars['ISO8601DateTime']['input'];
  allergens?: InputMaybe<Scalars['String']['input']>;
  useBy?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateLeftoverMutation = { __typename?: 'Mutation', createLeftover?: (
    { __typename?: 'Leftover' }
    & { ' $fragmentRefs'?: { 'LeftoverFragment': LeftoverFragment } }
  ) | null };

export type CreateTimelineItemMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<FrequencyEnum>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  lastCompletedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateTimelineItemMutation = { __typename?: 'Mutation', createTimelineItem?: (
    { __typename?: 'TimelineItem' }
    & { ' $fragmentRefs'?: { 'TimelineItemFragment': TimelineItemFragment } }
  ) | null };

export type DeleteTimelineItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTimelineItemMutation = { __typename?: 'Mutation', deleteTimelineItem: boolean };

export type EditTimelineItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<FrequencyEnum>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  lastCompletedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type EditTimelineItemMutation = { __typename?: 'Mutation', editTimelineItem: (
    { __typename?: 'TimelineItem' }
    & { ' $fragmentRefs'?: { 'TimelineItemFragment': TimelineItemFragment } }
  ) };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: any | null };

export type SetHouseholdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SetHouseholdMutation = { __typename?: 'Mutation', setHousehold?: { __typename?: 'Household', name: string, users?: Array<{ __typename?: 'User', name?: string | null, email: string }> | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', email: string, name?: string | null } | null };

export type HouseholdsQueryVariables = Exact<{ [key: string]: never; }>;


export type HouseholdsQuery = { __typename?: 'Query', households?: Array<{ __typename?: 'Household', name: string, users?: Array<{ __typename?: 'User', name?: string | null, email: string }> | null }> | null };

export type LeftoversQueryVariables = Exact<{ [key: string]: never; }>;


export type LeftoversQuery = { __typename?: 'Query', leftovers?: Array<(
    { __typename?: 'Leftover' }
    & { ' $fragmentRefs'?: { 'LeftoverFragment': LeftoverFragment } }
  )> | null };

export type TestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type TestFieldQuery = { __typename?: 'Query', testField: string };

export type TimelineItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TimelineItemQuery = { __typename?: 'Query', timelineItem: (
    { __typename?: 'TimelineItem' }
    & { ' $fragmentRefs'?: { 'TimelineItemFragment': TimelineItemFragment } }
  ) };

export type TimelineItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type TimelineItemsQuery = { __typename?: 'Query', timelineItems?: Array<(
    { __typename?: 'TimelineItem' }
    & { ' $fragmentRefs'?: { 'TimelineItemFragment': TimelineItemFragment } }
  )> | null };

export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'Query', foo?: string | null };

export const LeftoverFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Leftover"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Leftover"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"allergens"}},{"kind":"Field","name":{"kind":"Name","value":"useBy"}},{"kind":"Field","name":{"kind":"Name","value":"trashBy"}}]}}]} as unknown as DocumentNode<LeftoverFragment, unknown>;
export const TimelineItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastCompletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyUnit"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyValue"}}]}}]} as unknown as DocumentNode<TimelineItemFragment, unknown>;
export const CreateLeftoverDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLeftover"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trashBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ISO8601DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allergens"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"useBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ISO8601DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLeftover"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"trashBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trashBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"allergens"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allergens"}}},{"kind":"Argument","name":{"kind":"Name","value":"useBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"useBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Leftover"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Leftover"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Leftover"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"allergens"}},{"kind":"Field","name":{"kind":"Name","value":"useBy"}},{"kind":"Field","name":{"kind":"Name","value":"trashBy"}}]}}]} as unknown as DocumentNode<CreateLeftoverMutation, CreateLeftoverMutationVariables>;
export const CreateTimelineItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTimelineItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequencyUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FrequencyEnum"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequencyValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastCompletedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ISO8601DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTimelineItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequencyUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequencyUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequencyValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequencyValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastCompletedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastCompletedAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastCompletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyUnit"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyValue"}}]}}]} as unknown as DocumentNode<CreateTimelineItemMutation, CreateTimelineItemMutationVariables>;
export const DeleteTimelineItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTimelineItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTimelineItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteTimelineItemMutation, DeleteTimelineItemMutationVariables>;
export const EditTimelineItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editTimelineItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequencyUnit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FrequencyEnum"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequencyValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastCompletedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ISO8601DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editTimelineItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequencyUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequencyUnit"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequencyValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequencyValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastCompletedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastCompletedAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastCompletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyUnit"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyValue"}}]}}]} as unknown as DocumentNode<EditTimelineItemMutation, EditTimelineItemMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SetHouseholdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setHousehold"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setHousehold"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SetHouseholdMutation, SetHouseholdMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const HouseholdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"households"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"households"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<HouseholdsQuery, HouseholdsQueryVariables>;
export const LeftoversDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"leftovers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leftovers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Leftover"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Leftover"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Leftover"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"allergens"}},{"kind":"Field","name":{"kind":"Name","value":"useBy"}},{"kind":"Field","name":{"kind":"Name","value":"trashBy"}}]}}]} as unknown as DocumentNode<LeftoversQuery, LeftoversQueryVariables>;
export const TestFieldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"testField"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testField"}}]}}]} as unknown as DocumentNode<TestFieldQuery, TestFieldQueryVariables>;
export const TimelineItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"timelineItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timelineItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastCompletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyUnit"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyValue"}}]}}]} as unknown as DocumentNode<TimelineItemQuery, TimelineItemQueryVariables>;
export const TimelineItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"timelineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timelineItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastCompletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyUnit"}},{"kind":"Field","name":{"kind":"Name","value":"frequencyValue"}}]}}]} as unknown as DocumentNode<TimelineItemsQuery, TimelineItemsQueryVariables>;
export const FooDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"foo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foo"}}]}}]} as unknown as DocumentNode<FooQuery, FooQueryVariables>;