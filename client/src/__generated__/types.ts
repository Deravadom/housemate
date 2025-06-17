import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: any; output: any; }
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
  id: Scalars['ID']['output'];
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
  name: Scalars['String']['input'];
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
  householdId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type LeftoverFragment = { __typename?: 'Leftover', id: string, name: string, allergens?: string | null, useBy?: any | null, trashBy?: any | null };

export type TimelineItemFragment = { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, lastCompletedAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null };

export type CreateLeftoverMutationVariables = Exact<{
  name: Scalars['String']['input'];
  trashBy: Scalars['ISO8601DateTime']['input'];
  allergens?: InputMaybe<Scalars['String']['input']>;
  useBy?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateLeftoverMutation = { __typename?: 'Mutation', createLeftover?: { __typename?: 'Leftover', id: string, name: string, allergens?: string | null, useBy?: any | null, trashBy?: any | null } | null };

export type CreateTimelineItemMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<FrequencyEnum>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  lastCompletedAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateTimelineItemMutation = { __typename?: 'Mutation', createTimelineItem?: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, lastCompletedAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } | null };

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


export type EditTimelineItemMutation = { __typename?: 'Mutation', editTimelineItem: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, lastCompletedAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: any | null };

export type SetHouseholdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SetHouseholdMutation = { __typename?: 'Mutation', setHousehold?: { __typename?: 'Household', id: string, name: string, users?: Array<{ __typename?: 'User', name?: string | null, email: string }> | null } | null };

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: any | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', email: string, name?: string | null, householdId?: string | null } | null };

export type HouseholdsQueryVariables = Exact<{ [key: string]: never; }>;


export type HouseholdsQuery = { __typename?: 'Query', households?: Array<{ __typename?: 'Household', id: string, name: string, users?: Array<{ __typename?: 'User', name?: string | null, email: string }> | null }> | null };

export type LeftoversQueryVariables = Exact<{ [key: string]: never; }>;


export type LeftoversQuery = { __typename?: 'Query', leftovers?: Array<{ __typename?: 'Leftover', id: string, name: string, allergens?: string | null, useBy?: any | null, trashBy?: any | null }> | null };

export type TestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type TestFieldQuery = { __typename?: 'Query', testField: string };

export type TimelineItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TimelineItemQuery = { __typename?: 'Query', timelineItem: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, lastCompletedAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } };

export type TimelineItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type TimelineItemsQuery = { __typename?: 'Query', timelineItems?: Array<{ __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, lastCompletedAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null }> | null };

export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'Query', foo?: string | null };

export const LeftoverFragmentDoc = gql`
    fragment Leftover on Leftover {
  id
  name
  allergens
  useBy
  trashBy
}
    `;
export const TimelineItemFragmentDoc = gql`
    fragment TimelineItem on TimelineItem {
  id
  title
  body
  color
  dueAt
  lastCompletedAt
  frequency
  frequencyUnit
  frequencyValue
}
    `;
export const CreateLeftoverDocument = gql`
    mutation createLeftover($name: String!, $trashBy: ISO8601DateTime!, $allergens: String, $useBy: ISO8601DateTime) {
  createLeftover(
    name: $name
    trashBy: $trashBy
    allergens: $allergens
    useBy: $useBy
  ) {
    ...Leftover
  }
}
    ${LeftoverFragmentDoc}`;
export type CreateLeftoverMutationFn = Apollo.MutationFunction<CreateLeftoverMutation, CreateLeftoverMutationVariables>;

/**
 * __useCreateLeftoverMutation__
 *
 * To run a mutation, you first call `useCreateLeftoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeftoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeftoverMutation, { data, loading, error }] = useCreateLeftoverMutation({
 *   variables: {
 *      name: // value for 'name'
 *      trashBy: // value for 'trashBy'
 *      allergens: // value for 'allergens'
 *      useBy: // value for 'useBy'
 *   },
 * });
 */
export function useCreateLeftoverMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeftoverMutation, CreateLeftoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeftoverMutation, CreateLeftoverMutationVariables>(CreateLeftoverDocument, options);
      }
