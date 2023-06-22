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
  GraphQLBigInt: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  auth_login?: Maybe<Auth_Tokens>;
  auth_logout?: Maybe<Scalars['Boolean']['output']>;
  auth_password_request?: Maybe<Scalars['Boolean']['output']>;
  auth_password_reset?: Maybe<Scalars['Boolean']['output']>;
  auth_refresh?: Maybe<Auth_Tokens>;
  users_invite_accept?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_disable?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_enable?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_generate?: Maybe<Users_Me_Tfa_Generate_Data>;
  utils_cache_clear?: Maybe<Scalars['Void']['output']>;
  utils_hash_generate?: Maybe<Scalars['String']['output']>;
  utils_hash_verify?: Maybe<Scalars['Boolean']['output']>;
  utils_random_string?: Maybe<Scalars['String']['output']>;
  utils_revert?: Maybe<Scalars['Boolean']['output']>;
  utils_sort?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAuth_LoginArgs = {
  email: Scalars['String']['input'];
  mode?: InputMaybe<Auth_Mode>;
  otp?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationAuth_LogoutArgs = {
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAuth_Password_RequestArgs = {
  email: Scalars['String']['input'];
  reset_url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAuth_Password_ResetArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationAuth_RefreshArgs = {
  mode?: InputMaybe<Auth_Mode>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUsers_Invite_AcceptArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationUsers_Me_Tfa_DisableArgs = {
  otp: Scalars['String']['input'];
};


export type MutationUsers_Me_Tfa_EnableArgs = {
  otp: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};


export type MutationUsers_Me_Tfa_GenerateArgs = {
  password: Scalars['String']['input'];
};


export type MutationUtils_Hash_GenerateArgs = {
  string: Scalars['String']['input'];
};


export type MutationUtils_Hash_VerifyArgs = {
  hash: Scalars['String']['input'];
  string: Scalars['String']['input'];
};


export type MutationUtils_Random_StringArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUtils_RevertArgs = {
  revision: Scalars['ID']['input'];
};


export type MutationUtils_SortArgs = {
  collection: Scalars['String']['input'];
  item: Scalars['ID']['input'];
  to: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** There's no data to query. */
  _empty?: Maybe<Scalars['Void']['output']>;
  extensions?: Maybe<Extensions>;
  fields: Array<Directus_Fields>;
  fields_by_name?: Maybe<Directus_Fields>;
  fields_in_collection: Array<Directus_Fields>;
  server_health?: Maybe<Scalars['JSON']['output']>;
  server_info?: Maybe<Server_Info>;
  server_ping?: Maybe<Scalars['String']['output']>;
  server_specs_graphql?: Maybe<Scalars['String']['output']>;
  server_specs_oas?: Maybe<Scalars['JSON']['output']>;
};


export type QueryFields_By_NameArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type QueryFields_In_CollectionArgs = {
  collection: Scalars['String']['input'];
};


export type QueryServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<Graphql_Sdl_Scope>;
};

export enum Auth_Mode {
  Cookie = 'cookie',
  Json = 'json'
}

export type Auth_Tokens = {
  __typename?: 'auth_tokens';
  access_token?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['GraphQLBigInt']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
};

export type Directus_Fields = {
  __typename?: 'directus_fields';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Directus_Fields_Meta>;
  schema?: Maybe<Directus_Fields_Schema>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Directus_Fields_Meta = {
  __typename?: 'directus_fields_meta';
  collection: Scalars['String']['output'];
  conditions?: Maybe<Scalars['JSON']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  display_options?: Maybe<Scalars['JSON']['output']>;
  field: Scalars['String']['output'];
  group?: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  interface?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  readonly: Scalars['Boolean']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  special?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translations?: Maybe<Scalars['JSON']['output']>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_message?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type Directus_Fields_Schema = {
  __typename?: 'directus_fields_schema';
  comment?: Maybe<Scalars['String']['output']>;
  data_type?: Maybe<Scalars['String']['output']>;
  default_value?: Maybe<Scalars['String']['output']>;
  foreign_key_column?: Maybe<Scalars['String']['output']>;
  foreign_key_table?: Maybe<Scalars['String']['output']>;
  has_auto_increment?: Maybe<Scalars['Boolean']['output']>;
  is_nullable?: Maybe<Scalars['Boolean']['output']>;
  is_primary_key?: Maybe<Scalars['Boolean']['output']>;
  is_unique?: Maybe<Scalars['Boolean']['output']>;
  max_length?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numeric_precision?: Maybe<Scalars['Int']['output']>;
  numeric_scale?: Maybe<Scalars['Int']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

export type Extensions = {
  __typename?: 'extensions';
  displays?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  interfaces?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  modules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export enum Graphql_Sdl_Scope {
  Items = 'items',
  System = 'system'
}

export type Server_Info = {
  __typename?: 'server_info';
  project?: Maybe<Server_Info_Project>;
};

export type Server_Info_Project = {
  __typename?: 'server_info_project';
  custom_css?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<Scalars['String']['output']>;
  project_name?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Scalars['String']['output']>;
  public_foreground?: Maybe<Scalars['String']['output']>;
  public_note?: Maybe<Scalars['String']['output']>;
};

export type Users_Me_Tfa_Generate_Data = {
  __typename?: 'users_me_tfa_generate_data';
  otpauth_url?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

export type FieldDefaultsQueryVariables = Exact<{ [key: string]: never; }>;


export type FieldDefaultsQuery = { __typename?: 'Query', fields: Array<{ __typename?: 'directus_fields', collection?: string | null, field?: string | null, schema?: { __typename?: 'directus_fields_schema', default_value?: string | null } | null }> };


export const FieldDefaultsDocument = gql`
    query FieldDefaults {
  fields {
    collection
    field
    schema {
      default_value
    }
  }
}
    `;

/**
 * __useFieldDefaultsQuery__
 *
 * To run a query within a React component, call `useFieldDefaultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldDefaultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldDefaultsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFieldDefaultsQuery(baseOptions?: Apollo.QueryHookOptions<FieldDefaultsQuery, FieldDefaultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FieldDefaultsQuery, FieldDefaultsQueryVariables>(FieldDefaultsDocument, options);
      }
export function useFieldDefaultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FieldDefaultsQuery, FieldDefaultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FieldDefaultsQuery, FieldDefaultsQueryVariables>(FieldDefaultsDocument, options);
        }
export type FieldDefaultsQueryHookResult = ReturnType<typeof useFieldDefaultsQuery>;
export type FieldDefaultsLazyQueryHookResult = ReturnType<typeof useFieldDefaultsLazyQuery>;
export type FieldDefaultsQueryResult = Apollo.QueryResult<FieldDefaultsQuery, FieldDefaultsQueryVariables>;