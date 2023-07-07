/* eslint-disable */
// prettier-ignore
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
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  apps: Array<Apps>;
  apps_aggregated: Array<Apps_Aggregated>;
  apps_by_id?: Maybe<Apps>;
  callouts: Array<Callouts>;
  callouts_aggregated: Array<Callouts_Aggregated>;
  callouts_by_id?: Maybe<Callouts>;
  events: Array<Events>;
  events_aggregated: Array<Events_Aggregated>;
  events_by_id?: Maybe<Events>;
  featured_contributors: Array<Featured_Contributors>;
  featured_contributors_aggregated: Array<Featured_Contributors_Aggregated>;
  featured_contributors_by_id?: Maybe<Featured_Contributors>;
  markdown_pages: Array<Markdown_Pages>;
  markdown_pages_aggregated: Array<Markdown_Pages_Aggregated>;
  markdown_pages_by_id?: Maybe<Markdown_Pages>;
  nav_link: Array<Nav_Link>;
  nav_link_aggregated: Array<Nav_Link_Aggregated>;
  nav_link_by_id?: Maybe<Nav_Link>;
  nav_list: Array<Nav_List>;
  nav_list_aggregated: Array<Nav_List_Aggregated>;
  nav_list_by_id?: Maybe<Nav_List>;
  page_community?: Maybe<Page_Community>;
  page_legal?: Maybe<Page_Legal>;
  site_settings?: Maybe<Site_Settings>;
  stacks: Array<Stacks>;
  stacks_aggregated: Array<Stacks_Aggregated>;
  stacks_by_id?: Maybe<Stacks>;
  team_members: Array<Team_Members>;
  team_members_aggregated: Array<Team_Members_Aggregated>;
  team_members_by_id?: Maybe<Team_Members>;
};


