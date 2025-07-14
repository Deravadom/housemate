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

export type TestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type TestFieldQuery = { __typename?: 'Query', testField: string };


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