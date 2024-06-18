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
  Hash: { input: any; output: any; }
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
  create_collections_item?: Maybe<Directus_Collections>;
  create_comment?: Maybe<Directus_Activity>;
  create_dashboards_item?: Maybe<Directus_Dashboards>;
  create_dashboards_items: Array<Directus_Dashboards>;
  create_fields_item?: Maybe<Directus_Fields>;
  create_files_item?: Maybe<Directus_Files>;
  create_files_items: Array<Directus_Files>;
  create_flows_item?: Maybe<Directus_Flows>;
  create_flows_items: Array<Directus_Flows>;
  create_folders_item?: Maybe<Directus_Folders>;
  create_folders_items: Array<Directus_Folders>;
  create_notifications_item?: Maybe<Directus_Notifications>;
  create_notifications_items: Array<Directus_Notifications>;
  create_operations_item?: Maybe<Directus_Operations>;
  create_operations_items: Array<Directus_Operations>;
  create_panels_item?: Maybe<Directus_Panels>;
  create_panels_items: Array<Directus_Panels>;
  create_permissions_item?: Maybe<Directus_Permissions>;
  create_permissions_items: Array<Directus_Permissions>;
  create_presets_item?: Maybe<Directus_Presets>;
  create_presets_items: Array<Directus_Presets>;
  create_relations_item?: Maybe<Directus_Relations>;
  create_roles_item?: Maybe<Directus_Roles>;
  create_roles_items: Array<Directus_Roles>;
  create_shares_item?: Maybe<Directus_Shares>;
  create_shares_items: Array<Directus_Shares>;
  create_users_item?: Maybe<Directus_Users>;
  create_users_items: Array<Directus_Users>;
  create_webhooks_item?: Maybe<Directus_Webhooks>;
  create_webhooks_items: Array<Directus_Webhooks>;
  delete_collections_item?: Maybe<Delete_Collection>;
  delete_comment?: Maybe<Delete_One>;
  delete_dashboards_item?: Maybe<Delete_One>;
  delete_dashboards_items?: Maybe<Delete_Many>;
  delete_fields_item?: Maybe<Delete_Field>;
  delete_files_item?: Maybe<Delete_One>;
  delete_files_items?: Maybe<Delete_Many>;
  delete_flows_item?: Maybe<Delete_One>;
  delete_flows_items?: Maybe<Delete_Many>;
  delete_folders_item?: Maybe<Delete_One>;
  delete_folders_items?: Maybe<Delete_Many>;
  delete_notifications_item?: Maybe<Delete_One>;
  delete_notifications_items?: Maybe<Delete_Many>;
  delete_operations_item?: Maybe<Delete_One>;
  delete_operations_items?: Maybe<Delete_Many>;
  delete_panels_item?: Maybe<Delete_One>;
  delete_panels_items?: Maybe<Delete_Many>;
  delete_permissions_item?: Maybe<Delete_One>;
  delete_permissions_items?: Maybe<Delete_Many>;
  delete_presets_item?: Maybe<Delete_One>;
  delete_presets_items?: Maybe<Delete_Many>;
  delete_relations_item?: Maybe<Delete_Relation>;
  delete_roles_item?: Maybe<Delete_One>;
  delete_roles_items?: Maybe<Delete_Many>;
  delete_shares_item?: Maybe<Delete_One>;
  delete_shares_items?: Maybe<Delete_Many>;
  delete_users_item?: Maybe<Delete_One>;
  delete_users_items?: Maybe<Delete_Many>;
  delete_webhooks_item?: Maybe<Delete_One>;
  delete_webhooks_items?: Maybe<Delete_Many>;
  import_file?: Maybe<Directus_Files>;
  update_collections_item?: Maybe<Directus_Collections>;
  update_comment?: Maybe<Directus_Activity>;
  update_dashboards_batch: Array<Directus_Dashboards>;
  update_dashboards_item?: Maybe<Directus_Dashboards>;
  update_dashboards_items: Array<Directus_Dashboards>;
  update_fields_item?: Maybe<Directus_Fields>;
  update_files_batch: Array<Directus_Files>;
  update_files_item?: Maybe<Directus_Files>;
  update_files_items: Array<Directus_Files>;
  update_flows_batch: Array<Directus_Flows>;
  update_flows_item?: Maybe<Directus_Flows>;
  update_flows_items: Array<Directus_Flows>;
  update_folders_batch: Array<Directus_Folders>;
  update_folders_item?: Maybe<Directus_Folders>;
  update_folders_items: Array<Directus_Folders>;
  update_notifications_batch: Array<Directus_Notifications>;
  update_notifications_item?: Maybe<Directus_Notifications>;
  update_notifications_items: Array<Directus_Notifications>;
  update_operations_batch: Array<Directus_Operations>;
  update_operations_item?: Maybe<Directus_Operations>;
  update_operations_items: Array<Directus_Operations>;
  update_panels_batch: Array<Directus_Panels>;
  update_panels_item?: Maybe<Directus_Panels>;
  update_panels_items: Array<Directus_Panels>;
  update_permissions_batch: Array<Directus_Permissions>;
  update_permissions_item?: Maybe<Directus_Permissions>;
  update_permissions_items: Array<Directus_Permissions>;
  update_presets_batch: Array<Directus_Presets>;
  update_presets_item?: Maybe<Directus_Presets>;
  update_presets_items: Array<Directus_Presets>;
  update_relations_item?: Maybe<Directus_Relations>;
  update_roles_batch: Array<Directus_Roles>;
  update_roles_item?: Maybe<Directus_Roles>;
  update_roles_items: Array<Directus_Roles>;
  update_settings?: Maybe<Directus_Settings>;
  update_shares_batch: Array<Directus_Shares>;
  update_shares_item?: Maybe<Directus_Shares>;
  update_shares_items: Array<Directus_Shares>;
  update_users_batch: Array<Directus_Users>;
  update_users_item?: Maybe<Directus_Users>;
  update_users_items: Array<Directus_Users>;
  update_users_me?: Maybe<Directus_Users>;
  update_webhooks_batch: Array<Directus_Webhooks>;
  update_webhooks_item?: Maybe<Directus_Webhooks>;
  update_webhooks_items: Array<Directus_Webhooks>;
  users_invite?: Maybe<Scalars['Boolean']['output']>;
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