export type QueryAppsArgs = {
  filter?: InputMaybe<Apps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryApps_AggregatedArgs = {
  filter?: InputMaybe<Apps_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryApps_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCalloutsArgs = {
  filter?: InputMaybe<Callouts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCallouts_AggregatedArgs = {
  filter?: InputMaybe<Callouts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCallouts_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvents_AggregatedArgs = {
  filter?: InputMaybe<Events_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvents_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeatured_ContributorsArgs = {
  filter?: InputMaybe<Featured_Contributors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFeatured_Contributors_AggregatedArgs = {
  filter?: InputMaybe<Featured_Contributors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFeatured_Contributors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMarkdown_PagesArgs = {
  filter?: InputMaybe<Markdown_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMarkdown_Pages_AggregatedArgs = {
  filter?: InputMaybe<Markdown_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMarkdown_Pages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNav_LinkArgs = {
  filter?: InputMaybe<Nav_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNav_Link_AggregatedArgs = {
  filter?: InputMaybe<Nav_Link_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNav_Link_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNav_ListArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNav_List_AggregatedArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNav_List_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStacksArgs = {
  filter?: InputMaybe<Stacks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStacks_AggregatedArgs = {
  filter?: InputMaybe<Stacks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStacks_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeam_MembersArgs = {
  filter?: InputMaybe<Team_Members_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_Members_AggregatedArgs = {
  filter?: InputMaybe<Team_Members_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_Members_By_IdArgs = {
  id: Scalars['ID']['input'];
};

export type Apps = {
  __typename?: 'apps';
  heroVideo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Apps_Aggregated = {
  __typename?: 'apps_aggregated';
  avg?: Maybe<Apps_Aggregated_Fields>;
  avgDistinct?: Maybe<Apps_Aggregated_Fields>;
  count?: Maybe<Apps_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Apps_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Apps_Aggregated_Fields>;
  min?: Maybe<Apps_Aggregated_Fields>;
  sum?: Maybe<Apps_Aggregated_Fields>;
  sumDistinct?: Maybe<Apps_Aggregated_Fields>;
};

export type Apps_Aggregated_Count = {
  __typename?: 'apps_aggregated_count';
  heroVideo?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Apps_Aggregated_Fields = {
  __typename?: 'apps_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Apps_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Apps_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Apps_Filter>>>;
  heroVideo?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Callouts = {
  __typename?: 'callouts';
  callout_id?: Maybe<Page_Community>;
  category?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CalloutsCallout_IdArgs = {
  filter?: InputMaybe<Page_Community_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Callouts_Aggregated = {
  __typename?: 'callouts_aggregated';
  avg?: Maybe<Callouts_Aggregated_Fields>;
  avgDistinct?: Maybe<Callouts_Aggregated_Fields>;
  count?: Maybe<Callouts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Callouts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Callouts_Aggregated_Fields>;
  min?: Maybe<Callouts_Aggregated_Fields>;
  sum?: Maybe<Callouts_Aggregated_Fields>;
  sumDistinct?: Maybe<Callouts_Aggregated_Fields>;
};

export type Callouts_Aggregated_Count = {
  __typename?: 'callouts_aggregated_count';
  callout_id?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  ctas?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Callouts_Aggregated_Fields = {
  __typename?: 'callouts_aggregated_fields';
  callout_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Callouts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Callouts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Callouts_Filter>>>;
  callout_id?: InputMaybe<Page_Community_Filter>;
  category?: InputMaybe<String_Filter_Operators>;
  content?: InputMaybe<String_Filter_Operators>;
  ctas?: InputMaybe<String_Filter_Operators>;
  ctas_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
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
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']['output']>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['String']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Events = {
  __typename?: 'events';
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  end_date_func?: Maybe<Datetime_Functions>;
  fields?: Maybe<Scalars['JSON']['output']>;
  fields_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  show_end_time?: Maybe<Scalars['Boolean']['output']>;
  show_start_time: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  start_date_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  /** Must be TZ value from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  timezone?: Maybe<Scalars['String']['output']>;
};

export type Events_Aggregated = {
  __typename?: 'events_aggregated';
  avg?: Maybe<Events_Aggregated_Fields>;
  avgDistinct?: Maybe<Events_Aggregated_Fields>;
  count?: Maybe<Events_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Events_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Events_Aggregated_Fields>;
  min?: Maybe<Events_Aggregated_Fields>;
  sum?: Maybe<Events_Aggregated_Fields>;
  sumDistinct?: Maybe<Events_Aggregated_Fields>;
};

export type Events_Aggregated_Count = {
  __typename?: 'events_aggregated_count';
  ctas?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  end_date?: Maybe<Scalars['Int']['output']>;
  fields?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  show_end_time?: Maybe<Scalars['Int']['output']>;
  show_start_time?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  /** Must be TZ value from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  timezone?: Maybe<Scalars['Int']['output']>;
};

export type Events_Aggregated_Fields = {
  __typename?: 'events_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Events_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  ctas?: InputMaybe<String_Filter_Operators>;
  ctas_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  end_date?: InputMaybe<Date_Filter_Operators>;
  end_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  fields_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  show_end_time?: InputMaybe<Boolean_Filter_Operators>;
  show_start_time?: InputMaybe<Boolean_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_date?: InputMaybe<Date_Filter_Operators>;
  start_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  timezone?: InputMaybe<String_Filter_Operators>;
};

export type Featured_Contributors = {
  __typename?: 'featured_contributors';
  content?: Maybe<Scalars['String']['output']>;
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  portrait?: Maybe<Directus_Files>;
  social_github_url?: Maybe<Scalars['String']['output']>;
  social_linkedin_url?: Maybe<Scalars['String']['output']>;
  social_twitter_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Featured_ContributorsPortraitArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Featured_Contributors_Aggregated = {
  __typename?: 'featured_contributors_aggregated';
  avg?: Maybe<Featured_Contributors_Aggregated_Fields>;
  avgDistinct?: Maybe<Featured_Contributors_Aggregated_Fields>;
  count?: Maybe<Featured_Contributors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Featured_Contributors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Featured_Contributors_Aggregated_Fields>;
  min?: Maybe<Featured_Contributors_Aggregated_Fields>;
  sum?: Maybe<Featured_Contributors_Aggregated_Fields>;
  sumDistinct?: Maybe<Featured_Contributors_Aggregated_Fields>;
};

export type Featured_Contributors_Aggregated_Count = {
  __typename?: 'featured_contributors_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  ctas?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  portrait?: Maybe<Scalars['Int']['output']>;
  social_github_url?: Maybe<Scalars['Int']['output']>;
  social_linkedin_url?: Maybe<Scalars['Int']['output']>;
  social_twitter_url?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Featured_Contributors_Aggregated_Fields = {
  __typename?: 'featured_contributors_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Featured_Contributors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Featured_Contributors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Featured_Contributors_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  ctas?: InputMaybe<String_Filter_Operators>;
  ctas_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  portrait?: InputMaybe<Directus_Files_Filter>;
  social_github_url?: InputMaybe<String_Filter_Operators>;
  social_linkedin_url?: InputMaybe<String_Filter_Operators>;
  social_twitter_url?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Markdown_Pages = {
  __typename?: 'markdown_pages';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  markdown_page_id?: Maybe<Page_Legal>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Markdown_PagesMarkdown_Page_IdArgs = {
  filter?: InputMaybe<Page_Legal_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Markdown_Pages_Aggregated = {
  __typename?: 'markdown_pages_aggregated';
  avg?: Maybe<Markdown_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Markdown_Pages_Aggregated_Fields>;
  count?: Maybe<Markdown_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Markdown_Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Markdown_Pages_Aggregated_Fields>;
  min?: Maybe<Markdown_Pages_Aggregated_Fields>;
  sum?: Maybe<Markdown_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Markdown_Pages_Aggregated_Fields>;
};

export type Markdown_Pages_Aggregated_Count = {
  __typename?: 'markdown_pages_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  markdown_page_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Markdown_Pages_Aggregated_Fields = {
  __typename?: 'markdown_pages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  markdown_page_id?: Maybe<Scalars['Float']['output']>;
};

export type Markdown_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Markdown_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Markdown_Pages_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  markdown_page_id?: InputMaybe<Page_Legal_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Nav_Link = {
  __typename?: 'nav_link';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Nav_Link_Aggregated = {
  __typename?: 'nav_link_aggregated';
  count?: Maybe<Nav_Link_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Nav_Link_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Nav_Link_Aggregated_Count = {
  __typename?: 'nav_link_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
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
  flatten?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Nav_Link>;
  mobile_only?: Maybe<Scalars['Boolean']['output']>;
  parent_nav_list_id?: Maybe<Nav_List>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  subnav?: Maybe<Array<Maybe<Nav_List>>>;
  subnav_func?: Maybe<Count_Functions>;
};


export type Nav_ListLinkArgs = {
  filter?: InputMaybe<Nav_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Nav_ListParent_Nav_List_IdArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Nav_ListSubnavArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Nav_List_Aggregated = {
  __typename?: 'nav_list_aggregated';
  avg?: Maybe<Nav_List_Aggregated_Fields>;
  avgDistinct?: Maybe<Nav_List_Aggregated_Fields>;
  count?: Maybe<Nav_List_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Nav_List_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Nav_List_Aggregated_Fields>;
  min?: Maybe<Nav_List_Aggregated_Fields>;
  sum?: Maybe<Nav_List_Aggregated_Fields>;
  sumDistinct?: Maybe<Nav_List_Aggregated_Fields>;
};

export type Nav_List_Aggregated_Count = {
  __typename?: 'nav_list_aggregated_count';
  flatten?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  mobile_only?: Maybe<Scalars['Int']['output']>;
  parent_nav_list_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  subnav?: Maybe<Scalars['Int']['output']>;
};

export type Nav_List_Aggregated_Fields = {
  __typename?: 'nav_list_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Nav_List_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Nav_List_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Nav_List_Filter>>>;
  flatten?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  link?: InputMaybe<Nav_Link_Filter>;
  mobile_only?: InputMaybe<Boolean_Filter_Operators>;
  parent_nav_list_id?: InputMaybe<Nav_List_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  subnav?: InputMaybe<Nav_List_Filter>;
  subnav_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page_Community = {
  __typename?: 'page_community';
  callouts?: Maybe<Array<Maybe<Callouts>>>;
  callouts_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Page_CommunityCalloutsArgs = {
  filter?: InputMaybe<Callouts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Community_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Community_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Community_Filter>>>;
  callouts?: InputMaybe<Callouts_Filter>;
  callouts_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Page_Legal = {
  __typename?: 'page_legal';
  id: Scalars['ID']['output'];
  pages?: Maybe<Array<Maybe<Markdown_Pages>>>;
  pages_func?: Maybe<Count_Functions>;
};


export type Page_LegalPagesArgs = {
  filter?: InputMaybe<Markdown_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Legal_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Legal_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Legal_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  pages?: InputMaybe<Markdown_Pages_Filter>;
  pages_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Site_Settings = {
  __typename?: 'site_settings';
  id: Scalars['ID']['output'];
  main_nav?: Maybe<Nav_List>;
  og_description?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Site_SettingsMain_NavArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Stacks = {
  __typename?: 'stacks';
  heroVideo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Stacks_Aggregated = {
  __typename?: 'stacks_aggregated';
  avg?: Maybe<Stacks_Aggregated_Fields>;
  avgDistinct?: Maybe<Stacks_Aggregated_Fields>;
  count?: Maybe<Stacks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Stacks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Stacks_Aggregated_Fields>;
  min?: Maybe<Stacks_Aggregated_Fields>;
  sum?: Maybe<Stacks_Aggregated_Fields>;
  sumDistinct?: Maybe<Stacks_Aggregated_Fields>;
};

export type Stacks_Aggregated_Count = {
  __typename?: 'stacks_aggregated_count';
  heroVideo?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Stacks_Aggregated_Fields = {
  __typename?: 'stacks_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Stacks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Stacks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Stacks_Filter>>>;
  heroVideo?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Team_Members = {
  __typename?: 'team_members';
  categories?: Maybe<Scalars['JSON']['output']>;
  categories_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  portrait?: Maybe<Directus_Files>;
  pronouns?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Team_MembersPortraitArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Members_Aggregated = {
  __typename?: 'team_members_aggregated';
  avg?: Maybe<Team_Members_Aggregated_Fields>;
  avgDistinct?: Maybe<Team_Members_Aggregated_Fields>;
  count?: Maybe<Team_Members_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Team_Members_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Team_Members_Aggregated_Fields>;
  min?: Maybe<Team_Members_Aggregated_Fields>;
  sum?: Maybe<Team_Members_Aggregated_Fields>;
  sumDistinct?: Maybe<Team_Members_Aggregated_Fields>;
};

export type Team_Members_Aggregated_Count = {
  __typename?: 'team_members_aggregated_count';
  categories?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  portrait?: Maybe<Scalars['Int']['output']>;
  pronouns?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Team_Members_Aggregated_Fields = {
  __typename?: 'team_members_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Members_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Members_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Members_Filter>>>;
  categories?: InputMaybe<String_Filter_Operators>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  portrait?: InputMaybe<Directus_Files_Filter>;
  pronouns?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type EventFragment = { __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, show_start_time: boolean, show_end_time?: boolean | null, timezone?: string | null, description?: string | null, fields?: any | null, ctas?: any | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, show_start_time: boolean, show_end_time?: boolean | null, timezone?: string | null, description?: string | null, fields?: any | null, ctas?: any | null }> };

export type LinkFragment = { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null };

export type NavListFragment = { __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null };

export type NavListDepth3Fragment = { __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null };

export type SiteSettingsFragment = { __typename?: 'site_settings', og_description?: string | null, main_nav?: { __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null };

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'Query', site_settings?: { __typename?: 'site_settings', og_description?: string | null, main_nav?: { __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, subnav?: Array<{ __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null> | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null } | null } | null };

export type AppExtrasFragment = { __typename?: 'apps', name: string, heroVideo?: string | null };

export type AppExtrasQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type AppExtrasQuery = { __typename?: 'Query', apps: Array<{ __typename?: 'apps', name: string, heroVideo?: string | null }> };

export type StackExtrasFragment = { __typename?: 'stacks', name?: string | null, heroVideo?: string | null };

export type StackExtrasQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type StackExtrasQuery = { __typename?: 'Query', stacks: Array<{ __typename?: 'stacks', name?: string | null, heroVideo?: string | null }> };

export type ImageFileFragment = { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null };

export type TeamMemberFragment = { __typename?: 'team_members', id: string, name?: string | null, title?: string | null, categories?: any | null, pronouns?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type TeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamMembersQuery = { __typename?: 'Query', team_members: Array<{ __typename?: 'team_members', id: string, name?: string | null, title?: string | null, categories?: any | null, pronouns?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null }> };

export type FeaturedContributorFragment = { __typename?: 'featured_contributors', id: string, name?: string | null, title?: string | null, social_github_url?: string | null, social_twitter_url?: string | null, social_linkedin_url?: string | null, content?: string | null, ctas?: any | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type FeaturedContributorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedContributorsQuery = { __typename?: 'Query', featured_contributors: Array<{ __typename?: 'featured_contributors', id: string, name?: string | null, title?: string | null, social_github_url?: string | null, social_twitter_url?: string | null, social_linkedin_url?: string | null, content?: string | null, ctas?: any | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null }> };

export type CalloutFragment = { __typename?: 'callouts', id: string, sort?: number | null, category?: string | null, title?: string | null, content?: string | null, ctas?: any | null };

export type PageCommunityFragment = { __typename?: 'page_community', callouts?: Array<{ __typename?: 'callouts', id: string, sort?: number | null, category?: string | null, title?: string | null, content?: string | null, ctas?: any | null } | null> | null };

export type PageCommunityQueryVariables = Exact<{ [key: string]: never; }>;


export type PageCommunityQuery = { __typename?: 'Query', page_community?: { __typename?: 'page_community', callouts?: Array<{ __typename?: 'callouts', id: string, sort?: number | null, category?: string | null, title?: string | null, content?: string | null, ctas?: any | null } | null> | null } | null };

export type MarkdownPageFragment = { __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null };

export type PageLegalFragment = { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null } | null> | null };

export type PageLegalQueryVariables = Exact<{ [key: string]: never; }>;


export type PageLegalQuery = { __typename?: 'Query', page_legal?: { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null } | null> | null } | null };

export type LegalPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type LegalPageSlugsQuery = { __typename?: 'Query', page_legal?: { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', slug?: string | null } | null> | null } | null };

export const EventFragmentDoc = gql`
    fragment Event on events {
  id
  name
  start_date
  end_date
  show_start_time
  show_end_time
  timezone
  description
  fields
  ctas
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
  mobile_only
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
export const AppExtrasFragmentDoc = gql`
    fragment AppExtras on apps {
  name
  heroVideo
}
    `;
export const StackExtrasFragmentDoc = gql`
    fragment StackExtras on stacks {
  name
  heroVideo
}
    `;
export const ImageFileFragmentDoc = gql`
    fragment ImageFile on directus_files {
  id
  title
  description
  tags
  filename_disk
  filename_download
  metadata
  type
  filesize
}
    `;
export const TeamMemberFragmentDoc = gql`
    fragment TeamMember on team_members {
  id
  name
  title
  categories
  pronouns
  portrait {
    ...ImageFile
  }
}
    ${ImageFileFragmentDoc}`;
export const FeaturedContributorFragmentDoc = gql`
    fragment FeaturedContributor on featured_contributors {
  id
  name
  title
  portrait {
    ...ImageFile
  }
  social_github_url
  social_twitter_url
  social_linkedin_url
  content
  ctas
}
    ${ImageFileFragmentDoc}`;
export const CalloutFragmentDoc = gql`
    fragment Callout on callouts {
  id
  sort
  category
  title
  content
  ctas
}
    `;
export const PageCommunityFragmentDoc = gql`
    fragment PageCommunity on page_community {
  callouts {
    ...Callout
  }
}
    ${CalloutFragmentDoc}`;
export const MarkdownPageFragmentDoc = gql`
    fragment MarkdownPage on markdown_pages {
  id
  slug
  title
  subtitle
  content
}
    `;
export const PageLegalFragmentDoc = gql`
    fragment PageLegal on page_legal {
  pages {
    ...MarkdownPage
  }
}
    ${MarkdownPageFragmentDoc}`;
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
export const AppExtrasDocument = gql`
    query AppExtras($name: String) {
  apps(filter: {name: {_eq: $name}}) {
    ...AppExtras
  }
}
    ${AppExtrasFragmentDoc}`;

/**
 * __useAppExtrasQuery__
 *
 * To run a query within a React component, call `useAppExtrasQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppExtrasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppExtrasQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAppExtrasQuery(baseOptions?: Apollo.QueryHookOptions<AppExtrasQuery, AppExtrasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppExtrasQuery, AppExtrasQueryVariables>(AppExtrasDocument, options);
      }
export function useAppExtrasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppExtrasQuery, AppExtrasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppExtrasQuery, AppExtrasQueryVariables>(AppExtrasDocument, options);
        }
export type AppExtrasQueryHookResult = ReturnType<typeof useAppExtrasQuery>;
export type AppExtrasLazyQueryHookResult = ReturnType<typeof useAppExtrasLazyQuery>;
export type AppExtrasQueryResult = Apollo.QueryResult<AppExtrasQuery, AppExtrasQueryVariables>;
export const StackExtrasDocument = gql`
    query StackExtras($name: String) {
  stacks(filter: {name: {_eq: $name}}) {
    ...StackExtras
  }
}
    ${StackExtrasFragmentDoc}`;

/**
 * __useStackExtrasQuery__
 *
 * To run a query within a React component, call `useStackExtrasQuery` and pass it any options that fit your needs.
 * When your component renders, `useStackExtrasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStackExtrasQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useStackExtrasQuery(baseOptions?: Apollo.QueryHookOptions<StackExtrasQuery, StackExtrasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StackExtrasQuery, StackExtrasQueryVariables>(StackExtrasDocument, options);
      }
export function useStackExtrasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StackExtrasQuery, StackExtrasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StackExtrasQuery, StackExtrasQueryVariables>(StackExtrasDocument, options);
        }
export type StackExtrasQueryHookResult = ReturnType<typeof useStackExtrasQuery>;
export type StackExtrasLazyQueryHookResult = ReturnType<typeof useStackExtrasLazyQuery>;
export type StackExtrasQueryResult = Apollo.QueryResult<StackExtrasQuery, StackExtrasQueryVariables>;
export const TeamMembersDocument = gql`
    query TeamMembers {
  team_members {
    ...TeamMember
  }
}
    ${TeamMemberFragmentDoc}`;

/**
 * __useTeamMembersQuery__
 *
 * To run a query within a React component, call `useTeamMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamMembersQuery(baseOptions?: Apollo.QueryHookOptions<TeamMembersQuery, TeamMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamMembersQuery, TeamMembersQueryVariables>(TeamMembersDocument, options);
      }
export function useTeamMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamMembersQuery, TeamMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamMembersQuery, TeamMembersQueryVariables>(TeamMembersDocument, options);
        }
export type TeamMembersQueryHookResult = ReturnType<typeof useTeamMembersQuery>;
export type TeamMembersLazyQueryHookResult = ReturnType<typeof useTeamMembersLazyQuery>;
export type TeamMembersQueryResult = Apollo.QueryResult<TeamMembersQuery, TeamMembersQueryVariables>;
export const FeaturedContributorsDocument = gql`
    query FeaturedContributors {
  featured_contributors {
    ...FeaturedContributor
  }
}
    ${FeaturedContributorFragmentDoc}`;

/**
 * __useFeaturedContributorsQuery__
 *
 * To run a query within a React component, call `useFeaturedContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedContributorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedContributorsQuery(baseOptions?: Apollo.QueryHookOptions<FeaturedContributorsQuery, FeaturedContributorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturedContributorsQuery, FeaturedContributorsQueryVariables>(FeaturedContributorsDocument, options);
      }
export function useFeaturedContributorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedContributorsQuery, FeaturedContributorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturedContributorsQuery, FeaturedContributorsQueryVariables>(FeaturedContributorsDocument, options);
        }
export type FeaturedContributorsQueryHookResult = ReturnType<typeof useFeaturedContributorsQuery>;
export type FeaturedContributorsLazyQueryHookResult = ReturnType<typeof useFeaturedContributorsLazyQuery>;
export type FeaturedContributorsQueryResult = Apollo.QueryResult<FeaturedContributorsQuery, FeaturedContributorsQueryVariables>;
export const PageCommunityDocument = gql`
    query PageCommunity {
  page_community {
    ...PageCommunity
  }
}
    ${PageCommunityFragmentDoc}`;

/**
 * __usePageCommunityQuery__
 *
 * To run a query within a React component, call `usePageCommunityQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageCommunityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageCommunityQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageCommunityQuery(baseOptions?: Apollo.QueryHookOptions<PageCommunityQuery, PageCommunityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageCommunityQuery, PageCommunityQueryVariables>(PageCommunityDocument, options);
      }
export function usePageCommunityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageCommunityQuery, PageCommunityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageCommunityQuery, PageCommunityQueryVariables>(PageCommunityDocument, options);
        }
export type PageCommunityQueryHookResult = ReturnType<typeof usePageCommunityQuery>;
export type PageCommunityLazyQueryHookResult = ReturnType<typeof usePageCommunityLazyQuery>;
export type PageCommunityQueryResult = Apollo.QueryResult<PageCommunityQuery, PageCommunityQueryVariables>;
export const PageLegalDocument = gql`
    query PageLegal {
  page_legal {
    ...PageLegal
  }
}
    ${PageLegalFragmentDoc}`;

/**
 * __usePageLegalQuery__
 *
 * To run a query within a React component, call `usePageLegalQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageLegalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageLegalQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageLegalQuery(baseOptions?: Apollo.QueryHookOptions<PageLegalQuery, PageLegalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageLegalQuery, PageLegalQueryVariables>(PageLegalDocument, options);
      }
export function usePageLegalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageLegalQuery, PageLegalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageLegalQuery, PageLegalQueryVariables>(PageLegalDocument, options);
        }
export type PageLegalQueryHookResult = ReturnType<typeof usePageLegalQuery>;
export type PageLegalLazyQueryHookResult = ReturnType<typeof usePageLegalLazyQuery>;
export type PageLegalQueryResult = Apollo.QueryResult<PageLegalQuery, PageLegalQueryVariables>;
export const LegalPageSlugsDocument = gql`
    query LegalPageSlugs {
  page_legal {
    pages {
      slug
    }
  }
}
    `;

/**
 * __useLegalPageSlugsQuery__
 *
 * To run a query within a React component, call `useLegalPageSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLegalPageSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLegalPageSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLegalPageSlugsQuery(baseOptions?: Apollo.QueryHookOptions<LegalPageSlugsQuery, LegalPageSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LegalPageSlugsQuery, LegalPageSlugsQueryVariables>(LegalPageSlugsDocument, options);
      }
export function useLegalPageSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LegalPageSlugsQuery, LegalPageSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LegalPageSlugsQuery, LegalPageSlugsQueryVariables>(LegalPageSlugsDocument, options);
        }
export type LegalPageSlugsQueryHookResult = ReturnType<typeof useLegalPageSlugsQuery>;
export type LegalPageSlugsLazyQueryHookResult = ReturnType<typeof useLegalPageSlugsLazyQuery>;
export type LegalPageSlugsQueryResult = Apollo.QueryResult<LegalPageSlugsQuery, LegalPageSlugsQueryVariables>;