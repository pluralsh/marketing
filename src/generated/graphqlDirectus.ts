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
  create_article_cards_item?: Maybe<Article_Cards>;
  create_article_cards_items: Array<Article_Cards>;
  create_blog_cards_item?: Maybe<Blog_Cards>;
  create_blog_cards_items: Array<Blog_Cards>;
  create_card_item?: Maybe<Card>;
  create_card_items: Array<Card>;
  create_card_with_image_item?: Maybe<Card_With_Image>;
  create_card_with_image_items: Array<Card_With_Image>;
  create_card_with_image_rich_text_columns_item?: Maybe<Card_With_Image_Rich_Text_Columns>;
  create_card_with_image_rich_text_columns_items: Array<Card_With_Image_Rich_Text_Columns>;
  create_cards_card_item?: Maybe<Cards_Card>;
  create_cards_card_items: Array<Cards_Card>;
  create_cards_item?: Maybe<Cards>;
  create_cards_items: Array<Cards>;
  create_collapsible_lists_item?: Maybe<Collapsible_Lists>;
  create_collapsible_lists_items: Array<Collapsible_Lists>;
  create_collapsible_lists_items_item?: Maybe<Collapsible_Lists_Items>;
  create_collapsible_lists_items_items: Array<Collapsible_Lists_Items>;
  create_collapsibles_item?: Maybe<Collapsibles>;
  create_collapsibles_items: Array<Collapsibles>;
  create_company_logo_lists_company_logos_item?: Maybe<Company_Logo_Lists_Company_Logos>;
  create_company_logo_lists_company_logos_items: Array<Company_Logo_Lists_Company_Logos>;
  create_company_logo_lists_item?: Maybe<Company_Logo_Lists>;
  create_company_logo_lists_items: Array<Company_Logo_Lists>;
  create_company_logo_lists_items_item?: Maybe<Company_Logo_Lists_Items>;
  create_company_logo_lists_items_items: Array<Company_Logo_Lists_Items>;
  create_company_logos_item?: Maybe<Company_Logos>;
  create_company_logos_items: Array<Company_Logos>;
  create_cta_item?: Maybe<Cta>;
  create_cta_items: Array<Cta>;
  create_custom_pages_components_item?: Maybe<Custom_Pages_Components>;
  create_custom_pages_components_items: Array<Custom_Pages_Components>;
  create_custom_pages_item?: Maybe<Custom_Pages>;
  create_custom_pages_items: Array<Custom_Pages>;
  create_customer_quote_item?: Maybe<Customer_Quote>;
  create_customer_quote_items: Array<Customer_Quote>;
  create_events_item?: Maybe<Events>;
  create_events_items: Array<Events>;
  create_hero_item?: Maybe<Hero>;
  create_hero_items: Array<Hero>;
  create_job_listings_item?: Maybe<Job_Listings>;
  create_job_listings_items: Array<Job_Listings>;
  create_large_image_item?: Maybe<Large_Image>;
  create_large_image_items: Array<Large_Image>;
  create_logo_strip_item?: Maybe<Logo_Strip>;
  create_logo_strip_items: Array<Logo_Strip>;
  create_markdown_pages_item?: Maybe<Markdown_Pages>;
  create_markdown_pages_items: Array<Markdown_Pages>;
  create_multi_column_text_item?: Maybe<Multi_Column_Text>;
  create_multi_column_text_items: Array<Multi_Column_Text>;
  create_multi_column_text_rich_text_columns_item?: Maybe<Multi_Column_Text_Rich_Text_Columns>;
  create_multi_column_text_rich_text_columns_items: Array<Multi_Column_Text_Rich_Text_Columns>;
  create_pricing_plan_features_item?: Maybe<Pricing_Plan_Features>;
  create_pricing_plan_features_items: Array<Pricing_Plan_Features>;
  create_pricing_plans_item?: Maybe<Pricing_Plans>;
  create_pricing_plans_items: Array<Pricing_Plans>;
  create_product_features_item?: Maybe<Product_Features>;
  create_product_features_items: Array<Product_Features>;
  create_product_pages_item?: Maybe<Product_Pages>;
  create_product_pages_items: Array<Product_Pages>;
  create_quote_lists_item?: Maybe<Quote_Lists>;
  create_quote_lists_items: Array<Quote_Lists>;
  create_quote_lists_items_item?: Maybe<Quote_Lists_Items>;
  create_quote_lists_items_items: Array<Quote_Lists_Items>;
  create_quotes_item?: Maybe<Quotes>;
  create_quotes_items: Array<Quotes>;
  create_rich_text_columns_item?: Maybe<Rich_Text_Columns>;
  create_rich_text_columns_items: Array<Rich_Text_Columns>;
  create_section_header_item?: Maybe<Section_Header>;
  create_section_header_items: Array<Section_Header>;
  create_site_settings_nav_list_item?: Maybe<Site_Settings_Nav_List>;
  create_site_settings_nav_list_items: Array<Site_Settings_Nav_List>;
  create_solution_features_item?: Maybe<Solution_Features>;
  create_solution_features_items: Array<Solution_Features>;
  create_solution_problems_item?: Maybe<Solution_Problems>;
  create_solution_problems_items: Array<Solution_Problems>;
  create_solutions_pages_item?: Maybe<Solutions_Pages>;
  create_solutions_pages_items: Array<Solutions_Pages>;
  create_solutions_pages_solution_problems_item?: Maybe<Solutions_Pages_Solution_Problems>;
  create_solutions_pages_solution_problems_items: Array<Solutions_Pages_Solution_Problems>;
  create_team_members_item?: Maybe<Team_Members>;
  create_team_members_items: Array<Team_Members>;
  create_two_column_text_item?: Maybe<Two_Column_Text>;
  create_two_column_text_items: Array<Two_Column_Text>;
  delete_article_cards_item?: Maybe<Delete_One>;
  delete_article_cards_items?: Maybe<Delete_Many>;
  delete_blog_cards_item?: Maybe<Delete_One>;
  delete_blog_cards_items?: Maybe<Delete_Many>;
  delete_card_item?: Maybe<Delete_One>;
  delete_card_items?: Maybe<Delete_Many>;
  delete_card_with_image_item?: Maybe<Delete_One>;
  delete_card_with_image_items?: Maybe<Delete_Many>;
  delete_card_with_image_rich_text_columns_item?: Maybe<Delete_One>;
  delete_card_with_image_rich_text_columns_items?: Maybe<Delete_Many>;
  delete_cards_card_item?: Maybe<Delete_One>;
  delete_cards_card_items?: Maybe<Delete_Many>;
  delete_cards_item?: Maybe<Delete_One>;
  delete_cards_items?: Maybe<Delete_Many>;
  delete_collapsible_lists_item?: Maybe<Delete_One>;
  delete_collapsible_lists_items?: Maybe<Delete_Many>;
  delete_collapsible_lists_items_item?: Maybe<Delete_One>;
  delete_collapsible_lists_items_items?: Maybe<Delete_Many>;
  delete_collapsibles_item?: Maybe<Delete_One>;
  delete_collapsibles_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_company_logos_item?: Maybe<Delete_One>;
  delete_company_logo_lists_company_logos_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_item?: Maybe<Delete_One>;
  delete_company_logo_lists_items?: Maybe<Delete_Many>;
  delete_company_logo_lists_items_item?: Maybe<Delete_One>;
  delete_company_logo_lists_items_items?: Maybe<Delete_Many>;
  delete_company_logos_item?: Maybe<Delete_One>;
  delete_company_logos_items?: Maybe<Delete_Many>;
  delete_cta_item?: Maybe<Delete_One>;
  delete_cta_items?: Maybe<Delete_Many>;
  delete_custom_pages_components_item?: Maybe<Delete_One>;
  delete_custom_pages_components_items?: Maybe<Delete_Many>;
  delete_custom_pages_item?: Maybe<Delete_One>;
  delete_custom_pages_items?: Maybe<Delete_Many>;
  delete_customer_quote_item?: Maybe<Delete_One>;
  delete_customer_quote_items?: Maybe<Delete_Many>;
  delete_events_item?: Maybe<Delete_One>;
  delete_events_items?: Maybe<Delete_Many>;
  delete_hero_item?: Maybe<Delete_One>;
  delete_hero_items?: Maybe<Delete_Many>;
  delete_job_listings_item?: Maybe<Delete_One>;
  delete_job_listings_items?: Maybe<Delete_Many>;
  delete_large_image_item?: Maybe<Delete_One>;
  delete_large_image_items?: Maybe<Delete_Many>;
  delete_logo_strip_item?: Maybe<Delete_One>;
  delete_logo_strip_items?: Maybe<Delete_Many>;
  delete_markdown_pages_item?: Maybe<Delete_One>;
  delete_markdown_pages_items?: Maybe<Delete_Many>;
  delete_multi_column_text_item?: Maybe<Delete_One>;
  delete_multi_column_text_items?: Maybe<Delete_Many>;
  delete_multi_column_text_rich_text_columns_item?: Maybe<Delete_One>;
  delete_multi_column_text_rich_text_columns_items?: Maybe<Delete_Many>;
  delete_pricing_plan_features_item?: Maybe<Delete_One>;
  delete_pricing_plan_features_items?: Maybe<Delete_Many>;
  delete_pricing_plans_item?: Maybe<Delete_One>;
  delete_pricing_plans_items?: Maybe<Delete_Many>;
  delete_product_features_item?: Maybe<Delete_One>;
  delete_product_features_items?: Maybe<Delete_Many>;
  delete_product_pages_item?: Maybe<Delete_One>;
  delete_product_pages_items?: Maybe<Delete_Many>;
  delete_quote_lists_item?: Maybe<Delete_One>;
  delete_quote_lists_items?: Maybe<Delete_Many>;
  delete_quote_lists_items_item?: Maybe<Delete_One>;
  delete_quote_lists_items_items?: Maybe<Delete_Many>;
  delete_quotes_item?: Maybe<Delete_One>;
  delete_quotes_items?: Maybe<Delete_Many>;
  delete_rich_text_columns_item?: Maybe<Delete_One>;
  delete_rich_text_columns_items?: Maybe<Delete_Many>;
  delete_section_header_item?: Maybe<Delete_One>;
  delete_section_header_items?: Maybe<Delete_Many>;
  delete_site_settings_nav_list_item?: Maybe<Delete_One>;
  delete_site_settings_nav_list_items?: Maybe<Delete_Many>;
  delete_solution_features_item?: Maybe<Delete_One>;
  delete_solution_features_items?: Maybe<Delete_Many>;
  delete_solution_problems_item?: Maybe<Delete_One>;
  delete_solution_problems_items?: Maybe<Delete_Many>;
  delete_solutions_pages_item?: Maybe<Delete_One>;
  delete_solutions_pages_items?: Maybe<Delete_Many>;
  delete_solutions_pages_solution_problems_item?: Maybe<Delete_One>;
  delete_solutions_pages_solution_problems_items?: Maybe<Delete_Many>;
  delete_team_members_item?: Maybe<Delete_One>;
  delete_team_members_items?: Maybe<Delete_Many>;
  delete_two_column_text_item?: Maybe<Delete_One>;
  delete_two_column_text_items?: Maybe<Delete_Many>;
  update_article_cards_batch: Array<Article_Cards>;
  update_article_cards_item?: Maybe<Article_Cards>;
  update_article_cards_items: Array<Article_Cards>;
  update_blog_cards_batch: Array<Blog_Cards>;
  update_blog_cards_item?: Maybe<Blog_Cards>;
  update_blog_cards_items: Array<Blog_Cards>;
  update_card_batch: Array<Card>;
  update_card_item?: Maybe<Card>;
  update_card_items: Array<Card>;
  update_card_with_image_batch: Array<Card_With_Image>;
  update_card_with_image_item?: Maybe<Card_With_Image>;
  update_card_with_image_items: Array<Card_With_Image>;
  update_card_with_image_rich_text_columns_batch: Array<Card_With_Image_Rich_Text_Columns>;
  update_card_with_image_rich_text_columns_item?: Maybe<Card_With_Image_Rich_Text_Columns>;
  update_card_with_image_rich_text_columns_items: Array<Card_With_Image_Rich_Text_Columns>;
  update_cards_batch: Array<Cards>;
  update_cards_card_batch: Array<Cards_Card>;
  update_cards_card_item?: Maybe<Cards_Card>;
  update_cards_card_items: Array<Cards_Card>;
  update_cards_item?: Maybe<Cards>;
  update_cards_items: Array<Cards>;
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
  update_company_logo_lists_company_logos_batch: Array<Company_Logo_Lists_Company_Logos>;
  update_company_logo_lists_company_logos_item?: Maybe<Company_Logo_Lists_Company_Logos>;
  update_company_logo_lists_company_logos_items: Array<Company_Logo_Lists_Company_Logos>;
  update_company_logo_lists_item?: Maybe<Company_Logo_Lists>;
  update_company_logo_lists_items: Array<Company_Logo_Lists>;
  update_company_logo_lists_items_batch: Array<Company_Logo_Lists_Items>;
  update_company_logo_lists_items_item?: Maybe<Company_Logo_Lists_Items>;
  update_company_logo_lists_items_items: Array<Company_Logo_Lists_Items>;
  update_company_logos_batch: Array<Company_Logos>;
  update_company_logos_item?: Maybe<Company_Logos>;
  update_company_logos_items: Array<Company_Logos>;
  update_cta_batch: Array<Cta>;
  update_cta_item?: Maybe<Cta>;
  update_cta_items: Array<Cta>;
  update_custom_pages_batch: Array<Custom_Pages>;
  update_custom_pages_components_batch: Array<Custom_Pages_Components>;
  update_custom_pages_components_item?: Maybe<Custom_Pages_Components>;
  update_custom_pages_components_items: Array<Custom_Pages_Components>;
  update_custom_pages_item?: Maybe<Custom_Pages>;
  update_custom_pages_items: Array<Custom_Pages>;
  update_customer_quote_batch: Array<Customer_Quote>;
  update_customer_quote_item?: Maybe<Customer_Quote>;
  update_customer_quote_items: Array<Customer_Quote>;
  update_events_batch: Array<Events>;
  update_events_item?: Maybe<Events>;
  update_events_items: Array<Events>;
  update_hero_batch: Array<Hero>;
  update_hero_item?: Maybe<Hero>;
  update_hero_items: Array<Hero>;
  update_job_listings_batch: Array<Job_Listings>;
  update_job_listings_item?: Maybe<Job_Listings>;
  update_job_listings_items: Array<Job_Listings>;
  update_large_image_batch: Array<Large_Image>;
  update_large_image_item?: Maybe<Large_Image>;
  update_large_image_items: Array<Large_Image>;
  update_logo_strip_batch: Array<Logo_Strip>;
  update_logo_strip_item?: Maybe<Logo_Strip>;
  update_logo_strip_items: Array<Logo_Strip>;
  update_markdown_pages_batch: Array<Markdown_Pages>;
  update_markdown_pages_item?: Maybe<Markdown_Pages>;
  update_markdown_pages_items: Array<Markdown_Pages>;
  update_multi_column_text_batch: Array<Multi_Column_Text>;
  update_multi_column_text_item?: Maybe<Multi_Column_Text>;
  update_multi_column_text_items: Array<Multi_Column_Text>;
  update_multi_column_text_rich_text_columns_batch: Array<Multi_Column_Text_Rich_Text_Columns>;
  update_multi_column_text_rich_text_columns_item?: Maybe<Multi_Column_Text_Rich_Text_Columns>;
  update_multi_column_text_rich_text_columns_items: Array<Multi_Column_Text_Rich_Text_Columns>;
  update_page_homepage?: Maybe<Page_Homepage>;
  update_page_legal?: Maybe<Page_Legal>;
  update_pricing_page?: Maybe<Pricing_Page>;
  update_pricing_plan_features_batch: Array<Pricing_Plan_Features>;
  update_pricing_plan_features_item?: Maybe<Pricing_Plan_Features>;
  update_pricing_plan_features_items: Array<Pricing_Plan_Features>;
  update_pricing_plans_batch: Array<Pricing_Plans>;
  update_pricing_plans_item?: Maybe<Pricing_Plans>;
  update_pricing_plans_items: Array<Pricing_Plans>;
  update_product_features_batch: Array<Product_Features>;
  update_product_features_item?: Maybe<Product_Features>;
  update_product_features_items: Array<Product_Features>;
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
  update_rich_text_columns_batch: Array<Rich_Text_Columns>;
  update_rich_text_columns_item?: Maybe<Rich_Text_Columns>;
  update_rich_text_columns_items: Array<Rich_Text_Columns>;
  update_section_header_batch: Array<Section_Header>;
  update_section_header_item?: Maybe<Section_Header>;
  update_section_header_items: Array<Section_Header>;
  update_site_settings?: Maybe<Site_Settings>;
  update_site_settings_nav_list_batch: Array<Site_Settings_Nav_List>;
  update_site_settings_nav_list_item?: Maybe<Site_Settings_Nav_List>;
  update_site_settings_nav_list_items: Array<Site_Settings_Nav_List>;
  update_solution_features_batch: Array<Solution_Features>;
  update_solution_features_item?: Maybe<Solution_Features>;
  update_solution_features_items: Array<Solution_Features>;
  update_solution_problems_batch: Array<Solution_Problems>;
  update_solution_problems_item?: Maybe<Solution_Problems>;
  update_solution_problems_items: Array<Solution_Problems>;
  update_solutions_pages_batch: Array<Solutions_Pages>;
  update_solutions_pages_item?: Maybe<Solutions_Pages>;
  update_solutions_pages_items: Array<Solutions_Pages>;
  update_solutions_pages_solution_problems_batch: Array<Solutions_Pages_Solution_Problems>;
  update_solutions_pages_solution_problems_item?: Maybe<Solutions_Pages_Solution_Problems>;
  update_solutions_pages_solution_problems_items: Array<Solutions_Pages_Solution_Problems>;
  update_team_members_batch: Array<Team_Members>;
  update_team_members_item?: Maybe<Team_Members>;
  update_team_members_items: Array<Team_Members>;
  update_two_column_text_batch: Array<Two_Column_Text>;
  update_two_column_text_item?: Maybe<Two_Column_Text>;
  update_two_column_text_items: Array<Two_Column_Text>;
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


