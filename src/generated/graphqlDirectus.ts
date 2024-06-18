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
};

export type Mutation = {
  __typename?: 'Mutation';
  create_apps_item?: Maybe<Apps>;
  create_apps_items: Array<Apps>;
  create_article_cards_item?: Maybe<Article_Cards>;
  create_article_cards_items: Array<Article_Cards>;
  create_callouts_item?: Maybe<Callouts>;
  create_callouts_items: Array<Callouts>;
  create_case_studies_item?: Maybe<Case_Studies>;
  create_case_studies_items: Array<Case_Studies>;
  create_collapsible_lists_item?: Maybe<Collapsible_Lists>;
  create_collapsible_lists_items: Array<Collapsible_Lists>;
  create_collapsible_lists_items_item?: Maybe<Collapsible_Lists_Items>;
  create_collapsible_lists_items_items: Array<Collapsible_Lists_Items>;
  create_collapsibles_item?: Maybe<Collapsibles>;
  create_collapsibles_items: Array<Collapsibles>;
  create_company_logo_lists_item?: Maybe<Company_Logo_Lists>;
  create_company_logo_lists_items: Array<Company_Logo_Lists>;
  create_company_logo_lists_items_1_item?: Maybe<Company_Logo_Lists_Items_1>;
  create_company_logo_lists_items_1_items: Array<Company_Logo_Lists_Items_1>;
  create_company_logo_lists_items_2_item?: Maybe<Company_Logo_Lists_Items_2>;
  create_company_logo_lists_items_2_items: Array<Company_Logo_Lists_Items_2>;
  create_company_logo_lists_items_item?: Maybe<Company_Logo_Lists_Items>;
  create_company_logo_lists_items_items: Array<Company_Logo_Lists_Items>;
  create_company_logos_item?: Maybe<Company_Logos>;
  create_company_logos_items: Array<Company_Logos>;
  create_events_item?: Maybe<Events>;
  create_events_items: Array<Events>;
  create_faqs_item?: Maybe<Faqs>;
  create_faqs_items: Array<Faqs>;
  create_featured_contributors_item?: Maybe<Featured_Contributors>;
  create_featured_contributors_items: Array<Featured_Contributors>;
  create_job_listings_item?: Maybe<Job_Listings>;
  create_job_listings_items: Array<Job_Listings>;
  create_markdown_pages_item?: Maybe<Markdown_Pages>;
  create_markdown_pages_items: Array<Markdown_Pages>;
  create_nav_link_item?: Maybe<Nav_Link>;
  create_nav_link_items: Array<Nav_Link>;
  create_nav_list_item?: Maybe<Nav_List>;
  create_nav_list_items: Array<Nav_List>;
  create_product_page_items_item?: Maybe<Product_Page_Items>;
  create_product_page_items_items: Array<Product_Page_Items>;
  create_product_pages_item?: Maybe<Product_Pages>;
  create_product_pages_items: Array<Product_Pages>;
  create_quote_lists_item?: Maybe<Quote_Lists>;
  create_quote_lists_items: Array<Quote_Lists>;
  create_quote_lists_items_item?: Maybe<Quote_Lists_Items>;
  create_quote_lists_items_items: Array<Quote_Lists_Items>;
  create_quotes_item?: Maybe<Quotes>;
  create_quotes_items: Array<Quotes>;
  create_site_settings_company_logo_lists_1_item?: Maybe<Site_Settings_Company_Logo_Lists_1>;
  create_site_settings_company_logo_lists_1_items: Array<Site_Settings_Company_Logo_Lists_1>;
  create_site_settings_company_logo_lists_item?: Maybe<Site_Settings_Company_Logo_Lists>;
  create_site_settings_company_logo_lists_items: Array<Site_Settings_Company_Logo_Lists>;
  create_site_settings_company_logos_item?: Maybe<Site_Settings_Company_Logos>;
  create_site_settings_company_logos_items: Array<Site_Settings_Company_Logos>;
  create_site_settings_main_nav_item?: Maybe<Site_Settings_Main_Nav>;
  create_site_settings_main_nav_items: Array<Site_Settings_Main_Nav>;
  create_site_settings_nav_list_item?: Maybe<Site_Settings_Nav_List>;
  create_site_settings_nav_list_items: Array<Site_Settings_Nav_List>;
  create_solutions_pages_item?: Maybe<Solutions_Pages>;
  create_solutions_pages_items: Array<Solutions_Pages>;
  create_stacks_item?: Maybe<Stacks>;
  create_stacks_items: Array<Stacks>;
  create_team_members_item?: Maybe<Team_Members>;
  create_team_members_items: Array<Team_Members>;
  delete_apps_item?: Maybe<Delete_One>;
  delete_apps_items?: Maybe<Delete_Many>;
  delete_article_cards_item?: Maybe<Delete_One>;
  delete_article_cards_items?: Maybe<Delete_Many>;
  delete_callouts_item?: Maybe<Delete_One>;
  delete_callouts_items?: Maybe<Delete_Many>;
  delete_case_studies_item?: Maybe<Delete_One>;
  delete_case_studies_items?: Maybe<Delete_Many>;
  delete_collapsible_lists_item?: Maybe<Delete_One>;
  delete_collapsible_lists_items?: Maybe<Delete_Many>;
  delete_collapsible_lists_items_item?: Maybe<Delete_One>;
  delete_collapsible_lists_items_items?: Maybe<Delete_Many>;
  delete_collapsibles_item?: Maybe<Delete_One>;
  delete_collapsibles_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_item?: Maybe<Delete_One>;
  delete_company_logo_lists_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_items_1_item?: Maybe<Delete_One>;
  delete_company_logo_lists_items_1_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_items_2_item?: Maybe<Delete_One>;
  delete_company_logo_lists_items_2_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_items_item?: Maybe<Delete_One>;
  delete_company_logo_lists_items_items?: Maybe<Delete_Many>;
  delete_company_logos_item?: Maybe<Delete_One>;
  delete_company_logos_items?: Maybe<Delete_Many>;
  delete_events_item?: Maybe<Delete_One>;
  delete_events_items?: Maybe<Delete_Many>;
  delete_faqs_item?: Maybe<Delete_One>;
  delete_faqs_items?: Maybe<Delete_Many>;
  delete_featured_contributors_item?: Maybe<Delete_One>;
  delete_featured_contributors_items?: Maybe<Delete_Many>;
  delete_job_listings_item?: Maybe<Delete_One>;
  delete_job_listings_items?: Maybe<Delete_Many>;
  delete_markdown_pages_item?: Maybe<Delete_One>;
  delete_markdown_pages_items?: Maybe<Delete_Many>;
  delete_nav_link_item?: Maybe<Delete_One>;
  delete_nav_link_items?: Maybe<Delete_Many>;
  delete_nav_list_item?: Maybe<Delete_One>;
  delete_nav_list_items?: Maybe<Delete_Many>;
  delete_product_page_items_item?: Maybe<Delete_One>;
  delete_product_page_items_items?: Maybe<Delete_Many>;
  delete_product_pages_item?: Maybe<Delete_One>;
  delete_product_pages_items?: Maybe<Delete_Many>;
  delete_quote_lists_item?: Maybe<Delete_One>;
  delete_quote_lists_items?: Maybe<Delete_Many>;
  delete_quote_lists_items_item?: Maybe<Delete_One>;
  delete_quote_lists_items_items?: Maybe<Delete_Many>;
  delete_quotes_item?: Maybe<Delete_One>;
  delete_quotes_items?: Maybe<Delete_Many>;
  delete_site_settings_company_logo_lists_1_item?: Maybe<Delete_One>;
  delete_site_settings_company_logo_lists_1_items?: Maybe<Delete_Many>;
  delete_site_settings_company_logo_lists_item?: Maybe<Delete_One>;
  delete_site_settings_company_logo_lists_items?: Maybe<Delete_Many>;
  delete_site_settings_company_logos_item?: Maybe<Delete_One>;
  delete_site_settings_company_logos_items?: Maybe<Delete_Many>;
  delete_site_settings_main_nav_item?: Maybe<Delete_One>;
  delete_site_settings_main_nav_items?: Maybe<Delete_Many>;
  delete_site_settings_nav_list_item?: Maybe<Delete_One>;
  delete_site_settings_nav_list_items?: Maybe<Delete_Many>;
  delete_solutions_pages_item?: Maybe<Delete_One>;
  delete_solutions_pages_items?: Maybe<Delete_Many>;
  delete_stacks_item?: Maybe<Delete_One>;
  delete_stacks_items?: Maybe<Delete_Many>;
  delete_team_members_item?: Maybe<Delete_One>;
  delete_team_members_items?: Maybe<Delete_Many>;
  update_app_defaults?: Maybe<App_Defaults>;
  update_apps_batch: Array<Apps>;
  update_apps_item?: Maybe<Apps>;
  update_apps_items: Array<Apps>;
  update_article_cards_batch: Array<Article_Cards>;
  update_article_cards_item?: Maybe<Article_Cards>;
  update_article_cards_items: Array<Article_Cards>;
  update_callouts_batch: Array<Callouts>;
  update_callouts_item?: Maybe<Callouts>;
  update_callouts_items: Array<Callouts>;
  update_case_studies_batch: Array<Case_Studies>;
  update_case_studies_item?: Maybe<Case_Studies>;
  update_case_studies_items: Array<Case_Studies>;
  update_collapsible_lists_batch: Array<Collapsible_Lists>;
  update_collapsible_lists_item?: Maybe<Collapsible_Lists>;
  update_collapsible_lists_items: Array<Collapsible_Lists>;
  update_collapsible_lists_items_batch: Array<Collapsible_Lists_Items>;
  update_collapsible_lists_items_item?: Maybe<Collapsible_Lists_Items>;
  update_collapsible_lists_items_items: Array<Collapsible_Lists_Items>;
  update_collapsibles_batch: Array<Collapsibles>;
  update_collapsibles_item?: Maybe<Collapsibles>;
  update_collapsibles_items: Array<Collapsibles>;
  update_company_logo_lists_batch: Array<Company_Logo_Lists>;
  update_company_logo_lists_item?: Maybe<Company_Logo_Lists>;
  update_company_logo_lists_items: Array<Company_Logo_Lists>;
  update_company_logo_lists_items_1_batch: Array<Company_Logo_Lists_Items_1>;
  update_company_logo_lists_items_1_item?: Maybe<Company_Logo_Lists_Items_1>;
  update_company_logo_lists_items_1_items: Array<Company_Logo_Lists_Items_1>;
  update_company_logo_lists_items_2_batch: Array<Company_Logo_Lists_Items_2>;
  update_company_logo_lists_items_2_item?: Maybe<Company_Logo_Lists_Items_2>;
  update_company_logo_lists_items_2_items: Array<Company_Logo_Lists_Items_2>;
  update_company_logo_lists_items_batch: Array<Company_Logo_Lists_Items>;
  update_company_logo_lists_items_item?: Maybe<Company_Logo_Lists_Items>;
  update_company_logo_lists_items_items: Array<Company_Logo_Lists_Items>;
  update_company_logos_batch: Array<Company_Logos>;
  update_company_logos_item?: Maybe<Company_Logos>;
  update_company_logos_items: Array<Company_Logos>;
  update_events_batch: Array<Events>;
  update_events_item?: Maybe<Events>;
  update_events_items: Array<Events>;
  update_faqs_batch: Array<Faqs>;
  update_faqs_item?: Maybe<Faqs>;
  update_faqs_items: Array<Faqs>;
  update_featured_contributors_batch: Array<Featured_Contributors>;
  update_featured_contributors_item?: Maybe<Featured_Contributors>;
  update_featured_contributors_items: Array<Featured_Contributors>;
  update_job_listings_batch: Array<Job_Listings>;
  update_job_listings_item?: Maybe<Job_Listings>;
  update_job_listings_items: Array<Job_Listings>;
  update_markdown_pages_batch: Array<Markdown_Pages>;
  update_markdown_pages_item?: Maybe<Markdown_Pages>;
  update_markdown_pages_items: Array<Markdown_Pages>;
  update_nav_link_batch: Array<Nav_Link>;
  update_nav_link_item?: Maybe<Nav_Link>;
  update_nav_link_items: Array<Nav_Link>;
  update_nav_list_batch: Array<Nav_List>;
  update_nav_list_item?: Maybe<Nav_List>;
  update_nav_list_items: Array<Nav_List>;
  update_page_community?: Maybe<Page_Community>;
  update_page_homepage?: Maybe<Page_Homepage>;
  update_page_legal?: Maybe<Page_Legal>;
  update_page_product?: Maybe<Page_Product>;
  update_product_page_items_batch: Array<Product_Page_Items>;
  update_product_page_items_item?: Maybe<Product_Page_Items>;
  update_product_page_items_items: Array<Product_Page_Items>;
  update_product_pages_batch: Array<Product_Pages>;
  update_product_pages_item?: Maybe<Product_Pages>;
  update_product_pages_items: Array<Product_Pages>;
  update_quote_lists_batch: Array<Quote_Lists>;
  update_quote_lists_item?: Maybe<Quote_Lists>;
  update_quote_lists_items: Array<Quote_Lists>;
  update_quote_lists_items_batch: Array<Quote_Lists_Items>;
  update_quote_lists_items_item?: Maybe<Quote_Lists_Items>;
  update_quote_lists_items_items: Array<Quote_Lists_Items>;
  update_quotes_batch: Array<Quotes>;
  update_quotes_item?: Maybe<Quotes>;
  update_quotes_items: Array<Quotes>;
  update_site_settings?: Maybe<Site_Settings>;
  update_site_settings_company_logo_lists_1_batch: Array<Site_Settings_Company_Logo_Lists_1>;
  update_site_settings_company_logo_lists_1_item?: Maybe<Site_Settings_Company_Logo_Lists_1>;
  update_site_settings_company_logo_lists_1_items: Array<Site_Settings_Company_Logo_Lists_1>;
  update_site_settings_company_logo_lists_batch: Array<Site_Settings_Company_Logo_Lists>;
  update_site_settings_company_logo_lists_item?: Maybe<Site_Settings_Company_Logo_Lists>;
  update_site_settings_company_logo_lists_items: Array<Site_Settings_Company_Logo_Lists>;
  update_site_settings_company_logos_batch: Array<Site_Settings_Company_Logos>;
  update_site_settings_company_logos_item?: Maybe<Site_Settings_Company_Logos>;
  update_site_settings_company_logos_items: Array<Site_Settings_Company_Logos>;
  update_site_settings_main_nav_batch: Array<Site_Settings_Main_Nav>;
  update_site_settings_main_nav_item?: Maybe<Site_Settings_Main_Nav>;
  update_site_settings_main_nav_items: Array<Site_Settings_Main_Nav>;
  update_site_settings_nav_list_batch: Array<Site_Settings_Nav_List>;
  update_site_settings_nav_list_item?: Maybe<Site_Settings_Nav_List>;
  update_site_settings_nav_list_items: Array<Site_Settings_Nav_List>;
  update_solutions_pages_batch: Array<Solutions_Pages>;
  update_solutions_pages_item?: Maybe<Solutions_Pages>;
  update_solutions_pages_items: Array<Solutions_Pages>;
  update_stack_defaults?: Maybe<Stack_Defaults>;
  update_stacks_batch: Array<Stacks>;
  update_stacks_item?: Maybe<Stacks>;
  update_stacks_items: Array<Stacks>;
  update_team_members_batch: Array<Team_Members>;
  update_team_members_item?: Maybe<Team_Members>;
  update_team_members_items: Array<Team_Members>;
};


