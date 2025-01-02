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
  editLeftover: Leftover;
  editTimelineItem: TimelineItem;
  login?: Maybe<Scalars['JSON']['output']>;
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
  color?: InputMaybe<Scalars['String']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationDeleteLeftoverArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTimelineItemArgs = {
  id: Scalars['ID']['input'];
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
  color?: InputMaybe<Scalars['String']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
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
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type LeftoverFragment = { __typename?: 'Leftover', id: string, name: string, allergens?: string | null, useBy?: any | null, trashBy?: any | null };

export type TimelineItemFragment = { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null };

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
  color?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type CreateTimelineItemMutation = { __typename?: 'Mutation', createTimelineItem?: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } | null };

export type DeleteTimelineItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTimelineItemMutation = { __typename?: 'Mutation', deleteTimelineItem: boolean };

export type EditTimelineItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  frequencyUnit?: InputMaybe<Scalars['String']['input']>;
  frequencyValue?: InputMaybe<Scalars['Int']['input']>;
  dueAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
}>;


export type EditTimelineItemMutation = { __typename?: 'Mutation', editTimelineItem: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: any | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', email: string, name?: string | null } | null };

export type LeftoversQueryVariables = Exact<{ [key: string]: never; }>;


export type LeftoversQuery = { __typename?: 'Query', leftovers?: Array<{ __typename?: 'Leftover', id: string, name: string, allergens?: string | null, useBy?: any | null, trashBy?: any | null }> | null };

export type TestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type TestFieldQuery = { __typename?: 'Query', testField: string };

export type TimelineItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TimelineItemQuery = { __typename?: 'Query', timelineItem: { __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null } };

export type TimelineItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type TimelineItemsQuery = { __typename?: 'Query', timelineItems?: Array<{ __typename?: 'TimelineItem', id: string, title: string, body?: string | null, color?: string | null, dueAt?: any | null, frequency?: string | null, frequencyUnit?: string | null, frequencyValue?: number | null }> | null };

export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'Query', foo?: string | null };