export type MutationCreate_Collections_ItemArgs = {
  data: Create_Directus_Collections_Input;
};


export type MutationCreate_CommentArgs = {
  collection: Scalars['String']['input'];
  comment: Scalars['String']['input'];
  item: Scalars['ID']['input'];
};


export type MutationCreate_Dashboards_ItemArgs = {
  data: Create_Directus_Dashboards_Input;
};


export type MutationCreate_Dashboards_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Dashboards_Input>>;
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Fields_ItemArgs = {
  collection: Scalars['String']['input'];
  data: Create_Directus_Fields_Input;
};


export type MutationCreate_Files_ItemArgs = {
  data: Create_Directus_Files_Input;
};


export type MutationCreate_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Files_Input>>;
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Flows_ItemArgs = {
  data: Create_Directus_Flows_Input;
};


export type MutationCreate_Flows_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Flows_Input>>;
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Folders_ItemArgs = {
  data: Create_Directus_Folders_Input;
};


export type MutationCreate_Folders_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Folders_Input>>;
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Notifications_ItemArgs = {
  data: Create_Directus_Notifications_Input;
};


export type MutationCreate_Notifications_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Notifications_Input>>;
  filter?: InputMaybe<Directus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Operations_ItemArgs = {
  data: Create_Directus_Operations_Input;
};


export type MutationCreate_Operations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Operations_Input>>;
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Panels_ItemArgs = {
  data: Create_Directus_Panels_Input;
};


export type MutationCreate_Panels_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Panels_Input>>;
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Permissions_ItemArgs = {
  data: Create_Directus_Permissions_Input;
};


export type MutationCreate_Permissions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Permissions_Input>>;
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Presets_ItemArgs = {
  data: Create_Directus_Presets_Input;
};


export type MutationCreate_Presets_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Presets_Input>>;
  filter?: InputMaybe<Directus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Relations_ItemArgs = {
  data: Create_Directus_Relations_Input;
};


export type MutationCreate_Roles_ItemArgs = {
  data: Create_Directus_Roles_Input;
};


export type MutationCreate_Roles_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Roles_Input>>;
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Shares_ItemArgs = {
  data: Create_Directus_Shares_Input;
};


export type MutationCreate_Shares_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Shares_Input>>;
  filter?: InputMaybe<Directus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Users_ItemArgs = {
  data: Create_Directus_Users_Input;
};


export type MutationCreate_Users_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Users_Input>>;
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Webhooks_ItemArgs = {
  data: Create_Directus_Webhooks_Input;
};


export type MutationCreate_Webhooks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Webhooks_Input>>;
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Collections_ItemArgs = {
  collection: Scalars['String']['input'];
};


export type MutationDelete_CommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Dashboards_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Dashboards_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Fields_ItemArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type MutationDelete_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Flows_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Flows_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Folders_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Folders_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Notifications_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Notifications_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Operations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Operations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Panels_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Panels_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Permissions_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Permissions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Presets_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Presets_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Relations_ItemArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type MutationDelete_Roles_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Roles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Shares_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Shares_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Users_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Users_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Webhooks_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Webhooks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationImport_FileArgs = {
  data?: InputMaybe<Create_Directus_Files_Input>;
  url: Scalars['String']['input'];
};


export type MutationUpdate_Collections_ItemArgs = {
  collection: Scalars['String']['input'];
  data: Update_Directus_Collections_Input;
};