export type MutationCreate_Apps_ItemArgs = {
  data: Create_Apps_Input;
};


export type MutationCreate_Apps_ItemsArgs = {
  data?: InputMaybe<Array<Create_Apps_Input>>;
  filter?: InputMaybe<Apps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Article_Cards_ItemArgs = {
  data: Create_Article_Cards_Input;
};


export type MutationCreate_Article_Cards_ItemsArgs = {
  data?: InputMaybe<Array<Create_Article_Cards_Input>>;
  filter?: InputMaybe<Article_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Callouts_ItemArgs = {
  data: Create_Callouts_Input;
};


export type MutationCreate_Callouts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Callouts_Input>>;
  filter?: InputMaybe<Callouts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Case_Studies_ItemArgs = {
  data: Create_Case_Studies_Input;
};


export type MutationCreate_Case_Studies_ItemsArgs = {
  data?: InputMaybe<Array<Create_Case_Studies_Input>>;
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Collapsible_Lists_ItemArgs = {
  data: Create_Collapsible_Lists_Input;
};


export type MutationCreate_Collapsible_Lists_ItemsArgs = {
  data?: InputMaybe<Array<Create_Collapsible_Lists_Input>>;
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Collapsible_Lists_Items_ItemArgs = {
  data: Create_Collapsible_Lists_Items_Input;
};


export type MutationCreate_Collapsible_Lists_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Collapsible_Lists_Items_Input>>;
  filter?: InputMaybe<Collapsible_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Collapsibles_ItemArgs = {
  data: Create_Collapsibles_Input;
};


export type MutationCreate_Collapsibles_ItemsArgs = {
  data?: InputMaybe<Array<Create_Collapsibles_Input>>;
  filter?: InputMaybe<Collapsibles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Company_Logo_Lists_ItemArgs = {
  data: Create_Company_Logo_Lists_Input;
};


export type MutationCreate_Company_Logo_Lists_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Logo_Lists_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Company_Logo_Lists_Items_1_ItemArgs = {
  data: Create_Company_Logo_Lists_Items_1_Input;
};


export type MutationCreate_Company_Logo_Lists_Items_1_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Logo_Lists_Items_1_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Items_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Company_Logo_Lists_Items_2_ItemArgs = {
  data: Create_Company_Logo_Lists_Items_2_Input;
};


export type MutationCreate_Company_Logo_Lists_Items_2_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Logo_Lists_Items_2_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Company_Logo_Lists_Items_ItemArgs = {
  data: Create_Company_Logo_Lists_Items_Input;
};


export type MutationCreate_Company_Logo_Lists_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Logo_Lists_Items_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Company_Logos_ItemArgs = {
  data: Create_Company_Logos_Input;
};


export type MutationCreate_Company_Logos_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Logos_Input>>;
  filter?: InputMaybe<Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Events_ItemArgs = {
  data: Create_Events_Input;
};


export type MutationCreate_Events_ItemsArgs = {
  data?: InputMaybe<Array<Create_Events_Input>>;
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Faqs_ItemArgs = {
  data: Create_Faqs_Input;
};


export type MutationCreate_Faqs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Faqs_Input>>;
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Featured_Contributors_ItemArgs = {
  data: Create_Featured_Contributors_Input;
};


export type MutationCreate_Featured_Contributors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Featured_Contributors_Input>>;
  filter?: InputMaybe<Featured_Contributors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Job_Listings_ItemArgs = {
  data: Create_Job_Listings_Input;
};


export type MutationCreate_Job_Listings_ItemsArgs = {
  data?: InputMaybe<Array<Create_Job_Listings_Input>>;
  filter?: InputMaybe<Job_Listings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Markdown_Pages_ItemArgs = {
  data: Create_Markdown_Pages_Input;
};


export type MutationCreate_Markdown_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Markdown_Pages_Input>>;
  filter?: InputMaybe<Markdown_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Nav_Link_ItemArgs = {
  data: Create_Nav_Link_Input;
};


export type MutationCreate_Nav_Link_ItemsArgs = {
  data?: InputMaybe<Array<Create_Nav_Link_Input>>;
  filter?: InputMaybe<Nav_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Nav_List_ItemArgs = {
  data: Create_Nav_List_Input;
};


export type MutationCreate_Nav_List_ItemsArgs = {
  data?: InputMaybe<Array<Create_Nav_List_Input>>;
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Product_Page_Items_ItemArgs = {
  data: Create_Product_Page_Items_Input;
};


export type MutationCreate_Product_Page_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Product_Page_Items_Input>>;
  filter?: InputMaybe<Product_Page_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Product_Pages_ItemArgs = {
  data: Create_Product_Pages_Input;
};


export type MutationCreate_Product_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Product_Pages_Input>>;
  filter?: InputMaybe<Product_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Quote_Lists_ItemArgs = {
  data: Create_Quote_Lists_Input;
};


export type MutationCreate_Quote_Lists_ItemsArgs = {
  data?: InputMaybe<Array<Create_Quote_Lists_Input>>;
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Quote_Lists_Items_ItemArgs = {
  data: Create_Quote_Lists_Items_Input;
};


export type MutationCreate_Quote_Lists_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Quote_Lists_Items_Input>>;
  filter?: InputMaybe<Quote_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Quotes_ItemArgs = {
  data: Create_Quotes_Input;
};


export type MutationCreate_Quotes_ItemsArgs = {
  data?: InputMaybe<Array<Create_Quotes_Input>>;
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Site_Settings_Company_Logo_Lists_1_ItemArgs = {
  data: Create_Site_Settings_Company_Logo_Lists_1_Input;
};


export type MutationCreate_Site_Settings_Company_Logo_Lists_1_ItemsArgs = {
  data?: InputMaybe<Array<Create_Site_Settings_Company_Logo_Lists_1_Input>>;
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Site_Settings_Company_Logo_Lists_ItemArgs = {
  data: Create_Site_Settings_Company_Logo_Lists_Input;
};


export type MutationCreate_Site_Settings_Company_Logo_Lists_ItemsArgs = {
  data?: InputMaybe<Array<Create_Site_Settings_Company_Logo_Lists_Input>>;
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Site_Settings_Company_Logos_ItemArgs = {
  data: Create_Site_Settings_Company_Logos_Input;
};


export type MutationCreate_Site_Settings_Company_Logos_ItemsArgs = {
  data?: InputMaybe<Array<Create_Site_Settings_Company_Logos_Input>>;
  filter?: InputMaybe<Site_Settings_Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Site_Settings_Main_Nav_ItemArgs = {
  data: Create_Site_Settings_Main_Nav_Input;
};


export type MutationCreate_Site_Settings_Main_Nav_ItemsArgs = {
  data?: InputMaybe<Array<Create_Site_Settings_Main_Nav_Input>>;
  filter?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Site_Settings_Nav_List_ItemArgs = {
  data: Create_Site_Settings_Nav_List_Input;
};


export type MutationCreate_Site_Settings_Nav_List_ItemsArgs = {
  data?: InputMaybe<Array<Create_Site_Settings_Nav_List_Input>>;
  filter?: InputMaybe<Site_Settings_Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Solutions_Pages_ItemArgs = {
  data: Create_Solutions_Pages_Input;
};


export type MutationCreate_Solutions_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Solutions_Pages_Input>>;
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Stacks_ItemArgs = {
  data: Create_Stacks_Input;
};


export type MutationCreate_Stacks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Stacks_Input>>;
  filter?: InputMaybe<Stacks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Team_Members_ItemArgs = {
  data: Create_Team_Members_Input;
};


export type MutationCreate_Team_Members_ItemsArgs = {
  data?: InputMaybe<Array<Create_Team_Members_Input>>;
  filter?: InputMaybe<Team_Members_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Apps_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Apps_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Article_Cards_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Article_Cards_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Callouts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Callouts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Case_Studies_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Case_Studies_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Collapsible_Lists_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Collapsible_Lists_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Collapsible_Lists_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Collapsible_Lists_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Collapsibles_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Collapsibles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Logo_Lists_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logo_Lists_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Logo_Lists_Items_1_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logo_Lists_Items_1_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Logo_Lists_Items_2_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logo_Lists_Items_2_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Logo_Lists_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logo_Lists_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Logos_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logos_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Events_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Events_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Faqs_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Faqs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Featured_Contributors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Featured_Contributors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Job_Listings_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Job_Listings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Markdown_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Markdown_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Nav_Link_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Nav_Link_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Nav_List_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Nav_List_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Product_Page_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Product_Page_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Product_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Product_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Quote_Lists_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Quote_Lists_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Quote_Lists_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Quote_Lists_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Quotes_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Quotes_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Site_Settings_Company_Logo_Lists_1_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Site_Settings_Company_Logo_Lists_1_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Site_Settings_Company_Logo_Lists_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Site_Settings_Company_Logo_Lists_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Site_Settings_Company_Logos_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Site_Settings_Company_Logos_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Site_Settings_Main_Nav_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Site_Settings_Main_Nav_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Site_Settings_Nav_List_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Site_Settings_Nav_List_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Solutions_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Solutions_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Stacks_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Stacks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Team_Members_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Team_Members_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_App_DefaultsArgs = {
  data: Update_App_Defaults_Input;
};


export type MutationUpdate_Apps_BatchArgs = {
  data?: InputMaybe<Array<Update_Apps_Input>>;
  filter?: InputMaybe<Apps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Apps_ItemArgs = {
  data: Update_Apps_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Apps_ItemsArgs = {
  data: Update_Apps_Input;
  filter?: InputMaybe<Apps_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Cards_BatchArgs = {
  data?: InputMaybe<Array<Update_Article_Cards_Input>>;
  filter?: InputMaybe<Article_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Cards_ItemArgs = {
  data: Update_Article_Cards_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Article_Cards_ItemsArgs = {
  data: Update_Article_Cards_Input;
  filter?: InputMaybe<Article_Cards_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Callouts_BatchArgs = {
  data?: InputMaybe<Array<Update_Callouts_Input>>;
  filter?: InputMaybe<Callouts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Callouts_ItemArgs = {
  data: Update_Callouts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Callouts_ItemsArgs = {
  data: Update_Callouts_Input;
  filter?: InputMaybe<Callouts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Case_Studies_BatchArgs = {
  data?: InputMaybe<Array<Update_Case_Studies_Input>>;
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Case_Studies_ItemArgs = {
  data: Update_Case_Studies_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Case_Studies_ItemsArgs = {
  data: Update_Case_Studies_Input;
  filter?: InputMaybe<Case_Studies_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Collapsible_Lists_BatchArgs = {
  data?: InputMaybe<Array<Update_Collapsible_Lists_Input>>;
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Collapsible_Lists_ItemArgs = {
  data: Update_Collapsible_Lists_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Collapsible_Lists_ItemsArgs = {
  data: Update_Collapsible_Lists_Input;
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Collapsible_Lists_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Collapsible_Lists_Items_Input>>;
  filter?: InputMaybe<Collapsible_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Collapsible_Lists_Items_ItemArgs = {
  data: Update_Collapsible_Lists_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Collapsible_Lists_Items_ItemsArgs = {
  data: Update_Collapsible_Lists_Items_Input;
  filter?: InputMaybe<Collapsible_Lists_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Collapsibles_BatchArgs = {
  data?: InputMaybe<Array<Update_Collapsibles_Input>>;
  filter?: InputMaybe<Collapsibles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Collapsibles_ItemArgs = {
  data: Update_Collapsibles_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Collapsibles_ItemsArgs = {
  data: Update_Collapsibles_Input;
  filter?: InputMaybe<Collapsibles_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Logo_Lists_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_ItemArgs = {
  data: Update_Company_Logo_Lists_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Logo_Lists_ItemsArgs = {
  data: Update_Company_Logo_Lists_Input;
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Items_1_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Logo_Lists_Items_1_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Items_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Items_1_ItemArgs = {
  data: Update_Company_Logo_Lists_Items_1_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Logo_Lists_Items_1_ItemsArgs = {
  data: Update_Company_Logo_Lists_Items_1_Input;
  filter?: InputMaybe<Company_Logo_Lists_Items_1_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Items_2_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Logo_Lists_Items_2_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Items_2_ItemArgs = {
  data: Update_Company_Logo_Lists_Items_2_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Logo_Lists_Items_2_ItemsArgs = {
  data: Update_Company_Logo_Lists_Items_2_Input;
  filter?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Logo_Lists_Items_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Items_ItemArgs = {
  data: Update_Company_Logo_Lists_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Logo_Lists_Items_ItemsArgs = {
  data: Update_Company_Logo_Lists_Items_Input;
  filter?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logos_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Logos_Input>>;
  filter?: InputMaybe<Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logos_ItemArgs = {
  data: Update_Company_Logos_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Logos_ItemsArgs = {
  data: Update_Company_Logos_Input;
  filter?: InputMaybe<Company_Logos_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Events_BatchArgs = {
  data?: InputMaybe<Array<Update_Events_Input>>;
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Events_ItemArgs = {
  data: Update_Events_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Events_ItemsArgs = {
  data: Update_Events_Input;
  filter?: InputMaybe<Events_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Faqs_BatchArgs = {
  data?: InputMaybe<Array<Update_Faqs_Input>>;
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Faqs_ItemArgs = {
  data: Update_Faqs_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Faqs_ItemsArgs = {
  data: Update_Faqs_Input;
  filter?: InputMaybe<Faqs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Featured_Contributors_BatchArgs = {
  data?: InputMaybe<Array<Update_Featured_Contributors_Input>>;
  filter?: InputMaybe<Featured_Contributors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Featured_Contributors_ItemArgs = {
  data: Update_Featured_Contributors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Featured_Contributors_ItemsArgs = {
  data: Update_Featured_Contributors_Input;
  filter?: InputMaybe<Featured_Contributors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Job_Listings_BatchArgs = {
  data?: InputMaybe<Array<Update_Job_Listings_Input>>;
  filter?: InputMaybe<Job_Listings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Job_Listings_ItemArgs = {
  data: Update_Job_Listings_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Job_Listings_ItemsArgs = {
  data: Update_Job_Listings_Input;
  filter?: InputMaybe<Job_Listings_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Markdown_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Markdown_Pages_Input>>;
  filter?: InputMaybe<Markdown_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Markdown_Pages_ItemArgs = {
  data: Update_Markdown_Pages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Markdown_Pages_ItemsArgs = {
  data: Update_Markdown_Pages_Input;
  filter?: InputMaybe<Markdown_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Nav_Link_BatchArgs = {
  data?: InputMaybe<Array<Update_Nav_Link_Input>>;
  filter?: InputMaybe<Nav_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Nav_Link_ItemArgs = {
  data: Update_Nav_Link_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Nav_Link_ItemsArgs = {
  data: Update_Nav_Link_Input;
  filter?: InputMaybe<Nav_Link_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Nav_List_BatchArgs = {
  data?: InputMaybe<Array<Update_Nav_List_Input>>;
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Nav_List_ItemArgs = {
  data: Update_Nav_List_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Nav_List_ItemsArgs = {
  data: Update_Nav_List_Input;
  filter?: InputMaybe<Nav_List_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_CommunityArgs = {
  data: Update_Page_Community_Input;
};


export type MutationUpdate_Page_HomepageArgs = {
  data: Update_Page_Homepage_Input;
};


export type MutationUpdate_Page_LegalArgs = {
  data: Update_Page_Legal_Input;
};


export type MutationUpdate_Page_ProductArgs = {
  data: Update_Page_Product_Input;
};


export type MutationUpdate_Product_Page_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Product_Page_Items_Input>>;
  filter?: InputMaybe<Product_Page_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_Page_Items_ItemArgs = {
  data: Update_Product_Page_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Product_Page_Items_ItemsArgs = {
  data: Update_Product_Page_Items_Input;
  filter?: InputMaybe<Product_Page_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Product_Pages_Input>>;
  filter?: InputMaybe<Product_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_Pages_ItemArgs = {
  data: Update_Product_Pages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Product_Pages_ItemsArgs = {
  data: Update_Product_Pages_Input;
  filter?: InputMaybe<Product_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Quote_Lists_BatchArgs = {
  data?: InputMaybe<Array<Update_Quote_Lists_Input>>;
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Quote_Lists_ItemArgs = {
  data: Update_Quote_Lists_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Quote_Lists_ItemsArgs = {
  data: Update_Quote_Lists_Input;
  filter?: InputMaybe<Quote_Lists_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Quote_Lists_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Quote_Lists_Items_Input>>;
  filter?: InputMaybe<Quote_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Quote_Lists_Items_ItemArgs = {
  data: Update_Quote_Lists_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Quote_Lists_Items_ItemsArgs = {
  data: Update_Quote_Lists_Items_Input;
  filter?: InputMaybe<Quote_Lists_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Quotes_BatchArgs = {
  data?: InputMaybe<Array<Update_Quotes_Input>>;
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Quotes_ItemArgs = {
  data: Update_Quotes_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Quotes_ItemsArgs = {
  data: Update_Quotes_Input;
  filter?: InputMaybe<Quotes_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_SettingsArgs = {
  data: Update_Site_Settings_Input;
};


export type MutationUpdate_Site_Settings_Company_Logo_Lists_1_BatchArgs = {
  data?: InputMaybe<Array<Update_Site_Settings_Company_Logo_Lists_1_Input>>;
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Company_Logo_Lists_1_ItemArgs = {
  data: Update_Site_Settings_Company_Logo_Lists_1_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Site_Settings_Company_Logo_Lists_1_ItemsArgs = {
  data: Update_Site_Settings_Company_Logo_Lists_1_Input;
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Company_Logo_Lists_BatchArgs = {
  data?: InputMaybe<Array<Update_Site_Settings_Company_Logo_Lists_Input>>;
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Company_Logo_Lists_ItemArgs = {
  data: Update_Site_Settings_Company_Logo_Lists_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Site_Settings_Company_Logo_Lists_ItemsArgs = {
  data: Update_Site_Settings_Company_Logo_Lists_Input;
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Company_Logos_BatchArgs = {
  data?: InputMaybe<Array<Update_Site_Settings_Company_Logos_Input>>;
  filter?: InputMaybe<Site_Settings_Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Company_Logos_ItemArgs = {
  data: Update_Site_Settings_Company_Logos_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Site_Settings_Company_Logos_ItemsArgs = {
  data: Update_Site_Settings_Company_Logos_Input;
  filter?: InputMaybe<Site_Settings_Company_Logos_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Main_Nav_BatchArgs = {
  data?: InputMaybe<Array<Update_Site_Settings_Main_Nav_Input>>;
  filter?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Main_Nav_ItemArgs = {
  data: Update_Site_Settings_Main_Nav_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Site_Settings_Main_Nav_ItemsArgs = {
  data: Update_Site_Settings_Main_Nav_Input;
  filter?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Nav_List_BatchArgs = {
  data?: InputMaybe<Array<Update_Site_Settings_Nav_List_Input>>;
  filter?: InputMaybe<Site_Settings_Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Site_Settings_Nav_List_ItemArgs = {
  data: Update_Site_Settings_Nav_List_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Site_Settings_Nav_List_ItemsArgs = {
  data: Update_Site_Settings_Nav_List_Input;
  filter?: InputMaybe<Site_Settings_Nav_List_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Solutions_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Solutions_Pages_Input>>;
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Solutions_Pages_ItemArgs = {
  data: Update_Solutions_Pages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Solutions_Pages_ItemsArgs = {
  data: Update_Solutions_Pages_Input;
  filter?: InputMaybe<Solutions_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Stack_DefaultsArgs = {
  data: Update_Stack_Defaults_Input;
};


export type MutationUpdate_Stacks_BatchArgs = {
  data?: InputMaybe<Array<Update_Stacks_Input>>;
  filter?: InputMaybe<Stacks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Stacks_ItemArgs = {
  data: Update_Stacks_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Stacks_ItemsArgs = {
  data: Update_Stacks_Input;
  filter?: InputMaybe<Stacks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Team_Members_BatchArgs = {
  data?: InputMaybe<Array<Update_Team_Members_Input>>;
  filter?: InputMaybe<Team_Members_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Team_Members_ItemArgs = {
  data: Update_Team_Members_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Team_Members_ItemsArgs = {
  data: Update_Team_Members_Input;
  filter?: InputMaybe<Team_Members_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  __typename?: 'Query';
  app_defaults?: Maybe<App_Defaults>;
  apps: Array<Apps>;
  apps_aggregated: Array<Apps_Aggregated>;
  apps_by_id?: Maybe<Apps>;
  article_cards: Array<Article_Cards>;
  article_cards_aggregated: Array<Article_Cards_Aggregated>;
  article_cards_by_id?: Maybe<Article_Cards>;
  callouts: Array<Callouts>;
  callouts_aggregated: Array<Callouts_Aggregated>;
  callouts_by_id?: Maybe<Callouts>;
  case_studies: Array<Case_Studies>;
  case_studies_aggregated: Array<Case_Studies_Aggregated>;
  case_studies_by_id?: Maybe<Case_Studies>;
  collapsible_lists: Array<Collapsible_Lists>;
  collapsible_lists_aggregated: Array<Collapsible_Lists_Aggregated>;
  collapsible_lists_by_id?: Maybe<Collapsible_Lists>;
  collapsible_lists_items: Array<Collapsible_Lists_Items>;
  collapsible_lists_items_aggregated: Array<Collapsible_Lists_Items_Aggregated>;
  collapsible_lists_items_by_id?: Maybe<Collapsible_Lists_Items>;
  collapsibles: Array<Collapsibles>;
  collapsibles_aggregated: Array<Collapsibles_Aggregated>;
  collapsibles_by_id?: Maybe<Collapsibles>;
  company_logo_lists: Array<Company_Logo_Lists>;
  company_logo_lists_aggregated: Array<Company_Logo_Lists_Aggregated>;
  company_logo_lists_by_id?: Maybe<Company_Logo_Lists>;
  company_logo_lists_items: Array<Company_Logo_Lists_Items>;
  company_logo_lists_items_1: Array<Company_Logo_Lists_Items_1>;
  company_logo_lists_items_1_aggregated: Array<Company_Logo_Lists_Items_1_Aggregated>;
  company_logo_lists_items_1_by_id?: Maybe<Company_Logo_Lists_Items_1>;
  company_logo_lists_items_2: Array<Company_Logo_Lists_Items_2>;
  company_logo_lists_items_2_aggregated: Array<Company_Logo_Lists_Items_2_Aggregated>;
  company_logo_lists_items_2_by_id?: Maybe<Company_Logo_Lists_Items_2>;
  company_logo_lists_items_aggregated: Array<Company_Logo_Lists_Items_Aggregated>;
  company_logo_lists_items_by_id?: Maybe<Company_Logo_Lists_Items>;
  company_logos: Array<Company_Logos>;
  company_logos_aggregated: Array<Company_Logos_Aggregated>;
  company_logos_by_id?: Maybe<Company_Logos>;
  events: Array<Events>;
  events_aggregated: Array<Events_Aggregated>;
  events_by_id?: Maybe<Events>;
  faqs: Array<Faqs>;
  faqs_aggregated: Array<Faqs_Aggregated>;
  faqs_by_id?: Maybe<Faqs>;
  featured_contributors: Array<Featured_Contributors>;
  featured_contributors_aggregated: Array<Featured_Contributors_Aggregated>;
  featured_contributors_by_id?: Maybe<Featured_Contributors>;
  job_listings: Array<Job_Listings>;
  job_listings_aggregated: Array<Job_Listings_Aggregated>;
  job_listings_by_id?: Maybe<Job_Listings>;
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
  page_homepage?: Maybe<Page_Homepage>;
  page_legal?: Maybe<Page_Legal>;
  page_product?: Maybe<Page_Product>;
  product_page_items: Array<Product_Page_Items>;
  product_page_items_aggregated: Array<Product_Page_Items_Aggregated>;
  product_page_items_by_id?: Maybe<Product_Page_Items>;
  product_pages: Array<Product_Pages>;
  product_pages_aggregated: Array<Product_Pages_Aggregated>;
  product_pages_by_id?: Maybe<Product_Pages>;
  quote_lists: Array<Quote_Lists>;
  quote_lists_aggregated: Array<Quote_Lists_Aggregated>;
  quote_lists_by_id?: Maybe<Quote_Lists>;
  quote_lists_items: Array<Quote_Lists_Items>;
  quote_lists_items_aggregated: Array<Quote_Lists_Items_Aggregated>;
  quote_lists_items_by_id?: Maybe<Quote_Lists_Items>;
  quotes: Array<Quotes>;
  quotes_aggregated: Array<Quotes_Aggregated>;
  quotes_by_id?: Maybe<Quotes>;
  site_settings?: Maybe<Site_Settings>;
  site_settings_company_logo_lists: Array<Site_Settings_Company_Logo_Lists>;
  site_settings_company_logo_lists_1: Array<Site_Settings_Company_Logo_Lists_1>;
  site_settings_company_logo_lists_1_aggregated: Array<Site_Settings_Company_Logo_Lists_1_Aggregated>;
  site_settings_company_logo_lists_1_by_id?: Maybe<Site_Settings_Company_Logo_Lists_1>;
  site_settings_company_logo_lists_aggregated: Array<Site_Settings_Company_Logo_Lists_Aggregated>;
  site_settings_company_logo_lists_by_id?: Maybe<Site_Settings_Company_Logo_Lists>;
  site_settings_company_logos: Array<Site_Settings_Company_Logos>;
  site_settings_company_logos_aggregated: Array<Site_Settings_Company_Logos_Aggregated>;
  site_settings_company_logos_by_id?: Maybe<Site_Settings_Company_Logos>;
  site_settings_main_nav: Array<Site_Settings_Main_Nav>;
  site_settings_main_nav_aggregated: Array<Site_Settings_Main_Nav_Aggregated>;
  site_settings_main_nav_by_id?: Maybe<Site_Settings_Main_Nav>;
  site_settings_nav_list: Array<Site_Settings_Nav_List>;
  site_settings_nav_list_aggregated: Array<Site_Settings_Nav_List_Aggregated>;
  site_settings_nav_list_by_id?: Maybe<Site_Settings_Nav_List>;
  solutions_pages: Array<Solutions_Pages>;
  solutions_pages_aggregated: Array<Solutions_Pages_Aggregated>;
  solutions_pages_by_id?: Maybe<Solutions_Pages>;
  stack_defaults?: Maybe<Stack_Defaults>;
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


export type QueryArticle_CardsArgs = {
  filter?: InputMaybe<Article_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Cards_AggregatedArgs = {
  filter?: InputMaybe<Article_Cards_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Cards_By_IdArgs = {
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


export type QueryCase_StudiesArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCase_Studies_AggregatedArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCase_Studies_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollapsible_ListsArgs = {
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollapsible_Lists_AggregatedArgs = {
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollapsible_Lists_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollapsible_Lists_ItemsArgs = {
  filter?: InputMaybe<Collapsible_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollapsible_Lists_Items_AggregatedArgs = {
  filter?: InputMaybe<Collapsible_Lists_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollapsible_Lists_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollapsiblesArgs = {
  filter?: InputMaybe<Collapsibles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollapsibles_AggregatedArgs = {
  filter?: InputMaybe<Collapsibles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollapsibles_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompany_Logo_ListsArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_AggregatedArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompany_Logo_Lists_ItemsArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Items_1Args = {
  filter?: InputMaybe<Company_Logo_Lists_Items_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Items_1_AggregatedArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Items_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Items_1_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompany_Logo_Lists_Items_2Args = {
  filter?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Items_2_AggregatedArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Items_2_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompany_Logo_Lists_Items_AggregatedArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompany_LogosArgs = {
  filter?: InputMaybe<Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logos_AggregatedArgs = {
  filter?: InputMaybe<Company_Logos_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logos_By_IdArgs = {
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


export type QueryFaqsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFaqs_AggregatedArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFaqs_By_IdArgs = {
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


export type QueryJob_ListingsArgs = {
  filter?: InputMaybe<Job_Listings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJob_Listings_AggregatedArgs = {
  filter?: InputMaybe<Job_Listings_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJob_Listings_By_IdArgs = {
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


export type QueryProduct_Page_ItemsArgs = {
  filter?: InputMaybe<Product_Page_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_Page_Items_AggregatedArgs = {
  filter?: InputMaybe<Product_Page_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_Page_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProduct_PagesArgs = {
  filter?: InputMaybe<Product_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_Pages_AggregatedArgs = {
  filter?: InputMaybe<Product_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_Pages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuote_ListsArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuote_Lists_AggregatedArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuote_Lists_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuote_Lists_ItemsArgs = {
  filter?: InputMaybe<Quote_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuote_Lists_Items_AggregatedArgs = {
  filter?: InputMaybe<Quote_Lists_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuote_Lists_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuotesArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuotes_AggregatedArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuotes_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySite_Settings_Company_Logo_ListsArgs = {
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Company_Logo_Lists_1Args = {
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Company_Logo_Lists_1_AggregatedArgs = {
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Company_Logo_Lists_1_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySite_Settings_Company_Logo_Lists_AggregatedArgs = {
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Company_Logo_Lists_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySite_Settings_Company_LogosArgs = {
  filter?: InputMaybe<Site_Settings_Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Company_Logos_AggregatedArgs = {
  filter?: InputMaybe<Site_Settings_Company_Logos_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Company_Logos_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySite_Settings_Main_NavArgs = {
  filter?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Main_Nav_AggregatedArgs = {
  filter?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Main_Nav_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySite_Settings_Nav_ListArgs = {
  filter?: InputMaybe<Site_Settings_Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Nav_List_AggregatedArgs = {
  filter?: InputMaybe<Site_Settings_Nav_List_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySite_Settings_Nav_List_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySolutions_PagesArgs = {
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolutions_Pages_AggregatedArgs = {
  filter?: InputMaybe<Solutions_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolutions_Pages_By_IdArgs = {
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

export type App_Defaults = {
  __typename?: 'app_defaults';
  case_study?: Maybe<Case_Studies>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  quotes?: Maybe<Quote_Lists>;
  secondary_text?: Maybe<Scalars['String']['output']>;
  secondary_title?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Directus_Users>;
};


export type App_DefaultsCase_StudyArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type App_DefaultsQuotesArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type App_DefaultsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Apps = {
  __typename?: 'apps';
  case_study?: Maybe<Case_Studies>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  heroVideo?: Maybe<Scalars['String']['output']>;
  /** Optional - Default comes from main Plural API */
  hero_text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Optional - Default set in App Defaults */
  secondary_text?: Maybe<Scalars['String']['output']>;
  /** Optional - Default set in App Defaults */
  secondary_title?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Directus_Users>;
};


export type AppsCase_StudyArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AppsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  /** Use to override default case study on individual app page */
  case_study?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  heroVideo?: Maybe<Scalars['Int']['output']>;
  /** Optional - Default comes from main Plural API */
  hero_text?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  /** Optional - Default set in App Defaults */
  secondary_text?: Maybe<Scalars['Int']['output']>;
  /** Optional - Default set in App Defaults */
  secondary_title?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Apps_Aggregated_Fields = {
  __typename?: 'apps_aggregated_fields';
  /** Use to override default case study on individual app page */
  case_study?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Apps_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Apps_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Apps_Filter>>>;
  case_study?: InputMaybe<Case_Studies_Filter>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  heroVideo?: InputMaybe<String_Filter_Operators>;
  hero_text?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  secondary_text?: InputMaybe<String_Filter_Operators>;
  secondary_title?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Article_Cards = {
  __typename?: 'article_cards';
  article_card_id?: Maybe<Page_Homepage>;
  author?: Maybe<Scalars['String']['output']>;
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  date?: Maybe<Scalars['Date']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_func?: Maybe<Date_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Directus_Files>;
  url?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


export type Article_CardsArticle_Card_IdArgs = {
  filter?: InputMaybe<Page_Homepage_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_CardsThumbnailArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_CardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_CardsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Cards_Aggregated = {
  __typename?: 'article_cards_aggregated';
  avg?: Maybe<Article_Cards_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Cards_Aggregated_Fields>;
  count?: Maybe<Article_Cards_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Cards_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Cards_Aggregated_Fields>;
  min?: Maybe<Article_Cards_Aggregated_Fields>;
  sum?: Maybe<Article_Cards_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Cards_Aggregated_Fields>;
};

export type Article_Cards_Aggregated_Count = {
  __typename?: 'article_cards_aggregated_count';
  article_card_id?: Maybe<Scalars['Int']['output']>;
  author?: Maybe<Scalars['Int']['output']>;
  ctas?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  videoUrl?: Maybe<Scalars['Int']['output']>;
};

export type Article_Cards_Aggregated_Fields = {
  __typename?: 'article_cards_aggregated_fields';
  article_card_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Article_Cards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Cards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Cards_Filter>>>;
  article_card_id?: InputMaybe<Page_Homepage_Filter>;
  author?: InputMaybe<String_Filter_Operators>;
  ctas?: InputMaybe<String_Filter_Operators>;
  ctas_func?: InputMaybe<Count_Function_Filter_Operators>;
  date?: InputMaybe<Date_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_func?: InputMaybe<Date_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  thumbnail?: InputMaybe<Directus_Files_Filter>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  videoUrl?: InputMaybe<String_Filter_Operators>;
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
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CalloutsCallout_IdArgs = {
  filter?: InputMaybe<Page_Community_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CalloutsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CalloutsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
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
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Case_Studies = {
  __typename?: 'case_studies';
  case_study_id?: Maybe<Page_Homepage>;
  content?: Maybe<Scalars['String']['output']>;
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  hero_image?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  stack_apps?: Maybe<Scalars['JSON']['output']>;
  stack_apps_func?: Maybe<Count_Functions>;
  stack_label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Case_StudiesCase_Study_IdArgs = {
  filter?: InputMaybe<Page_Homepage_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Case_StudiesHero_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Case_StudiesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Case_StudiesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Case_Studies_Aggregated = {
  __typename?: 'case_studies_aggregated';
  avg?: Maybe<Case_Studies_Aggregated_Fields>;
  avgDistinct?: Maybe<Case_Studies_Aggregated_Fields>;
  count?: Maybe<Case_Studies_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Case_Studies_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Case_Studies_Aggregated_Fields>;
  min?: Maybe<Case_Studies_Aggregated_Fields>;
  sum?: Maybe<Case_Studies_Aggregated_Fields>;
  sumDistinct?: Maybe<Case_Studies_Aggregated_Fields>;
};

export type Case_Studies_Aggregated_Count = {
  __typename?: 'case_studies_aggregated_count';
  case_study_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  ctas?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  hero_image?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  stack_apps?: Maybe<Scalars['Int']['output']>;
  stack_label?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Case_Studies_Aggregated_Fields = {
  __typename?: 'case_studies_aggregated_fields';
  case_study_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Case_Studies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Case_Studies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Case_Studies_Filter>>>;
  case_study_id?: InputMaybe<Page_Homepage_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  ctas?: InputMaybe<String_Filter_Operators>;
  ctas_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  hero_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  stack_apps?: InputMaybe<String_Filter_Operators>;
  stack_apps_func?: InputMaybe<Count_Function_Filter_Operators>;
  stack_label?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Collapsible_Lists = {
  __typename?: 'collapsible_lists';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Collapsible_Lists_Items>>>;
  items_func?: Maybe<Count_Functions>;
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Collapsible_ListsItemsArgs = {
  filter?: InputMaybe<Collapsible_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Collapsible_ListsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Collapsible_ListsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Collapsible_Lists_Aggregated = {
  __typename?: 'collapsible_lists_aggregated';
  avg?: Maybe<Collapsible_Lists_Aggregated_Fields>;
  avgDistinct?: Maybe<Collapsible_Lists_Aggregated_Fields>;
  count?: Maybe<Collapsible_Lists_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Collapsible_Lists_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Collapsible_Lists_Aggregated_Fields>;
  min?: Maybe<Collapsible_Lists_Aggregated_Fields>;
  sum?: Maybe<Collapsible_Lists_Aggregated_Fields>;
  sumDistinct?: Maybe<Collapsible_Lists_Aggregated_Fields>;
};

export type Collapsible_Lists_Aggregated_Count = {
  __typename?: 'collapsible_lists_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Collapsible_Lists_Aggregated_Fields = {
  __typename?: 'collapsible_lists_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Collapsible_Lists_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Collapsible_Lists_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Collapsible_Lists_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  items?: InputMaybe<Collapsible_Lists_Items_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Collapsible_Lists_Items = {
  __typename?: 'collapsible_lists_items';
  collapsible_lists_id?: Maybe<Collapsible_Lists>;
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Collapsible_Lists_Items_Item_Union>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Collapsible_Lists_ItemsCollapsible_Lists_IdArgs = {
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Collapsible_Lists_Items_Aggregated = {
  __typename?: 'collapsible_lists_items_aggregated';
  avg?: Maybe<Collapsible_Lists_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Collapsible_Lists_Items_Aggregated_Fields>;
  count?: Maybe<Collapsible_Lists_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Collapsible_Lists_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Collapsible_Lists_Items_Aggregated_Fields>;
  min?: Maybe<Collapsible_Lists_Items_Aggregated_Fields>;
  sum?: Maybe<Collapsible_Lists_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Collapsible_Lists_Items_Aggregated_Fields>;
};

export type Collapsible_Lists_Items_Aggregated_Count = {
  __typename?: 'collapsible_lists_items_aggregated_count';
  collapsible_lists_id?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Collapsible_Lists_Items_Aggregated_Fields = {
  __typename?: 'collapsible_lists_items_aggregated_fields';
  collapsible_lists_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Collapsible_Lists_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Collapsible_Lists_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Collapsible_Lists_Items_Filter>>>;
  collapsible_lists_id?: InputMaybe<Collapsible_Lists_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__collapsibles?: InputMaybe<Collapsibles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Collapsible_Lists_Items_Item_Union = Collapsibles;

export type Collapsibles = {
  __typename?: 'collapsibles';
  collapsible_id?: Maybe<Collapsible_Lists>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CollapsiblesCollapsible_IdArgs = {
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CollapsiblesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CollapsiblesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Collapsibles_Aggregated = {
  __typename?: 'collapsibles_aggregated';
  avg?: Maybe<Collapsibles_Aggregated_Fields>;
  avgDistinct?: Maybe<Collapsibles_Aggregated_Fields>;
  count?: Maybe<Collapsibles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Collapsibles_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Collapsibles_Aggregated_Fields>;
  min?: Maybe<Collapsibles_Aggregated_Fields>;
  sum?: Maybe<Collapsibles_Aggregated_Fields>;
  sumDistinct?: Maybe<Collapsibles_Aggregated_Fields>;
};

export type Collapsibles_Aggregated_Count = {
  __typename?: 'collapsibles_aggregated_count';
  collapsible_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Collapsibles_Aggregated_Fields = {
  __typename?: 'collapsibles_aggregated_fields';
  collapsible_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Collapsibles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Collapsibles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Collapsibles_Filter>>>;
  collapsible_id?: InputMaybe<Collapsible_Lists_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Company_Logo_Lists = {
  __typename?: 'company_logo_lists';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  ignore?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Company_Logo_Lists_Items_2>>>;
  items_func?: Maybe<Count_Functions>;
  partner_logos?: Maybe<Array<Maybe<Company_Logo_Lists_Items>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Company_Logo_ListsItemsArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Company_Logo_ListsPartner_LogosArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Company_Logo_ListsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Company_Logo_ListsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Logo_Lists_Aggregated = {
  __typename?: 'company_logo_lists_aggregated';
  avg?: Maybe<Company_Logo_Lists_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Logo_Lists_Aggregated_Fields>;
  count?: Maybe<Company_Logo_Lists_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Logo_Lists_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Logo_Lists_Aggregated_Fields>;
  min?: Maybe<Company_Logo_Lists_Aggregated_Fields>;
  sum?: Maybe<Company_Logo_Lists_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Logo_Lists_Aggregated_Fields>;
};

export type Company_Logo_Lists_Aggregated_Count = {
  __typename?: 'company_logo_lists_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ignore?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Company_Logo_Lists_Aggregated_Fields = {
  __typename?: 'company_logo_lists_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Company_Logo_Lists_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ignore?: InputMaybe<String_Filter_Operators>;
  items?: InputMaybe<Company_Logo_Lists_Items_2_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  partner_logos?: InputMaybe<Company_Logo_Lists_Items_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Company_Logo_Lists_Items = {
  __typename?: 'company_logo_lists_items';
  collection?: Maybe<Scalars['String']['output']>;
  company_logo_lists_id?: Maybe<Company_Logo_Lists>;
  id: Scalars['ID']['output'];
  item?: Maybe<Company_Logo_Lists_Items_Item_Union>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Company_Logo_Lists_ItemsCompany_Logo_Lists_IdArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Logo_Lists_Items_1 = {
  __typename?: 'company_logo_lists_items_1';
  collection?: Maybe<Scalars['String']['output']>;
  company_logo_lists_id?: Maybe<Company_Logo_Lists>;
  id: Scalars['ID']['output'];
  item?: Maybe<Company_Logo_Lists_Items_1_Item_Union>;
};


export type Company_Logo_Lists_Items_1Company_Logo_Lists_IdArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Logo_Lists_Items_1_Aggregated = {
  __typename?: 'company_logo_lists_items_1_aggregated';
  avg?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Fields>;
  count?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Fields>;
  min?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Fields>;
  sum?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Logo_Lists_Items_1_Aggregated_Fields>;
};

export type Company_Logo_Lists_Items_1_Aggregated_Count = {
  __typename?: 'company_logo_lists_items_1_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  company_logo_lists_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
};

export type Company_Logo_Lists_Items_1_Aggregated_Fields = {
  __typename?: 'company_logo_lists_items_1_aggregated_fields';
  company_logo_lists_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Company_Logo_Lists_Items_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Items_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Items_1_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  company_logo_lists_id?: InputMaybe<Company_Logo_Lists_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__company_logo_lists_items?: InputMaybe<Company_Logo_Lists_Items_Filter>;
};

export type Company_Logo_Lists_Items_1_Item_Union = Company_Logo_Lists_Items;

export type Company_Logo_Lists_Items_2 = {
  __typename?: 'company_logo_lists_items_2';
  collection?: Maybe<Scalars['String']['output']>;
  company_logo_lists_id?: Maybe<Company_Logo_Lists>;
  id: Scalars['ID']['output'];
  item?: Maybe<Company_Logo_Lists_Items_2_Item_Union>;
};


export type Company_Logo_Lists_Items_2Company_Logo_Lists_IdArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Logo_Lists_Items_2_Aggregated = {
  __typename?: 'company_logo_lists_items_2_aggregated';
  avg?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Fields>;
  count?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Fields>;
  min?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Fields>;
  sum?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Logo_Lists_Items_2_Aggregated_Fields>;
};

export type Company_Logo_Lists_Items_2_Aggregated_Count = {
  __typename?: 'company_logo_lists_items_2_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  company_logo_lists_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
};

export type Company_Logo_Lists_Items_2_Aggregated_Fields = {
  __typename?: 'company_logo_lists_items_2_aggregated_fields';
  company_logo_lists_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Company_Logo_Lists_Items_2_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Items_2_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Items_2_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  company_logo_lists_id?: InputMaybe<Company_Logo_Lists_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__company_logos?: InputMaybe<Company_Logos_Filter>;
};

export type Company_Logo_Lists_Items_2_Item_Union = Company_Logos;

export type Company_Logo_Lists_Items_Aggregated = {
  __typename?: 'company_logo_lists_items_aggregated';
  avg?: Maybe<Company_Logo_Lists_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Logo_Lists_Items_Aggregated_Fields>;
  count?: Maybe<Company_Logo_Lists_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Logo_Lists_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Logo_Lists_Items_Aggregated_Fields>;
  min?: Maybe<Company_Logo_Lists_Items_Aggregated_Fields>;
  sum?: Maybe<Company_Logo_Lists_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Logo_Lists_Items_Aggregated_Fields>;
};

export type Company_Logo_Lists_Items_Aggregated_Count = {
  __typename?: 'company_logo_lists_items_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  company_logo_lists_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Company_Logo_Lists_Items_Aggregated_Fields = {
  __typename?: 'company_logo_lists_items_aggregated_fields';
  company_logo_lists_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Company_Logo_Lists_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Items_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  company_logo_lists_id?: InputMaybe<Company_Logo_Lists_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__company_logos?: InputMaybe<Company_Logos_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Company_Logo_Lists_Items_Item_Union = Company_Logos;

export type Company_Logos = {
  __typename?: 'company_logos';
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  logo_dark?: Maybe<Directus_Files>;
  logo_light?: Maybe<Directus_Files>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Company_LogosLogo_DarkArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Company_LogosLogo_LightArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Logos_Aggregated = {
  __typename?: 'company_logos_aggregated';
  avg?: Maybe<Company_Logos_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Logos_Aggregated_Fields>;
  count?: Maybe<Company_Logos_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Logos_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Logos_Aggregated_Fields>;
  min?: Maybe<Company_Logos_Aggregated_Fields>;
  sum?: Maybe<Company_Logos_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Logos_Aggregated_Fields>;
};

export type Company_Logos_Aggregated_Count = {
  __typename?: 'company_logos_aggregated_count';
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo_dark?: Maybe<Scalars['Int']['output']>;
  logo_light?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Company_Logos_Aggregated_Fields = {
  __typename?: 'company_logos_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Company_Logos_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logos_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logos_Filter>>>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo_dark?: InputMaybe<Directus_Files_Filter>;
  logo_light?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Apps_Input = {
  case_study?: InputMaybe<Create_Case_Studies_Input>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heroVideo?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Default comes from main Plural API */
  hero_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Default set in App Defaults */
  secondary_text?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Default set in App Defaults */
  secondary_title?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Article_Cards_Input = {
  article_card_id?: InputMaybe<Create_Page_Homepage_Input>;
  author?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Create_Directus_Files_Input>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Callouts_Input = {
  callout_id?: InputMaybe<Create_Page_Community_Input>;
  category?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Case_Studies_Input = {
  case_study_id?: InputMaybe<Create_Page_Homepage_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  hero_image?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stack_apps?: InputMaybe<Scalars['JSON']['input']>;
  stack_label?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Collapsible_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<Create_Collapsible_Lists_Items_Input>>>;
  slug: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Collapsible_Lists_Items_Input = {
  collapsible_lists_id?: InputMaybe<Create_Collapsible_Lists_Input>;
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Collapsibles_Input = {
  collapsible_id?: InputMaybe<Create_Collapsible_Lists_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Company_Logo_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ignore?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Create_Company_Logo_Lists_Items_2_Input>>>;
  partner_logos?: InputMaybe<Array<InputMaybe<Create_Company_Logo_Lists_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Company_Logo_Lists_Items_1_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  company_logo_lists_id?: InputMaybe<Create_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Company_Logo_Lists_Items_2_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  company_logo_lists_id?: InputMaybe<Create_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Company_Logo_Lists_Items_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  company_logo_lists_id?: InputMaybe<Create_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Company_Logos_Input = {
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo_dark?: InputMaybe<Create_Directus_Files_Input>;
  logo_light?: InputMaybe<Create_Directus_Files_Input>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
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

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
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

export type Create_Events_Input = {
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  fields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  show_end_time?: InputMaybe<Scalars['Boolean']['input']>;
  show_start_time: Scalars['Boolean']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  /** Must be TZ value from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  timezone?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Faqs_Input = {
  collapsible_id?: InputMaybe<Create_Collapsible_Lists_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Featured_Contributors_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portrait?: InputMaybe<Create_Directus_Files_Input>;
  social_github_url?: InputMaybe<Scalars['String']['input']>;
  social_linkedin_url?: InputMaybe<Scalars['String']['input']>;
  social_twitter_url?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Job_Listings_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Markdown_Pages_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  markdown_page_id?: InputMaybe<Create_Page_Legal_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Nav_Link_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Nav_List_Input = {
  flatten?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Create_Nav_Link_Input>;
  main_nav?: InputMaybe<Array<InputMaybe<Create_Nav_List_Input>>>;
  mobile_only?: InputMaybe<Scalars['Boolean']['input']>;
  parent_nav_list_id?: InputMaybe<Create_Nav_List_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  subnav?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Page_Community_Input = {
  callouts?: InputMaybe<Array<InputMaybe<Create_Callouts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Page_Homepage_Input = {
  article_cards?: InputMaybe<Array<InputMaybe<Create_Article_Cards_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  featured_quote?: InputMaybe<Create_Quotes_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quotes?: InputMaybe<Create_Quote_Lists_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Page_Legal_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pages?: InputMaybe<Array<InputMaybe<Create_Markdown_Pages_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Product_Page_Items_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  product_id?: InputMaybe<Create_Product_Pages_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Product_Pages_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  product_items?: InputMaybe<Array<InputMaybe<Create_Product_Page_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Quote_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<Create_Quote_Lists_Items_Input>>>;
  slug: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Quote_Lists_Items_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  quote_lists_id?: InputMaybe<Create_Quote_Lists_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Quotes_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Create_Directus_Files_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  portrait?: InputMaybe<Create_Directus_Files_Input>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_id?: InputMaybe<Create_Quote_Lists_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Site_Settings_Company_Logo_Lists_1_Input = {
  company_logo_lists_id?: InputMaybe<Create_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Create_Site_Settings_Input>;
};

export type Create_Site_Settings_Company_Logo_Lists_Input = {
  company_logo_lists_id?: InputMaybe<Create_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Create_Site_Settings_Input>;
};

export type Create_Site_Settings_Company_Logos_Input = {
  company_logos_id?: InputMaybe<Create_Company_Logos_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Create_Site_Settings_Input>;
};

export type Create_Site_Settings_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  main_nav?: InputMaybe<Array<InputMaybe<Create_Site_Settings_Main_Nav_Input>>>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Create_Directus_Files_Input>;
  og_image_community?: InputMaybe<Create_Directus_Files_Input>;
  og_image_marketplace?: InputMaybe<Create_Directus_Files_Input>;
  partner_logos?: InputMaybe<Array<InputMaybe<Create_Site_Settings_Company_Logo_Lists_1_Input>>>;
  promo_banner_content?: InputMaybe<Scalars['String']['input']>;
  promo_banner_url?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Site_Settings_Main_Nav_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  site_settings_id?: InputMaybe<Create_Site_Settings_Input>;
};

export type Create_Site_Settings_Nav_List_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  nav_list_id?: InputMaybe<Create_Nav_List_Input>;
  site_settings_id?: InputMaybe<Create_Site_Settings_Input>;
};

export type Create_Solutions_Pages_Input = {
  bullet_points?: InputMaybe<Scalars['JSON']['input']>;
  case_study?: InputMaybe<Create_Case_Studies_Input>;
  content_1?: InputMaybe<Scalars['String']['input']>;
  content_2?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured_quote?: InputMaybe<Create_Quotes_Input>;
  heading_1?: InputMaybe<Scalars['String']['input']>;
  heading_2?: InputMaybe<Scalars['String']['input']>;
  hero_image?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Stacks_Input = {
  case_study?: InputMaybe<Create_Case_Studies_Input>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heroVideo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Team_Members_Input = {
  categories?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOfAppearance?: InputMaybe<Scalars['Int']['input']>;
  portrait?: InputMaybe<Create_Directus_Files_Input>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename?: 'date_functions';
  day?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
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

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
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

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
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

export type Events = {
  __typename?: 'events';
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type EventsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
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
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
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
  show_end_time?: InputMaybe<Boolean_Filter_Operators>;
  show_start_time?: InputMaybe<Boolean_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_date?: InputMaybe<Date_Filter_Operators>;
  start_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  timezone?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Faqs = {
  __typename?: 'faqs';
  collapsible_id?: Maybe<Collapsible_Lists>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type FaqsCollapsible_IdArgs = {
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FaqsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FaqsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Faqs_Aggregated = {
  __typename?: 'faqs_aggregated';
  avg?: Maybe<Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Faqs_Aggregated_Fields>;
  count?: Maybe<Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Faqs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Faqs_Aggregated_Fields>;
  min?: Maybe<Faqs_Aggregated_Fields>;
  sum?: Maybe<Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Faqs_Aggregated_Fields>;
};

export type Faqs_Aggregated_Count = {
  __typename?: 'faqs_aggregated_count';
  collapsible_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Faqs_Aggregated_Fields = {
  __typename?: 'faqs_aggregated_fields';
  collapsible_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  collapsible_id?: InputMaybe<Collapsible_Lists_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Featured_Contributors = {
  __typename?: 'featured_contributors';
  content?: Maybe<Scalars['String']['output']>;
  ctas?: Maybe<Scalars['JSON']['output']>;
  ctas_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  portrait?: Maybe<Directus_Files>;
  social_github_url?: Maybe<Scalars['String']['output']>;
  social_linkedin_url?: Maybe<Scalars['String']['output']>;
  social_twitter_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Featured_ContributorsPortraitArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Featured_ContributorsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Featured_ContributorsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  portrait?: Maybe<Scalars['Int']['output']>;
  social_github_url?: Maybe<Scalars['Int']['output']>;
  social_linkedin_url?: Maybe<Scalars['Int']['output']>;
  social_twitter_url?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
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
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  portrait?: InputMaybe<Directus_Files_Filter>;
  social_github_url?: InputMaybe<String_Filter_Operators>;
  social_linkedin_url?: InputMaybe<String_Filter_Operators>;
  social_twitter_url?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Job_Listings = {
  __typename?: 'job_listings';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job_title?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Job_ListingsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Job_ListingsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Job_Listings_Aggregated = {
  __typename?: 'job_listings_aggregated';
  avg?: Maybe<Job_Listings_Aggregated_Fields>;
  avgDistinct?: Maybe<Job_Listings_Aggregated_Fields>;
  count?: Maybe<Job_Listings_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Job_Listings_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Job_Listings_Aggregated_Fields>;
  min?: Maybe<Job_Listings_Aggregated_Fields>;
  sum?: Maybe<Job_Listings_Aggregated_Fields>;
  sumDistinct?: Maybe<Job_Listings_Aggregated_Fields>;
};

export type Job_Listings_Aggregated_Count = {
  __typename?: 'job_listings_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  department?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  job_title?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Job_Listings_Aggregated_Fields = {
  __typename?: 'job_listings_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Job_Listings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Job_Listings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Job_Listings_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  department?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  job_title?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Markdown_Pages = {
  __typename?: 'markdown_pages';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  markdown_page_id?: Maybe<Page_Legal>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Markdown_PagesMarkdown_Page_IdArgs = {
  filter?: InputMaybe<Page_Legal_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Markdown_PagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Markdown_PagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  markdown_page_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Markdown_Pages_Aggregated_Fields = {
  __typename?: 'markdown_pages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  markdown_page_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Markdown_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Markdown_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Markdown_Pages_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  markdown_page_id?: InputMaybe<Page_Legal_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  main_nav?: Maybe<Array<Maybe<Nav_List>>>;
  mobile_only?: Maybe<Scalars['Boolean']['output']>;
  parent_nav_list_id?: Maybe<Nav_List>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  subnav?: Maybe<Scalars['String']['output']>;
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


export type Nav_ListMain_NavArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
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
  main_nav?: InputMaybe<Nav_List_Filter>;
  mobile_only?: InputMaybe<Boolean_Filter_Operators>;
  parent_nav_list_id?: InputMaybe<Nav_List_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  subnav?: InputMaybe<String_Filter_Operators>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Page_CommunityCalloutsArgs = {
  filter?: InputMaybe<Callouts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_CommunityUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_CommunityUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Page_Homepage = {
  __typename?: 'page_homepage';
  article_cards?: Maybe<Array<Maybe<Article_Cards>>>;
  article_cards_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  featured_quote?: Maybe<Quotes>;
  id: Scalars['ID']['output'];
  quotes?: Maybe<Quote_Lists>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Page_HomepageArticle_CardsArgs = {
  filter?: InputMaybe<Article_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_HomepageFeatured_QuoteArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_HomepageQuotesArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_HomepageUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_HomepageUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Homepage_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Homepage_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Homepage_Filter>>>;
  article_cards?: InputMaybe<Article_Cards_Filter>;
  article_cards_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  featured_quote?: InputMaybe<Quotes_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  quotes?: InputMaybe<Quote_Lists_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Page_Legal = {
  __typename?: 'page_legal';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  pages?: Maybe<Array<Maybe<Markdown_Pages>>>;
  pages_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Page_LegalPagesArgs = {
  filter?: InputMaybe<Markdown_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_LegalUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_LegalUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Legal_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Legal_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Legal_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  pages?: InputMaybe<Markdown_Pages_Filter>;
  pages_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Page_Product = {
  __typename?: 'page_product';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  faq?: Maybe<Collapsible_Lists>;
  featured_quote?: Maybe<Quotes>;
  id: Scalars['ID']['output'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Page_ProductFaqArgs = {
  filter?: InputMaybe<Collapsible_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_ProductFeatured_QuoteArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_ProductUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_ProductUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Page_Items = {
  __typename?: 'product_page_items';
  description?: Maybe<Scalars['String']['output']>;
  icon_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  product_id?: Maybe<Product_Pages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Product_Page_ItemsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Product_Page_ItemsProduct_IdArgs = {
  filter?: InputMaybe<Product_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Page_Items_Aggregated = {
  __typename?: 'product_page_items_aggregated';
  avg?: Maybe<Product_Page_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Product_Page_Items_Aggregated_Fields>;
  count?: Maybe<Product_Page_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Product_Page_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Product_Page_Items_Aggregated_Fields>;
  min?: Maybe<Product_Page_Items_Aggregated_Fields>;
  sum?: Maybe<Product_Page_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Product_Page_Items_Aggregated_Fields>;
};

export type Product_Page_Items_Aggregated_Count = {
  __typename?: 'product_page_items_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  icon_name?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Product_Page_Items_Aggregated_Fields = {
  __typename?: 'product_page_items_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

export type Product_Page_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Product_Page_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Page_Items_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  icon_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  product_id?: InputMaybe<Product_Pages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Product_Pages = {
  __typename?: 'product_pages';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  product_items?: Maybe<Array<Maybe<Product_Page_Items>>>;
  product_items_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Product_PagesProduct_ItemsArgs = {
  filter?: InputMaybe<Product_Page_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Pages_Aggregated = {
  __typename?: 'product_pages_aggregated';
  avg?: Maybe<Product_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Product_Pages_Aggregated_Fields>;
  count?: Maybe<Product_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Product_Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Product_Pages_Aggregated_Fields>;
  min?: Maybe<Product_Pages_Aggregated_Fields>;
  sum?: Maybe<Product_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Product_Pages_Aggregated_Fields>;
};

export type Product_Pages_Aggregated_Count = {
  __typename?: 'product_pages_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product_items?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Product_Pages_Aggregated_Fields = {
  __typename?: 'product_pages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Product_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Product_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Pages_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  product_items?: InputMaybe<Product_Page_Items_Filter>;
  product_items_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Quote_Lists = {
  __typename?: 'quote_lists';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Quote_Lists_Items>>>;
  items_func?: Maybe<Count_Functions>;
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Quote_ListsItemsArgs = {
  filter?: InputMaybe<Quote_Lists_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Quote_ListsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Quote_ListsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quote_Lists_Aggregated = {
  __typename?: 'quote_lists_aggregated';
  count?: Maybe<Quote_Lists_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Quote_Lists_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Quote_Lists_Aggregated_Count = {
  __typename?: 'quote_lists_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Quote_Lists_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Quote_Lists_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Quote_Lists_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  items?: InputMaybe<Quote_Lists_Items_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Quote_Lists_Items = {
  __typename?: 'quote_lists_items';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Quote_Lists_Items_Item_Union>;
  quote_lists_id?: Maybe<Quote_Lists>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Quote_Lists_ItemsQuote_Lists_IdArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quote_Lists_Items_Aggregated = {
  __typename?: 'quote_lists_items_aggregated';
  avg?: Maybe<Quote_Lists_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Quote_Lists_Items_Aggregated_Fields>;
  count?: Maybe<Quote_Lists_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Quote_Lists_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Quote_Lists_Items_Aggregated_Fields>;
  min?: Maybe<Quote_Lists_Items_Aggregated_Fields>;
  sum?: Maybe<Quote_Lists_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Quote_Lists_Items_Aggregated_Fields>;
};

export type Quote_Lists_Items_Aggregated_Count = {
  __typename?: 'quote_lists_items_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  quote_lists_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Quote_Lists_Items_Aggregated_Fields = {
  __typename?: 'quote_lists_items_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Quote_Lists_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Quote_Lists_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Quote_Lists_Items_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__quotes?: InputMaybe<Quotes_Filter>;
  quote_lists_id?: InputMaybe<Quote_Lists_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Quote_Lists_Items_Item_Union = Quotes;

export type Quotes = {
  __typename?: 'quotes';
  company?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']['output']>;
  portrait?: Maybe<Directus_Files>;
  quote?: Maybe<Scalars['String']['output']>;
  quote_id?: Maybe<Quote_Lists>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type QuotesLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuotesPortraitArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuotesQuote_IdArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuotesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuotesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quotes_Aggregated = {
  __typename?: 'quotes_aggregated';
  avg?: Maybe<Quotes_Aggregated_Fields>;
  avgDistinct?: Maybe<Quotes_Aggregated_Fields>;
  count?: Maybe<Quotes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Quotes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Quotes_Aggregated_Fields>;
  min?: Maybe<Quotes_Aggregated_Fields>;
  sum?: Maybe<Quotes_Aggregated_Fields>;
  sumDistinct?: Maybe<Quotes_Aggregated_Fields>;
};

export type Quotes_Aggregated_Count = {
  __typename?: 'quotes_aggregated_count';
  company?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  portrait?: Maybe<Scalars['Int']['output']>;
  quote?: Maybe<Scalars['Int']['output']>;
  quote_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Quotes_Aggregated_Fields = {
  __typename?: 'quotes_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Quotes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Quotes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Quotes_Filter>>>;
  company?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  portrait?: InputMaybe<Directus_Files_Filter>;
  quote?: InputMaybe<String_Filter_Operators>;
  quote_id?: InputMaybe<Quote_Lists_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Site_Settings = {
  __typename?: 'site_settings';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  main_nav?: Maybe<Array<Maybe<Site_Settings_Main_Nav>>>;
  main_nav_func?: Maybe<Count_Functions>;
  og_description?: Maybe<Scalars['String']['output']>;
  og_image?: Maybe<Directus_Files>;
  og_image_community?: Maybe<Directus_Files>;
  og_image_marketplace?: Maybe<Directus_Files>;
  partner_logos?: Maybe<Array<Maybe<Site_Settings_Company_Logo_Lists_1>>>;
  partner_logos_func?: Maybe<Count_Functions>;
  promo_banner_content?: Maybe<Scalars['String']['output']>;
  promo_banner_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Site_SettingsMain_NavArgs = {
  filter?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_SettingsOg_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_SettingsOg_Image_CommunityArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_SettingsOg_Image_MarketplaceArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_SettingsPartner_LogosArgs = {
  filter?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_SettingsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_SettingsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Settings_Company_Logo_Lists = {
  __typename?: 'site_settings_company_logo_lists';
  company_logo_lists_id?: Maybe<Company_Logo_Lists>;
  id: Scalars['ID']['output'];
  site_settings_id?: Maybe<Site_Settings>;
};


export type Site_Settings_Company_Logo_ListsCompany_Logo_Lists_IdArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_Settings_Company_Logo_ListsSite_Settings_IdArgs = {
  filter?: InputMaybe<Site_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Settings_Company_Logo_Lists_1 = {
  __typename?: 'site_settings_company_logo_lists_1';
  company_logo_lists_id?: Maybe<Company_Logo_Lists>;
  id: Scalars['ID']['output'];
  site_settings_id?: Maybe<Site_Settings>;
};


export type Site_Settings_Company_Logo_Lists_1Company_Logo_Lists_IdArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_Settings_Company_Logo_Lists_1Site_Settings_IdArgs = {
  filter?: InputMaybe<Site_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Settings_Company_Logo_Lists_1_Aggregated = {
  __typename?: 'site_settings_company_logo_lists_1_aggregated';
  avg?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Fields>;
  avgDistinct?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Fields>;
  count?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Fields>;
  min?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Fields>;
  sum?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Fields>;
  sumDistinct?: Maybe<Site_Settings_Company_Logo_Lists_1_Aggregated_Fields>;
};

export type Site_Settings_Company_Logo_Lists_1_Aggregated_Count = {
  __typename?: 'site_settings_company_logo_lists_1_aggregated_count';
  company_logo_lists_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  site_settings_id?: Maybe<Scalars['Int']['output']>;
};

export type Site_Settings_Company_Logo_Lists_1_Aggregated_Fields = {
  __typename?: 'site_settings_company_logo_lists_1_aggregated_fields';
  company_logo_lists_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  site_settings_id?: Maybe<Scalars['Float']['output']>;
};

export type Site_Settings_Company_Logo_Lists_1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>>>;
  company_logo_lists_id?: InputMaybe<Company_Logo_Lists_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  site_settings_id?: InputMaybe<Site_Settings_Filter>;
};

export type Site_Settings_Company_Logo_Lists_Aggregated = {
  __typename?: 'site_settings_company_logo_lists_aggregated';
  avg?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Fields>;
  avgDistinct?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Fields>;
  count?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Fields>;
  min?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Fields>;
  sum?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Fields>;
  sumDistinct?: Maybe<Site_Settings_Company_Logo_Lists_Aggregated_Fields>;
};

export type Site_Settings_Company_Logo_Lists_Aggregated_Count = {
  __typename?: 'site_settings_company_logo_lists_aggregated_count';
  company_logo_lists_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  site_settings_id?: Maybe<Scalars['Int']['output']>;
};

export type Site_Settings_Company_Logo_Lists_Aggregated_Fields = {
  __typename?: 'site_settings_company_logo_lists_aggregated_fields';
  company_logo_lists_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  site_settings_id?: Maybe<Scalars['Float']['output']>;
};

export type Site_Settings_Company_Logo_Lists_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Company_Logo_Lists_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Company_Logo_Lists_Filter>>>;
  company_logo_lists_id?: InputMaybe<Company_Logo_Lists_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  site_settings_id?: InputMaybe<Site_Settings_Filter>;
};

export type Site_Settings_Company_Logos = {
  __typename?: 'site_settings_company_logos';
  company_logos_id?: Maybe<Company_Logos>;
  id: Scalars['ID']['output'];
  site_settings_id?: Maybe<Site_Settings>;
};


export type Site_Settings_Company_LogosCompany_Logos_IdArgs = {
  filter?: InputMaybe<Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_Settings_Company_LogosSite_Settings_IdArgs = {
  filter?: InputMaybe<Site_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Settings_Company_Logos_Aggregated = {
  __typename?: 'site_settings_company_logos_aggregated';
  avg?: Maybe<Site_Settings_Company_Logos_Aggregated_Fields>;
  avgDistinct?: Maybe<Site_Settings_Company_Logos_Aggregated_Fields>;
  count?: Maybe<Site_Settings_Company_Logos_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Site_Settings_Company_Logos_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Site_Settings_Company_Logos_Aggregated_Fields>;
  min?: Maybe<Site_Settings_Company_Logos_Aggregated_Fields>;
  sum?: Maybe<Site_Settings_Company_Logos_Aggregated_Fields>;
  sumDistinct?: Maybe<Site_Settings_Company_Logos_Aggregated_Fields>;
};

export type Site_Settings_Company_Logos_Aggregated_Count = {
  __typename?: 'site_settings_company_logos_aggregated_count';
  company_logos_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  site_settings_id?: Maybe<Scalars['Int']['output']>;
};

export type Site_Settings_Company_Logos_Aggregated_Fields = {
  __typename?: 'site_settings_company_logos_aggregated_fields';
  company_logos_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  site_settings_id?: Maybe<Scalars['Float']['output']>;
};

export type Site_Settings_Company_Logos_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Company_Logos_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Company_Logos_Filter>>>;
  company_logos_id?: InputMaybe<Company_Logos_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  site_settings_id?: InputMaybe<Site_Settings_Filter>;
};

export type Site_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  main_nav?: InputMaybe<Site_Settings_Main_Nav_Filter>;
  main_nav_func?: InputMaybe<Count_Function_Filter_Operators>;
  og_description?: InputMaybe<String_Filter_Operators>;
  og_image?: InputMaybe<Directus_Files_Filter>;
  og_image_community?: InputMaybe<Directus_Files_Filter>;
  og_image_marketplace?: InputMaybe<Directus_Files_Filter>;
  partner_logos?: InputMaybe<Site_Settings_Company_Logo_Lists_1_Filter>;
  partner_logos_func?: InputMaybe<Count_Function_Filter_Operators>;
  promo_banner_content?: InputMaybe<String_Filter_Operators>;
  promo_banner_url?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Site_Settings_Main_Nav = {
  __typename?: 'site_settings_main_nav';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Site_Settings_Main_Nav_Item_Union>;
  site_settings_id?: Maybe<Site_Settings>;
};


export type Site_Settings_Main_NavSite_Settings_IdArgs = {
  filter?: InputMaybe<Site_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Settings_Main_Nav_Aggregated = {
  __typename?: 'site_settings_main_nav_aggregated';
  avg?: Maybe<Site_Settings_Main_Nav_Aggregated_Fields>;
  avgDistinct?: Maybe<Site_Settings_Main_Nav_Aggregated_Fields>;
  count?: Maybe<Site_Settings_Main_Nav_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Site_Settings_Main_Nav_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Site_Settings_Main_Nav_Aggregated_Fields>;
  min?: Maybe<Site_Settings_Main_Nav_Aggregated_Fields>;
  sum?: Maybe<Site_Settings_Main_Nav_Aggregated_Fields>;
  sumDistinct?: Maybe<Site_Settings_Main_Nav_Aggregated_Fields>;
};

export type Site_Settings_Main_Nav_Aggregated_Count = {
  __typename?: 'site_settings_main_nav_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  site_settings_id?: Maybe<Scalars['Int']['output']>;
};

export type Site_Settings_Main_Nav_Aggregated_Fields = {
  __typename?: 'site_settings_main_nav_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  site_settings_id?: Maybe<Scalars['Float']['output']>;
};

export type Site_Settings_Main_Nav_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Main_Nav_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Main_Nav_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__nav_list?: InputMaybe<Nav_List_Filter>;
  site_settings_id?: InputMaybe<Site_Settings_Filter>;
};

export type Site_Settings_Main_Nav_Item_Union = Nav_List;

export type Site_Settings_Nav_List = {
  __typename?: 'site_settings_nav_list';
  id: Scalars['ID']['output'];
  nav_list_id?: Maybe<Nav_List>;
  site_settings_id?: Maybe<Site_Settings>;
};


export type Site_Settings_Nav_ListNav_List_IdArgs = {
  filter?: InputMaybe<Nav_List_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Site_Settings_Nav_ListSite_Settings_IdArgs = {
  filter?: InputMaybe<Site_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Settings_Nav_List_Aggregated = {
  __typename?: 'site_settings_nav_list_aggregated';
  avg?: Maybe<Site_Settings_Nav_List_Aggregated_Fields>;
  avgDistinct?: Maybe<Site_Settings_Nav_List_Aggregated_Fields>;
  count?: Maybe<Site_Settings_Nav_List_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Site_Settings_Nav_List_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Site_Settings_Nav_List_Aggregated_Fields>;
  min?: Maybe<Site_Settings_Nav_List_Aggregated_Fields>;
  sum?: Maybe<Site_Settings_Nav_List_Aggregated_Fields>;
  sumDistinct?: Maybe<Site_Settings_Nav_List_Aggregated_Fields>;
};

export type Site_Settings_Nav_List_Aggregated_Count = {
  __typename?: 'site_settings_nav_list_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  nav_list_id?: Maybe<Scalars['Int']['output']>;
  site_settings_id?: Maybe<Scalars['Int']['output']>;
};

export type Site_Settings_Nav_List_Aggregated_Fields = {
  __typename?: 'site_settings_nav_list_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  site_settings_id?: Maybe<Scalars['Float']['output']>;
};

export type Site_Settings_Nav_List_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Nav_List_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Nav_List_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  nav_list_id?: InputMaybe<Nav_List_Filter>;
  site_settings_id?: InputMaybe<Site_Settings_Filter>;
};

export type Solutions_Pages = {
  __typename?: 'solutions_pages';
  bullet_points?: Maybe<Scalars['JSON']['output']>;
  bullet_points_func?: Maybe<Count_Functions>;
  case_study?: Maybe<Case_Studies>;
  content_1?: Maybe<Scalars['String']['output']>;
  content_2?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  featured_quote?: Maybe<Quotes>;
  heading_1?: Maybe<Scalars['String']['output']>;
  heading_2?: Maybe<Scalars['String']['output']>;
  hero_image?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Solutions_PagesCase_StudyArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesFeatured_QuoteArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesHero_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Solutions_Pages_Aggregated = {
  __typename?: 'solutions_pages_aggregated';
  avg?: Maybe<Solutions_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Solutions_Pages_Aggregated_Fields>;
  count?: Maybe<Solutions_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Solutions_Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Solutions_Pages_Aggregated_Fields>;
  min?: Maybe<Solutions_Pages_Aggregated_Fields>;
  sum?: Maybe<Solutions_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Solutions_Pages_Aggregated_Fields>;
};

export type Solutions_Pages_Aggregated_Count = {
  __typename?: 'solutions_pages_aggregated_count';
  bullet_points?: Maybe<Scalars['Int']['output']>;
  case_study?: Maybe<Scalars['Int']['output']>;
  content_1?: Maybe<Scalars['Int']['output']>;
  content_2?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  featured_quote?: Maybe<Scalars['Int']['output']>;
  heading_1?: Maybe<Scalars['Int']['output']>;
  heading_2?: Maybe<Scalars['Int']['output']>;
  hero_image?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Solutions_Pages_Aggregated_Fields = {
  __typename?: 'solutions_pages_aggregated_fields';
  case_study?: Maybe<Scalars['Float']['output']>;
  featured_quote?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Solutions_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Solutions_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Solutions_Pages_Filter>>>;
  bullet_points?: InputMaybe<String_Filter_Operators>;
  bullet_points_func?: InputMaybe<Count_Function_Filter_Operators>;
  case_study?: InputMaybe<Case_Studies_Filter>;
  content_1?: InputMaybe<String_Filter_Operators>;
  content_2?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  featured_quote?: InputMaybe<Quotes_Filter>;
  heading_1?: InputMaybe<String_Filter_Operators>;
  heading_2?: InputMaybe<String_Filter_Operators>;
  hero_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Stack_Defaults = {
  __typename?: 'stack_defaults';
  case_study?: Maybe<Case_Studies>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  quotes?: Maybe<Quote_Lists>;
  user_updated?: Maybe<Directus_Users>;
};


export type Stack_DefaultsCase_StudyArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Stack_DefaultsQuotesArgs = {
  filter?: InputMaybe<Quote_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Stack_DefaultsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Stacks = {
  __typename?: 'stacks';
  case_study?: Maybe<Case_Studies>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  heroVideo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Directus_Users>;
};


export type StacksCase_StudyArgs = {
  filter?: InputMaybe<Case_Studies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type StacksUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  /** Use to override default case study for individual stack */
  case_study?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  heroVideo?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Stacks_Aggregated_Fields = {
  __typename?: 'stacks_aggregated_fields';
  /** Use to override default case study for individual stack */
  case_study?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Stacks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Stacks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Stacks_Filter>>>;
  case_study?: InputMaybe<Case_Studies_Filter>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  heroVideo?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orderOfAppearance?: Maybe<Scalars['Int']['output']>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  orderOfAppearance?: Maybe<Scalars['Int']['output']>;
  portrait?: Maybe<Scalars['Int']['output']>;
  pronouns?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Team_Members_Aggregated_Fields = {
  __typename?: 'team_members_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderOfAppearance?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Members_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Members_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Members_Filter>>>;
  categories?: InputMaybe<String_Filter_Operators>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  orderOfAppearance?: InputMaybe<Number_Filter_Operators>;
  portrait?: InputMaybe<Directus_Files_Filter>;
  pronouns?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Update_App_Defaults_Input = {
  case_study?: InputMaybe<Update_Case_Studies_Input>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quotes?: InputMaybe<Update_Quote_Lists_Input>;
  secondary_text?: InputMaybe<Scalars['String']['input']>;
  secondary_title?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Apps_Input = {
  case_study?: InputMaybe<Update_Case_Studies_Input>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heroVideo?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Default comes from main Plural API */
  hero_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Default set in App Defaults */
  secondary_text?: InputMaybe<Scalars['String']['input']>;
  /** Optional - Default set in App Defaults */
  secondary_title?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Article_Cards_Input = {
  article_card_id?: InputMaybe<Update_Page_Homepage_Input>;
  author?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Update_Directus_Files_Input>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Callouts_Input = {
  callout_id?: InputMaybe<Update_Page_Community_Input>;
  category?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Case_Studies_Input = {
  case_study_id?: InputMaybe<Update_Page_Homepage_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  hero_image?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stack_apps?: InputMaybe<Scalars['JSON']['input']>;
  stack_label?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Collapsible_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<Update_Collapsible_Lists_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Collapsible_Lists_Items_Input = {
  collapsible_lists_id?: InputMaybe<Update_Collapsible_Lists_Input>;
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Collapsibles_Input = {
  collapsible_id?: InputMaybe<Update_Collapsible_Lists_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Company_Logo_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ignore?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Update_Company_Logo_Lists_Items_2_Input>>>;
  partner_logos?: InputMaybe<Array<InputMaybe<Update_Company_Logo_Lists_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Company_Logo_Lists_Items_1_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  company_logo_lists_id?: InputMaybe<Update_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Company_Logo_Lists_Items_2_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  company_logo_lists_id?: InputMaybe<Update_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Company_Logo_Lists_Items_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  company_logo_lists_id?: InputMaybe<Update_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Company_Logos_Input = {
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo_dark?: InputMaybe<Update_Directus_Files_Input>;
  logo_light?: InputMaybe<Update_Directus_Files_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
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

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
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

export type Update_Events_Input = {
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  fields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  show_end_time?: InputMaybe<Scalars['Boolean']['input']>;
  show_start_time?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  /** Must be TZ value from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  timezone?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Faqs_Input = {
  collapsible_id?: InputMaybe<Update_Collapsible_Lists_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Featured_Contributors_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  ctas?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portrait?: InputMaybe<Update_Directus_Files_Input>;
  social_github_url?: InputMaybe<Scalars['String']['input']>;
  social_linkedin_url?: InputMaybe<Scalars['String']['input']>;
  social_twitter_url?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Job_Listings_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Markdown_Pages_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  markdown_page_id?: InputMaybe<Update_Page_Legal_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Nav_Link_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Nav_List_Input = {
  flatten?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Update_Nav_Link_Input>;
  main_nav?: InputMaybe<Array<InputMaybe<Update_Nav_List_Input>>>;
  mobile_only?: InputMaybe<Scalars['Boolean']['input']>;
  parent_nav_list_id?: InputMaybe<Update_Nav_List_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  subnav?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Page_Community_Input = {
  callouts?: InputMaybe<Array<InputMaybe<Update_Callouts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Page_Homepage_Input = {
  article_cards?: InputMaybe<Array<InputMaybe<Update_Article_Cards_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  featured_quote?: InputMaybe<Update_Quotes_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quotes?: InputMaybe<Update_Quote_Lists_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Page_Legal_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pages?: InputMaybe<Array<InputMaybe<Update_Markdown_Pages_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Page_Product_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  faq?: InputMaybe<Update_Collapsible_Lists_Input>;
  featured_quote?: InputMaybe<Update_Quotes_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Product_Page_Items_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  product_id?: InputMaybe<Update_Product_Pages_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Product_Pages_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  product_items?: InputMaybe<Array<InputMaybe<Update_Product_Page_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Quote_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<Update_Quote_Lists_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Quote_Lists_Items_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  quote_lists_id?: InputMaybe<Update_Quote_Lists_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Quotes_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Update_Directus_Files_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  portrait?: InputMaybe<Update_Directus_Files_Input>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_id?: InputMaybe<Update_Quote_Lists_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Site_Settings_Company_Logo_Lists_1_Input = {
  company_logo_lists_id?: InputMaybe<Update_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Update_Site_Settings_Input>;
};

export type Update_Site_Settings_Company_Logo_Lists_Input = {
  company_logo_lists_id?: InputMaybe<Update_Company_Logo_Lists_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Update_Site_Settings_Input>;
};

export type Update_Site_Settings_Company_Logos_Input = {
  company_logos_id?: InputMaybe<Update_Company_Logos_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Update_Site_Settings_Input>;
};

export type Update_Site_Settings_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  main_nav?: InputMaybe<Array<InputMaybe<Update_Site_Settings_Main_Nav_Input>>>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Update_Directus_Files_Input>;
  og_image_community?: InputMaybe<Update_Directus_Files_Input>;
  og_image_marketplace?: InputMaybe<Update_Directus_Files_Input>;
  partner_logos?: InputMaybe<Array<InputMaybe<Update_Site_Settings_Company_Logo_Lists_1_Input>>>;
  promo_banner_content?: InputMaybe<Scalars['String']['input']>;
  promo_banner_url?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Site_Settings_Main_Nav_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  site_settings_id?: InputMaybe<Update_Site_Settings_Input>;
};

export type Update_Site_Settings_Nav_List_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  nav_list_id?: InputMaybe<Update_Nav_List_Input>;
  site_settings_id?: InputMaybe<Update_Site_Settings_Input>;
};

export type Update_Solutions_Pages_Input = {
  bullet_points?: InputMaybe<Scalars['JSON']['input']>;
  case_study?: InputMaybe<Update_Case_Studies_Input>;
  content_1?: InputMaybe<Scalars['String']['input']>;
  content_2?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured_quote?: InputMaybe<Update_Quotes_Input>;
  heading_1?: InputMaybe<Scalars['String']['input']>;
  heading_2?: InputMaybe<Scalars['String']['input']>;
  hero_image?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Stack_Defaults_Input = {
  case_study?: InputMaybe<Update_Case_Studies_Input>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quotes?: InputMaybe<Update_Quote_Lists_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Stacks_Input = {
  case_study?: InputMaybe<Update_Case_Studies_Input>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heroVideo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Team_Members_Input = {
  categories?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOfAppearance?: InputMaybe<Scalars['Int']['input']>;
  portrait?: InputMaybe<Update_Directus_Files_Input>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EventFragment = { __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, show_start_time: boolean, show_end_time?: boolean | null, timezone?: string | null, description?: string | null, fields?: any | null, ctas?: any | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, show_start_time: boolean, show_end_time?: boolean | null, timezone?: string | null, description?: string | null, fields?: any | null, ctas?: any | null }> };

export type LinkFragment = { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null };

export type NavListFragment = { __typename?: 'nav_list', id: string, flatten?: boolean | null, mobile_only?: boolean | null, link?: { __typename?: 'nav_link', id: string, title?: string | null, url?: string | null } | null };

export type CompanyLogoFragment = { __typename?: 'company_logos', slug?: string | null, name: string, url?: string | null, width?: number | null, logo_light?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo_dark?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type LogoListFragment = { __typename?: 'company_logo_lists', slug?: string | null };

export type CaseStudyFragment = { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type AppExtrasFragment = { __typename?: 'apps', name?: string | null, heroVideo?: string | null, hero_text?: string | null, secondary_title?: string | null, secondary_text?: string | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null };

export type AppDefaultsFragment = { __typename?: 'app_defaults', secondary_title?: string | null, secondary_text?: string | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null };

export type AppExtrasQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type AppExtrasQuery = { __typename?: 'Query', apps: Array<{ __typename?: 'apps', name?: string | null, heroVideo?: string | null, hero_text?: string | null, secondary_title?: string | null, secondary_text?: string | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null }>, app_defaults?: { __typename?: 'app_defaults', secondary_title?: string | null, secondary_text?: string | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null } | null };

export type StackExtrasFragment = { __typename?: 'stacks', name?: string | null, heroVideo?: string | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null };

export type StackDefaultsFragment = { __typename?: 'stack_defaults', case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null };

export type StackExtrasQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type StackExtrasQuery = { __typename?: 'Query', stacks: Array<{ __typename?: 'stacks', name?: string | null, heroVideo?: string | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null }>, stack_defaults?: { __typename?: 'stack_defaults', case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null } | null };

export type ImageFileFragment = { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null };

export type TeamMemberFragment = { __typename?: 'team_members', id: string, name?: string | null, title?: string | null, categories?: any | null, pronouns?: string | null, orderOfAppearance?: number | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type TeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamMembersQuery = { __typename?: 'Query', team_members: Array<{ __typename?: 'team_members', id: string, name?: string | null, title?: string | null, categories?: any | null, pronouns?: string | null, orderOfAppearance?: number | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null }> };

export type FeaturedContributorFragment = { __typename?: 'featured_contributors', id: string, name?: string | null, title?: string | null, social_github_url?: string | null, social_twitter_url?: string | null, social_linkedin_url?: string | null, content?: string | null, ctas?: any | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type FeaturedContributorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedContributorsQuery = { __typename?: 'Query', featured_contributors: Array<{ __typename?: 'featured_contributors', id: string, name?: string | null, title?: string | null, social_github_url?: string | null, social_twitter_url?: string | null, social_linkedin_url?: string | null, content?: string | null, ctas?: any | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null }> };

export type FaqItemFragment = { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null };

export type FaqListFragment = { __typename?: 'collapsible_lists', items?: Array<{ __typename?: 'collapsible_lists_items', item?: { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null } | null } | null> | null };

export type FaqListQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FaqListQuery = { __typename?: 'Query', collapsible_lists: Array<{ __typename?: 'collapsible_lists', items?: Array<{ __typename?: 'collapsible_lists_items', item?: { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null } | null } | null> | null }> };

export type SolutionFragment = { __typename?: 'solutions_pages', id: string, slug: string, title?: string | null, description?: string | null, heading_1?: string | null, content_1?: string | null, heading_2?: string | null, content_2?: string | null, bullet_points?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null };

export type SolutionsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SolutionsSlugsQuery = { __typename?: 'Query', solutions_pages: Array<{ __typename?: 'solutions_pages', slug: string }> };

export type SolutionsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type SolutionsQuery = { __typename?: 'Query', solutions_pages: Array<{ __typename?: 'solutions_pages', id: string, slug: string, title?: string | null, description?: string | null, heading_1?: string | null, content_1?: string | null, heading_2?: string | null, content_2?: string | null, bullet_points?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, case_study?: { __typename?: 'case_studies', id: string, slug?: string | null, label?: string | null, title?: string | null, content?: string | null, ctas?: any | null, stack_label?: string | null, stack_apps?: any | null, hero_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null }> };

export type MinJobListingFragment = { __typename?: 'job_listings', id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null };

export type FullJobListingFragment = { __typename?: 'job_listings', content?: string | null, id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null };

export type JobListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobListingsQuery = { __typename?: 'Query', job_listings: Array<{ __typename?: 'job_listings', id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null }> };

export type JobListingQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type JobListingQuery = { __typename?: 'Query', job_listings: Array<{ __typename?: 'job_listings', content?: string | null, id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null }> };

export type JobListingSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobListingSlugsQuery = { __typename?: 'Query', job_listings: Array<{ __typename?: 'job_listings', slug: string }> };

export type CalloutFragment = { __typename?: 'callouts', id: string, sort?: number | null, category?: string | null, title?: string | null, content?: string | null, ctas?: any | null };

export type PageCommunityFragment = { __typename?: 'page_community', callouts?: Array<{ __typename?: 'callouts', id: string, sort?: number | null, category?: string | null, title?: string | null, content?: string | null, ctas?: any | null } | null> | null };

export type PageCommunityQueryVariables = Exact<{ [key: string]: never; }>;


export type PageCommunityQuery = { __typename?: 'Query', page_community?: { __typename?: 'page_community', callouts?: Array<{ __typename?: 'callouts', id: string, sort?: number | null, category?: string | null, title?: string | null, content?: string | null, ctas?: any | null } | null> | null } | null };

export type PageProductFragment = { __typename?: 'page_product', featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, faq?: { __typename?: 'collapsible_lists', items?: Array<{ __typename?: 'collapsible_lists_items', item?: { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null } | null } | null> | null } | null };

export type PageProductQueryVariables = Exact<{ [key: string]: never; }>;


export type PageProductQuery = { __typename?: 'Query', page_product?: { __typename?: 'page_product', featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null, faq?: { __typename?: 'collapsible_lists', items?: Array<{ __typename?: 'collapsible_lists_items', item?: { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null } | null } | null> | null } | null } | null };

export type MarkdownPageFragment = { __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null };

export type PageLegalFragment = { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null } | null> | null };

export type PageLegalQueryVariables = Exact<{ [key: string]: never; }>;


export type PageLegalQuery = { __typename?: 'Query', page_legal?: { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null } | null> | null } | null };

export type LegalPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type LegalPageSlugsQuery = { __typename?: 'Query', page_legal?: { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', slug?: string | null } | null> | null } | null };

export type ArticleCardFragment = { __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type PageHomepageFragment = { __typename?: 'page_homepage', quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null, article_cards?: Array<{ __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null> | null, featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null };

export type PageHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type PageHomepageQuery = { __typename?: 'Query', page_homepage?: { __typename?: 'page_homepage', quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null, article_cards?: Array<{ __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null> | null, featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null };

export type QuoteFragment = { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type QuoteListFragment = { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, name?: string | null, title?: string | null, company?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null };

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
export const CompanyLogoFragmentDoc = gql`
    fragment CompanyLogo on company_logos {
  slug
  name
  logo_light {
    ...ImageFile
  }
  logo_dark {
    ...ImageFile
  }
  url
  width
}
    ${ImageFileFragmentDoc}`;
export const LogoListFragmentDoc = gql`
    fragment LogoList on company_logo_lists {
  slug
}
    `;
export const CaseStudyFragmentDoc = gql`
    fragment CaseStudy on case_studies {
  id
  slug
  label
  title
  content
  ctas
  stack_label
  stack_apps
  hero_image {
    ...ImageFile
  }
}
    ${ImageFileFragmentDoc}`;
export const AppExtrasFragmentDoc = gql`
    fragment AppExtras on apps {
  name
  heroVideo
  hero_text
  secondary_title
  secondary_text
  case_study {
    ...CaseStudy
  }
}
    ${CaseStudyFragmentDoc}`;
export const QuoteFragmentDoc = gql`
    fragment Quote on quotes {
  id
  quote
  name
  title
  company
  portrait {
    ...ImageFile
  }
  logo {
    ...ImageFile
  }
}
    ${ImageFileFragmentDoc}`;
export const QuoteListFragmentDoc = gql`
    fragment QuoteList on quote_lists {
  slug
  items {
    item {
      ...Quote
    }
  }
}
    ${QuoteFragmentDoc}`;
export const AppDefaultsFragmentDoc = gql`
    fragment AppDefaults on app_defaults {
  secondary_title
  secondary_text
  case_study {
    ...CaseStudy
  }
  quotes {
    ...QuoteList
  }
}
    ${CaseStudyFragmentDoc}
${QuoteListFragmentDoc}`;
export const StackExtrasFragmentDoc = gql`
    fragment StackExtras on stacks {
  name
  heroVideo
  case_study {
    ...CaseStudy
  }
}
    ${CaseStudyFragmentDoc}`;
export const StackDefaultsFragmentDoc = gql`
    fragment StackDefaults on stack_defaults {
  case_study {
    ...CaseStudy
  }
  quotes {
    ...QuoteList
  }
}
    ${CaseStudyFragmentDoc}
${QuoteListFragmentDoc}`;
export const TeamMemberFragmentDoc = gql`
    fragment TeamMember on team_members {
  id
  name
  title
  categories
  pronouns
  orderOfAppearance
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
export const SolutionFragmentDoc = gql`
    fragment Solution on solutions_pages {
  id
  slug
  title
  description
  heading_1
  content_1
  heading_2
  content_2
  hero_image {
    ...ImageFile
  }
  case_study {
    ...CaseStudy
  }
  bullet_points
  featured_quote {
    ...Quote
  }
}
    ${ImageFileFragmentDoc}
${CaseStudyFragmentDoc}
${QuoteFragmentDoc}`;
export const MinJobListingFragmentDoc = gql`
    fragment MinJobListing on job_listings {
  id
  slug
  job_title
  department
  tags
  location
}
    `;
export const FullJobListingFragmentDoc = gql`
    fragment FullJobListing on job_listings {
  ...MinJobListing
  content
}
    ${MinJobListingFragmentDoc}`;
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
export const FaqItemFragmentDoc = gql`
    fragment FaqItem on collapsibles {
  id
  label
  content
}
    `;
export const FaqListFragmentDoc = gql`
    fragment FaqList on collapsible_lists {
  items {
    item {
      ...FaqItem
    }
  }
}
    ${FaqItemFragmentDoc}`;
export const PageProductFragmentDoc = gql`
    fragment PageProduct on page_product {
  featured_quote {
    ...Quote
  }
  faq {
    ...FaqList
  }
}
    ${QuoteFragmentDoc}
${FaqListFragmentDoc}`;
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
export const ArticleCardFragmentDoc = gql`
    fragment ArticleCard on article_cards {
  id
  heading
  description
  thumbnail {
    ...ImageFile
  }
  videoUrl
  date
  author
  ctas
  url
}
    ${ImageFileFragmentDoc}`;
export const PageHomepageFragmentDoc = gql`
    fragment PageHomepage on page_homepage {
  quotes {
    ...QuoteList
  }
  article_cards {
    ...ArticleCard
  }
  featured_quote {
    ...Quote
  }
}
    ${QuoteListFragmentDoc}
${ArticleCardFragmentDoc}
${QuoteFragmentDoc}`;
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
export const AppExtrasDocument = gql`
    query AppExtras($name: String) {
  apps(filter: {name: {_eq: $name}}) {
    ...AppExtras
  }
  app_defaults {
    ...AppDefaults
  }
}
    ${AppExtrasFragmentDoc}
${AppDefaultsFragmentDoc}`;

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
  stack_defaults {
    ...StackDefaults
  }
}
    ${StackExtrasFragmentDoc}
${StackDefaultsFragmentDoc}`;

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
export const FaqListDocument = gql`
    query FaqList($slug: String) {
  collapsible_lists(filter: {slug: {_eq: $slug}}) {
    ...FaqList
  }
}
    ${FaqListFragmentDoc}`;

/**
 * __useFaqListQuery__
 *
 * To run a query within a React component, call `useFaqListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaqListQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFaqListQuery(baseOptions?: Apollo.QueryHookOptions<FaqListQuery, FaqListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FaqListQuery, FaqListQueryVariables>(FaqListDocument, options);
      }
export function useFaqListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FaqListQuery, FaqListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FaqListQuery, FaqListQueryVariables>(FaqListDocument, options);
        }
export type FaqListQueryHookResult = ReturnType<typeof useFaqListQuery>;
export type FaqListLazyQueryHookResult = ReturnType<typeof useFaqListLazyQuery>;
export type FaqListQueryResult = Apollo.QueryResult<FaqListQuery, FaqListQueryVariables>;
export const SolutionsSlugsDocument = gql`
    query SolutionsSlugs {
  solutions_pages {
    slug
  }
}
    `;

/**
 * __useSolutionsSlugsQuery__
 *
 * To run a query within a React component, call `useSolutionsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSolutionsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSolutionsSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSolutionsSlugsQuery(baseOptions?: Apollo.QueryHookOptions<SolutionsSlugsQuery, SolutionsSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SolutionsSlugsQuery, SolutionsSlugsQueryVariables>(SolutionsSlugsDocument, options);
      }
export function useSolutionsSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SolutionsSlugsQuery, SolutionsSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SolutionsSlugsQuery, SolutionsSlugsQueryVariables>(SolutionsSlugsDocument, options);
        }
export type SolutionsSlugsQueryHookResult = ReturnType<typeof useSolutionsSlugsQuery>;
export type SolutionsSlugsLazyQueryHookResult = ReturnType<typeof useSolutionsSlugsLazyQuery>;
export type SolutionsSlugsQueryResult = Apollo.QueryResult<SolutionsSlugsQuery, SolutionsSlugsQueryVariables>;
export const SolutionsDocument = gql`
    query Solutions($slug: String) {
  solutions_pages(filter: {slug: {_eq: $slug}}) {
    ...Solution
  }
}
    ${SolutionFragmentDoc}`;

/**
 * __useSolutionsQuery__
 *
 * To run a query within a React component, call `useSolutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSolutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSolutionsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useSolutionsQuery(baseOptions?: Apollo.QueryHookOptions<SolutionsQuery, SolutionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SolutionsQuery, SolutionsQueryVariables>(SolutionsDocument, options);
      }
export function useSolutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SolutionsQuery, SolutionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SolutionsQuery, SolutionsQueryVariables>(SolutionsDocument, options);
        }
export type SolutionsQueryHookResult = ReturnType<typeof useSolutionsQuery>;
export type SolutionsLazyQueryHookResult = ReturnType<typeof useSolutionsLazyQuery>;
export type SolutionsQueryResult = Apollo.QueryResult<SolutionsQuery, SolutionsQueryVariables>;
export const JobListingsDocument = gql`
    query JobListings {
  job_listings {
    ...MinJobListing
  }
}
    ${MinJobListingFragmentDoc}`;

/**
 * __useJobListingsQuery__
 *
 * To run a query within a React component, call `useJobListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobListingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobListingsQuery(baseOptions?: Apollo.QueryHookOptions<JobListingsQuery, JobListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobListingsQuery, JobListingsQueryVariables>(JobListingsDocument, options);
      }
export function useJobListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobListingsQuery, JobListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobListingsQuery, JobListingsQueryVariables>(JobListingsDocument, options);
        }
export type JobListingsQueryHookResult = ReturnType<typeof useJobListingsQuery>;
export type JobListingsLazyQueryHookResult = ReturnType<typeof useJobListingsLazyQuery>;
export type JobListingsQueryResult = Apollo.QueryResult<JobListingsQuery, JobListingsQueryVariables>;
export const JobListingDocument = gql`
    query JobListing($slug: String) {
  job_listings(filter: {slug: {_eq: $slug}}) {
    ...FullJobListing
  }
}
    ${FullJobListingFragmentDoc}`;

/**
 * __useJobListingQuery__
 *
 * To run a query within a React component, call `useJobListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobListingQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useJobListingQuery(baseOptions?: Apollo.QueryHookOptions<JobListingQuery, JobListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobListingQuery, JobListingQueryVariables>(JobListingDocument, options);
      }
export function useJobListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobListingQuery, JobListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobListingQuery, JobListingQueryVariables>(JobListingDocument, options);
        }
export type JobListingQueryHookResult = ReturnType<typeof useJobListingQuery>;
export type JobListingLazyQueryHookResult = ReturnType<typeof useJobListingLazyQuery>;
export type JobListingQueryResult = Apollo.QueryResult<JobListingQuery, JobListingQueryVariables>;
export const JobListingSlugsDocument = gql`
    query JobListingSlugs {
  job_listings {
    slug
  }
}
    `;

/**
 * __useJobListingSlugsQuery__
 *
 * To run a query within a React component, call `useJobListingSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobListingSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobListingSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobListingSlugsQuery(baseOptions?: Apollo.QueryHookOptions<JobListingSlugsQuery, JobListingSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobListingSlugsQuery, JobListingSlugsQueryVariables>(JobListingSlugsDocument, options);
      }
export function useJobListingSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobListingSlugsQuery, JobListingSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobListingSlugsQuery, JobListingSlugsQueryVariables>(JobListingSlugsDocument, options);
        }
export type JobListingSlugsQueryHookResult = ReturnType<typeof useJobListingSlugsQuery>;
export type JobListingSlugsLazyQueryHookResult = ReturnType<typeof useJobListingSlugsLazyQuery>;
export type JobListingSlugsQueryResult = Apollo.QueryResult<JobListingSlugsQuery, JobListingSlugsQueryVariables>;
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
export const PageProductDocument = gql`
    query PageProduct {
  page_product {
    ...PageProduct
  }
}
    ${PageProductFragmentDoc}`;

/**
 * __usePageProductQuery__
 *
 * To run a query within a React component, call `usePageProductQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageProductQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageProductQuery(baseOptions?: Apollo.QueryHookOptions<PageProductQuery, PageProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageProductQuery, PageProductQueryVariables>(PageProductDocument, options);
      }
export function usePageProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageProductQuery, PageProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageProductQuery, PageProductQueryVariables>(PageProductDocument, options);
        }
export type PageProductQueryHookResult = ReturnType<typeof usePageProductQuery>;
export type PageProductLazyQueryHookResult = ReturnType<typeof usePageProductLazyQuery>;
export type PageProductQueryResult = Apollo.QueryResult<PageProductQuery, PageProductQueryVariables>;
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
export const PageHomepageDocument = gql`
    query PageHomepage {
  page_homepage {
    ...PageHomepage
  }
}
    ${PageHomepageFragmentDoc}`;

/**
 * __usePageHomepageQuery__
 *
 * To run a query within a React component, call `usePageHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageHomepageQuery(baseOptions?: Apollo.QueryHookOptions<PageHomepageQuery, PageHomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageHomepageQuery, PageHomepageQueryVariables>(PageHomepageDocument, options);
      }
export function usePageHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageHomepageQuery, PageHomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageHomepageQuery, PageHomepageQueryVariables>(PageHomepageDocument, options);
        }
export type PageHomepageQueryHookResult = ReturnType<typeof usePageHomepageQuery>;
export type PageHomepageLazyQueryHookResult = ReturnType<typeof usePageHomepageLazyQuery>;
export type PageHomepageQueryResult = Apollo.QueryResult<PageHomepageQuery, PageHomepageQueryVariables>;