export type CreateLeftoverMutationHookResult = ReturnType<typeof useCreateLeftoverMutation>;
export type CreateLeftoverMutationResult = Apollo.MutationResult<CreateLeftoverMutation>;
export type CreateLeftoverMutationOptions = Apollo.BaseMutationOptions<CreateLeftoverMutation, CreateLeftoverMutationVariables>;
export const CreateTimelineItemDocument = gql`
    mutation createTimelineItem($title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {
  createTimelineItem(
    title: $title
    body: $body
    frequencyUnit: $frequencyUnit
    frequencyValue: $frequencyValue
    lastCompletedAt: $lastCompletedAt
  ) {
    ...TimelineItem
  }
}
    ${TimelineItemFragmentDoc}`;
export type CreateTimelineItemMutationFn = Apollo.MutationFunction<CreateTimelineItemMutation, CreateTimelineItemMutationVariables>;

/**
 * __useCreateTimelineItemMutation__
 *
 * To run a mutation, you first call `useCreateTimelineItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimelineItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimelineItemMutation, { data, loading, error }] = useCreateTimelineItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      frequencyUnit: // value for 'frequencyUnit'
 *      frequencyValue: // value for 'frequencyValue'
 *      lastCompletedAt: // value for 'lastCompletedAt'
 *   },
 * });
 */
export function useCreateTimelineItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimelineItemMutation, CreateTimelineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimelineItemMutation, CreateTimelineItemMutationVariables>(CreateTimelineItemDocument, options);
      }
export type CreateTimelineItemMutationHookResult = ReturnType<typeof useCreateTimelineItemMutation>;
export type CreateTimelineItemMutationResult = Apollo.MutationResult<CreateTimelineItemMutation>;
export type CreateTimelineItemMutationOptions = Apollo.BaseMutationOptions<CreateTimelineItemMutation, CreateTimelineItemMutationVariables>;
export const DeleteTimelineItemDocument = gql`
    mutation deleteTimelineItem($id: ID!) {
  deleteTimelineItem(id: $id)
}
    `;
export type DeleteTimelineItemMutationFn = Apollo.MutationFunction<DeleteTimelineItemMutation, DeleteTimelineItemMutationVariables>;

/**
 * __useDeleteTimelineItemMutation__
 *
 * To run a mutation, you first call `useDeleteTimelineItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimelineItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimelineItemMutation, { data, loading, error }] = useDeleteTimelineItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTimelineItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTimelineItemMutation, DeleteTimelineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTimelineItemMutation, DeleteTimelineItemMutationVariables>(DeleteTimelineItemDocument, options);
      }
export type DeleteTimelineItemMutationHookResult = ReturnType<typeof useDeleteTimelineItemMutation>;
export type DeleteTimelineItemMutationResult = Apollo.MutationResult<DeleteTimelineItemMutation>;
export type DeleteTimelineItemMutationOptions = Apollo.BaseMutationOptions<DeleteTimelineItemMutation, DeleteTimelineItemMutationVariables>;
export const EditTimelineItemDocument = gql`
    mutation editTimelineItem($id: ID!, $title: String!, $body: String, $frequencyUnit: FrequencyEnum, $frequencyValue: Int, $lastCompletedAt: ISO8601DateTime) {
  editTimelineItem(
    id: $id
    title: $title
    body: $body
    frequencyUnit: $frequencyUnit
    frequencyValue: $frequencyValue
    lastCompletedAt: $lastCompletedAt
  ) {
    ...TimelineItem
  }
}
    ${TimelineItemFragmentDoc}`;
export type EditTimelineItemMutationFn = Apollo.MutationFunction<EditTimelineItemMutation, EditTimelineItemMutationVariables>;

/**
 * __useEditTimelineItemMutation__
 *
 * To run a mutation, you first call `useEditTimelineItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTimelineItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTimelineItemMutation, { data, loading, error }] = useEditTimelineItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      frequencyUnit: // value for 'frequencyUnit'
 *      frequencyValue: // value for 'frequencyValue'
 *      lastCompletedAt: // value for 'lastCompletedAt'
 *   },
 * });
 */
export function useEditTimelineItemMutation(baseOptions?: Apollo.MutationHookOptions<EditTimelineItemMutation, EditTimelineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTimelineItemMutation, EditTimelineItemMutationVariables>(EditTimelineItemDocument, options);
      }