export type MutationCreate_Blog_Cards_ItemArgs = {
  data: Create_Blog_Cards_Input;
};


export type MutationCreate_Blog_Cards_ItemsArgs = {
  data?: InputMaybe<Array<Create_Blog_Cards_Input>>;
  filter?: InputMaybe<Blog_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Card_ItemArgs = {
  data: Create_Card_Input;
};


export type MutationCreate_Card_ItemsArgs = {
  data?: InputMaybe<Array<Create_Card_Input>>;
  filter?: InputMaybe<Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Card_With_Image_ItemArgs = {
  data: Create_Card_With_Image_Input;
};


export type MutationCreate_Card_With_Image_ItemsArgs = {
  data?: InputMaybe<Array<Create_Card_With_Image_Input>>;
  filter?: InputMaybe<Card_With_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Card_With_Image_Rich_Text_Columns_ItemArgs = {
  data: Create_Card_With_Image_Rich_Text_Columns_Input;
};


export type MutationCreate_Card_With_Image_Rich_Text_Columns_ItemsArgs = {
  data?: InputMaybe<Array<Create_Card_With_Image_Rich_Text_Columns_Input>>;
  filter?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Cards_Card_ItemArgs = {
  data: Create_Cards_Card_Input;
};


export type MutationCreate_Cards_Card_ItemsArgs = {
  data?: InputMaybe<Array<Create_Cards_Card_Input>>;
  filter?: InputMaybe<Cards_Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Cards_ItemArgs = {
  data: Create_Cards_Input;
};


export type MutationCreate_Cards_ItemsArgs = {
  data?: InputMaybe<Array<Create_Cards_Input>>;
  filter?: InputMaybe<Cards_Filter>;
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


export type MutationCreate_Company_Logo_Lists_Company_Logos_ItemArgs = {
  data: Create_Company_Logo_Lists_Company_Logos_Input;
};


export type MutationCreate_Company_Logo_Lists_Company_Logos_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Logo_Lists_Company_Logos_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
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


export type MutationCreate_Cta_ItemArgs = {
  data: Create_Cta_Input;
};


export type MutationCreate_Cta_ItemsArgs = {
  data?: InputMaybe<Array<Create_Cta_Input>>;
  filter?: InputMaybe<Cta_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Custom_Pages_Components_ItemArgs = {
  data: Create_Custom_Pages_Components_Input;
};


export type MutationCreate_Custom_Pages_Components_ItemsArgs = {
  data?: InputMaybe<Array<Create_Custom_Pages_Components_Input>>;
  filter?: InputMaybe<Custom_Pages_Components_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Custom_Pages_ItemArgs = {
  data: Create_Custom_Pages_Input;
};


export type MutationCreate_Custom_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Custom_Pages_Input>>;
  filter?: InputMaybe<Custom_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Customer_Quote_ItemArgs = {
  data: Create_Customer_Quote_Input;
};


export type MutationCreate_Customer_Quote_ItemsArgs = {
  data?: InputMaybe<Array<Create_Customer_Quote_Input>>;
  filter?: InputMaybe<Customer_Quote_Filter>;
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


export type MutationCreate_Hero_ItemArgs = {
  data: Create_Hero_Input;
};


export type MutationCreate_Hero_ItemsArgs = {
  data?: InputMaybe<Array<Create_Hero_Input>>;
  filter?: InputMaybe<Hero_Filter>;
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


export type MutationCreate_Large_Image_ItemArgs = {
  data: Create_Large_Image_Input;
};


export type MutationCreate_Large_Image_ItemsArgs = {
  data?: InputMaybe<Array<Create_Large_Image_Input>>;
  filter?: InputMaybe<Large_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Logo_Strip_ItemArgs = {
  data: Create_Logo_Strip_Input;
};


export type MutationCreate_Logo_Strip_ItemsArgs = {
  data?: InputMaybe<Array<Create_Logo_Strip_Input>>;
  filter?: InputMaybe<Logo_Strip_Filter>;
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


export type MutationCreate_Multi_Column_Text_ItemArgs = {
  data: Create_Multi_Column_Text_Input;
};


export type MutationCreate_Multi_Column_Text_ItemsArgs = {
  data?: InputMaybe<Array<Create_Multi_Column_Text_Input>>;
  filter?: InputMaybe<Multi_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Multi_Column_Text_Rich_Text_Columns_ItemArgs = {
  data: Create_Multi_Column_Text_Rich_Text_Columns_Input;
};


export type MutationCreate_Multi_Column_Text_Rich_Text_Columns_ItemsArgs = {
  data?: InputMaybe<Array<Create_Multi_Column_Text_Rich_Text_Columns_Input>>;
  filter?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pricing_Plan_Features_ItemArgs = {
  data: Create_Pricing_Plan_Features_Input;
};


export type MutationCreate_Pricing_Plan_Features_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pricing_Plan_Features_Input>>;
  filter?: InputMaybe<Pricing_Plan_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pricing_Plans_ItemArgs = {
  data: Create_Pricing_Plans_Input;
};


export type MutationCreate_Pricing_Plans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pricing_Plans_Input>>;
  filter?: InputMaybe<Pricing_Plans_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Product_Features_ItemArgs = {
  data: Create_Product_Features_Input;
};


export type MutationCreate_Product_Features_ItemsArgs = {
  data?: InputMaybe<Array<Create_Product_Features_Input>>;
  filter?: InputMaybe<Product_Features_Filter>;
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


export type MutationCreate_Rich_Text_Columns_ItemArgs = {
  data: Create_Rich_Text_Columns_Input;
};


export type MutationCreate_Rich_Text_Columns_ItemsArgs = {
  data?: InputMaybe<Array<Create_Rich_Text_Columns_Input>>;
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Section_Header_ItemArgs = {
  data: Create_Section_Header_Input;
};


export type MutationCreate_Section_Header_ItemsArgs = {
  data?: InputMaybe<Array<Create_Section_Header_Input>>;
  filter?: InputMaybe<Section_Header_Filter>;
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


export type MutationCreate_Solution_Features_ItemArgs = {
  data: Create_Solution_Features_Input;
};


export type MutationCreate_Solution_Features_ItemsArgs = {
  data?: InputMaybe<Array<Create_Solution_Features_Input>>;
  filter?: InputMaybe<Solution_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Solution_Problems_ItemArgs = {
  data: Create_Solution_Problems_Input;
};


export type MutationCreate_Solution_Problems_ItemsArgs = {
  data?: InputMaybe<Array<Create_Solution_Problems_Input>>;
  filter?: InputMaybe<Solution_Problems_Filter>;
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


export type MutationCreate_Solutions_Pages_Solution_Problems_ItemArgs = {
  data: Create_Solutions_Pages_Solution_Problems_Input;
};


export type MutationCreate_Solutions_Pages_Solution_Problems_ItemsArgs = {
  data?: InputMaybe<Array<Create_Solutions_Pages_Solution_Problems_Input>>;
  filter?: InputMaybe<Solutions_Pages_Solution_Problems_Filter>;
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


export type MutationCreate_Two_Column_Text_ItemArgs = {
  data: Create_Two_Column_Text_Input;
};


export type MutationCreate_Two_Column_Text_ItemsArgs = {
  data?: InputMaybe<Array<Create_Two_Column_Text_Input>>;
  filter?: InputMaybe<Two_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Article_Cards_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Article_Cards_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Blog_Cards_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Blog_Cards_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Card_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Card_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Card_With_Image_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Card_With_Image_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Card_With_Image_Rich_Text_Columns_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Card_With_Image_Rich_Text_Columns_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Cards_Card_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Cards_Card_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Cards_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Cards_ItemsArgs = {
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


export type MutationDelete_Company_Logo_Lists_Company_Logos_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logo_Lists_Company_Logos_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Logo_Lists_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Logo_Lists_ItemsArgs = {
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


export type MutationDelete_Cta_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Cta_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Custom_Pages_Components_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Custom_Pages_Components_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Custom_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Custom_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Customer_Quote_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Customer_Quote_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Events_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Events_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Hero_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Hero_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Job_Listings_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Job_Listings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Large_Image_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Large_Image_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Logo_Strip_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Logo_Strip_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Markdown_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Markdown_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Multi_Column_Text_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Multi_Column_Text_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Multi_Column_Text_Rich_Text_Columns_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Multi_Column_Text_Rich_Text_Columns_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pricing_Plan_Features_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pricing_Plan_Features_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pricing_Plans_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pricing_Plans_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Product_Features_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Product_Features_ItemsArgs = {
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


export type MutationDelete_Rich_Text_Columns_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Rich_Text_Columns_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Section_Header_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Section_Header_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Site_Settings_Nav_List_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Site_Settings_Nav_List_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Solution_Features_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Solution_Features_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Solution_Problems_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Solution_Problems_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Solutions_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Solutions_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Solutions_Pages_Solution_Problems_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Solutions_Pages_Solution_Problems_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Team_Members_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Team_Members_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Two_Column_Text_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Two_Column_Text_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
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


export type MutationUpdate_Blog_Cards_BatchArgs = {
  data?: InputMaybe<Array<Update_Blog_Cards_Input>>;
  filter?: InputMaybe<Blog_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Blog_Cards_ItemArgs = {
  data: Update_Blog_Cards_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Blog_Cards_ItemsArgs = {
  data: Update_Blog_Cards_Input;
  filter?: InputMaybe<Blog_Cards_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Card_BatchArgs = {
  data?: InputMaybe<Array<Update_Card_Input>>;
  filter?: InputMaybe<Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Card_ItemArgs = {
  data: Update_Card_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Card_ItemsArgs = {
  data: Update_Card_Input;
  filter?: InputMaybe<Card_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Card_With_Image_BatchArgs = {
  data?: InputMaybe<Array<Update_Card_With_Image_Input>>;
  filter?: InputMaybe<Card_With_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Card_With_Image_ItemArgs = {
  data: Update_Card_With_Image_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Card_With_Image_ItemsArgs = {
  data: Update_Card_With_Image_Input;
  filter?: InputMaybe<Card_With_Image_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Card_With_Image_Rich_Text_Columns_BatchArgs = {
  data?: InputMaybe<Array<Update_Card_With_Image_Rich_Text_Columns_Input>>;
  filter?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Card_With_Image_Rich_Text_Columns_ItemArgs = {
  data: Update_Card_With_Image_Rich_Text_Columns_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Card_With_Image_Rich_Text_Columns_ItemsArgs = {
  data: Update_Card_With_Image_Rich_Text_Columns_Input;
  filter?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Cards_BatchArgs = {
  data?: InputMaybe<Array<Update_Cards_Input>>;
  filter?: InputMaybe<Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Cards_Card_BatchArgs = {
  data?: InputMaybe<Array<Update_Cards_Card_Input>>;
  filter?: InputMaybe<Cards_Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Cards_Card_ItemArgs = {
  data: Update_Cards_Card_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Cards_Card_ItemsArgs = {
  data: Update_Cards_Card_Input;
  filter?: InputMaybe<Cards_Card_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Cards_ItemArgs = {
  data: Update_Cards_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Cards_ItemsArgs = {
  data: Update_Cards_Input;
  filter?: InputMaybe<Cards_Filter>;
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


export type MutationUpdate_Company_Logo_Lists_Company_Logos_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Logo_Lists_Company_Logos_Input>>;
  filter?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Logo_Lists_Company_Logos_ItemArgs = {
  data: Update_Company_Logo_Lists_Company_Logos_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Logo_Lists_Company_Logos_ItemsArgs = {
  data: Update_Company_Logo_Lists_Company_Logos_Input;
  filter?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
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


export type MutationUpdate_Cta_BatchArgs = {
  data?: InputMaybe<Array<Update_Cta_Input>>;
  filter?: InputMaybe<Cta_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Cta_ItemArgs = {
  data: Update_Cta_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Cta_ItemsArgs = {
  data: Update_Cta_Input;
  filter?: InputMaybe<Cta_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Custom_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Custom_Pages_Input>>;
  filter?: InputMaybe<Custom_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Custom_Pages_Components_BatchArgs = {
  data?: InputMaybe<Array<Update_Custom_Pages_Components_Input>>;
  filter?: InputMaybe<Custom_Pages_Components_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Custom_Pages_Components_ItemArgs = {
  data: Update_Custom_Pages_Components_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Custom_Pages_Components_ItemsArgs = {
  data: Update_Custom_Pages_Components_Input;
  filter?: InputMaybe<Custom_Pages_Components_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Custom_Pages_ItemArgs = {
  data: Update_Custom_Pages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Custom_Pages_ItemsArgs = {
  data: Update_Custom_Pages_Input;
  filter?: InputMaybe<Custom_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Customer_Quote_BatchArgs = {
  data?: InputMaybe<Array<Update_Customer_Quote_Input>>;
  filter?: InputMaybe<Customer_Quote_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Customer_Quote_ItemArgs = {
  data: Update_Customer_Quote_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Customer_Quote_ItemsArgs = {
  data: Update_Customer_Quote_Input;
  filter?: InputMaybe<Customer_Quote_Filter>;
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


export type MutationUpdate_Hero_BatchArgs = {
  data?: InputMaybe<Array<Update_Hero_Input>>;
  filter?: InputMaybe<Hero_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Hero_ItemArgs = {
  data: Update_Hero_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Hero_ItemsArgs = {
  data: Update_Hero_Input;
  filter?: InputMaybe<Hero_Filter>;
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


export type MutationUpdate_Large_Image_BatchArgs = {
  data?: InputMaybe<Array<Update_Large_Image_Input>>;
  filter?: InputMaybe<Large_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Large_Image_ItemArgs = {
  data: Update_Large_Image_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Large_Image_ItemsArgs = {
  data: Update_Large_Image_Input;
  filter?: InputMaybe<Large_Image_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Logo_Strip_BatchArgs = {
  data?: InputMaybe<Array<Update_Logo_Strip_Input>>;
  filter?: InputMaybe<Logo_Strip_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Logo_Strip_ItemArgs = {
  data: Update_Logo_Strip_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Logo_Strip_ItemsArgs = {
  data: Update_Logo_Strip_Input;
  filter?: InputMaybe<Logo_Strip_Filter>;
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


export type MutationUpdate_Multi_Column_Text_BatchArgs = {
  data?: InputMaybe<Array<Update_Multi_Column_Text_Input>>;
  filter?: InputMaybe<Multi_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Multi_Column_Text_ItemArgs = {
  data: Update_Multi_Column_Text_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Multi_Column_Text_ItemsArgs = {
  data: Update_Multi_Column_Text_Input;
  filter?: InputMaybe<Multi_Column_Text_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Multi_Column_Text_Rich_Text_Columns_BatchArgs = {
  data?: InputMaybe<Array<Update_Multi_Column_Text_Rich_Text_Columns_Input>>;
  filter?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Multi_Column_Text_Rich_Text_Columns_ItemArgs = {
  data: Update_Multi_Column_Text_Rich_Text_Columns_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Multi_Column_Text_Rich_Text_Columns_ItemsArgs = {
  data: Update_Multi_Column_Text_Rich_Text_Columns_Input;
  filter?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_HomepageArgs = {
  data: Update_Page_Homepage_Input;
};


export type MutationUpdate_Page_LegalArgs = {
  data: Update_Page_Legal_Input;
};


export type MutationUpdate_Pricing_PageArgs = {
  data: Update_Pricing_Page_Input;
};


export type MutationUpdate_Pricing_Plan_Features_BatchArgs = {
  data?: InputMaybe<Array<Update_Pricing_Plan_Features_Input>>;
  filter?: InputMaybe<Pricing_Plan_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pricing_Plan_Features_ItemArgs = {
  data: Update_Pricing_Plan_Features_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pricing_Plan_Features_ItemsArgs = {
  data: Update_Pricing_Plan_Features_Input;
  filter?: InputMaybe<Pricing_Plan_Features_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pricing_Plans_BatchArgs = {
  data?: InputMaybe<Array<Update_Pricing_Plans_Input>>;
  filter?: InputMaybe<Pricing_Plans_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pricing_Plans_ItemArgs = {
  data: Update_Pricing_Plans_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pricing_Plans_ItemsArgs = {
  data: Update_Pricing_Plans_Input;
  filter?: InputMaybe<Pricing_Plans_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_Features_BatchArgs = {
  data?: InputMaybe<Array<Update_Product_Features_Input>>;
  filter?: InputMaybe<Product_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_Features_ItemArgs = {
  data: Update_Product_Features_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Product_Features_ItemsArgs = {
  data: Update_Product_Features_Input;
  filter?: InputMaybe<Product_Features_Filter>;
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


export type MutationUpdate_Rich_Text_Columns_BatchArgs = {
  data?: InputMaybe<Array<Update_Rich_Text_Columns_Input>>;
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Rich_Text_Columns_ItemArgs = {
  data: Update_Rich_Text_Columns_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Rich_Text_Columns_ItemsArgs = {
  data: Update_Rich_Text_Columns_Input;
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Section_Header_BatchArgs = {
  data?: InputMaybe<Array<Update_Section_Header_Input>>;
  filter?: InputMaybe<Section_Header_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Section_Header_ItemArgs = {
  data: Update_Section_Header_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Section_Header_ItemsArgs = {
  data: Update_Section_Header_Input;
  filter?: InputMaybe<Section_Header_Filter>;
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


export type MutationUpdate_Solution_Features_BatchArgs = {
  data?: InputMaybe<Array<Update_Solution_Features_Input>>;
  filter?: InputMaybe<Solution_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Solution_Features_ItemArgs = {
  data: Update_Solution_Features_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Solution_Features_ItemsArgs = {
  data: Update_Solution_Features_Input;
  filter?: InputMaybe<Solution_Features_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Solution_Problems_BatchArgs = {
  data?: InputMaybe<Array<Update_Solution_Problems_Input>>;
  filter?: InputMaybe<Solution_Problems_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Solution_Problems_ItemArgs = {
  data: Update_Solution_Problems_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Solution_Problems_ItemsArgs = {
  data: Update_Solution_Problems_Input;
  filter?: InputMaybe<Solution_Problems_Filter>;
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


export type MutationUpdate_Solutions_Pages_Solution_Problems_BatchArgs = {
  data?: InputMaybe<Array<Update_Solutions_Pages_Solution_Problems_Input>>;
  filter?: InputMaybe<Solutions_Pages_Solution_Problems_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Solutions_Pages_Solution_Problems_ItemArgs = {
  data: Update_Solutions_Pages_Solution_Problems_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Solutions_Pages_Solution_Problems_ItemsArgs = {
  data: Update_Solutions_Pages_Solution_Problems_Input;
  filter?: InputMaybe<Solutions_Pages_Solution_Problems_Filter>;
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


export type MutationUpdate_Two_Column_Text_BatchArgs = {
  data?: InputMaybe<Array<Update_Two_Column_Text_Input>>;
  filter?: InputMaybe<Two_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Two_Column_Text_ItemArgs = {
  data: Update_Two_Column_Text_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Two_Column_Text_ItemsArgs = {
  data: Update_Two_Column_Text_Input;
  filter?: InputMaybe<Two_Column_Text_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  __typename?: 'Query';
  article_cards: Array<Article_Cards>;
  article_cards_aggregated: Array<Article_Cards_Aggregated>;
  article_cards_by_id?: Maybe<Article_Cards>;
  blog_cards: Array<Blog_Cards>;
  blog_cards_aggregated: Array<Blog_Cards_Aggregated>;
  blog_cards_by_id?: Maybe<Blog_Cards>;
  card: Array<Card>;
  card_aggregated: Array<Card_Aggregated>;
  card_by_id?: Maybe<Card>;
  card_with_image: Array<Card_With_Image>;
  card_with_image_aggregated: Array<Card_With_Image_Aggregated>;
  card_with_image_by_id?: Maybe<Card_With_Image>;
  card_with_image_rich_text_columns: Array<Card_With_Image_Rich_Text_Columns>;
  card_with_image_rich_text_columns_aggregated: Array<Card_With_Image_Rich_Text_Columns_Aggregated>;
  card_with_image_rich_text_columns_by_id?: Maybe<Card_With_Image_Rich_Text_Columns>;
  cards: Array<Cards>;
  cards_aggregated: Array<Cards_Aggregated>;
  cards_by_id?: Maybe<Cards>;
  cards_card: Array<Cards_Card>;
  cards_card_aggregated: Array<Cards_Card_Aggregated>;
  cards_card_by_id?: Maybe<Cards_Card>;
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
  company_logo_lists_company_logos: Array<Company_Logo_Lists_Company_Logos>;
  company_logo_lists_company_logos_aggregated: Array<Company_Logo_Lists_Company_Logos_Aggregated>;
  company_logo_lists_company_logos_by_id?: Maybe<Company_Logo_Lists_Company_Logos>;
  company_logo_lists_items: Array<Company_Logo_Lists_Items>;
  company_logo_lists_items_aggregated: Array<Company_Logo_Lists_Items_Aggregated>;
  company_logo_lists_items_by_id?: Maybe<Company_Logo_Lists_Items>;
  company_logos: Array<Company_Logos>;
  company_logos_aggregated: Array<Company_Logos_Aggregated>;
  company_logos_by_id?: Maybe<Company_Logos>;
  cta: Array<Cta>;
  cta_aggregated: Array<Cta_Aggregated>;
  cta_by_id?: Maybe<Cta>;
  custom_pages: Array<Custom_Pages>;
  custom_pages_aggregated: Array<Custom_Pages_Aggregated>;
  custom_pages_by_id?: Maybe<Custom_Pages>;
  custom_pages_components: Array<Custom_Pages_Components>;
  custom_pages_components_aggregated: Array<Custom_Pages_Components_Aggregated>;
  custom_pages_components_by_id?: Maybe<Custom_Pages_Components>;
  customer_quote: Array<Customer_Quote>;
  customer_quote_aggregated: Array<Customer_Quote_Aggregated>;
  customer_quote_by_id?: Maybe<Customer_Quote>;
  events: Array<Events>;
  events_aggregated: Array<Events_Aggregated>;
  events_by_id?: Maybe<Events>;
  hero: Array<Hero>;
  hero_aggregated: Array<Hero_Aggregated>;
  hero_by_id?: Maybe<Hero>;
  job_listings: Array<Job_Listings>;
  job_listings_aggregated: Array<Job_Listings_Aggregated>;
  job_listings_by_id?: Maybe<Job_Listings>;
  large_image: Array<Large_Image>;
  large_image_aggregated: Array<Large_Image_Aggregated>;
  large_image_by_id?: Maybe<Large_Image>;
  logo_strip: Array<Logo_Strip>;
  logo_strip_aggregated: Array<Logo_Strip_Aggregated>;
  logo_strip_by_id?: Maybe<Logo_Strip>;
  markdown_pages: Array<Markdown_Pages>;
  markdown_pages_aggregated: Array<Markdown_Pages_Aggregated>;
  markdown_pages_by_id?: Maybe<Markdown_Pages>;
  multi_column_text: Array<Multi_Column_Text>;
  multi_column_text_aggregated: Array<Multi_Column_Text_Aggregated>;
  multi_column_text_by_id?: Maybe<Multi_Column_Text>;
  multi_column_text_rich_text_columns: Array<Multi_Column_Text_Rich_Text_Columns>;
  multi_column_text_rich_text_columns_aggregated: Array<Multi_Column_Text_Rich_Text_Columns_Aggregated>;
  multi_column_text_rich_text_columns_by_id?: Maybe<Multi_Column_Text_Rich_Text_Columns>;
  page_homepage?: Maybe<Page_Homepage>;
  page_legal?: Maybe<Page_Legal>;
  pricing_page?: Maybe<Pricing_Page>;
  pricing_plan_features: Array<Pricing_Plan_Features>;
  pricing_plan_features_aggregated: Array<Pricing_Plan_Features_Aggregated>;
  pricing_plan_features_by_id?: Maybe<Pricing_Plan_Features>;
  pricing_plans: Array<Pricing_Plans>;
  pricing_plans_aggregated: Array<Pricing_Plans_Aggregated>;
  pricing_plans_by_id?: Maybe<Pricing_Plans>;
  product_features: Array<Product_Features>;
  product_features_aggregated: Array<Product_Features_Aggregated>;
  product_features_by_id?: Maybe<Product_Features>;
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
  rich_text_columns: Array<Rich_Text_Columns>;
  rich_text_columns_aggregated: Array<Rich_Text_Columns_Aggregated>;
  rich_text_columns_by_id?: Maybe<Rich_Text_Columns>;
  section_header: Array<Section_Header>;
  section_header_aggregated: Array<Section_Header_Aggregated>;
  section_header_by_id?: Maybe<Section_Header>;
  site_settings?: Maybe<Site_Settings>;
  site_settings_nav_list: Array<Site_Settings_Nav_List>;
  site_settings_nav_list_aggregated: Array<Site_Settings_Nav_List_Aggregated>;
  site_settings_nav_list_by_id?: Maybe<Site_Settings_Nav_List>;
  solution_features: Array<Solution_Features>;
  solution_features_aggregated: Array<Solution_Features_Aggregated>;
  solution_features_by_id?: Maybe<Solution_Features>;
  solution_problems: Array<Solution_Problems>;
  solution_problems_aggregated: Array<Solution_Problems_Aggregated>;
  solution_problems_by_id?: Maybe<Solution_Problems>;
  solutions_pages: Array<Solutions_Pages>;
  solutions_pages_aggregated: Array<Solutions_Pages_Aggregated>;
  solutions_pages_by_id?: Maybe<Solutions_Pages>;
  solutions_pages_solution_problems: Array<Solutions_Pages_Solution_Problems>;
  solutions_pages_solution_problems_aggregated: Array<Solutions_Pages_Solution_Problems_Aggregated>;
  solutions_pages_solution_problems_by_id?: Maybe<Solutions_Pages_Solution_Problems>;
  team_members: Array<Team_Members>;
  team_members_aggregated: Array<Team_Members_Aggregated>;
  team_members_by_id?: Maybe<Team_Members>;
  two_column_text: Array<Two_Column_Text>;
  two_column_text_aggregated: Array<Two_Column_Text_Aggregated>;
  two_column_text_by_id?: Maybe<Two_Column_Text>;
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


export type QueryBlog_CardsArgs = {
  filter?: InputMaybe<Blog_Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_Cards_AggregatedArgs = {
  filter?: InputMaybe<Blog_Cards_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_Cards_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardArgs = {
  filter?: InputMaybe<Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCard_AggregatedArgs = {
  filter?: InputMaybe<Card_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCard_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCard_With_ImageArgs = {
  filter?: InputMaybe<Card_With_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCard_With_Image_AggregatedArgs = {
  filter?: InputMaybe<Card_With_Image_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCard_With_Image_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCard_With_Image_Rich_Text_ColumnsArgs = {
  filter?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCard_With_Image_Rich_Text_Columns_AggregatedArgs = {
  filter?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCard_With_Image_Rich_Text_Columns_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardsArgs = {
  filter?: InputMaybe<Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCards_AggregatedArgs = {
  filter?: InputMaybe<Cards_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCards_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCards_CardArgs = {
  filter?: InputMaybe<Cards_Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCards_Card_AggregatedArgs = {
  filter?: InputMaybe<Cards_Card_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCards_Card_By_IdArgs = {
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


export type QueryCompany_Logo_Lists_Company_LogosArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Company_Logos_AggregatedArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Logo_Lists_Company_Logos_By_IdArgs = {
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


export type QueryCtaArgs = {
  filter?: InputMaybe<Cta_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCta_AggregatedArgs = {
  filter?: InputMaybe<Cta_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCta_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustom_PagesArgs = {
  filter?: InputMaybe<Custom_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustom_Pages_AggregatedArgs = {
  filter?: InputMaybe<Custom_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustom_Pages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustom_Pages_ComponentsArgs = {
  filter?: InputMaybe<Custom_Pages_Components_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustom_Pages_Components_AggregatedArgs = {
  filter?: InputMaybe<Custom_Pages_Components_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustom_Pages_Components_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomer_QuoteArgs = {
  filter?: InputMaybe<Customer_Quote_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustomer_Quote_AggregatedArgs = {
  filter?: InputMaybe<Customer_Quote_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustomer_Quote_By_IdArgs = {
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


export type QueryHeroArgs = {
  filter?: InputMaybe<Hero_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHero_AggregatedArgs = {
  filter?: InputMaybe<Hero_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHero_By_IdArgs = {
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


export type QueryLarge_ImageArgs = {
  filter?: InputMaybe<Large_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLarge_Image_AggregatedArgs = {
  filter?: InputMaybe<Large_Image_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLarge_Image_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLogo_StripArgs = {
  filter?: InputMaybe<Logo_Strip_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLogo_Strip_AggregatedArgs = {
  filter?: InputMaybe<Logo_Strip_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLogo_Strip_By_IdArgs = {
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


export type QueryMulti_Column_TextArgs = {
  filter?: InputMaybe<Multi_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMulti_Column_Text_AggregatedArgs = {
  filter?: InputMaybe<Multi_Column_Text_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMulti_Column_Text_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMulti_Column_Text_Rich_Text_ColumnsArgs = {
  filter?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMulti_Column_Text_Rich_Text_Columns_AggregatedArgs = {
  filter?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMulti_Column_Text_Rich_Text_Columns_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPricing_Plan_FeaturesArgs = {
  filter?: InputMaybe<Pricing_Plan_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricing_Plan_Features_AggregatedArgs = {
  filter?: InputMaybe<Pricing_Plan_Features_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricing_Plan_Features_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPricing_PlansArgs = {
  filter?: InputMaybe<Pricing_Plans_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricing_Plans_AggregatedArgs = {
  filter?: InputMaybe<Pricing_Plans_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPricing_Plans_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProduct_FeaturesArgs = {
  filter?: InputMaybe<Product_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_Features_AggregatedArgs = {
  filter?: InputMaybe<Product_Features_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_Features_By_IdArgs = {
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


export type QueryRich_Text_ColumnsArgs = {
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRich_Text_Columns_AggregatedArgs = {
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRich_Text_Columns_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySection_HeaderArgs = {
  filter?: InputMaybe<Section_Header_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySection_Header_AggregatedArgs = {
  filter?: InputMaybe<Section_Header_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySection_Header_By_IdArgs = {
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


export type QuerySolution_FeaturesArgs = {
  filter?: InputMaybe<Solution_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolution_Features_AggregatedArgs = {
  filter?: InputMaybe<Solution_Features_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolution_Features_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySolution_ProblemsArgs = {
  filter?: InputMaybe<Solution_Problems_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolution_Problems_AggregatedArgs = {
  filter?: InputMaybe<Solution_Problems_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolution_Problems_By_IdArgs = {
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


export type QuerySolutions_Pages_Solution_ProblemsArgs = {
  filter?: InputMaybe<Solutions_Pages_Solution_Problems_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolutions_Pages_Solution_Problems_AggregatedArgs = {
  filter?: InputMaybe<Solutions_Pages_Solution_Problems_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySolutions_Pages_Solution_Problems_By_IdArgs = {
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


export type QueryTwo_Column_TextArgs = {
  filter?: InputMaybe<Two_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTwo_Column_Text_AggregatedArgs = {
  filter?: InputMaybe<Two_Column_Text_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTwo_Column_Text_By_IdArgs = {
  id: Scalars['ID']['input'];
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

export type Blog_Cards = {
  __typename?: 'blog_cards';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Blog_CardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Blog_CardsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Blog_Cards_Aggregated = {
  __typename?: 'blog_cards_aggregated';
  avg?: Maybe<Blog_Cards_Aggregated_Fields>;
  avgDistinct?: Maybe<Blog_Cards_Aggregated_Fields>;
  count?: Maybe<Blog_Cards_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Blog_Cards_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Blog_Cards_Aggregated_Fields>;
  min?: Maybe<Blog_Cards_Aggregated_Fields>;
  sum?: Maybe<Blog_Cards_Aggregated_Fields>;
  sumDistinct?: Maybe<Blog_Cards_Aggregated_Fields>;
};

export type Blog_Cards_Aggregated_Count = {
  __typename?: 'blog_cards_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Blog_Cards_Aggregated_Fields = {
  __typename?: 'blog_cards_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Blog_Cards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Blog_Cards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Blog_Cards_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Card = {
  __typename?: 'card';
  body_text: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  heading: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  url?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CardImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CardUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CardUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Card_Aggregated = {
  __typename?: 'card_aggregated';
  avg?: Maybe<Card_Aggregated_Fields>;
  avgDistinct?: Maybe<Card_Aggregated_Fields>;
  count?: Maybe<Card_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Card_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Card_Aggregated_Fields>;
  min?: Maybe<Card_Aggregated_Fields>;
  sum?: Maybe<Card_Aggregated_Fields>;
  sumDistinct?: Maybe<Card_Aggregated_Fields>;
};

export type Card_Aggregated_Count = {
  __typename?: 'card_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Card_Aggregated_Fields = {
  __typename?: 'card_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Card_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Card_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Card_Filter>>>;
  body_text?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Card_With_Image = {
  __typename?: 'card_with_image';
  body_text?: Maybe<Scalars['String']['output']>;
  bullets?: Maybe<Array<Maybe<Card_With_Image_Rich_Text_Columns>>>;
  bullets_func?: Maybe<Count_Functions>;
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  spacing?: Maybe<Scalars['String']['output']>;
  theme: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Card_With_ImageBulletsArgs = {
  filter?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Card_With_ImageImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Card_With_ImageUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Card_With_ImageUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Card_With_Image_Aggregated = {
  __typename?: 'card_with_image_aggregated';
  avg?: Maybe<Card_With_Image_Aggregated_Fields>;
  avgDistinct?: Maybe<Card_With_Image_Aggregated_Fields>;
  count?: Maybe<Card_With_Image_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Card_With_Image_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Card_With_Image_Aggregated_Fields>;
  min?: Maybe<Card_With_Image_Aggregated_Fields>;
  sum?: Maybe<Card_With_Image_Aggregated_Fields>;
  sumDistinct?: Maybe<Card_With_Image_Aggregated_Fields>;
};

export type Card_With_Image_Aggregated_Count = {
  __typename?: 'card_with_image_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  bullets?: Maybe<Scalars['Int']['output']>;
  cta_text?: Maybe<Scalars['Int']['output']>;
  cta_url?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Card_With_Image_Aggregated_Fields = {
  __typename?: 'card_with_image_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Card_With_Image_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Card_With_Image_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Card_With_Image_Filter>>>;
  body_text?: InputMaybe<String_Filter_Operators>;
  bullets?: InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>;
  bullets_func?: InputMaybe<Count_Function_Filter_Operators>;
  cta_text?: InputMaybe<String_Filter_Operators>;
  cta_url?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  spacing?: InputMaybe<String_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Card_With_Image_Rich_Text_Columns = {
  __typename?: 'card_with_image_rich_text_columns';
  card_with_image_id?: Maybe<Card_With_Image>;
  id: Scalars['ID']['output'];
  rich_text_columns_id?: Maybe<Rich_Text_Columns>;
};


export type Card_With_Image_Rich_Text_ColumnsCard_With_Image_IdArgs = {
  filter?: InputMaybe<Card_With_Image_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Card_With_Image_Rich_Text_ColumnsRich_Text_Columns_IdArgs = {
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Card_With_Image_Rich_Text_Columns_Aggregated = {
  __typename?: 'card_with_image_rich_text_columns_aggregated';
  avg?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Fields>;
  avgDistinct?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Fields>;
  count?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Fields>;
  min?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Fields>;
  sum?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Fields>;
  sumDistinct?: Maybe<Card_With_Image_Rich_Text_Columns_Aggregated_Fields>;
};

export type Card_With_Image_Rich_Text_Columns_Aggregated_Count = {
  __typename?: 'card_with_image_rich_text_columns_aggregated_count';
  card_with_image_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rich_text_columns_id?: Maybe<Scalars['Int']['output']>;
};

export type Card_With_Image_Rich_Text_Columns_Aggregated_Fields = {
  __typename?: 'card_with_image_rich_text_columns_aggregated_fields';
  card_with_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rich_text_columns_id?: Maybe<Scalars['Float']['output']>;
};

export type Card_With_Image_Rich_Text_Columns_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Card_With_Image_Rich_Text_Columns_Filter>>>;
  card_with_image_id?: InputMaybe<Card_With_Image_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  rich_text_columns_id?: InputMaybe<Rich_Text_Columns_Filter>;
};

export type Cards = {
  __typename?: 'cards';
  cards?: Maybe<Array<Maybe<Cards_Card>>>;
  cards_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CardsCardsArgs = {
  filter?: InputMaybe<Cards_Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CardsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cards_Aggregated = {
  __typename?: 'cards_aggregated';
  avg?: Maybe<Cards_Aggregated_Fields>;
  avgDistinct?: Maybe<Cards_Aggregated_Fields>;
  count?: Maybe<Cards_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Cards_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Cards_Aggregated_Fields>;
  min?: Maybe<Cards_Aggregated_Fields>;
  sum?: Maybe<Cards_Aggregated_Fields>;
  sumDistinct?: Maybe<Cards_Aggregated_Fields>;
};

export type Cards_Aggregated_Count = {
  __typename?: 'cards_aggregated_count';
  cards?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Cards_Aggregated_Fields = {
  __typename?: 'cards_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Cards_Card = {
  __typename?: 'cards_card';
  card_id?: Maybe<Card>;
  cards_id?: Maybe<Cards>;
  id: Scalars['ID']['output'];
};


export type Cards_CardCard_IdArgs = {
  filter?: InputMaybe<Card_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Cards_CardCards_IdArgs = {
  filter?: InputMaybe<Cards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cards_Card_Aggregated = {
  __typename?: 'cards_card_aggregated';
  avg?: Maybe<Cards_Card_Aggregated_Fields>;
  avgDistinct?: Maybe<Cards_Card_Aggregated_Fields>;
  count?: Maybe<Cards_Card_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Cards_Card_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Cards_Card_Aggregated_Fields>;
  min?: Maybe<Cards_Card_Aggregated_Fields>;
  sum?: Maybe<Cards_Card_Aggregated_Fields>;
  sumDistinct?: Maybe<Cards_Card_Aggregated_Fields>;
};

export type Cards_Card_Aggregated_Count = {
  __typename?: 'cards_card_aggregated_count';
  card_id?: Maybe<Scalars['Int']['output']>;
  cards_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Cards_Card_Aggregated_Fields = {
  __typename?: 'cards_card_aggregated_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  cards_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Cards_Card_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Cards_Card_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Cards_Card_Filter>>>;
  card_id?: InputMaybe<Card_Filter>;
  cards_id?: InputMaybe<Cards_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Cards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Cards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Cards_Filter>>>;
  cards?: InputMaybe<Cards_Card_Filter>;
  cards_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
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
  logos?: Maybe<Array<Maybe<Company_Logo_Lists_Company_Logos>>>;
  logos_func?: Maybe<Count_Functions>;
  partner_logos?: Maybe<Array<Maybe<Company_Logo_Lists_Items>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Company_Logo_ListsLogosArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
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
  logos?: Maybe<Scalars['Int']['output']>;
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

export type Company_Logo_Lists_Company_Logos = {
  __typename?: 'company_logo_lists_company_logos';
  company_logo_lists_id?: Maybe<Company_Logo_Lists>;
  company_logos_id?: Maybe<Company_Logos>;
  id: Scalars['ID']['output'];
};


export type Company_Logo_Lists_Company_LogosCompany_Logo_Lists_IdArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Company_Logo_Lists_Company_LogosCompany_Logos_IdArgs = {
  filter?: InputMaybe<Company_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Logo_Lists_Company_Logos_Aggregated = {
  __typename?: 'company_logo_lists_company_logos_aggregated';
  avg?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Fields>;
  count?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Fields>;
  min?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Fields>;
  sum?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Logo_Lists_Company_Logos_Aggregated_Fields>;
};

export type Company_Logo_Lists_Company_Logos_Aggregated_Count = {
  __typename?: 'company_logo_lists_company_logos_aggregated_count';
  company_logo_lists_id?: Maybe<Scalars['Int']['output']>;
  company_logos_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Company_Logo_Lists_Company_Logos_Aggregated_Fields = {
  __typename?: 'company_logo_lists_company_logos_aggregated_fields';
  company_logo_lists_id?: Maybe<Scalars['Float']['output']>;
  company_logos_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Company_Logo_Lists_Company_Logos_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Company_Logos_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Company_Logos_Filter>>>;
  company_logo_lists_id?: InputMaybe<Company_Logo_Lists_Filter>;
  company_logos_id?: InputMaybe<Company_Logos_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Company_Logo_Lists_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Logo_Lists_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logos?: InputMaybe<Company_Logo_Lists_Company_Logos_Filter>;
  logos_func?: InputMaybe<Count_Function_Filter_Operators>;
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
};

export type Company_Logos_Aggregated_Fields = {
  __typename?: 'company_logos_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
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
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
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

export type Create_Blog_Cards_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Card_Input = {
  body_text: Scalars['String']['input'];
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Card_With_Image_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  bullets?: InputMaybe<Array<InputMaybe<Create_Card_With_Image_Rich_Text_Columns_Input>>>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  theme: Scalars['String']['input'];
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Card_With_Image_Rich_Text_Columns_Input = {
  card_with_image_id?: InputMaybe<Create_Card_With_Image_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rich_text_columns_id?: InputMaybe<Create_Rich_Text_Columns_Input>;
};

export type Create_Cards_Card_Input = {
  card_id?: InputMaybe<Create_Card_Input>;
  cards_id?: InputMaybe<Create_Cards_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Cards_Input = {
  cards?: InputMaybe<Array<InputMaybe<Create_Cards_Card_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
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

export type Create_Company_Logo_Lists_Company_Logos_Input = {
  company_logo_lists_id?: InputMaybe<Create_Company_Logo_Lists_Input>;
  company_logos_id?: InputMaybe<Create_Company_Logos_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Company_Logo_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logos?: InputMaybe<Array<InputMaybe<Create_Company_Logo_Lists_Company_Logos_Input>>>;
  partner_logos?: InputMaybe<Array<InputMaybe<Create_Company_Logo_Lists_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
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
};

export type Create_Cta_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Custom_Pages_Components_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  custom_pages_id?: InputMaybe<Create_Custom_Pages_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Custom_Pages_Input = {
  components?: InputMaybe<Array<InputMaybe<Create_Custom_Pages_Components_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Customer_Quote_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quote?: InputMaybe<Create_Quotes_Input>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
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
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Hero_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
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

export type Create_Large_Image_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  overline?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Logo_Strip_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo_list?: InputMaybe<Create_Company_Logo_Lists_Input>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
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

export type Create_Multi_Column_Text_Input = {
  columns?: InputMaybe<Array<InputMaybe<Create_Multi_Column_Text_Rich_Text_Columns_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Multi_Column_Text_Rich_Text_Columns_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  multi_column_text_id?: InputMaybe<Create_Multi_Column_Text_Input>;
  rich_text_columns_id?: InputMaybe<Create_Rich_Text_Columns_Input>;
};

export type Create_Page_Homepage_Input = {
  article_cards?: InputMaybe<Array<InputMaybe<Create_Article_Cards_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
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

export type Create_Pricing_Plan_Features_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  plan_id?: InputMaybe<Create_Pricing_Plans_Input>;
};

export type Create_Pricing_Plans_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  features?: InputMaybe<Array<InputMaybe<Create_Pricing_Plan_Features_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Product_Features_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  product_id?: InputMaybe<Create_Product_Pages_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Product_Pages_Input = {
  dropdown_description?: InputMaybe<Scalars['String']['input']>;
  dropdown_icon?: InputMaybe<Scalars['String']['input']>;
  dropdown_title?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<InputMaybe<Create_Product_Features_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page_subtitle?: InputMaybe<Scalars['String']['input']>;
  page_title?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
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
  author_text?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_id?: InputMaybe<Create_Quote_Lists_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Rich_Text_Columns_Input = {
  body_text: Scalars['String']['input'];
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Section_Header_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  overline?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Site_Settings_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Create_Directus_Files_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Site_Settings_Nav_List_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Create_Site_Settings_Input>;
};

export type Create_Solution_Features_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link_title?: InputMaybe<Scalars['String']['input']>;
  link_url?: InputMaybe<Scalars['String']['input']>;
  order_of_appearance?: InputMaybe<Scalars['Int']['input']>;
  solution_lower_id?: InputMaybe<Create_Solutions_Pages_Input>;
  solution_upper_id?: InputMaybe<Create_Solutions_Pages_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Solution_Problems_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  order_of_appearance?: InputMaybe<Scalars['Int']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_id?: InputMaybe<Create_Solutions_Pages_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Solutions_Pages_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  download_section_description?: InputMaybe<Scalars['String']['input']>;
  download_section_title?: InputMaybe<Scalars['String']['input']>;
  ebook_url?: InputMaybe<Scalars['String']['input']>;
  featured_quote?: InputMaybe<Create_Quotes_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lower_features?: InputMaybe<Array<InputMaybe<Create_Solution_Features_Input>>>;
  lower_features_title?: InputMaybe<Scalars['String']['input']>;
  nav_title?: InputMaybe<Scalars['String']['input']>;
  problems?: InputMaybe<Array<InputMaybe<Create_Solution_Problems_Input>>>;
  slug: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  upper_features?: InputMaybe<Array<InputMaybe<Create_Solution_Features_Input>>>;
  upper_features_title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Solutions_Pages_Solution_Problems_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  solution_problems_id?: InputMaybe<Create_Solution_Problems_Input>;
  solutions_pages_id?: InputMaybe<Create_Solutions_Pages_Input>;
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

export type Create_Two_Column_Text_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  main_content: Scalars['String']['input'];
  side_content: Scalars['String']['input'];
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Cta = {
  __typename?: 'cta';
  body_text?: Maybe<Scalars['String']['output']>;
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CtaUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CtaUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cta_Aggregated = {
  __typename?: 'cta_aggregated';
  avg?: Maybe<Cta_Aggregated_Fields>;
  avgDistinct?: Maybe<Cta_Aggregated_Fields>;
  count?: Maybe<Cta_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Cta_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Cta_Aggregated_Fields>;
  min?: Maybe<Cta_Aggregated_Fields>;
  sum?: Maybe<Cta_Aggregated_Fields>;
  sumDistinct?: Maybe<Cta_Aggregated_Fields>;
};

export type Cta_Aggregated_Count = {
  __typename?: 'cta_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  cta_text?: Maybe<Scalars['Int']['output']>;
  cta_url?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Cta_Aggregated_Fields = {
  __typename?: 'cta_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Cta_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Cta_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Cta_Filter>>>;
  body_text?: InputMaybe<String_Filter_Operators>;
  cta_text?: InputMaybe<String_Filter_Operators>;
  cta_url?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Custom_Pages = {
  __typename?: 'custom_pages';
  components?: Maybe<Array<Maybe<Custom_Pages_Components>>>;
  components_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Custom_PagesComponentsArgs = {
  filter?: InputMaybe<Custom_Pages_Components_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Custom_PagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Custom_PagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Custom_Pages_Aggregated = {
  __typename?: 'custom_pages_aggregated';
  avg?: Maybe<Custom_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Custom_Pages_Aggregated_Fields>;
  count?: Maybe<Custom_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Custom_Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Custom_Pages_Aggregated_Fields>;
  min?: Maybe<Custom_Pages_Aggregated_Fields>;
  sum?: Maybe<Custom_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Custom_Pages_Aggregated_Fields>;
};

export type Custom_Pages_Aggregated_Count = {
  __typename?: 'custom_pages_aggregated_count';
  components?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Custom_Pages_Aggregated_Fields = {
  __typename?: 'custom_pages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Custom_Pages_Components = {
  __typename?: 'custom_pages_components';
  collection?: Maybe<Scalars['String']['output']>;
  custom_pages_id?: Maybe<Custom_Pages>;
  id: Scalars['ID']['output'];
  item?: Maybe<Custom_Pages_Components_Item_Union>;
};


export type Custom_Pages_ComponentsCustom_Pages_IdArgs = {
  filter?: InputMaybe<Custom_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Custom_Pages_Components_Aggregated = {
  __typename?: 'custom_pages_components_aggregated';
  avg?: Maybe<Custom_Pages_Components_Aggregated_Fields>;
  avgDistinct?: Maybe<Custom_Pages_Components_Aggregated_Fields>;
  count?: Maybe<Custom_Pages_Components_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Custom_Pages_Components_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Custom_Pages_Components_Aggregated_Fields>;
  min?: Maybe<Custom_Pages_Components_Aggregated_Fields>;
  sum?: Maybe<Custom_Pages_Components_Aggregated_Fields>;
  sumDistinct?: Maybe<Custom_Pages_Components_Aggregated_Fields>;
};

export type Custom_Pages_Components_Aggregated_Count = {
  __typename?: 'custom_pages_components_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  custom_pages_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
};

export type Custom_Pages_Components_Aggregated_Fields = {
  __typename?: 'custom_pages_components_aggregated_fields';
  custom_pages_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Custom_Pages_Components_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Custom_Pages_Components_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Custom_Pages_Components_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  custom_pages_id?: InputMaybe<Custom_Pages_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__article_cards?: InputMaybe<Article_Cards_Filter>;
  item__blog_cards?: InputMaybe<Blog_Cards_Filter>;
  item__card_with_image?: InputMaybe<Card_With_Image_Filter>;
  item__cards?: InputMaybe<Cards_Filter>;
  item__cta?: InputMaybe<Cta_Filter>;
  item__customer_quote?: InputMaybe<Customer_Quote_Filter>;
  item__hero?: InputMaybe<Hero_Filter>;
  item__large_image?: InputMaybe<Large_Image_Filter>;
  item__logo_strip?: InputMaybe<Logo_Strip_Filter>;
  item__multi_column_text?: InputMaybe<Multi_Column_Text_Filter>;
  item__section_header?: InputMaybe<Section_Header_Filter>;
  item__two_column_text?: InputMaybe<Two_Column_Text_Filter>;
};

export type Custom_Pages_Components_Item_Union = Article_Cards | Blog_Cards | Card_With_Image | Cards | Cta | Customer_Quote | Hero | Large_Image | Logo_Strip | Multi_Column_Text | Section_Header | Two_Column_Text;

export type Custom_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Custom_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Custom_Pages_Filter>>>;
  components?: InputMaybe<Custom_Pages_Components_Filter>;
  components_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Customer_Quote = {
  __typename?: 'customer_quote';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  quote?: Maybe<Quotes>;
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Customer_QuoteQuoteArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Customer_QuoteUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Customer_QuoteUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Customer_Quote_Aggregated = {
  __typename?: 'customer_quote_aggregated';
  avg?: Maybe<Customer_Quote_Aggregated_Fields>;
  avgDistinct?: Maybe<Customer_Quote_Aggregated_Fields>;
  count?: Maybe<Customer_Quote_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Customer_Quote_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Customer_Quote_Aggregated_Fields>;
  min?: Maybe<Customer_Quote_Aggregated_Fields>;
  sum?: Maybe<Customer_Quote_Aggregated_Fields>;
  sumDistinct?: Maybe<Customer_Quote_Aggregated_Fields>;
};

export type Customer_Quote_Aggregated_Count = {
  __typename?: 'customer_quote_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quote?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Customer_Quote_Aggregated_Fields = {
  __typename?: 'customer_quote_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  quote?: Maybe<Scalars['Float']['output']>;
};

export type Customer_Quote_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Customer_Quote_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Customer_Quote_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  quote?: InputMaybe<Quotes_Filter>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  url?: Maybe<Scalars['String']['output']>;
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
  url?: Maybe<Scalars['Int']['output']>;
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
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Hero = {
  __typename?: 'hero';
  body_text?: Maybe<Scalars['String']['output']>;
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  media_type?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type HeroImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeroUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeroUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Aggregated = {
  __typename?: 'hero_aggregated';
  avg?: Maybe<Hero_Aggregated_Fields>;
  avgDistinct?: Maybe<Hero_Aggregated_Fields>;
  count?: Maybe<Hero_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Hero_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Hero_Aggregated_Fields>;
  min?: Maybe<Hero_Aggregated_Fields>;
  sum?: Maybe<Hero_Aggregated_Fields>;
  sumDistinct?: Maybe<Hero_Aggregated_Fields>;
};

export type Hero_Aggregated_Count = {
  __typename?: 'hero_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  cta_text?: Maybe<Scalars['Int']['output']>;
  cta_url?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  form?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  media_type?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  video_url?: Maybe<Scalars['Int']['output']>;
};

export type Hero_Aggregated_Fields = {
  __typename?: 'hero_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Hero_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Hero_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Hero_Filter>>>;
  body_text?: InputMaybe<String_Filter_Operators>;
  cta_text?: InputMaybe<String_Filter_Operators>;
  cta_url?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  form?: InputMaybe<String_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  media_type?: InputMaybe<String_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  video_url?: InputMaybe<String_Filter_Operators>;
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

export type Large_Image = {
  __typename?: 'large_image';
  body_text?: Maybe<Scalars['String']['output']>;
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  media_type?: Maybe<Scalars['String']['output']>;
  overline?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type Large_ImageImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Large_ImageUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Large_ImageUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Large_Image_Aggregated = {
  __typename?: 'large_image_aggregated';
  avg?: Maybe<Large_Image_Aggregated_Fields>;
  avgDistinct?: Maybe<Large_Image_Aggregated_Fields>;
  count?: Maybe<Large_Image_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Large_Image_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Large_Image_Aggregated_Fields>;
  min?: Maybe<Large_Image_Aggregated_Fields>;
  sum?: Maybe<Large_Image_Aggregated_Fields>;
  sumDistinct?: Maybe<Large_Image_Aggregated_Fields>;
};

export type Large_Image_Aggregated_Count = {
  __typename?: 'large_image_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  cta_text?: Maybe<Scalars['Int']['output']>;
  cta_url?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  form?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  media_type?: Maybe<Scalars['Int']['output']>;
  overline?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  video_url?: Maybe<Scalars['Int']['output']>;
};

export type Large_Image_Aggregated_Fields = {
  __typename?: 'large_image_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Large_Image_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Large_Image_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Large_Image_Filter>>>;
  body_text?: InputMaybe<String_Filter_Operators>;
  cta_text?: InputMaybe<String_Filter_Operators>;
  cta_url?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  form?: InputMaybe<String_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  media_type?: InputMaybe<String_Filter_Operators>;
  overline?: InputMaybe<String_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  video_url?: InputMaybe<String_Filter_Operators>;
};

export type Logo_Strip = {
  __typename?: 'logo_strip';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  logo_list?: Maybe<Company_Logo_Lists>;
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Logo_StripLogo_ListArgs = {
  filter?: InputMaybe<Company_Logo_Lists_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Logo_StripUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Logo_Strip_Aggregated = {
  __typename?: 'logo_strip_aggregated';
  avg?: Maybe<Logo_Strip_Aggregated_Fields>;
  avgDistinct?: Maybe<Logo_Strip_Aggregated_Fields>;
  count?: Maybe<Logo_Strip_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Logo_Strip_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Logo_Strip_Aggregated_Fields>;
  min?: Maybe<Logo_Strip_Aggregated_Fields>;
  sum?: Maybe<Logo_Strip_Aggregated_Fields>;
  sumDistinct?: Maybe<Logo_Strip_Aggregated_Fields>;
};

export type Logo_Strip_Aggregated_Count = {
  __typename?: 'logo_strip_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo_list?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type Logo_Strip_Aggregated_Fields = {
  __typename?: 'logo_strip_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  logo_list?: Maybe<Scalars['Float']['output']>;
};

export type Logo_Strip_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Logo_Strip_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Logo_Strip_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  logo_list?: InputMaybe<Company_Logo_Lists_Filter>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
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

export type Multi_Column_Text = {
  __typename?: 'multi_column_text';
  columns?: Maybe<Array<Maybe<Multi_Column_Text_Rich_Text_Columns>>>;
  columns_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Multi_Column_TextColumnsArgs = {
  filter?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Multi_Column_TextUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Multi_Column_TextUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Multi_Column_Text_Aggregated = {
  __typename?: 'multi_column_text_aggregated';
  avg?: Maybe<Multi_Column_Text_Aggregated_Fields>;
  avgDistinct?: Maybe<Multi_Column_Text_Aggregated_Fields>;
  count?: Maybe<Multi_Column_Text_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Multi_Column_Text_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Multi_Column_Text_Aggregated_Fields>;
  min?: Maybe<Multi_Column_Text_Aggregated_Fields>;
  sum?: Maybe<Multi_Column_Text_Aggregated_Fields>;
  sumDistinct?: Maybe<Multi_Column_Text_Aggregated_Fields>;
};

export type Multi_Column_Text_Aggregated_Count = {
  __typename?: 'multi_column_text_aggregated_count';
  columns?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Multi_Column_Text_Aggregated_Fields = {
  __typename?: 'multi_column_text_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Multi_Column_Text_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Multi_Column_Text_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Multi_Column_Text_Filter>>>;
  columns?: InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>;
  columns_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Multi_Column_Text_Rich_Text_Columns = {
  __typename?: 'multi_column_text_rich_text_columns';
  id: Scalars['ID']['output'];
  multi_column_text_id?: Maybe<Multi_Column_Text>;
  rich_text_columns_id?: Maybe<Rich_Text_Columns>;
};


export type Multi_Column_Text_Rich_Text_ColumnsMulti_Column_Text_IdArgs = {
  filter?: InputMaybe<Multi_Column_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Multi_Column_Text_Rich_Text_ColumnsRich_Text_Columns_IdArgs = {
  filter?: InputMaybe<Rich_Text_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Multi_Column_Text_Rich_Text_Columns_Aggregated = {
  __typename?: 'multi_column_text_rich_text_columns_aggregated';
  avg?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields>;
  avgDistinct?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields>;
  count?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields>;
  min?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields>;
  sum?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields>;
  sumDistinct?: Maybe<Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields>;
};

export type Multi_Column_Text_Rich_Text_Columns_Aggregated_Count = {
  __typename?: 'multi_column_text_rich_text_columns_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  multi_column_text_id?: Maybe<Scalars['Int']['output']>;
  rich_text_columns_id?: Maybe<Scalars['Int']['output']>;
};

export type Multi_Column_Text_Rich_Text_Columns_Aggregated_Fields = {
  __typename?: 'multi_column_text_rich_text_columns_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  multi_column_text_id?: Maybe<Scalars['Float']['output']>;
  rich_text_columns_id?: Maybe<Scalars['Float']['output']>;
};

export type Multi_Column_Text_Rich_Text_Columns_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Multi_Column_Text_Rich_Text_Columns_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  multi_column_text_id?: InputMaybe<Multi_Column_Text_Filter>;
  rich_text_columns_id?: InputMaybe<Rich_Text_Columns_Filter>;
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

export type Page_Homepage = {
  __typename?: 'page_homepage';
  article_cards?: Maybe<Array<Maybe<Article_Cards>>>;
  article_cards_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
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

export type Pricing_Page = {
  __typename?: 'pricing_page';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  enterprise_plan?: Maybe<Pricing_Plans>;
  id: Scalars['ID']['output'];
  pro_plan?: Maybe<Pricing_Plans>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Pricing_PageEnterprise_PlanArgs = {
  filter?: InputMaybe<Pricing_Plans_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pricing_PagePro_PlanArgs = {
  filter?: InputMaybe<Pricing_Plans_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pricing_PageUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pricing_PageUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pricing_Plan_Features = {
  __typename?: 'pricing_plan_features';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  plan_id?: Maybe<Pricing_Plans>;
};


export type Pricing_Plan_FeaturesPlan_IdArgs = {
  filter?: InputMaybe<Pricing_Plans_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pricing_Plan_Features_Aggregated = {
  __typename?: 'pricing_plan_features_aggregated';
  avg?: Maybe<Pricing_Plan_Features_Aggregated_Fields>;
  avgDistinct?: Maybe<Pricing_Plan_Features_Aggregated_Fields>;
  count?: Maybe<Pricing_Plan_Features_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pricing_Plan_Features_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pricing_Plan_Features_Aggregated_Fields>;
  min?: Maybe<Pricing_Plan_Features_Aggregated_Fields>;
  sum?: Maybe<Pricing_Plan_Features_Aggregated_Fields>;
  sumDistinct?: Maybe<Pricing_Plan_Features_Aggregated_Fields>;
};

export type Pricing_Plan_Features_Aggregated_Count = {
  __typename?: 'pricing_plan_features_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  plan_id?: Maybe<Scalars['Int']['output']>;
};

export type Pricing_Plan_Features_Aggregated_Fields = {
  __typename?: 'pricing_plan_features_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  plan_id?: Maybe<Scalars['Float']['output']>;
};

export type Pricing_Plan_Features_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pricing_Plan_Features_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pricing_Plan_Features_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  plan_id?: InputMaybe<Pricing_Plans_Filter>;
};

export type Pricing_Plans = {
  __typename?: 'pricing_plans';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  features?: Maybe<Array<Maybe<Pricing_Plan_Features>>>;
  features_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Pricing_PlansFeaturesArgs = {
  filter?: InputMaybe<Pricing_Plan_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pricing_PlansUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pricing_PlansUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pricing_Plans_Aggregated = {
  __typename?: 'pricing_plans_aggregated';
  avg?: Maybe<Pricing_Plans_Aggregated_Fields>;
  avgDistinct?: Maybe<Pricing_Plans_Aggregated_Fields>;
  count?: Maybe<Pricing_Plans_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pricing_Plans_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pricing_Plans_Aggregated_Fields>;
  min?: Maybe<Pricing_Plans_Aggregated_Fields>;
  sum?: Maybe<Pricing_Plans_Aggregated_Fields>;
  sumDistinct?: Maybe<Pricing_Plans_Aggregated_Fields>;
};

export type Pricing_Plans_Aggregated_Count = {
  __typename?: 'pricing_plans_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  features?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Pricing_Plans_Aggregated_Fields = {
  __typename?: 'pricing_plans_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Pricing_Plans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pricing_Plans_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pricing_Plans_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  features?: InputMaybe<Pricing_Plan_Features_Filter>;
  features_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Product_Features = {
  __typename?: 'product_features';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  product_id?: Maybe<Product_Pages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Product_FeaturesImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Product_FeaturesProduct_IdArgs = {
  filter?: InputMaybe<Product_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Features_Aggregated = {
  __typename?: 'product_features_aggregated';
  avg?: Maybe<Product_Features_Aggregated_Fields>;
  avgDistinct?: Maybe<Product_Features_Aggregated_Fields>;
  count?: Maybe<Product_Features_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Product_Features_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Product_Features_Aggregated_Fields>;
  min?: Maybe<Product_Features_Aggregated_Fields>;
  sum?: Maybe<Product_Features_Aggregated_Fields>;
  sumDistinct?: Maybe<Product_Features_Aggregated_Fields>;
};

export type Product_Features_Aggregated_Count = {
  __typename?: 'product_features_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Product_Features_Aggregated_Fields = {
  __typename?: 'product_features_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

export type Product_Features_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Product_Features_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Features_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  product_id?: InputMaybe<Product_Pages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Product_Pages = {
  __typename?: 'product_pages';
  dropdown_description?: Maybe<Scalars['String']['output']>;
  dropdown_icon?: Maybe<Scalars['String']['output']>;
  dropdown_title?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<Product_Features>>>;
  features_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  page_subtitle?: Maybe<Scalars['String']['output']>;
  page_title?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Product_PagesFeaturesArgs = {
  filter?: InputMaybe<Product_Features_Filter>;
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
  dropdown_description?: Maybe<Scalars['Int']['output']>;
  dropdown_icon?: Maybe<Scalars['Int']['output']>;
  dropdown_title?: Maybe<Scalars['Int']['output']>;
  features?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  page_subtitle?: Maybe<Scalars['Int']['output']>;
  page_title?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

export type Product_Pages_Aggregated_Fields = {
  __typename?: 'product_pages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Product_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Product_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Pages_Filter>>>;
  dropdown_description?: InputMaybe<String_Filter_Operators>;
  dropdown_icon?: InputMaybe<String_Filter_Operators>;
  dropdown_title?: InputMaybe<String_Filter_Operators>;
  features?: InputMaybe<Product_Features_Filter>;
  features_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  page_subtitle?: InputMaybe<String_Filter_Operators>;
  page_title?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
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
  author_text?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  quote?: Maybe<Scalars['String']['output']>;
  quote_id?: Maybe<Quote_Lists>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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
  author_text?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quote?: Maybe<Scalars['Int']['output']>;
  quote_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
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
  author_text?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  quote?: InputMaybe<String_Filter_Operators>;
  quote_id?: InputMaybe<Quote_Lists_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Rich_Text_Columns = {
  __typename?: 'rich_text_columns';
  body_text: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Rich_Text_ColumnsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Rich_Text_ColumnsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Rich_Text_Columns_Aggregated = {
  __typename?: 'rich_text_columns_aggregated';
  avg?: Maybe<Rich_Text_Columns_Aggregated_Fields>;
  avgDistinct?: Maybe<Rich_Text_Columns_Aggregated_Fields>;
  count?: Maybe<Rich_Text_Columns_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Rich_Text_Columns_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Rich_Text_Columns_Aggregated_Fields>;
  min?: Maybe<Rich_Text_Columns_Aggregated_Fields>;
  sum?: Maybe<Rich_Text_Columns_Aggregated_Fields>;
  sumDistinct?: Maybe<Rich_Text_Columns_Aggregated_Fields>;
};

export type Rich_Text_Columns_Aggregated_Count = {
  __typename?: 'rich_text_columns_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Rich_Text_Columns_Aggregated_Fields = {
  __typename?: 'rich_text_columns_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Rich_Text_Columns_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Rich_Text_Columns_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Rich_Text_Columns_Filter>>>;
  body_text?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Section_Header = {
  __typename?: 'section_header';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  overline?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Section_HeaderUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Section_HeaderUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Section_Header_Aggregated = {
  __typename?: 'section_header_aggregated';
  avg?: Maybe<Section_Header_Aggregated_Fields>;
  avgDistinct?: Maybe<Section_Header_Aggregated_Fields>;
  count?: Maybe<Section_Header_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Section_Header_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Section_Header_Aggregated_Fields>;
  min?: Maybe<Section_Header_Aggregated_Fields>;
  sum?: Maybe<Section_Header_Aggregated_Fields>;
  sumDistinct?: Maybe<Section_Header_Aggregated_Fields>;
};

export type Section_Header_Aggregated_Count = {
  __typename?: 'section_header_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  overline?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Section_Header_Aggregated_Fields = {
  __typename?: 'section_header_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Section_Header_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Section_Header_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Section_Header_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  overline?: InputMaybe<String_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
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
  og_description?: Maybe<Scalars['String']['output']>;
  og_image?: Maybe<Directus_Files>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Site_SettingsOg_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
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

export type Site_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Site_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Site_Settings_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  og_description?: InputMaybe<String_Filter_Operators>;
  og_image?: InputMaybe<Directus_Files_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Site_Settings_Nav_List = {
  __typename?: 'site_settings_nav_list';
  id: Scalars['ID']['output'];
  site_settings_id?: Maybe<Site_Settings>;
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
  site_settings_id?: InputMaybe<Site_Settings_Filter>;
};

export type Solution_Features = {
  __typename?: 'solution_features';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link_title?: Maybe<Scalars['String']['output']>;
  link_url?: Maybe<Scalars['String']['output']>;
  order_of_appearance?: Maybe<Scalars['Int']['output']>;
  solution_lower_id?: Maybe<Solutions_Pages>;
  solution_upper_id?: Maybe<Solutions_Pages>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Solution_FeaturesSolution_Lower_IdArgs = {
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solution_FeaturesSolution_Upper_IdArgs = {
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solution_FeaturesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solution_FeaturesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Solution_Features_Aggregated = {
  __typename?: 'solution_features_aggregated';
  avg?: Maybe<Solution_Features_Aggregated_Fields>;
  avgDistinct?: Maybe<Solution_Features_Aggregated_Fields>;
  count?: Maybe<Solution_Features_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Solution_Features_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Solution_Features_Aggregated_Fields>;
  min?: Maybe<Solution_Features_Aggregated_Fields>;
  sum?: Maybe<Solution_Features_Aggregated_Fields>;
  sumDistinct?: Maybe<Solution_Features_Aggregated_Fields>;
};

export type Solution_Features_Aggregated_Count = {
  __typename?: 'solution_features_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link_title?: Maybe<Scalars['Int']['output']>;
  link_url?: Maybe<Scalars['Int']['output']>;
  order_of_appearance?: Maybe<Scalars['Int']['output']>;
  solution_lower_id?: Maybe<Scalars['Int']['output']>;
  solution_upper_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Solution_Features_Aggregated_Fields = {
  __typename?: 'solution_features_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_of_appearance?: Maybe<Scalars['Float']['output']>;
  solution_lower_id?: Maybe<Scalars['Float']['output']>;
  solution_upper_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Solution_Features_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Solution_Features_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Solution_Features_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  link_title?: InputMaybe<String_Filter_Operators>;
  link_url?: InputMaybe<String_Filter_Operators>;
  order_of_appearance?: InputMaybe<Number_Filter_Operators>;
  solution_lower_id?: InputMaybe<Solutions_Pages_Filter>;
  solution_upper_id?: InputMaybe<Solutions_Pages_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Solution_Problems = {
  __typename?: 'solution_problems';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  order_of_appearance?: Maybe<Scalars['Int']['output']>;
  problem?: Maybe<Scalars['String']['output']>;
  solution?: Maybe<Scalars['String']['output']>;
  solution_id?: Maybe<Solutions_Pages>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Solution_ProblemsSolution_IdArgs = {
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solution_ProblemsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solution_ProblemsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Solution_Problems_Aggregated = {
  __typename?: 'solution_problems_aggregated';
  avg?: Maybe<Solution_Problems_Aggregated_Fields>;
  avgDistinct?: Maybe<Solution_Problems_Aggregated_Fields>;
  count?: Maybe<Solution_Problems_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Solution_Problems_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Solution_Problems_Aggregated_Fields>;
  min?: Maybe<Solution_Problems_Aggregated_Fields>;
  sum?: Maybe<Solution_Problems_Aggregated_Fields>;
  sumDistinct?: Maybe<Solution_Problems_Aggregated_Fields>;
};

export type Solution_Problems_Aggregated_Count = {
  __typename?: 'solution_problems_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_of_appearance?: Maybe<Scalars['Int']['output']>;
  problem?: Maybe<Scalars['Int']['output']>;
  solution?: Maybe<Scalars['Int']['output']>;
  solution_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Solution_Problems_Aggregated_Fields = {
  __typename?: 'solution_problems_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_of_appearance?: Maybe<Scalars['Float']['output']>;
  solution_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Solution_Problems_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Solution_Problems_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Solution_Problems_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  order_of_appearance?: InputMaybe<Number_Filter_Operators>;
  problem?: InputMaybe<String_Filter_Operators>;
  solution?: InputMaybe<String_Filter_Operators>;
  solution_id?: InputMaybe<Solutions_Pages_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Solutions_Pages = {
  __typename?: 'solutions_pages';
  category?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  download_section_description?: Maybe<Scalars['String']['output']>;
  download_section_title?: Maybe<Scalars['String']['output']>;
  ebook_url?: Maybe<Scalars['String']['output']>;
  featured_quote?: Maybe<Quotes>;
  id: Scalars['ID']['output'];
  lower_features?: Maybe<Array<Maybe<Solution_Features>>>;
  lower_features_func?: Maybe<Count_Functions>;
  lower_features_title?: Maybe<Scalars['String']['output']>;
  nav_title?: Maybe<Scalars['String']['output']>;
  problems?: Maybe<Array<Maybe<Solution_Problems>>>;
  problems_func?: Maybe<Count_Functions>;
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  upper_features?: Maybe<Array<Maybe<Solution_Features>>>;
  upper_features_func?: Maybe<Count_Functions>;
  upper_features_title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Solutions_PagesFeatured_QuoteArgs = {
  filter?: InputMaybe<Quotes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesLower_FeaturesArgs = {
  filter?: InputMaybe<Solution_Features_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesProblemsArgs = {
  filter?: InputMaybe<Solution_Problems_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_PagesUpper_FeaturesArgs = {
  filter?: InputMaybe<Solution_Features_Filter>;
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
  category?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  download_section_description?: Maybe<Scalars['Int']['output']>;
  download_section_title?: Maybe<Scalars['Int']['output']>;
  ebook_url?: Maybe<Scalars['Int']['output']>;
  featured_quote?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lower_features?: Maybe<Scalars['Int']['output']>;
  lower_features_title?: Maybe<Scalars['Int']['output']>;
  nav_title?: Maybe<Scalars['Int']['output']>;
  problems?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  upper_features?: Maybe<Scalars['Int']['output']>;
  upper_features_title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Solutions_Pages_Aggregated_Fields = {
  __typename?: 'solutions_pages_aggregated_fields';
  featured_quote?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Solutions_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Solutions_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Solutions_Pages_Filter>>>;
  category?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  download_section_description?: InputMaybe<String_Filter_Operators>;
  download_section_title?: InputMaybe<String_Filter_Operators>;
  ebook_url?: InputMaybe<String_Filter_Operators>;
  featured_quote?: InputMaybe<Quotes_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  lower_features?: InputMaybe<Solution_Features_Filter>;
  lower_features_func?: InputMaybe<Count_Function_Filter_Operators>;
  lower_features_title?: InputMaybe<String_Filter_Operators>;
  nav_title?: InputMaybe<String_Filter_Operators>;
  problems?: InputMaybe<Solution_Problems_Filter>;
  problems_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  upper_features?: InputMaybe<Solution_Features_Filter>;
  upper_features_func?: InputMaybe<Count_Function_Filter_Operators>;
  upper_features_title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Solutions_Pages_Solution_Problems = {
  __typename?: 'solutions_pages_solution_problems';
  id: Scalars['ID']['output'];
  solution_problems_id?: Maybe<Solution_Problems>;
  solutions_pages_id?: Maybe<Solutions_Pages>;
};


export type Solutions_Pages_Solution_ProblemsSolution_Problems_IdArgs = {
  filter?: InputMaybe<Solution_Problems_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Solutions_Pages_Solution_ProblemsSolutions_Pages_IdArgs = {
  filter?: InputMaybe<Solutions_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Solutions_Pages_Solution_Problems_Aggregated = {
  __typename?: 'solutions_pages_solution_problems_aggregated';
  avg?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Fields>;
  avgDistinct?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Fields>;
  count?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Fields>;
  min?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Fields>;
  sum?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Fields>;
  sumDistinct?: Maybe<Solutions_Pages_Solution_Problems_Aggregated_Fields>;
};

export type Solutions_Pages_Solution_Problems_Aggregated_Count = {
  __typename?: 'solutions_pages_solution_problems_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  solution_problems_id?: Maybe<Scalars['Int']['output']>;
  solutions_pages_id?: Maybe<Scalars['Int']['output']>;
};

export type Solutions_Pages_Solution_Problems_Aggregated_Fields = {
  __typename?: 'solutions_pages_solution_problems_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  solution_problems_id?: Maybe<Scalars['Float']['output']>;
  solutions_pages_id?: Maybe<Scalars['Float']['output']>;
};

export type Solutions_Pages_Solution_Problems_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Solutions_Pages_Solution_Problems_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Solutions_Pages_Solution_Problems_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  solution_problems_id?: InputMaybe<Solution_Problems_Filter>;
  solutions_pages_id?: InputMaybe<Solutions_Pages_Filter>;
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

export type Two_Column_Text = {
  __typename?: 'two_column_text';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  main_content: Scalars['String']['output'];
  side_content: Scalars['String']['output'];
  spacing?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Two_Column_TextUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Two_Column_TextUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Two_Column_Text_Aggregated = {
  __typename?: 'two_column_text_aggregated';
  avg?: Maybe<Two_Column_Text_Aggregated_Fields>;
  avgDistinct?: Maybe<Two_Column_Text_Aggregated_Fields>;
  count?: Maybe<Two_Column_Text_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Two_Column_Text_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Two_Column_Text_Aggregated_Fields>;
  min?: Maybe<Two_Column_Text_Aggregated_Fields>;
  sum?: Maybe<Two_Column_Text_Aggregated_Fields>;
  sumDistinct?: Maybe<Two_Column_Text_Aggregated_Fields>;
};

export type Two_Column_Text_Aggregated_Count = {
  __typename?: 'two_column_text_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  main_content?: Maybe<Scalars['Int']['output']>;
  side_content?: Maybe<Scalars['Int']['output']>;
  spacing?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Two_Column_Text_Aggregated_Fields = {
  __typename?: 'two_column_text_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Two_Column_Text_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Two_Column_Text_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Two_Column_Text_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  main_content?: InputMaybe<String_Filter_Operators>;
  side_content?: InputMaybe<String_Filter_Operators>;
  spacing?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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

export type Update_Blog_Cards_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Card_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Card_With_Image_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  bullets?: InputMaybe<Array<InputMaybe<Update_Card_With_Image_Rich_Text_Columns_Input>>>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Card_With_Image_Rich_Text_Columns_Input = {
  card_with_image_id?: InputMaybe<Update_Card_With_Image_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rich_text_columns_id?: InputMaybe<Update_Rich_Text_Columns_Input>;
};

export type Update_Cards_Card_Input = {
  card_id?: InputMaybe<Update_Card_Input>;
  cards_id?: InputMaybe<Update_Cards_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Cards_Input = {
  cards?: InputMaybe<Array<InputMaybe<Update_Cards_Card_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
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

export type Update_Company_Logo_Lists_Company_Logos_Input = {
  company_logo_lists_id?: InputMaybe<Update_Company_Logo_Lists_Input>;
  company_logos_id?: InputMaybe<Update_Company_Logos_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Company_Logo_Lists_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logos?: InputMaybe<Array<InputMaybe<Update_Company_Logo_Lists_Company_Logos_Input>>>;
  partner_logos?: InputMaybe<Array<InputMaybe<Update_Company_Logo_Lists_Items_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
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
};

export type Update_Cta_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Custom_Pages_Components_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  custom_pages_id?: InputMaybe<Update_Custom_Pages_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Custom_Pages_Input = {
  components?: InputMaybe<Array<InputMaybe<Update_Custom_Pages_Components_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Customer_Quote_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quote?: InputMaybe<Update_Quotes_Input>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
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
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Hero_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
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

export type Update_Large_Image_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  overline?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Logo_Strip_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo_list?: InputMaybe<Update_Company_Logo_Lists_Input>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
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

export type Update_Multi_Column_Text_Input = {
  columns?: InputMaybe<Array<InputMaybe<Update_Multi_Column_Text_Rich_Text_Columns_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Multi_Column_Text_Rich_Text_Columns_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  multi_column_text_id?: InputMaybe<Update_Multi_Column_Text_Input>;
  rich_text_columns_id?: InputMaybe<Update_Rich_Text_Columns_Input>;
};

export type Update_Page_Homepage_Input = {
  article_cards?: InputMaybe<Array<InputMaybe<Update_Article_Cards_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
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

export type Update_Pricing_Page_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  enterprise_plan?: InputMaybe<Update_Pricing_Plans_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pro_plan?: InputMaybe<Update_Pricing_Plans_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Pricing_Plan_Features_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  plan_id?: InputMaybe<Update_Pricing_Plans_Input>;
};

export type Update_Pricing_Plans_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  features?: InputMaybe<Array<InputMaybe<Update_Pricing_Plan_Features_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Product_Features_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  product_id?: InputMaybe<Update_Product_Pages_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Product_Pages_Input = {
  dropdown_description?: InputMaybe<Scalars['String']['input']>;
  dropdown_icon?: InputMaybe<Scalars['String']['input']>;
  dropdown_title?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<InputMaybe<Update_Product_Features_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page_subtitle?: InputMaybe<Scalars['String']['input']>;
  page_title?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
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
  author_text?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_id?: InputMaybe<Update_Quote_Lists_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Rich_Text_Columns_Input = {
  body_text?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Section_Header_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  overline?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Site_Settings_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Update_Directus_Files_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Site_Settings_Nav_List_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  site_settings_id?: InputMaybe<Update_Site_Settings_Input>;
};

export type Update_Solution_Features_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link_title?: InputMaybe<Scalars['String']['input']>;
  link_url?: InputMaybe<Scalars['String']['input']>;
  order_of_appearance?: InputMaybe<Scalars['Int']['input']>;
  solution_lower_id?: InputMaybe<Update_Solutions_Pages_Input>;
  solution_upper_id?: InputMaybe<Update_Solutions_Pages_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Solution_Problems_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  order_of_appearance?: InputMaybe<Scalars['Int']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_id?: InputMaybe<Update_Solutions_Pages_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Solutions_Pages_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  download_section_description?: InputMaybe<Scalars['String']['input']>;
  download_section_title?: InputMaybe<Scalars['String']['input']>;
  ebook_url?: InputMaybe<Scalars['String']['input']>;
  featured_quote?: InputMaybe<Update_Quotes_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lower_features?: InputMaybe<Array<InputMaybe<Update_Solution_Features_Input>>>;
  lower_features_title?: InputMaybe<Scalars['String']['input']>;
  nav_title?: InputMaybe<Scalars['String']['input']>;
  problems?: InputMaybe<Array<InputMaybe<Update_Solution_Problems_Input>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  upper_features?: InputMaybe<Array<InputMaybe<Update_Solution_Features_Input>>>;
  upper_features_title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Solutions_Pages_Solution_Problems_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  solution_problems_id?: InputMaybe<Update_Solution_Problems_Input>;
  solutions_pages_id?: InputMaybe<Update_Solutions_Pages_Input>;
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

export type Update_Two_Column_Text_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  main_content?: InputMaybe<Scalars['String']['input']>;
  side_content?: InputMaybe<Scalars['String']['input']>;
  spacing?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type CustomPageFragment = { __typename?: 'custom_pages', id: string, slug: string, components?: Array<{ __typename?: 'custom_pages_components', collection?: string | null, item?: { __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | { __typename?: 'blog_cards', spacing?: string | null } | { __typename?: 'card_with_image', spacing?: string | null, theme: string, heading?: string | null, body_text?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, bullets?: Array<{ __typename?: 'card_with_image_rich_text_columns', rich_text_columns_id?: { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string } | null } | null> | null } | { __typename?: 'cards', spacing?: string | null, cards?: Array<{ __typename?: 'cards_card', card_id?: { __typename?: 'card', heading: string, body_text: string, url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | { __typename?: 'cta', spacing?: string | null, heading?: string | null, body_text?: string | null, cta_text?: string | null, cta_url?: string | null } | { __typename?: 'customer_quote', spacing?: string | null, quote?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null } | { __typename?: 'hero', spacing?: string | null, heading?: string | null, body_text?: string | null, media_type?: string | null, video_url?: string | null, form?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | { __typename?: 'large_image', spacing?: string | null, overline?: string | null, heading?: string | null, body_text?: string | null, media_type?: string | null, video_url?: string | null, form?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | { __typename?: 'logo_strip', spacing?: string | null, logo_list?: { __typename?: 'company_logo_lists', slug?: string | null, logos?: Array<{ __typename?: 'company_logo_lists_company_logos', company_logos_id?: { __typename?: 'company_logos', slug?: string | null, name: string, url?: string | null, logo_light?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo_dark?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null } | { __typename?: 'multi_column_text', spacing?: string | null, columns?: Array<{ __typename?: 'multi_column_text_rich_text_columns', rich_text_columns_id?: { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string } | null } | null> | null } | { __typename?: 'section_header', spacing?: string | null, overline?: string | null, title?: string | null, description?: string | null } | { __typename?: 'two_column_text', spacing?: string | null, main_content: string, side_content: string } | null } | null> | null };

export type CustomPageTinyFragment = { __typename?: 'custom_pages', id: string, slug: string };

export type CustomPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomPageSlugsQuery = { __typename?: 'Query', custom_pages: Array<{ __typename?: 'custom_pages', id: string, slug: string }> };

export type CustomPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CustomPageQuery = { __typename?: 'Query', custom_pages: Array<{ __typename?: 'custom_pages', id: string, slug: string, components?: Array<{ __typename?: 'custom_pages_components', collection?: string | null, item?: { __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | { __typename?: 'blog_cards', spacing?: string | null } | { __typename?: 'card_with_image', spacing?: string | null, theme: string, heading?: string | null, body_text?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, bullets?: Array<{ __typename?: 'card_with_image_rich_text_columns', rich_text_columns_id?: { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string } | null } | null> | null } | { __typename?: 'cards', spacing?: string | null, cards?: Array<{ __typename?: 'cards_card', card_id?: { __typename?: 'card', heading: string, body_text: string, url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | { __typename?: 'cta', spacing?: string | null, heading?: string | null, body_text?: string | null, cta_text?: string | null, cta_url?: string | null } | { __typename?: 'customer_quote', spacing?: string | null, quote?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null } | { __typename?: 'hero', spacing?: string | null, heading?: string | null, body_text?: string | null, media_type?: string | null, video_url?: string | null, form?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | { __typename?: 'large_image', spacing?: string | null, overline?: string | null, heading?: string | null, body_text?: string | null, media_type?: string | null, video_url?: string | null, form?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | { __typename?: 'logo_strip', spacing?: string | null, logo_list?: { __typename?: 'company_logo_lists', slug?: string | null, logos?: Array<{ __typename?: 'company_logo_lists_company_logos', company_logos_id?: { __typename?: 'company_logos', slug?: string | null, name: string, url?: string | null, logo_light?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo_dark?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null } | { __typename?: 'multi_column_text', spacing?: string | null, columns?: Array<{ __typename?: 'multi_column_text_rich_text_columns', rich_text_columns_id?: { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string } | null } | null> | null } | { __typename?: 'section_header', spacing?: string | null, overline?: string | null, title?: string | null, description?: string | null } | { __typename?: 'two_column_text', spacing?: string | null, main_content: string, side_content: string } | null } | null> | null }> };

export type HeroComponentFragment = { __typename?: 'hero', spacing?: string | null, heading?: string | null, body_text?: string | null, media_type?: string | null, video_url?: string | null, form?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type LogoStripComponentFragment = { __typename?: 'logo_strip', spacing?: string | null, logo_list?: { __typename?: 'company_logo_lists', slug?: string | null, logos?: Array<{ __typename?: 'company_logo_lists_company_logos', company_logos_id?: { __typename?: 'company_logos', slug?: string | null, name: string, url?: string | null, logo_light?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo_dark?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null } | null };

export type SectionHeaderComponentFragment = { __typename?: 'section_header', spacing?: string | null, overline?: string | null, title?: string | null, description?: string | null };

export type LargeImageComponentFragment = { __typename?: 'large_image', spacing?: string | null, overline?: string | null, heading?: string | null, body_text?: string | null, media_type?: string | null, video_url?: string | null, form?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type CardFragment = { __typename?: 'card', heading: string, body_text: string, url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type CardsComponentFragment = { __typename?: 'cards', spacing?: string | null, cards?: Array<{ __typename?: 'cards_card', card_id?: { __typename?: 'card', heading: string, body_text: string, url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null };

export type BlogCardsComponentFragment = { __typename?: 'blog_cards', spacing?: string | null };

export type RichTextColumnFragment = { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string };

export type TwoColumnTextComponentFragment = { __typename?: 'two_column_text', spacing?: string | null, main_content: string, side_content: string };

export type MultiColumnTextComponentFragment = { __typename?: 'multi_column_text', spacing?: string | null, columns?: Array<{ __typename?: 'multi_column_text_rich_text_columns', rich_text_columns_id?: { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string } | null } | null> | null };

export type CustomerQuoteComponentFragment = { __typename?: 'customer_quote', spacing?: string | null, quote?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null };

export type CtaComponentFragment = { __typename?: 'cta', spacing?: string | null, heading?: string | null, body_text?: string | null, cta_text?: string | null, cta_url?: string | null };

export type MediaCardComponentFragment = { __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type CardWithImageComponentFragment = { __typename?: 'card_with_image', spacing?: string | null, theme: string, heading?: string | null, body_text?: string | null, cta_text?: string | null, cta_url?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, bullets?: Array<{ __typename?: 'card_with_image_rich_text_columns', rich_text_columns_id?: { __typename?: 'rich_text_columns', icon?: string | null, heading?: string | null, body_text: string } | null } | null> | null };

export type MinJobListingFragment = { __typename?: 'job_listings', id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null, status?: string | null };

export type FullJobListingFragment = { __typename?: 'job_listings', content?: string | null, id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null, status?: string | null };

export type JobListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobListingsQuery = { __typename?: 'Query', job_listings: Array<{ __typename?: 'job_listings', id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null, status?: string | null }> };

export type JobListingQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type JobListingQuery = { __typename?: 'Query', job_listings: Array<{ __typename?: 'job_listings', content?: string | null, id: string, slug: string, job_title?: string | null, department?: string | null, tags?: any | null, location?: string | null, status?: string | null }> };

export type JobListingSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobListingSlugsQuery = { __typename?: 'Query', job_listings: Array<{ __typename?: 'job_listings', slug: string }> };

export type EventFragment = { __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, show_start_time: boolean, show_end_time?: boolean | null, timezone?: string | null, description?: string | null, ctas?: any | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'events', id: string, name?: string | null, start_date?: any | null, end_date?: any | null, show_start_time: boolean, show_end_time?: boolean | null, timezone?: string | null, description?: string | null, ctas?: any | null }> };

export type CompanyLogoFragment = { __typename?: 'company_logos', slug?: string | null, name: string, url?: string | null, logo_light?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo_dark?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type LogoListFragment = { __typename?: 'company_logo_lists', slug?: string | null, logos?: Array<{ __typename?: 'company_logo_lists_company_logos', company_logos_id?: { __typename?: 'company_logos', slug?: string | null, name: string, url?: string | null, logo_light?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null, logo_dark?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null } | null> | null };

export type ImageFileFragment = { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null };

export type TeamMemberFragment = { __typename?: 'team_members', id: string, name?: string | null, title?: string | null, categories?: any | null, pronouns?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type TeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamMembersQuery = { __typename?: 'Query', team_members: Array<{ __typename?: 'team_members', id: string, name?: string | null, title?: string | null, categories?: any | null, pronouns?: string | null, portrait?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null }> };

export type FaqItemFragment = { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null };

export type FaqListFragment = { __typename?: 'collapsible_lists', items?: Array<{ __typename?: 'collapsible_lists_items', item?: { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null } | null } | null> | null };

export type FaqListQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FaqListQuery = { __typename?: 'Query', collapsible_lists: Array<{ __typename?: 'collapsible_lists', items?: Array<{ __typename?: 'collapsible_lists_items', item?: { __typename?: 'collapsibles', id: string, label?: string | null, content?: string | null } | null } | null> | null }> };

export type PricingPageFragment = { __typename?: 'pricing_page', id: string, pro_plan?: { __typename?: 'pricing_plans', id: string, name: string, subtitle?: string | null, features?: Array<{ __typename?: 'pricing_plan_features', id: string, description?: string | null } | null> | null } | null, enterprise_plan?: { __typename?: 'pricing_plans', id: string, name: string, subtitle?: string | null, features?: Array<{ __typename?: 'pricing_plan_features', id: string, description?: string | null } | null> | null } | null };

export type PricingPlanFragment = { __typename?: 'pricing_plans', id: string, name: string, subtitle?: string | null, features?: Array<{ __typename?: 'pricing_plan_features', id: string, description?: string | null } | null> | null };

export type PricingPlanFeatureFragment = { __typename?: 'pricing_plan_features', id: string, description?: string | null };

export type PricingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingPageQuery = { __typename?: 'Query', pricing_page?: { __typename?: 'pricing_page', id: string, pro_plan?: { __typename?: 'pricing_plans', id: string, name: string, subtitle?: string | null, features?: Array<{ __typename?: 'pricing_plan_features', id: string, description?: string | null } | null> | null } | null, enterprise_plan?: { __typename?: 'pricing_plans', id: string, name: string, subtitle?: string | null, features?: Array<{ __typename?: 'pricing_plan_features', id: string, description?: string | null } | null> | null } | null } | null };

export type ProductPageFragment = { __typename?: 'product_pages', id: string, slug: string, type?: string | null, dropdown_icon?: string | null, dropdown_title?: string | null, dropdown_description?: string | null, page_title?: string | null, page_subtitle?: string | null, features?: Array<{ __typename?: 'product_features', id: string, icon?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null> | null };

export type ProductPageTinyFragment = { __typename?: 'product_pages', id: string, slug: string, type?: string | null, dropdown_icon?: string | null, dropdown_title?: string | null, dropdown_description?: string | null };

export type ProductFeatureFragment = { __typename?: 'product_features', id: string, icon?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type ProductPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductPageSlugsQuery = { __typename?: 'Query', product_pages: Array<{ __typename?: 'product_pages', id: string, slug: string, type?: string | null, dropdown_icon?: string | null, dropdown_title?: string | null, dropdown_description?: string | null }> };

export type ProductPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductPageQuery = { __typename?: 'Query', product_pages: Array<{ __typename?: 'product_pages', id: string, slug: string, type?: string | null, dropdown_icon?: string | null, dropdown_title?: string | null, dropdown_description?: string | null, page_title?: string | null, page_subtitle?: string | null, features?: Array<{ __typename?: 'product_features', id: string, icon?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null> | null }> };

export type SolutionFeatureFragment = { __typename?: 'solution_features', id: string, title?: string | null, description?: string | null, icon?: string | null, link_title?: string | null, link_url?: string | null };

export type SolutionProblemFragment = { __typename?: 'solution_problems', id: string, title?: string | null, subtitle?: string | null, problem?: string | null, solution?: string | null };

export type SolutionFragment = { __typename?: 'solutions_pages', id: string, slug: string, title?: string | null, description?: string | null, upper_features_title?: string | null, lower_features_title?: string | null, download_section_title?: string | null, download_section_description?: string | null, ebook_url?: string | null, upper_features?: Array<{ __typename?: 'solution_features', id: string, title?: string | null, description?: string | null, icon?: string | null, link_title?: string | null, link_url?: string | null } | null> | null, lower_features?: Array<{ __typename?: 'solution_features', id: string, title?: string | null, description?: string | null, icon?: string | null, link_title?: string | null, link_url?: string | null } | null> | null, problems?: Array<{ __typename?: 'solution_problems', id: string, title?: string | null, subtitle?: string | null, problem?: string | null, solution?: string | null } | null> | null, featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null };

export type SolutionsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SolutionsSlugsQuery = { __typename?: 'Query', solutions_pages: Array<{ __typename?: 'solutions_pages', slug: string, nav_title?: string | null, category?: string | null }> };

export type SolutionsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type SolutionsQuery = { __typename?: 'Query', solutions_pages: Array<{ __typename?: 'solutions_pages', id: string, slug: string, title?: string | null, description?: string | null, upper_features_title?: string | null, lower_features_title?: string | null, download_section_title?: string | null, download_section_description?: string | null, ebook_url?: string | null, upper_features?: Array<{ __typename?: 'solution_features', id: string, title?: string | null, description?: string | null, icon?: string | null, link_title?: string | null, link_url?: string | null } | null> | null, lower_features?: Array<{ __typename?: 'solution_features', id: string, title?: string | null, description?: string | null, icon?: string | null, link_title?: string | null, link_url?: string | null } | null> | null, problems?: Array<{ __typename?: 'solution_problems', id: string, title?: string | null, subtitle?: string | null, problem?: string | null, solution?: string | null } | null> | null, featured_quote?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null }> };

export type QuoteFragment = { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null };

export type QuoteListFragment = { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null } | null> | null };

export type SiteSettingsFragment = { __typename?: 'site_settings', og_description?: string | null, og_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null };

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'Query', site_settings?: { __typename?: 'site_settings', og_description?: string | null, og_image?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null };

export type MarkdownPageFragment = { __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null };

export type PageLegalFragment = { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null } | null> | null };

export type PageLegalQueryVariables = Exact<{ [key: string]: never; }>;


export type PageLegalQuery = { __typename?: 'Query', page_legal?: { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, content?: string | null } | null> | null } | null };

export type LegalPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type LegalPageSlugsQuery = { __typename?: 'Query', page_legal?: { __typename?: 'page_legal', pages?: Array<{ __typename?: 'markdown_pages', slug?: string | null } | null> | null } | null };

export type PageHomepageFragment = { __typename?: 'page_homepage', quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null } | null> | null } | null, article_cards?: Array<{ __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null> | null };

export type PageHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type PageHomepageQuery = { __typename?: 'Query', page_homepage?: { __typename?: 'page_homepage', quotes?: { __typename?: 'quote_lists', slug: string, items?: Array<{ __typename?: 'quote_lists_items', item?: { __typename?: 'quotes', id: string, quote?: string | null, author_text?: string | null } | null } | null> | null } | null, article_cards?: Array<{ __typename?: 'article_cards', id: string, heading?: string | null, description?: string | null, videoUrl?: string | null, date?: any | null, author?: string | null, ctas?: any | null, url?: string | null, thumbnail?: { __typename?: 'directus_files', id: string, title?: string | null, description?: string | null, tags?: any | null, filename_disk?: string | null, filename_download: string, metadata?: any | null, type?: string | null, filesize?: any | null } | null } | null> | null } | null };

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
export const HeroComponentFragmentDoc = gql`
    fragment HeroComponent on hero {
  spacing
  heading
  body_text
  media_type
  image {
    ...ImageFile
  }
  video_url
  form
  cta_text
  cta_url
}
    ${ImageFileFragmentDoc}`;
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
}
    ${ImageFileFragmentDoc}`;
export const LogoListFragmentDoc = gql`
    fragment LogoList on company_logo_lists {
  slug
  logos {
    company_logos_id {
      ...CompanyLogo
    }
  }
}
    ${CompanyLogoFragmentDoc}`;
export const LogoStripComponentFragmentDoc = gql`
    fragment LogoStripComponent on logo_strip {
  spacing
  logo_list {
    ...LogoList
  }
}
    ${LogoListFragmentDoc}`;
export const SectionHeaderComponentFragmentDoc = gql`
    fragment SectionHeaderComponent on section_header {
  spacing
  overline
  title
  description
}
    `;
export const LargeImageComponentFragmentDoc = gql`
    fragment LargeImageComponent on large_image {
  spacing
  overline
  heading
  body_text
  media_type
  image {
    ...ImageFile
  }
  video_url
  form
  cta_text
  cta_url
}
    ${ImageFileFragmentDoc}`;
export const TwoColumnTextComponentFragmentDoc = gql`
    fragment TwoColumnTextComponent on two_column_text {
  spacing
  main_content
  side_content
}
    `;
export const RichTextColumnFragmentDoc = gql`
    fragment RichTextColumn on rich_text_columns {
  icon
  heading
  body_text
}
    `;
export const MultiColumnTextComponentFragmentDoc = gql`
    fragment MultiColumnTextComponent on multi_column_text {
  spacing
  columns {
    rich_text_columns_id {
      ...RichTextColumn
    }
  }
}
    ${RichTextColumnFragmentDoc}`;
export const CardFragmentDoc = gql`
    fragment Card on card {
  image {
    ...ImageFile
  }
  heading
  body_text
  url
}
    ${ImageFileFragmentDoc}`;
export const CardsComponentFragmentDoc = gql`
    fragment CardsComponent on cards {
  spacing
  cards {
    card_id {
      ...Card
    }
  }
}
    ${CardFragmentDoc}`;
export const BlogCardsComponentFragmentDoc = gql`
    fragment BlogCardsComponent on blog_cards {
  spacing
}
    `;
export const QuoteFragmentDoc = gql`
    fragment Quote on quotes {
  id
  quote
  author_text
}
    `;
export const CustomerQuoteComponentFragmentDoc = gql`
    fragment CustomerQuoteComponent on customer_quote {
  spacing
  quote {
    ...Quote
  }
}
    ${QuoteFragmentDoc}`;
export const CtaComponentFragmentDoc = gql`
    fragment CTAComponent on cta {
  spacing
  heading
  body_text
  cta_text
  cta_url
}
    `;
export const MediaCardComponentFragmentDoc = gql`
    fragment MediaCardComponent on article_cards {
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
export const CardWithImageComponentFragmentDoc = gql`
    fragment CardWithImageComponent on card_with_image {
  spacing
  theme
  heading
  body_text
  image {
    ...ImageFile
  }
  bullets {
    rich_text_columns_id {
      ...RichTextColumn
    }
  }
  cta_text
  cta_url
}
    ${ImageFileFragmentDoc}
${RichTextColumnFragmentDoc}`;
export const CustomPageFragmentDoc = gql`
    fragment CustomPage on custom_pages {
  id
  slug
  components {
    collection
    item {
      ...HeroComponent
      ...LogoStripComponent
      ...SectionHeaderComponent
      ...LargeImageComponent
      ...TwoColumnTextComponent
      ...MultiColumnTextComponent
      ...CardsComponent
      ...BlogCardsComponent
      ...CustomerQuoteComponent
      ...CTAComponent
      ...MediaCardComponent
      ...CardWithImageComponent
    }
  }
}
    ${HeroComponentFragmentDoc}
${LogoStripComponentFragmentDoc}
${SectionHeaderComponentFragmentDoc}
${LargeImageComponentFragmentDoc}
${TwoColumnTextComponentFragmentDoc}
${MultiColumnTextComponentFragmentDoc}
${CardsComponentFragmentDoc}
${BlogCardsComponentFragmentDoc}
${CustomerQuoteComponentFragmentDoc}
${CtaComponentFragmentDoc}
${MediaCardComponentFragmentDoc}
${CardWithImageComponentFragmentDoc}`;
export const CustomPageTinyFragmentDoc = gql`
    fragment CustomPageTiny on custom_pages {
  id
  slug
}
    `;
export const MinJobListingFragmentDoc = gql`
    fragment MinJobListing on job_listings {
  id
  slug
  job_title
  department
  tags
  location
  status
}
    `;
export const FullJobListingFragmentDoc = gql`
    fragment FullJobListing on job_listings {
  ...MinJobListing
  content
}
    ${MinJobListingFragmentDoc}`;
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
  ctas
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
export const PricingPlanFeatureFragmentDoc = gql`
    fragment PricingPlanFeature on pricing_plan_features {
  id
  description
}
    `;
export const PricingPlanFragmentDoc = gql`
    fragment PricingPlan on pricing_plans {
  id
  name
  subtitle
  features {
    ...PricingPlanFeature
  }
}
    ${PricingPlanFeatureFragmentDoc}`;
export const PricingPageFragmentDoc = gql`
    fragment PricingPage on pricing_page {
  id
  pro_plan {
    ...PricingPlan
  }
  enterprise_plan {
    ...PricingPlan
  }
}
    ${PricingPlanFragmentDoc}`;
export const ProductFeatureFragmentDoc = gql`
    fragment ProductFeature on product_features {
  id
  icon
  title
  description
  image {
    ...ImageFile
  }
}
    ${ImageFileFragmentDoc}`;
export const ProductPageFragmentDoc = gql`
    fragment ProductPage on product_pages {
  id
  slug
  type
  dropdown_icon
  dropdown_title
  dropdown_description
  page_title
  page_subtitle
  features {
    ...ProductFeature
  }
}
    ${ProductFeatureFragmentDoc}`;
export const ProductPageTinyFragmentDoc = gql`
    fragment ProductPageTiny on product_pages {
  id
  slug
  type
  dropdown_icon
  dropdown_title
  dropdown_description
}
    `;
export const SolutionFeatureFragmentDoc = gql`
    fragment SolutionFeature on solution_features {
  id
  title
  description
  icon
  link_title
  link_url
}
    `;
export const SolutionProblemFragmentDoc = gql`
    fragment SolutionProblem on solution_problems {
  id
  title
  subtitle
  problem
  solution
}
    `;
export const SolutionFragmentDoc = gql`
    fragment Solution on solutions_pages {
  id
  slug
  title
  description
  upper_features_title
  lower_features_title
  download_section_title
  download_section_description
  upper_features {
    ...SolutionFeature
  }
  lower_features {
    ...SolutionFeature
  }
  problems {
    ...SolutionProblem
  }
  featured_quote {
    ...Quote
  }
  ebook_url
}
    ${SolutionFeatureFragmentDoc}
${SolutionProblemFragmentDoc}
${QuoteFragmentDoc}`;
export const SiteSettingsFragmentDoc = gql`
    fragment SiteSettings on site_settings {
  og_description
  og_image {
    ...ImageFile
  }
}
    ${ImageFileFragmentDoc}`;
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
export const PageHomepageFragmentDoc = gql`
    fragment PageHomepage on page_homepage {
  quotes {
    ...QuoteList
  }
  article_cards {
    ...MediaCardComponent
  }
}
    ${QuoteListFragmentDoc}
${MediaCardComponentFragmentDoc}`;
export const CustomPageSlugsDocument = gql`
    query CustomPageSlugs {
  custom_pages(filter: {status: {_eq: "published"}}) {
    ...CustomPageTiny
  }
}
    ${CustomPageTinyFragmentDoc}`;

/**
 * __useCustomPageSlugsQuery__
 *
 * To run a query within a React component, call `useCustomPageSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomPageSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomPageSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomPageSlugsQuery(baseOptions?: Apollo.QueryHookOptions<CustomPageSlugsQuery, CustomPageSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomPageSlugsQuery, CustomPageSlugsQueryVariables>(CustomPageSlugsDocument, options);
      }
export function useCustomPageSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomPageSlugsQuery, CustomPageSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomPageSlugsQuery, CustomPageSlugsQueryVariables>(CustomPageSlugsDocument, options);
        }
export type CustomPageSlugsQueryHookResult = ReturnType<typeof useCustomPageSlugsQuery>;
export type CustomPageSlugsLazyQueryHookResult = ReturnType<typeof useCustomPageSlugsLazyQuery>;
export type CustomPageSlugsQueryResult = Apollo.QueryResult<CustomPageSlugsQuery, CustomPageSlugsQueryVariables>;
export const CustomPageDocument = gql`
    query CustomPage($slug: String!) {
  custom_pages(filter: {slug: {_eq: $slug}, status: {_eq: "published"}}) {
    ...CustomPage
  }
}
    ${CustomPageFragmentDoc}`;

/**
 * __useCustomPageQuery__
 *
 * To run a query within a React component, call `useCustomPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCustomPageQuery(baseOptions: Apollo.QueryHookOptions<CustomPageQuery, CustomPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomPageQuery, CustomPageQueryVariables>(CustomPageDocument, options);
      }
export function useCustomPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomPageQuery, CustomPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomPageQuery, CustomPageQueryVariables>(CustomPageDocument, options);
        }
export type CustomPageQueryHookResult = ReturnType<typeof useCustomPageQuery>;
export type CustomPageLazyQueryHookResult = ReturnType<typeof useCustomPageLazyQuery>;
export type CustomPageQueryResult = Apollo.QueryResult<CustomPageQuery, CustomPageQueryVariables>;
export const JobListingsDocument = gql`
    query JobListings {
  job_listings(filter: {status: {_neq: "archived"}}) {
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
  job_listings(filter: {slug: {_eq: $slug}, status: {_neq: "archived"}}) {
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
export const EventsDocument = gql`
    query Events {
  events(filter: {status: {_neq: "archived"}}) {
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
export const TeamMembersDocument = gql`
    query TeamMembers {
  team_members(filter: {status: {_neq: "archived"}}) {
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
export const FaqListDocument = gql`
    query FaqList($slug: String) {
  collapsible_lists(filter: {slug: {_eq: $slug}, status: {_neq: "archived"}}) {
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
export const PricingPageDocument = gql`
    query PricingPage {
  pricing_page {
    ...PricingPage
  }
}
    ${PricingPageFragmentDoc}`;

/**
 * __usePricingPageQuery__
 *
 * To run a query within a React component, call `usePricingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePricingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePricingPageQuery({
 *   variables: {
 *   },
 * });
 */
export function usePricingPageQuery(baseOptions?: Apollo.QueryHookOptions<PricingPageQuery, PricingPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PricingPageQuery, PricingPageQueryVariables>(PricingPageDocument, options);
      }
export function usePricingPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PricingPageQuery, PricingPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PricingPageQuery, PricingPageQueryVariables>(PricingPageDocument, options);
        }
export type PricingPageQueryHookResult = ReturnType<typeof usePricingPageQuery>;
export type PricingPageLazyQueryHookResult = ReturnType<typeof usePricingPageLazyQuery>;
export type PricingPageQueryResult = Apollo.QueryResult<PricingPageQuery, PricingPageQueryVariables>;
export const ProductPageSlugsDocument = gql`
    query ProductPageSlugs {
  product_pages(filter: {status: {_neq: "archived"}}) {
    ...ProductPageTiny
  }
}
    ${ProductPageTinyFragmentDoc}`;

/**
 * __useProductPageSlugsQuery__
 *
 * To run a query within a React component, call `useProductPageSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPageSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPageSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductPageSlugsQuery(baseOptions?: Apollo.QueryHookOptions<ProductPageSlugsQuery, ProductPageSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductPageSlugsQuery, ProductPageSlugsQueryVariables>(ProductPageSlugsDocument, options);
      }
export function useProductPageSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductPageSlugsQuery, ProductPageSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductPageSlugsQuery, ProductPageSlugsQueryVariables>(ProductPageSlugsDocument, options);
        }
export type ProductPageSlugsQueryHookResult = ReturnType<typeof useProductPageSlugsQuery>;
export type ProductPageSlugsLazyQueryHookResult = ReturnType<typeof useProductPageSlugsLazyQuery>;
export type ProductPageSlugsQueryResult = Apollo.QueryResult<ProductPageSlugsQuery, ProductPageSlugsQueryVariables>;
export const ProductPageDocument = gql`
    query ProductPage($slug: String!) {
  product_pages(filter: {slug: {_eq: $slug}, status: {_neq: "archived"}}) {
    ...ProductPage
  }
}
    ${ProductPageFragmentDoc}`;

/**
 * __useProductPageQuery__
 *
 * To run a query within a React component, call `useProductPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductPageQuery(baseOptions: Apollo.QueryHookOptions<ProductPageQuery, ProductPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductPageQuery, ProductPageQueryVariables>(ProductPageDocument, options);
      }
export function useProductPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductPageQuery, ProductPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductPageQuery, ProductPageQueryVariables>(ProductPageDocument, options);
        }
export type ProductPageQueryHookResult = ReturnType<typeof useProductPageQuery>;
export type ProductPageLazyQueryHookResult = ReturnType<typeof useProductPageLazyQuery>;
export type ProductPageQueryResult = Apollo.QueryResult<ProductPageQuery, ProductPageQueryVariables>;
export const SolutionsSlugsDocument = gql`
    query SolutionsSlugs {
  solutions_pages(filter: {status: {_neq: "archived"}}) {
    slug
    nav_title
    category
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
  solutions_pages(filter: {slug: {_eq: $slug}, status: {_neq: "archived"}}) {
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