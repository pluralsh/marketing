/* eslint-disable */
// prettier-ignore
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  apps: Array<Apps>;
  apps_aggregated: Array<Apps_Aggregated>;
  apps_by_id?: Maybe<Apps>;
  events: Array<Events>;
  events_aggregated: Array<Events_Aggregated>;
  events_by_id?: Maybe<Events>;
  nav_link: Array<Nav_Link>;
  nav_link_aggregated: Array<Nav_Link_Aggregated>;
  nav_link_by_id?: Maybe<Nav_Link>;
  nav_list: Array<Nav_List>;
  nav_list_aggregated: Array<Nav_List_Aggregated>;
  nav_list_by_id?: Maybe<Nav_List>;
  site_settings?: Maybe<Site_Settings>;
};


export type QueryAppsArgs = {
  filter?: InputMaybe<Apps_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryApps_AggregatedArgs = {
  filter?: InputMaybe<Apps_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryApps_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEvents_AggregatedArgs = {
  filter?: InputMaybe<Events_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEvents_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNav_LinkArgs = {
  filter?: InputMaybe<Nav_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNav_Link_AggregatedArgs = {
  filter?: InputMaybe<Nav_Link_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNav_Link_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNav_ListArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNav_List_AggregatedArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNav_List_By_IdArgs = {
  id: Scalars['ID'];
};

export type Apps = {
  __typename?: 'apps';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  test_field?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Apps_Aggregated = {
  __typename?: 'apps_aggregated';
  avg?: Maybe<Apps_Aggregated_Fields>;
  avgDistinct?: Maybe<Apps_Aggregated_Fields>;
  count?: Maybe<Apps_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Apps_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Apps_Aggregated_Fields>;
  min?: Maybe<Apps_Aggregated_Fields>;
  sum?: Maybe<Apps_Aggregated_Fields>;
  sumDistinct?: Maybe<Apps_Aggregated_Fields>;
};

export type Apps_Aggregated_Count = {
  __typename?: 'apps_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  test_field?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Apps_Aggregated_Fields = {
  __typename?: 'apps_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Apps_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Apps_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Apps_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  test_field?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Events = {
  __typename?: 'events';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['Date']>;
  end_date_func?: Maybe<Datetime_Functions>;
  fields?: Maybe<Scalars['JSON']>;
  fields_func?: Maybe<Count_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Date']>;
  start_date_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Events_Aggregated = {
  __typename?: 'events_aggregated';
  avg?: Maybe<Events_Aggregated_Fields>;
  avgDistinct?: Maybe<Events_Aggregated_Fields>;
  count?: Maybe<Events_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Events_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Events_Aggregated_Fields>;
  min?: Maybe<Events_Aggregated_Fields>;
  sum?: Maybe<Events_Aggregated_Fields>;
  sumDistinct?: Maybe<Events_Aggregated_Fields>;
};

export type Events_Aggregated_Count = {
  __typename?: 'events_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['Int']>;
  fields?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Events_Aggregated_Fields = {
  __typename?: 'events_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Events_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  end_date?: InputMaybe<Date_Filter_Operators>;
  end_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  fields_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_date?: InputMaybe<Date_Filter_Operators>;
  start_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Nav_Link = {
  __typename?: 'nav_link';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Nav_Link_Aggregated = {
  __typename?: 'nav_link_aggregated';
  count?: Maybe<Nav_Link_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Nav_Link_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Nav_Link_Aggregated_Count = {
  __typename?: 'nav_link_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
};

export type Nav_Link_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Nav_Link_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Nav_Link_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
};

export type Nav_List = {
  __typename?: 'nav_list';
  flatten?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  link?: Maybe<Nav_Link>;
  parent_nav_list_id?: Maybe<Nav_List>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  subnav?: Maybe<Array<Maybe<Nav_List>>>;
  subnav_func?: Maybe<Count_Functions>;
};


export type Nav_ListLinkArgs = {
  filter?: InputMaybe<Nav_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Nav_ListParent_Nav_List_IdArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Nav_ListSubnavArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Nav_List_Aggregated = {
  __typename?: 'nav_list_aggregated';
  avg?: Maybe<Nav_List_Aggregated_Fields>;
  avgDistinct?: Maybe<Nav_List_Aggregated_Fields>;
  count?: Maybe<Nav_List_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Nav_List_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Nav_List_Aggregated_Fields>;
  min?: Maybe<Nav_List_Aggregated_Fields>;
  sum?: Maybe<Nav_List_Aggregated_Fields>;
  sumDistinct?: Maybe<Nav_List_Aggregated_Fields>;
};

export type Nav_List_Aggregated_Count = {
  __typename?: 'nav_list_aggregated_count';
  flatten?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['Int']>;
  parent_nav_list_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  subnav?: Maybe<Scalars['Int']>;
};

export type Nav_List_Aggregated_Fields = {
  __typename?: 'nav_list_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Nav_List_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Nav_List_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Nav_List_Filter>>>;
  flatten?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  link?: InputMaybe<Nav_Link_Filter>;
  parent_nav_list_id?: InputMaybe<Nav_List_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  subnav?: InputMaybe<Nav_List_Filter>;
  subnav_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Site_Settings = {
  __typename?: 'site_settings';
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  main_nav?: Maybe<Nav_List>;
  og_description?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type Site_SettingsMain_NavArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type EventFragment = { __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, fields?: any | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, fields?: any | null }> };

export type LinkFragment = { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null };

export type NavListFragment = { __typename?: 'nav_list', id: string, flatten?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null };

export type NavListDepth3Fragment = { __typename?: 'nav_list', id: string, flatten?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null };

export type SiteSettingsFragment = { __typename?: 'site_settings', og_description?: string | null, main_nav?: { __typename?: 'nav_list', id: string, flatten?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null };

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'Query', site_settings?: { __typename?: 'site_settings', og_description?: string | null, main_nav?: { __typename?: 'nav_list', id: string, flatten?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null } | null };

export const EventFragmentDoc = gql`
    fragment Event on events {
  id
  name
  start_date
  end_date
  fields
}
    `;
export const LinkFragmentDoc = gql`
    fragment Link on nav_link {
  id
  title
  url
}
    `;
export const NavListFragmentDoc = gql`
    fragment NavList on nav_list {
  id
  flatten
  link {
    ...Link
  }
}
    ${LinkFragmentDoc}`;
export const NavListDepth3FragmentDoc = gql`
    fragment NavListDepth3 on nav_list {
  ...NavList
  subnav(sort: ["sort"]) {
    ...NavList
    subnav(sort: ["sort"]) {
      ...NavList
    }
  }
}
    ${NavListFragmentDoc}`;
export const SiteSettingsFragmentDoc = gql`
    fragment SiteSettings on site_settings {
  main_nav(sort: ["sort"]) {
    ...NavListDepth3
  }
  og_description
}
    ${NavListDepth3FragmentDoc}`;
export const EventsDocument = gql`
    query Events {
  events {
    ...Event
  }
}
    ${EventFragmentDoc}`;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const SiteSettingsDocument = gql`
    query SiteSettings {
  site_settings {
    ...SiteSettings
  }
}
    ${SiteSettingsFragmentDoc}`;

/**
 * __useSiteSettingsQuery__
 *
 * To run a query within a React component, call `useSiteSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSiteSettingsQuery(baseOptions?: Apollo.QueryHookOptions<SiteSettingsQuery, SiteSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SiteSettingsQuery, SiteSettingsQueryVariables>(SiteSettingsDocument, options);
      }
export function useSiteSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SiteSettingsQuery, SiteSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SiteSettingsQuery, SiteSettingsQueryVariables>(SiteSettingsDocument, options);
        }
export type SiteSettingsQueryHookResult = ReturnType<typeof useSiteSettingsQuery>;
export type SiteSettingsLazyQueryHookResult = ReturnType<typeof useSiteSettingsLazyQuery>;
export type SiteSettingsQueryResult = Apollo.QueryResult<SiteSettingsQuery, SiteSettingsQueryVariables>;