export type EditTimelineItemMutationHookResult = ReturnType<typeof useEditTimelineItemMutation>;
export type EditTimelineItemMutationResult = Apollo.MutationResult<EditTimelineItemMutation>;
export type EditTimelineItemMutationOptions = Apollo.BaseMutationOptions<EditTimelineItemMutation, EditTimelineItemMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SetHouseholdDocument = gql`
    mutation setHousehold($id: ID!) {
  setHousehold(id: $id) {
    id
    name
    users {
      name
      email
    }
  }
}
    `;
export type SetHouseholdMutationFn = Apollo.MutationFunction<SetHouseholdMutation, SetHouseholdMutationVariables>;

/**
 * __useSetHouseholdMutation__
 *
 * To run a mutation, you first call `useSetHouseholdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetHouseholdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setHouseholdMutation, { data, loading, error }] = useSetHouseholdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetHouseholdMutation(baseOptions?: Apollo.MutationHookOptions<SetHouseholdMutation, SetHouseholdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetHouseholdMutation, SetHouseholdMutationVariables>(SetHouseholdDocument, options);
      }
export type SetHouseholdMutationHookResult = ReturnType<typeof useSetHouseholdMutation>;
export type SetHouseholdMutationResult = Apollo.MutationResult<SetHouseholdMutation>;
export type SetHouseholdMutationOptions = Apollo.BaseMutationOptions<SetHouseholdMutation, SetHouseholdMutationVariables>;
export const SignupDocument = gql`
    mutation signup($email: String!, $password: String!, $name: String!) {
  signup(email: $email, password: $password, name: $name)
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    email
    name
    householdId
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export function useCurrentUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserSuspenseQueryHookResult = ReturnType<typeof useCurrentUserSuspenseQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const HouseholdsDocument = gql`
    query households {
  households {
    id
    name
    users {
      name
      email
    }
  }
}
    `;

/**
 * __useHouseholdsQuery__
 *
 * To run a query within a React component, call `useHouseholdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHouseholdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHouseholdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHouseholdsQuery(baseOptions?: Apollo.QueryHookOptions<HouseholdsQuery, HouseholdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HouseholdsQuery, HouseholdsQueryVariables>(HouseholdsDocument, options);
      }
export function useHouseholdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HouseholdsQuery, HouseholdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HouseholdsQuery, HouseholdsQueryVariables>(HouseholdsDocument, options);
        }
export function useHouseholdsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HouseholdsQuery, HouseholdsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HouseholdsQuery, HouseholdsQueryVariables>(HouseholdsDocument, options);
        }
export type HouseholdsQueryHookResult = ReturnType<typeof useHouseholdsQuery>;
export type HouseholdsLazyQueryHookResult = ReturnType<typeof useHouseholdsLazyQuery>;
export type HouseholdsSuspenseQueryHookResult = ReturnType<typeof useHouseholdsSuspenseQuery>;
export type HouseholdsQueryResult = Apollo.QueryResult<HouseholdsQuery, HouseholdsQueryVariables>;
export const LeftoversDocument = gql`
    query leftovers {
  leftovers {
    ...Leftover
  }
}
    ${LeftoverFragmentDoc}`;

/**
 * __useLeftoversQuery__
 *
 * To run a query within a React component, call `useLeftoversQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeftoversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeftoversQuery({
 *   variables: {
 *   },
 * });
 */
export function useLeftoversQuery(baseOptions?: Apollo.QueryHookOptions<LeftoversQuery, LeftoversQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeftoversQuery, LeftoversQueryVariables>(LeftoversDocument, options);
      }
export function useLeftoversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeftoversQuery, LeftoversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeftoversQuery, LeftoversQueryVariables>(LeftoversDocument, options);
        }
export function useLeftoversSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LeftoversQuery, LeftoversQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LeftoversQuery, LeftoversQueryVariables>(LeftoversDocument, options);
        }
export type LeftoversQueryHookResult = ReturnType<typeof useLeftoversQuery>;
export type LeftoversLazyQueryHookResult = ReturnType<typeof useLeftoversLazyQuery>;
export type LeftoversSuspenseQueryHookResult = ReturnType<typeof useLeftoversSuspenseQuery>;
export type LeftoversQueryResult = Apollo.QueryResult<LeftoversQuery, LeftoversQueryVariables>;
export const TestFieldDocument = gql`
    query testField {
  testField
}
    `;