export type MutationUpdate_CommentArgs = {
  comment: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Dashboards_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Dashboards_Input>>;
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Dashboards_ItemArgs = {
  data: Update_Directus_Dashboards_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Dashboards_ItemsArgs = {
  data: Update_Directus_Dashboards_Input;
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Fields_ItemArgs = {
  collection: Scalars['String']['input'];
  data: Update_Directus_Fields_Input;
  field: Scalars['String']['input'];
};


export type MutationUpdate_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Files_Input>>;
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Files_ItemArgs = {
  data: Update_Directus_Files_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Files_ItemsArgs = {
  data: Update_Directus_Files_Input;
  filter?: InputMaybe<Directus_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Flows_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Flows_Input>>;
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Flows_ItemArgs = {
  data: Update_Directus_Flows_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Flows_ItemsArgs = {
  data: Update_Directus_Flows_Input;
  filter?: InputMaybe<Directus_Flows_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Folders_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Folders_Input>>;
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Folders_ItemArgs = {
  data: Update_Directus_Folders_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Folders_ItemsArgs = {
  data: Update_Directus_Folders_Input;
  filter?: InputMaybe<Directus_Folders_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Notifications_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Notifications_Input>>;
  filter?: InputMaybe<Directus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Notifications_ItemArgs = {
  data: Update_Directus_Notifications_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Notifications_ItemsArgs = {
  data: Update_Directus_Notifications_Input;
  filter?: InputMaybe<Directus_Notifications_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Operations_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Operations_Input>>;
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Operations_ItemArgs = {
  data: Update_Directus_Operations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Operations_ItemsArgs = {
  data: Update_Directus_Operations_Input;
  filter?: InputMaybe<Directus_Operations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Panels_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Panels_Input>>;
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Panels_ItemArgs = {
  data: Update_Directus_Panels_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Panels_ItemsArgs = {
  data: Update_Directus_Panels_Input;
  filter?: InputMaybe<Directus_Panels_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Permissions_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Permissions_Input>>;
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Permissions_ItemArgs = {
  data: Update_Directus_Permissions_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Permissions_ItemsArgs = {
  data: Update_Directus_Permissions_Input;
  filter?: InputMaybe<Directus_Permissions_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Presets_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Presets_Input>>;
  filter?: InputMaybe<Directus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Presets_ItemArgs = {
  data: Update_Directus_Presets_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Presets_ItemsArgs = {
  data: Update_Directus_Presets_Input;
  filter?: InputMaybe<Directus_Presets_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Relations_ItemArgs = {
  collection: Scalars['String']['input'];
  data: Update_Directus_Relations_Input;
  field: Scalars['String']['input'];
};


export type MutationUpdate_Roles_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Roles_Input>>;
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Roles_ItemArgs = {
  data: Update_Directus_Roles_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Roles_ItemsArgs = {
  data: Update_Directus_Roles_Input;
  filter?: InputMaybe<Directus_Roles_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_SettingsArgs = {
  data: Update_Directus_Settings_Input;
};


export type MutationUpdate_Shares_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Shares_Input>>;
  filter?: InputMaybe<Directus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Shares_ItemArgs = {
  data: Update_Directus_Shares_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Shares_ItemsArgs = {
  data: Update_Directus_Shares_Input;
  filter?: InputMaybe<Directus_Shares_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Users_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Users_Input>>;
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Users_ItemArgs = {
  data: Update_Directus_Users_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Users_ItemsArgs = {
  data: Update_Directus_Users_Input;
  filter?: InputMaybe<Directus_Users_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Users_MeArgs = {
  data?: InputMaybe<Update_Directus_Users_Input>;
};


export type MutationUpdate_Webhooks_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Webhooks_Input>>;
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Webhooks_ItemArgs = {
  data: Update_Directus_Webhooks_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Webhooks_ItemsArgs = {
  data: Update_Directus_Webhooks_Input;
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUsers_InviteArgs = {
  email: Scalars['String']['input'];
  invite_url?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
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
  activity: Array<Directus_Activity>;
  activity_aggregated: Array<Directus_Activity_Aggregated>;
  activity_by_id?: Maybe<Directus_Activity>;
  collections: Array<Directus_Collections>;
  collections_by_name?: Maybe<Directus_Collections>;
  dashboards: Array<Directus_Dashboards>;
  dashboards_aggregated: Array<Directus_Dashboards_Aggregated>;
  dashboards_by_id?: Maybe<Directus_Dashboards>;
  extensions?: Maybe<Extensions>;
  fields: Array<Directus_Fields>;
  fields_by_name?: Maybe<Directus_Fields>;
  fields_in_collection: Array<Directus_Fields>;
  files: Array<Directus_Files>;
  files_aggregated: Array<Directus_Files_Aggregated>;
  files_by_id?: Maybe<Directus_Files>;
  flows: Array<Directus_Flows>;
  flows_aggregated: Array<Directus_Flows_Aggregated>;
  flows_by_id?: Maybe<Directus_Flows>;
  folders: Array<Directus_Folders>;
  folders_aggregated: Array<Directus_Folders_Aggregated>;
  folders_by_id?: Maybe<Directus_Folders>;
  notifications: Array<Directus_Notifications>;
  notifications_aggregated: Array<Directus_Notifications_Aggregated>;
  notifications_by_id?: Maybe<Directus_Notifications>;
  operations: Array<Directus_Operations>;
  operations_aggregated: Array<Directus_Operations_Aggregated>;
  operations_by_id?: Maybe<Directus_Operations>;
  panels: Array<Directus_Panels>;
  panels_aggregated: Array<Directus_Panels_Aggregated>;
  panels_by_id?: Maybe<Directus_Panels>;
  permissions: Array<Directus_Permissions>;
  permissions_aggregated: Array<Directus_Permissions_Aggregated>;
  permissions_by_id?: Maybe<Directus_Permissions>;
  presets: Array<Directus_Presets>;
  presets_aggregated: Array<Directus_Presets_Aggregated>;
  presets_by_id?: Maybe<Directus_Presets>;
  relations: Array<Directus_Relations>;
  relations_by_name?: Maybe<Directus_Relations>;
  relations_in_collection: Array<Directus_Relations>;
  revisions: Array<Directus_Revisions>;
  revisions_aggregated: Array<Directus_Revisions_Aggregated>;
  revisions_by_id?: Maybe<Directus_Revisions>;
  roles: Array<Directus_Roles>;
  roles_aggregated: Array<Directus_Roles_Aggregated>;
  roles_by_id?: Maybe<Directus_Roles>;
  server_health?: Maybe<Scalars['JSON']['output']>;
  server_info?: Maybe<Server_Info>;
  server_ping?: Maybe<Scalars['String']['output']>;
  server_specs_graphql?: Maybe<Scalars['String']['output']>;
  server_specs_oas?: Maybe<Scalars['JSON']['output']>;
  settings?: Maybe<Directus_Settings>;
  shares: Array<Directus_Shares>;
  shares_aggregated: Array<Directus_Shares_Aggregated>;
  shares_by_id?: Maybe<Directus_Shares>;
  users: Array<Directus_Users>;
  users_aggregated: Array<Directus_Users_Aggregated>;
  users_by_id?: Maybe<Directus_Users>;
  users_me?: Maybe<Directus_Users>;
  webhooks: Array<Directus_Webhooks>;
  webhooks_aggregated: Array<Directus_Webhooks_Aggregated>;
  webhooks_by_id?: Maybe<Directus_Webhooks>;
};


export type QueryActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActivity_AggregatedArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActivity_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollections_By_NameArgs = {
  name: Scalars['String']['input'];
};


export type QueryDashboardsArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDashboards_AggregatedArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDashboards_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFields_By_NameArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type QueryFields_In_CollectionArgs = {
  collection: Scalars['String']['input'];
};


export type QueryFilesArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiles_AggregatedArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiles_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFlowsArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFlows_AggregatedArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFlows_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFoldersArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFolders_AggregatedArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFolders_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationsArgs = {
  filter?: InputMaybe<Directus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNotifications_AggregatedArgs = {
  filter?: InputMaybe<Directus_Notifications_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNotifications_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOperations_AggregatedArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOperations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPanels_AggregatedArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPanels_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionsArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPermissions_AggregatedArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPermissions_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPresetsArgs = {
  filter?: InputMaybe<Directus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPresets_AggregatedArgs = {
  filter?: InputMaybe<Directus_Presets_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPresets_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRelations_By_NameArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type QueryRelations_In_CollectionArgs = {
  collection: Scalars['String']['input'];
};


export type QueryRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRevisions_AggregatedArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRevisions_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRoles_AggregatedArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRoles_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<Graphql_Sdl_Scope>;
};


export type QuerySharesArgs = {
  filter?: InputMaybe<Directus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShares_AggregatedArgs = {
  filter?: InputMaybe<Directus_Shares_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShares_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsers_AggregatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsers_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhooksArgs = {
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebhooks_AggregatedArgs = {
  filter?: InputMaybe<Directus_Webhooks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebhooks_By_IdArgs = {
  id: Scalars['ID']['input'];
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

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Directus_Collections_Fields_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Directus_Fields_Meta_Input>;
  schema?: InputMaybe<Directus_Fields_Schema_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Directus_Collections_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Create_Directus_Collections_Fields_Input>>;
  meta?: InputMaybe<Directus_Collections_Meta_Input>;
  schema?: InputMaybe<Directus_Collections_Schema_Input>;
};

export type Create_Directus_Dashboards_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  panels?: InputMaybe<Array<InputMaybe<Create_Directus_Panels_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Fields_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Directus_Fields_Meta_Input>;
  schema?: InputMaybe<Directus_Fields_Schema_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download: Scalars['String']['input'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Directus_Flows_Input = {
  accountability?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  operation?: InputMaybe<Create_Directus_Operations_Input>;
  operations?: InputMaybe<Array<InputMaybe<Create_Directus_Operations_Input>>>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Notifications_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Create_Directus_Users_Input>;
  sender?: InputMaybe<Create_Directus_Users_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['Date']['input']>;
};

export type Create_Directus_Operations_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  flow?: InputMaybe<Create_Directus_Flows_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x: Scalars['Int']['input'];
  position_y: Scalars['Int']['input'];
  reject?: InputMaybe<Create_Directus_Operations_Input>;
  resolve?: InputMaybe<Create_Directus_Operations_Input>;
  type: Scalars['String']['input'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Panels_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  dashboard?: InputMaybe<Create_Directus_Dashboards_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  height: Scalars['Int']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x: Scalars['Int']['input'];
  position_y: Scalars['Int']['input'];
  show_header: Scalars['Boolean']['input'];
  type: Scalars['String']['input'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  width: Scalars['Int']['input'];
};

export type Create_Directus_Permissions_Input = {
  action: Scalars['String']['input'];
  collection: Scalars['String']['input'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Create_Directus_Presets_Input = {
  bookmark?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_options?: InputMaybe<Scalars['JSON']['input']>;
  layout_query?: InputMaybe<Scalars['JSON']['input']>;
  refresh_interval?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Relations_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Directus_Relations_Meta_Input>;
  related_collection?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Directus_Relations_Schema_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean']['input'];
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enforce_tfa: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Shares_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: InputMaybe<Scalars['Hash']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  times_used?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Create_Directus_Webhooks_Input = {
  actions: Array<InputMaybe<Scalars['String']['input']>>;
  collections: Array<InputMaybe<Scalars['String']['input']>>;
  data?: InputMaybe<Scalars['Boolean']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
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

export type Delete_Collection = {
  __typename?: 'delete_collection';
  collection?: Maybe<Scalars['String']['output']>;
};

export type Delete_Field = {
  __typename?: 'delete_field';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type Delete_Relation = {
  __typename?: 'delete_relation';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
};

export type Directus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  revisions?: Maybe<Array<Maybe<Directus_Revisions>>>;
  revisions_func?: Maybe<Count_Functions>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
  user?: Maybe<Directus_Users>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Aggregated = {
  __typename?: 'directus_activity_aggregated';
  avg?: Maybe<Directus_Activity_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Activity_Aggregated_Fields>;
  count?: Maybe<Directus_Activity_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Activity_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Activity_Aggregated_Fields>;
  min?: Maybe<Directus_Activity_Aggregated_Fields>;
  sum?: Maybe<Directus_Activity_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Activity_Aggregated_Fields>;
};

export type Directus_Activity_Aggregated_Count = {
  __typename?: 'directus_activity_aggregated_count';
  action?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  origin?: Maybe<Scalars['Int']['output']>;
  revisions?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['Int']['output']>;
  user_agent?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Activity_Aggregated_Fields = {
  __typename?: 'directus_activity_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  comment?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ip?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  origin?: InputMaybe<String_Filter_Operators>;
  revisions?: InputMaybe<Directus_Revisions_Filter>;
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Collections = {
  __typename?: 'directus_collections';
  collection?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Directus_Collections_Meta>;
  schema?: Maybe<Directus_Collections_Schema>;
};

export type Directus_Collections_Meta = {
  __typename?: 'directus_collections_meta';
  accountability?: Maybe<Scalars['String']['output']>;
  archive_app_filter: Scalars['Boolean']['output'];
  archive_field?: Maybe<Scalars['String']['output']>;
  archive_value?: Maybe<Scalars['String']['output']>;
  collapse: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  display_template?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  item_duplication_fields?: Maybe<Scalars['JSON']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  singleton: Scalars['Boolean']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  sort_field?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  unarchive_value?: Maybe<Scalars['String']['output']>;
};

export type Directus_Collections_Meta_Input = {
  accountability?: InputMaybe<Scalars['String']['input']>;
  archive_app_filter: Scalars['Boolean']['input'];
  archive_field?: InputMaybe<Scalars['String']['input']>;
  archive_value?: InputMaybe<Scalars['String']['input']>;
  collapse: Scalars['String']['input'];
  collection: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  display_template?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  hidden: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  item_duplication_fields?: InputMaybe<Scalars['JSON']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  singleton: Scalars['Boolean']['input'];
  sort?: InputMaybe<Scalars['Int']['input']>;
  sort_field?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Scalars['JSON']['input']>;
  unarchive_value?: InputMaybe<Scalars['String']['input']>;
};

export type Directus_Collections_Schema = {
  __typename?: 'directus_collections_schema';
  comment?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Directus_Collections_Schema_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Directus_Dashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<Directus_Panels>>>;
  panels_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Dashboards_Aggregated = {
  __typename?: 'directus_dashboards_aggregated';
  count?: Maybe<Directus_Dashboards_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Dashboards_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Dashboards_Aggregated_Count = {
  __typename?: 'directus_dashboards_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
  panels?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  panels?: InputMaybe<Directus_Panels_Filter>;
  panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
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

export type Directus_Fields_Meta_Input = {
  collection: Scalars['String']['input'];
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  display?: InputMaybe<Scalars['String']['input']>;
  display_options?: InputMaybe<Scalars['JSON']['input']>;
  field: Scalars['String']['input'];
  group?: InputMaybe<Scalars['String']['input']>;
  hidden: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
  interface?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  readonly: Scalars['Boolean']['input'];
  required?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  special?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  translations?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
  validation_message?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
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

export type Directus_Fields_Schema_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  data_type?: InputMaybe<Scalars['String']['input']>;
  default_value?: InputMaybe<Scalars['String']['input']>;
  foreign_key_column?: InputMaybe<Scalars['String']['input']>;
  foreign_key_table?: InputMaybe<Scalars['String']['input']>;
  has_auto_increment?: InputMaybe<Scalars['Boolean']['input']>;
  is_nullable?: InputMaybe<Scalars['Boolean']['input']>;
  is_primary_key?: InputMaybe<Scalars['Boolean']['input']>;
  is_unique?: InputMaybe<Scalars['Boolean']['input']>;
  max_length?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numeric_precision?: InputMaybe<Scalars['Int']['input']>;
  numeric_scale?: InputMaybe<Scalars['Int']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
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
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Aggregated = {
  __typename?: 'directus_files_aggregated';
  avg?: Maybe<Directus_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Files_Aggregated_Fields>;
  count?: Maybe<Directus_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Files_Aggregated_Fields>;
  min?: Maybe<Directus_Files_Aggregated_Fields>;
  sum?: Maybe<Directus_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Files_Aggregated_Fields>;
};

export type Directus_Files_Aggregated_Count = {
  __typename?: 'directus_files_aggregated_count';
  charset?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['Int']['output']>;
  filename_disk?: Maybe<Scalars['Int']['output']>;
  filename_download?: Maybe<Scalars['Int']['output']>;
  filesize?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['Int']['output']>;
  modified_by?: Maybe<Scalars['Int']['output']>;
  modified_on?: Maybe<Scalars['Int']['output']>;
  storage?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  uploaded_by?: Maybe<Scalars['Int']['output']>;
  uploaded_on?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Aggregated_Fields = {
  __typename?: 'directus_files_aggregated_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
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
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Flows = {
  __typename?: 'directus_flows';
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<Directus_Operations>;
  operations?: Maybe<Array<Maybe<Directus_Operations>>>;
  operations_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Aggregated = {
  __typename?: 'directus_flows_aggregated';
  count?: Maybe<Directus_Flows_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Flows_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Flows_Aggregated_Count = {
  __typename?: 'directus_flows_aggregated_count';
  accountability?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  operation?: Maybe<Scalars['Int']['output']>;
  operations?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  trigger?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  accountability?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  operation?: InputMaybe<Directus_Operations_Filter>;
  operations?: InputMaybe<Directus_Operations_Filter>;
  operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  trigger?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Aggregated = {
  __typename?: 'directus_folders_aggregated';
  count?: Maybe<Directus_Folders_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Folders_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Folders_Aggregated_Count = {
  __typename?: 'directus_folders_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Notifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Directus_Users>;
  sender?: Maybe<Directus_Users>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Aggregated = {
  __typename?: 'directus_notifications_aggregated';
  avg?: Maybe<Directus_Notifications_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Notifications_Aggregated_Fields>;
  count?: Maybe<Directus_Notifications_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Notifications_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Notifications_Aggregated_Fields>;
  min?: Maybe<Directus_Notifications_Aggregated_Fields>;
  sum?: Maybe<Directus_Notifications_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Notifications_Aggregated_Fields>;
};

export type Directus_Notifications_Aggregated_Count = {
  __typename?: 'directus_notifications_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Notifications_Aggregated_Fields = {
  __typename?: 'directus_notifications_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Notifications_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Notifications_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Notifications_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  message?: InputMaybe<String_Filter_Operators>;
  recipient?: InputMaybe<Directus_Users_Filter>;
  sender?: InputMaybe<Directus_Users_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  subject?: InputMaybe<String_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
};

export type Directus_Operations = {
  __typename?: 'directus_operations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  flow?: Maybe<Directus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject?: Maybe<Directus_Operations>;
  resolve?: Maybe<Directus_Operations>;
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Operations_Aggregated = {
  __typename?: 'directus_operations_aggregated';
  avg?: Maybe<Directus_Operations_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Operations_Aggregated_Fields>;
  count?: Maybe<Directus_Operations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Operations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Operations_Aggregated_Fields>;
  min?: Maybe<Directus_Operations_Aggregated_Fields>;
  sum?: Maybe<Directus_Operations_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Operations_Aggregated_Fields>;
};

export type Directus_Operations_Aggregated_Count = {
  __typename?: 'directus_operations_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  flow?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  position_x?: Maybe<Scalars['Int']['output']>;
  position_y?: Maybe<Scalars['Int']['output']>;
  reject?: Maybe<Scalars['Int']['output']>;
  resolve?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Operations_Aggregated_Fields = {
  __typename?: 'directus_operations_aggregated_fields';
  position_x?: Maybe<Scalars['Float']['output']>;
  position_y?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Panels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<Directus_Dashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  width: Scalars['Int']['output'];
};


export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Panels_Aggregated = {
  __typename?: 'directus_panels_aggregated';
  avg?: Maybe<Directus_Panels_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Panels_Aggregated_Fields>;
  count?: Maybe<Directus_Panels_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Panels_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Panels_Aggregated_Fields>;
  min?: Maybe<Directus_Panels_Aggregated_Fields>;
  sum?: Maybe<Directus_Panels_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Panels_Aggregated_Fields>;
};

export type Directus_Panels_Aggregated_Count = {
  __typename?: 'directus_panels_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  dashboard?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  position_x?: Maybe<Scalars['Int']['output']>;
  position_y?: Maybe<Scalars['Int']['output']>;
  show_header?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Panels_Aggregated_Fields = {
  __typename?: 'directus_panels_aggregated_fields';
  height?: Maybe<Scalars['Float']['output']>;
  position_x?: Maybe<Scalars['Float']['output']>;
  position_y?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<Count_Functions>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<Count_Functions>;
  role?: Maybe<Directus_Roles>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Permissions_Aggregated = {
  __typename?: 'directus_permissions_aggregated';
  avg?: Maybe<Directus_Permissions_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Permissions_Aggregated_Fields>;
  count?: Maybe<Directus_Permissions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Permissions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Permissions_Aggregated_Fields>;
  min?: Maybe<Directus_Permissions_Aggregated_Fields>;
  sum?: Maybe<Directus_Permissions_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Permissions_Aggregated_Fields>;
};

export type Directus_Permissions_Aggregated_Count = {
  __typename?: 'directus_permissions_aggregated_count';
  action?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  fields?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Scalars['Int']['output']>;
  presets?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  validation?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Permissions_Aggregated_Fields = {
  __typename?: 'directus_permissions_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Presets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<Count_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<Count_Functions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<Count_Functions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Directus_Roles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Aggregated = {
  __typename?: 'directus_presets_aggregated';
  avg?: Maybe<Directus_Presets_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Presets_Aggregated_Fields>;
  count?: Maybe<Directus_Presets_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Presets_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Presets_Aggregated_Fields>;
  min?: Maybe<Directus_Presets_Aggregated_Fields>;
  sum?: Maybe<Directus_Presets_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Presets_Aggregated_Fields>;
};

export type Directus_Presets_Aggregated_Count = {
  __typename?: 'directus_presets_aggregated_count';
  bookmark?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  filter?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  layout?: Maybe<Scalars['Int']['output']>;
  layout_options?: Maybe<Scalars['Int']['output']>;
  layout_query?: Maybe<Scalars['Int']['output']>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  search?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Presets_Aggregated_Fields = {
  __typename?: 'directus_presets_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  refresh_interval?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Presets_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Presets_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Presets_Filter>>>;
  bookmark?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  filter?: InputMaybe<String_Filter_Operators>;
  filter_func?: InputMaybe<Count_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  layout?: InputMaybe<String_Filter_Operators>;
  layout_options?: InputMaybe<String_Filter_Operators>;
  layout_options_func?: InputMaybe<Count_Function_Filter_Operators>;
  layout_query?: InputMaybe<String_Filter_Operators>;
  layout_query_func?: InputMaybe<Count_Function_Filter_Operators>;
  refresh_interval?: InputMaybe<Number_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  search?: InputMaybe<String_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Relations = {
  __typename?: 'directus_relations';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Directus_Relations_Meta>;
  related_collection?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<Directus_Relations_Schema>;
};

export type Directus_Relations_Meta = {
  __typename?: 'directus_relations_meta';
  id?: Maybe<Scalars['Int']['output']>;
  junction_field?: Maybe<Scalars['String']['output']>;
  many_collection?: Maybe<Scalars['String']['output']>;
  many_field?: Maybe<Scalars['String']['output']>;
  one_allowed_collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  one_collection?: Maybe<Scalars['String']['output']>;
  one_collection_field?: Maybe<Scalars['String']['output']>;
  one_deselect_action?: Maybe<Scalars['String']['output']>;
  one_field?: Maybe<Scalars['String']['output']>;
  sort_field?: Maybe<Scalars['String']['output']>;
};

export type Directus_Relations_Meta_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  junction_field?: InputMaybe<Scalars['String']['input']>;
  many_collection?: InputMaybe<Scalars['String']['input']>;
  many_field?: InputMaybe<Scalars['String']['input']>;
  one_allowed_collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  one_collection?: InputMaybe<Scalars['String']['input']>;
  one_collection_field?: InputMaybe<Scalars['String']['input']>;
  one_deselect_action?: InputMaybe<Scalars['String']['input']>;
  one_field?: InputMaybe<Scalars['String']['input']>;
  sort_field?: InputMaybe<Scalars['String']['input']>;
};

export type Directus_Relations_Schema = {
  __typename?: 'directus_relations_schema';
  column: Scalars['String']['output'];
  constraint_name?: Maybe<Scalars['String']['output']>;
  foreign_key_column: Scalars['String']['output'];
  foreign_key_table: Scalars['String']['output'];
  on_delete: Scalars['String']['output'];
  on_update: Scalars['String']['output'];
  table: Scalars['String']['output'];
};

export type Directus_Relations_Schema_Input = {
  column: Scalars['String']['input'];
  constraint_name?: InputMaybe<Scalars['String']['input']>;
  foreign_key_column: Scalars['String']['input'];
  foreign_key_table: Scalars['String']['input'];
  on_delete: Scalars['String']['input'];
  on_update: Scalars['String']['input'];
  table: Scalars['String']['input'];
};

export type Directus_Revisions = {
  __typename?: 'directus_revisions';
  activity?: Maybe<Directus_Activity>;
  collection: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<Count_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent?: Maybe<Directus_Revisions>;
};


export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Revisions_Aggregated = {
  __typename?: 'directus_revisions_aggregated';
  avg?: Maybe<Directus_Revisions_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Revisions_Aggregated_Fields>;
  count?: Maybe<Directus_Revisions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Revisions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Revisions_Aggregated_Fields>;
  min?: Maybe<Directus_Revisions_Aggregated_Fields>;
  sum?: Maybe<Directus_Revisions_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Revisions_Aggregated_Fields>;
};

export type Directus_Revisions_Aggregated_Count = {
  __typename?: 'directus_revisions_aggregated_count';
  activity?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Scalars['Int']['output']>;
  delta?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Revisions_Aggregated_Fields = {
  __typename?: 'directus_revisions_aggregated_fields';
  activity?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean']['output'];
  app_access?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enforce_tfa: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Aggregated = {
  __typename?: 'directus_roles_aggregated';
  count?: Maybe<Directus_Roles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Roles_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Roles_Aggregated_Count = {
  __typename?: 'directus_roles_aggregated_count';
  admin_access?: Maybe<Scalars['Int']['output']>;
  app_access?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  enforce_tfa?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_access?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Settings = {
  __typename?: 'directus_settings';
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<Count_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<Count_Functions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<Count_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<Directus_Files>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Directus_Files>;
  public_foreground?: Maybe<Directus_Files>;
  public_note?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<Count_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<Directus_Folders>;
  translation_strings?: Maybe<Scalars['JSON']['output']>;
  translation_strings_func?: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares = {
  __typename?: 'directus_shares';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<Directus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Aggregated = {
  __typename?: 'directus_shares_aggregated';
  avg?: Maybe<Directus_Shares_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Shares_Aggregated_Fields>;
  count?: Maybe<Directus_Shares_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Shares_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Shares_Aggregated_Fields>;
  min?: Maybe<Directus_Shares_Aggregated_Fields>;
  sum?: Maybe<Directus_Shares_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Shares_Aggregated_Fields>;
};

export type Directus_Shares_Aggregated_Count = {
  __typename?: 'directus_shares_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Shares_Aggregated_Fields = {
  __typename?: 'directus_shares_aggregated_fields';
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Float']['output']>;
  times_used?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Shares_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Shares_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Shares_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_end?: InputMaybe<Date_Filter_Operators>;
  date_end_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_start?: InputMaybe<Date_Filter_Operators>;
  date_start_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  max_uses?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  times_used?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Aggregated = {
  __typename?: 'directus_users_aggregated';
  count?: Maybe<Directus_Users_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Users_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Users_Aggregated_Count = {
  __typename?: 'directus_users_aggregated_count';
  auth_data?: Maybe<Scalars['Int']['output']>;
  avatar?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  email_notifications?: Maybe<Scalars['Int']['output']>;
  external_identifier?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  last_access?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['Int']['output']>;
  last_page?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['Int']['output']>;
  provider?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  tfa_secret?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data?: Maybe<Scalars['Boolean']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  headers_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Directus_Webhooks_Aggregated = {
  __typename?: 'directus_webhooks_aggregated';
  avg?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  count?: Maybe<Directus_Webhooks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Webhooks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  min?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  sum?: Maybe<Directus_Webhooks_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Webhooks_Aggregated_Fields>;
};

export type Directus_Webhooks_Aggregated_Count = {
  __typename?: 'directus_webhooks_aggregated_count';
  actions?: Maybe<Scalars['Int']['output']>;
  collections?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Scalars['Int']['output']>;
  headers?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  method?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Webhooks_Aggregated_Fields = {
  __typename?: 'directus_webhooks_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Webhooks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Webhooks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Webhooks_Filter>>>;
  actions?: InputMaybe<String_Filter_Operators>;
  collections?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<Boolean_Filter_Operators>;
  headers?: InputMaybe<String_Filter_Operators>;
  headers_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  method?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
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

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
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

export type Server_Info = {
  __typename?: 'server_info';
  directus?: Maybe<Server_Info_Directus>;
  flows?: Maybe<Server_Info_Flows>;
  node?: Maybe<Server_Info_Node>;
  os?: Maybe<Server_Info_Os>;
  project?: Maybe<Server_Info_Project>;
  rateLimit?: Maybe<Scalars['Boolean']['output']>;
  rateLimitGlobal?: Maybe<Scalars['Boolean']['output']>;
};

export type Server_Info_Directus = {
  __typename?: 'server_info_directus';
  version?: Maybe<Scalars['String']['output']>;
};

export type Server_Info_Flows = {
  __typename?: 'server_info_flows';
  execAllowedModules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Server_Info_Node = {
  __typename?: 'server_info_node';
  uptime?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Server_Info_Os = {
  __typename?: 'server_info_os';
  totalmem?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['String']['output']>;
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

export type Update_Directus_Collections_Input = {
  meta?: InputMaybe<Directus_Collections_Meta_Input>;
};

export type Update_Directus_Dashboards_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  panels?: InputMaybe<Array<InputMaybe<Update_Directus_Panels_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Fields_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Directus_Fields_Meta_Input>;
  schema?: InputMaybe<Directus_Fields_Schema_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Flows_Input = {
  accountability?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<Update_Directus_Operations_Input>;
  operations?: InputMaybe<Array<InputMaybe<Update_Directus_Operations_Input>>>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Notifications_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Update_Directus_Users_Input>;
  sender?: InputMaybe<Update_Directus_Users_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Date']['input']>;
};

export type Update_Directus_Operations_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  flow?: InputMaybe<Update_Directus_Flows_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x?: InputMaybe<Scalars['Int']['input']>;
  position_y?: InputMaybe<Scalars['Int']['input']>;
  reject?: InputMaybe<Update_Directus_Operations_Input>;
  resolve?: InputMaybe<Update_Directus_Operations_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Panels_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  dashboard?: InputMaybe<Update_Directus_Dashboards_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x?: InputMaybe<Scalars['Int']['input']>;
  position_y?: InputMaybe<Scalars['Int']['input']>;
  show_header?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Update_Directus_Presets_Input = {
  bookmark?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_options?: InputMaybe<Scalars['JSON']['input']>;
  layout_query?: InputMaybe<Scalars['JSON']['input']>;
  refresh_interval?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Relations_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Directus_Relations_Meta_Input>;
  related_collection?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Directus_Relations_Schema_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>;
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Settings_Input = {
  auth_login_attempts?: InputMaybe<Scalars['Int']['input']>;
  auth_password_policy?: InputMaybe<Scalars['String']['input']>;
  basemaps?: InputMaybe<Scalars['JSON']['input']>;
  custom_aspect_ratios?: InputMaybe<Scalars['JSON']['input']>;
  custom_css?: InputMaybe<Scalars['String']['input']>;
  default_language?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mapbox_key?: InputMaybe<Scalars['String']['input']>;
  module_bar?: InputMaybe<Scalars['JSON']['input']>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: InputMaybe<Scalars['String']['input']>;
  project_descriptor?: InputMaybe<Scalars['String']['input']>;
  project_logo?: InputMaybe<Update_Directus_Files_Input>;
  project_name?: InputMaybe<Scalars['String']['input']>;
  project_url?: InputMaybe<Scalars['String']['input']>;
  public_background?: InputMaybe<Update_Directus_Files_Input>;
  public_foreground?: InputMaybe<Update_Directus_Files_Input>;
  public_note?: InputMaybe<Scalars['String']['input']>;
  storage_asset_presets?: InputMaybe<Scalars['JSON']['input']>;
  storage_asset_transform?: InputMaybe<Scalars['String']['input']>;
  storage_default_folder?: InputMaybe<Update_Directus_Folders_Input>;
  translation_strings?: InputMaybe<Scalars['JSON']['input']>;
};

export type Update_Directus_Shares_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: InputMaybe<Scalars['Hash']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  times_used?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Update_Directus_Webhooks_Input = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data?: InputMaybe<Scalars['Boolean']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
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