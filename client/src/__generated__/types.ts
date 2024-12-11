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
  ISO8601DateTime: { input: any; output: any; }
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

export type TimelineItemFragment = { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null };

export type CreateTimelineItemMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateTimelineItemMutation = { __typename?: 'Mutation', createTimelineItem?: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null } | null };

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


export type TimelineItemsQuery = { __typename?: 'Query', timelineItems?: Array<{ __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null }> | null };

export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'Query', foo?: string | null };