/**
 * __useTestFieldQuery__
 *
 * To run a query within a React component, call `useTestFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestFieldQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestFieldQuery(baseOptions?: Apollo.QueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, options);
      }
export function useTestFieldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, options);
        }
export function useTestFieldSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, options);
        }
export type TestFieldQueryHookResult = ReturnType<typeof useTestFieldQuery>;
export type TestFieldLazyQueryHookResult = ReturnType<typeof useTestFieldLazyQuery>;
export type TestFieldSuspenseQueryHookResult = ReturnType<typeof useTestFieldSuspenseQuery>;
export type TestFieldQueryResult = Apollo.QueryResult<TestFieldQuery, TestFieldQueryVariables>;
export const TimelineItemDocument = gql`
    query timelineItem($id: ID!) {
  timelineItem(id: $id) {
    ...TimelineItem
  }
}
    ${TimelineItemFragmentDoc}`;

/**
 * __useTimelineItemQuery__
 *
 * To run a query within a React component, call `useTimelineItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimelineItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimelineItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTimelineItemQuery(baseOptions: Apollo.QueryHookOptions<TimelineItemQuery, TimelineItemQueryVariables> & ({ variables: TimelineItemQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimelineItemQuery, TimelineItemQueryVariables>(TimelineItemDocument, options);
      }
export function useTimelineItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimelineItemQuery, TimelineItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimelineItemQuery, TimelineItemQueryVariables>(TimelineItemDocument, options);
        }
export function useTimelineItemSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TimelineItemQuery, TimelineItemQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TimelineItemQuery, TimelineItemQueryVariables>(TimelineItemDocument, options);
        }
export type TimelineItemQueryHookResult = ReturnType<typeof useTimelineItemQuery>;
export type TimelineItemLazyQueryHookResult = ReturnType<typeof useTimelineItemLazyQuery>;
export type TimelineItemSuspenseQueryHookResult = ReturnType<typeof useTimelineItemSuspenseQuery>;
export type TimelineItemQueryResult = Apollo.QueryResult<TimelineItemQuery, TimelineItemQueryVariables>;
export const TimelineItemsDocument = gql`
    query timelineItems {
  timelineItems {
    ...TimelineItem
  }
}
    ${TimelineItemFragmentDoc}`;

/**
 * __useTimelineItemsQuery__
 *
 * To run a query within a React component, call `useTimelineItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimelineItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimelineItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTimelineItemsQuery(baseOptions?: Apollo.QueryHookOptions<TimelineItemsQuery, TimelineItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimelineItemsQuery, TimelineItemsQueryVariables>(TimelineItemsDocument, options);
      }
export function useTimelineItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimelineItemsQuery, TimelineItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimelineItemsQuery, TimelineItemsQueryVariables>(TimelineItemsDocument, options);
        }
export function useTimelineItemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TimelineItemsQuery, TimelineItemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TimelineItemsQuery, TimelineItemsQueryVariables>(TimelineItemsDocument, options);
        }
export type TimelineItemsQueryHookResult = ReturnType<typeof useTimelineItemsQuery>;
export type TimelineItemsLazyQueryHookResult = ReturnType<typeof useTimelineItemsLazyQuery>;
export type TimelineItemsSuspenseQueryHookResult = ReturnType<typeof useTimelineItemsSuspenseQuery>;
export type TimelineItemsQueryResult = Apollo.QueryResult<TimelineItemsQuery, TimelineItemsQueryVariables>;
export const FooDocument = gql`
    query foo {
  foo
}
    `;

/**
 * __useFooQuery__
 *
 * To run a query within a React component, call `useFooQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooQuery(baseOptions?: Apollo.QueryHookOptions<FooQuery, FooQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooQuery, FooQueryVariables>(FooDocument, options);
      }
export function useFooLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooQuery, FooQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooQuery, FooQueryVariables>(FooDocument, options);
        }
export function useFooSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FooQuery, FooQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FooQuery, FooQueryVariables>(FooDocument, options);
        }
export type FooQueryHookResult = ReturnType<typeof useFooQuery>;
export type FooLazyQueryHookResult = ReturnType<typeof useFooLazyQuery>;
export type FooSuspenseQueryHookResult = ReturnType<typeof useFooSuspenseQuery>;
export type FooQueryResult = Apollo.QueryResult<FooQuery, FooQueryVariables>;