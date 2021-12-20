import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
};



/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses';
  districtId: Scalars['Int'];
  id: Scalars['Int'];
  number: Scalars['Int'];
  settlementId: Scalars['Int'];
  street: Scalars['String'];
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  __typename?: 'addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'addresses_aggregate_fields';
  avg?: Maybe<Addresses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
  stddev?: Maybe<Addresses_Stddev_Fields>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Fields>;
  sum?: Maybe<Addresses_Sum_Fields>;
  var_pop?: Maybe<Addresses_Var_Pop_Fields>;
  var_samp?: Maybe<Addresses_Var_Samp_Fields>;
  variance?: Maybe<Addresses_Variance_Fields>;
};


/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Addresses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Addresses_Avg_Fields = {
  __typename?: 'addresses_avg_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Addresses_Bool_Exp>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Addresses_Bool_Exp>>;
  districtId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  settlementId?: Maybe<Int_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey'
}

/** input type for incrementing numeric columns in table "addresses" */
export type Addresses_Inc_Input = {
  districtId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  districtId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields';
  districtId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields';
  districtId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** input type for inserting object relation for remote table "addresses" */
export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

/** on conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns: Array<Addresses_Update_Column>;
  where?: Maybe<Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "addresses". */
export type Addresses_Order_By = {
  districtId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  settlementId?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
};

/** primary key columns input for table: addresses */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  DistrictId = 'districtId',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  Street = 'street'
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  districtId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields';
  districtId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  DistrictId = 'districtId',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  Street = 'street'
}

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: 'addresses_var_pop_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields';
  districtId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "candidate_lists" */
export type Candidate_Lists = {
  __typename?: 'candidate_lists';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  votingId: Scalars['Int'];
};

/** aggregated selection of "candidate_lists" */
export type Candidate_Lists_Aggregate = {
  __typename?: 'candidate_lists_aggregate';
  aggregate?: Maybe<Candidate_Lists_Aggregate_Fields>;
  nodes: Array<Candidate_Lists>;
};

/** aggregate fields of "candidate_lists" */
export type Candidate_Lists_Aggregate_Fields = {
  __typename?: 'candidate_lists_aggregate_fields';
  avg?: Maybe<Candidate_Lists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Candidate_Lists_Max_Fields>;
  min?: Maybe<Candidate_Lists_Min_Fields>;
  stddev?: Maybe<Candidate_Lists_Stddev_Fields>;
  stddev_pop?: Maybe<Candidate_Lists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Candidate_Lists_Stddev_Samp_Fields>;
  sum?: Maybe<Candidate_Lists_Sum_Fields>;
  var_pop?: Maybe<Candidate_Lists_Var_Pop_Fields>;
  var_samp?: Maybe<Candidate_Lists_Var_Samp_Fields>;
  variance?: Maybe<Candidate_Lists_Variance_Fields>;
};


/** aggregate fields of "candidate_lists" */
export type Candidate_Lists_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Candidate_Lists_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Candidate_Lists_Avg_Fields = {
  __typename?: 'candidate_lists_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "candidate_lists". All fields are combined with a logical 'AND'. */
export type Candidate_Lists_Bool_Exp = {
  _and?: Maybe<Array<Candidate_Lists_Bool_Exp>>;
  _not?: Maybe<Candidate_Lists_Bool_Exp>;
  _or?: Maybe<Array<Candidate_Lists_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  votingId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "candidate_lists" */
export enum Candidate_Lists_Constraint {
  /** unique or primary key constraint */
  CandidateListsPkey = 'candidate_lists_pkey'
}

/** input type for incrementing numeric columns in table "candidate_lists" */
export type Candidate_Lists_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "candidate_lists" */
export type Candidate_Lists_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Candidate_Lists_Max_Fields = {
  __typename?: 'candidate_lists_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Candidate_Lists_Min_Fields = {
  __typename?: 'candidate_lists_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "candidate_lists" */
export type Candidate_Lists_Mutation_Response = {
  __typename?: 'candidate_lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Candidate_Lists>;
};

/** on conflict condition type for table "candidate_lists" */
export type Candidate_Lists_On_Conflict = {
  constraint: Candidate_Lists_Constraint;
  update_columns: Array<Candidate_Lists_Update_Column>;
  where?: Maybe<Candidate_Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "candidate_lists". */
export type Candidate_Lists_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** primary key columns input for table: candidate_lists */
export type Candidate_Lists_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "candidate_lists" */
export enum Candidate_Lists_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingId = 'votingId'
}

/** input type for updating data in table "candidate_lists" */
export type Candidate_Lists_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Candidate_Lists_Stddev_Fields = {
  __typename?: 'candidate_lists_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Candidate_Lists_Stddev_Pop_Fields = {
  __typename?: 'candidate_lists_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Candidate_Lists_Stddev_Samp_Fields = {
  __typename?: 'candidate_lists_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Candidate_Lists_Sum_Fields = {
  __typename?: 'candidate_lists_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** update columns of table "candidate_lists" */
export enum Candidate_Lists_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingId = 'votingId'
}

/** aggregate var_pop on columns */
export type Candidate_Lists_Var_Pop_Fields = {
  __typename?: 'candidate_lists_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Candidate_Lists_Var_Samp_Fields = {
  __typename?: 'candidate_lists_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Candidate_Lists_Variance_Fields = {
  __typename?: 'candidate_lists_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "candidates" */
export type Candidates = {
  __typename?: 'candidates';
  candidateListId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  politicalGroupMemberId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "candidates" */
export type Candidates_Aggregate = {
  __typename?: 'candidates_aggregate';
  aggregate?: Maybe<Candidates_Aggregate_Fields>;
  nodes: Array<Candidates>;
};

/** aggregate fields of "candidates" */
export type Candidates_Aggregate_Fields = {
  __typename?: 'candidates_aggregate_fields';
  avg?: Maybe<Candidates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Candidates_Max_Fields>;
  min?: Maybe<Candidates_Min_Fields>;
  stddev?: Maybe<Candidates_Stddev_Fields>;
  stddev_pop?: Maybe<Candidates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Candidates_Stddev_Samp_Fields>;
  sum?: Maybe<Candidates_Sum_Fields>;
  var_pop?: Maybe<Candidates_Var_Pop_Fields>;
  var_samp?: Maybe<Candidates_Var_Samp_Fields>;
  variance?: Maybe<Candidates_Variance_Fields>;
};


/** aggregate fields of "candidates" */
export type Candidates_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Candidates_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Candidates_Avg_Fields = {
  __typename?: 'candidates_avg_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "candidates". All fields are combined with a logical 'AND'. */
export type Candidates_Bool_Exp = {
  _and?: Maybe<Array<Candidates_Bool_Exp>>;
  _not?: Maybe<Candidates_Bool_Exp>;
  _or?: Maybe<Array<Candidates_Bool_Exp>>;
  candidateListId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  politicalGroupMemberId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "candidates" */
export enum Candidates_Constraint {
  /** unique or primary key constraint */
  CandidatesPkey = 'candidates_pkey'
}

/** input type for incrementing numeric columns in table "candidates" */
export type Candidates_Inc_Input = {
  candidateListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupMemberId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "candidates" */
export type Candidates_Insert_Input = {
  candidateListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupMemberId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Candidates_Max_Fields = {
  __typename?: 'candidates_max_fields';
  candidateListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupMemberId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Candidates_Min_Fields = {
  __typename?: 'candidates_min_fields';
  candidateListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupMemberId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "candidates" */
export type Candidates_Mutation_Response = {
  __typename?: 'candidates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Candidates>;
};

/** on conflict condition type for table "candidates" */
export type Candidates_On_Conflict = {
  constraint: Candidates_Constraint;
  update_columns: Array<Candidates_Update_Column>;
  where?: Maybe<Candidates_Bool_Exp>;
};

/** Ordering options when selecting data from "candidates". */
export type Candidates_Order_By = {
  candidateListId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  politicalGroupMemberId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: candidates */
export type Candidates_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "candidates" */
export enum Candidates_Select_Column {
  /** column name */
  CandidateListId = 'candidateListId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PoliticalGroupMemberId = 'politicalGroupMemberId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "candidates" */
export type Candidates_Set_Input = {
  candidateListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupMemberId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Candidates_Stddev_Fields = {
  __typename?: 'candidates_stddev_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Candidates_Stddev_Pop_Fields = {
  __typename?: 'candidates_stddev_pop_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Candidates_Stddev_Samp_Fields = {
  __typename?: 'candidates_stddev_samp_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Candidates_Sum_Fields = {
  __typename?: 'candidates_sum_fields';
  candidateListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupMemberId?: Maybe<Scalars['Int']>;
};

/** update columns of table "candidates" */
export enum Candidates_Update_Column {
  /** column name */
  CandidateListId = 'candidateListId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PoliticalGroupMemberId = 'politicalGroupMemberId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Candidates_Var_Pop_Fields = {
  __typename?: 'candidates_var_pop_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Candidates_Var_Samp_Fields = {
  __typename?: 'candidates_var_samp_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Candidates_Variance_Fields = {
  __typename?: 'candidates_variance_fields';
  candidateListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  politicalGroupMemberId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "commision_members" */
export type Commision_Members = {
  __typename?: 'commision_members';
  active: Scalars['Boolean'];
  commisionId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isLeader?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "commision_members" */
export type Commision_Members_Aggregate = {
  __typename?: 'commision_members_aggregate';
  aggregate?: Maybe<Commision_Members_Aggregate_Fields>;
  nodes: Array<Commision_Members>;
};

/** aggregate fields of "commision_members" */
export type Commision_Members_Aggregate_Fields = {
  __typename?: 'commision_members_aggregate_fields';
  avg?: Maybe<Commision_Members_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Commision_Members_Max_Fields>;
  min?: Maybe<Commision_Members_Min_Fields>;
  stddev?: Maybe<Commision_Members_Stddev_Fields>;
  stddev_pop?: Maybe<Commision_Members_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Commision_Members_Stddev_Samp_Fields>;
  sum?: Maybe<Commision_Members_Sum_Fields>;
  var_pop?: Maybe<Commision_Members_Var_Pop_Fields>;
  var_samp?: Maybe<Commision_Members_Var_Samp_Fields>;
  variance?: Maybe<Commision_Members_Variance_Fields>;
};


/** aggregate fields of "commision_members" */
export type Commision_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Commision_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Commision_Members_Avg_Fields = {
  __typename?: 'commision_members_avg_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "commision_members". All fields are combined with a logical 'AND'. */
export type Commision_Members_Bool_Exp = {
  _and?: Maybe<Array<Commision_Members_Bool_Exp>>;
  _not?: Maybe<Commision_Members_Bool_Exp>;
  _or?: Maybe<Array<Commision_Members_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  commisionId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isLeader?: Maybe<Boolean_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "commision_members" */
export enum Commision_Members_Constraint {
  /** unique or primary key constraint */
  CommisionMembersPkey = 'commision_members_pkey',
  /** unique or primary key constraint */
  CommisionMembersUserIdKey = 'commision_members_userId_key'
}

/** input type for incrementing numeric columns in table "commision_members" */
export type Commision_Members_Inc_Input = {
  commisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "commision_members" */
export type Commision_Members_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  commisionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Commision_Members_Max_Fields = {
  __typename?: 'commision_members_max_fields';
  commisionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Commision_Members_Min_Fields = {
  __typename?: 'commision_members_min_fields';
  commisionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "commision_members" */
export type Commision_Members_Mutation_Response = {
  __typename?: 'commision_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Commision_Members>;
};

/** on conflict condition type for table "commision_members" */
export type Commision_Members_On_Conflict = {
  constraint: Commision_Members_Constraint;
  update_columns: Array<Commision_Members_Update_Column>;
  where?: Maybe<Commision_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "commision_members". */
export type Commision_Members_Order_By = {
  active?: Maybe<Order_By>;
  commisionId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isLeader?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: commision_members */
export type Commision_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "commision_members" */
export enum Commision_Members_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CommisionId = 'commisionId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsLeader = 'isLeader',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "commision_members" */
export type Commision_Members_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  commisionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Commision_Members_Stddev_Fields = {
  __typename?: 'commision_members_stddev_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Commision_Members_Stddev_Pop_Fields = {
  __typename?: 'commision_members_stddev_pop_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Commision_Members_Stddev_Samp_Fields = {
  __typename?: 'commision_members_stddev_samp_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Commision_Members_Sum_Fields = {
  __typename?: 'commision_members_sum_fields';
  commisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "commision_members" */
export enum Commision_Members_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CommisionId = 'commisionId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsLeader = 'isLeader',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Commision_Members_Var_Pop_Fields = {
  __typename?: 'commision_members_var_pop_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Commision_Members_Var_Samp_Fields = {
  __typename?: 'commision_members_var_samp_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Commision_Members_Variance_Fields = {
  __typename?: 'commision_members_variance_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "commissions" */
export type Commissions = {
  __typename?: 'commissions';
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "commissions" */
export type Commissions_Aggregate = {
  __typename?: 'commissions_aggregate';
  aggregate?: Maybe<Commissions_Aggregate_Fields>;
  nodes: Array<Commissions>;
};

/** aggregate fields of "commissions" */
export type Commissions_Aggregate_Fields = {
  __typename?: 'commissions_aggregate_fields';
  avg?: Maybe<Commissions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Commissions_Max_Fields>;
  min?: Maybe<Commissions_Min_Fields>;
  stddev?: Maybe<Commissions_Stddev_Fields>;
  stddev_pop?: Maybe<Commissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Commissions_Stddev_Samp_Fields>;
  sum?: Maybe<Commissions_Sum_Fields>;
  var_pop?: Maybe<Commissions_Var_Pop_Fields>;
  var_samp?: Maybe<Commissions_Var_Samp_Fields>;
  variance?: Maybe<Commissions_Variance_Fields>;
};


/** aggregate fields of "commissions" */
export type Commissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Commissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Commissions_Avg_Fields = {
  __typename?: 'commissions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "commissions". All fields are combined with a logical 'AND'. */
export type Commissions_Bool_Exp = {
  _and?: Maybe<Array<Commissions_Bool_Exp>>;
  _not?: Maybe<Commissions_Bool_Exp>;
  _or?: Maybe<Array<Commissions_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  votingSectionId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "commissions" */
export enum Commissions_Constraint {
  /** unique or primary key constraint */
  CommissionsPkey = 'commissions_pkey'
}

/** input type for incrementing numeric columns in table "commissions" */
export type Commissions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "commissions" */
export type Commissions_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Commissions_Max_Fields = {
  __typename?: 'commissions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Commissions_Min_Fields = {
  __typename?: 'commissions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "commissions" */
export type Commissions_Mutation_Response = {
  __typename?: 'commissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Commissions>;
};

/** on conflict condition type for table "commissions" */
export type Commissions_On_Conflict = {
  constraint: Commissions_Constraint;
  update_columns: Array<Commissions_Update_Column>;
  where?: Maybe<Commissions_Bool_Exp>;
};

/** Ordering options when selecting data from "commissions". */
export type Commissions_Order_By = {
  active?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  votingSectionId?: Maybe<Order_By>;
};

/** primary key columns input for table: commissions */
export type Commissions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "commissions" */
export enum Commissions_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingSectionId = 'votingSectionId'
}

/** input type for updating data in table "commissions" */
export type Commissions_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Commissions_Stddev_Fields = {
  __typename?: 'commissions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Commissions_Stddev_Pop_Fields = {
  __typename?: 'commissions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Commissions_Stddev_Samp_Fields = {
  __typename?: 'commissions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Commissions_Sum_Fields = {
  __typename?: 'commissions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "commissions" */
export enum Commissions_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingSectionId = 'votingSectionId'
}

/** aggregate var_pop on columns */
export type Commissions_Var_Pop_Fields = {
  __typename?: 'commissions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Commissions_Var_Samp_Fields = {
  __typename?: 'commissions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Commissions_Variance_Fields = {
  __typename?: 'commissions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "electoral_roll_users" */
export type Electoral_Roll_Users = {
  __typename?: 'electoral_roll_users';
  createdAt: Scalars['timestamptz'];
  electoralRollId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "electoral_roll_users" */
export type Electoral_Roll_Users_Aggregate = {
  __typename?: 'electoral_roll_users_aggregate';
  aggregate?: Maybe<Electoral_Roll_Users_Aggregate_Fields>;
  nodes: Array<Electoral_Roll_Users>;
};

/** aggregate fields of "electoral_roll_users" */
export type Electoral_Roll_Users_Aggregate_Fields = {
  __typename?: 'electoral_roll_users_aggregate_fields';
  avg?: Maybe<Electoral_Roll_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Electoral_Roll_Users_Max_Fields>;
  min?: Maybe<Electoral_Roll_Users_Min_Fields>;
  stddev?: Maybe<Electoral_Roll_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Electoral_Roll_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Electoral_Roll_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Electoral_Roll_Users_Sum_Fields>;
  var_pop?: Maybe<Electoral_Roll_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Electoral_Roll_Users_Var_Samp_Fields>;
  variance?: Maybe<Electoral_Roll_Users_Variance_Fields>;
};


/** aggregate fields of "electoral_roll_users" */
export type Electoral_Roll_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Electoral_Roll_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Electoral_Roll_Users_Avg_Fields = {
  __typename?: 'electoral_roll_users_avg_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "electoral_roll_users". All fields are combined with a logical 'AND'. */
export type Electoral_Roll_Users_Bool_Exp = {
  _and?: Maybe<Array<Electoral_Roll_Users_Bool_Exp>>;
  _not?: Maybe<Electoral_Roll_Users_Bool_Exp>;
  _or?: Maybe<Array<Electoral_Roll_Users_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  electoralRollId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "electoral_roll_users" */
export enum Electoral_Roll_Users_Constraint {
  /** unique or primary key constraint */
  ElectoralRollRowsPkey = 'electoral_roll_rows_pkey'
}

/** input type for incrementing numeric columns in table "electoral_roll_users" */
export type Electoral_Roll_Users_Inc_Input = {
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "electoral_roll_users" */
export type Electoral_Roll_Users_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Electoral_Roll_Users_Max_Fields = {
  __typename?: 'electoral_roll_users_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Electoral_Roll_Users_Min_Fields = {
  __typename?: 'electoral_roll_users_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "electoral_roll_users" */
export type Electoral_Roll_Users_Mutation_Response = {
  __typename?: 'electoral_roll_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Electoral_Roll_Users>;
};

/** on conflict condition type for table "electoral_roll_users" */
export type Electoral_Roll_Users_On_Conflict = {
  constraint: Electoral_Roll_Users_Constraint;
  update_columns: Array<Electoral_Roll_Users_Update_Column>;
  where?: Maybe<Electoral_Roll_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "electoral_roll_users". */
export type Electoral_Roll_Users_Order_By = {
  createdAt?: Maybe<Order_By>;
  electoralRollId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: electoral_roll_users */
export type Electoral_Roll_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "electoral_roll_users" */
export enum Electoral_Roll_Users_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ElectoralRollId = 'electoralRollId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "electoral_roll_users" */
export type Electoral_Roll_Users_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Electoral_Roll_Users_Stddev_Fields = {
  __typename?: 'electoral_roll_users_stddev_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Electoral_Roll_Users_Stddev_Pop_Fields = {
  __typename?: 'electoral_roll_users_stddev_pop_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Electoral_Roll_Users_Stddev_Samp_Fields = {
  __typename?: 'electoral_roll_users_stddev_samp_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Electoral_Roll_Users_Sum_Fields = {
  __typename?: 'electoral_roll_users_sum_fields';
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "electoral_roll_users" */
export enum Electoral_Roll_Users_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ElectoralRollId = 'electoralRollId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Electoral_Roll_Users_Var_Pop_Fields = {
  __typename?: 'electoral_roll_users_var_pop_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Electoral_Roll_Users_Var_Samp_Fields = {
  __typename?: 'electoral_roll_users_var_samp_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Electoral_Roll_Users_Variance_Fields = {
  __typename?: 'electoral_roll_users_variance_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "electoral_rolls" */
export type Electoral_Rolls = {
  __typename?: 'electoral_rolls';
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['Int'];
  id: Scalars['Int'];
  sectionId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "electoral_rolls" */
export type Electoral_Rolls_Aggregate = {
  __typename?: 'electoral_rolls_aggregate';
  aggregate?: Maybe<Electoral_Rolls_Aggregate_Fields>;
  nodes: Array<Electoral_Rolls>;
};

/** aggregate fields of "electoral_rolls" */
export type Electoral_Rolls_Aggregate_Fields = {
  __typename?: 'electoral_rolls_aggregate_fields';
  avg?: Maybe<Electoral_Rolls_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Electoral_Rolls_Max_Fields>;
  min?: Maybe<Electoral_Rolls_Min_Fields>;
  stddev?: Maybe<Electoral_Rolls_Stddev_Fields>;
  stddev_pop?: Maybe<Electoral_Rolls_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Electoral_Rolls_Stddev_Samp_Fields>;
  sum?: Maybe<Electoral_Rolls_Sum_Fields>;
  var_pop?: Maybe<Electoral_Rolls_Var_Pop_Fields>;
  var_samp?: Maybe<Electoral_Rolls_Var_Samp_Fields>;
  variance?: Maybe<Electoral_Rolls_Variance_Fields>;
};


/** aggregate fields of "electoral_rolls" */
export type Electoral_Rolls_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Electoral_Rolls_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Electoral_Rolls_Avg_Fields = {
  __typename?: 'electoral_rolls_avg_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "electoral_rolls". All fields are combined with a logical 'AND'. */
export type Electoral_Rolls_Bool_Exp = {
  _and?: Maybe<Array<Electoral_Rolls_Bool_Exp>>;
  _not?: Maybe<Electoral_Rolls_Bool_Exp>;
  _or?: Maybe<Array<Electoral_Rolls_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "electoral_rolls" */
export enum Electoral_Rolls_Constraint {
  /** unique or primary key constraint */
  ElectoralRollsPkey = 'electoral_rolls_pkey'
}

/** input type for incrementing numeric columns in table "electoral_rolls" */
export type Electoral_Rolls_Inc_Input = {
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "electoral_rolls" */
export type Electoral_Rolls_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Electoral_Rolls_Max_Fields = {
  __typename?: 'electoral_rolls_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Electoral_Rolls_Min_Fields = {
  __typename?: 'electoral_rolls_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "electoral_rolls" */
export type Electoral_Rolls_Mutation_Response = {
  __typename?: 'electoral_rolls_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Electoral_Rolls>;
};

/** on conflict condition type for table "electoral_rolls" */
export type Electoral_Rolls_On_Conflict = {
  constraint: Electoral_Rolls_Constraint;
  update_columns: Array<Electoral_Rolls_Update_Column>;
  where?: Maybe<Electoral_Rolls_Bool_Exp>;
};

/** Ordering options when selecting data from "electoral_rolls". */
export type Electoral_Rolls_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: electoral_rolls */
export type Electoral_Rolls_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "electoral_rolls" */
export enum Electoral_Rolls_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "electoral_rolls" */
export type Electoral_Rolls_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Electoral_Rolls_Stddev_Fields = {
  __typename?: 'electoral_rolls_stddev_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Electoral_Rolls_Stddev_Pop_Fields = {
  __typename?: 'electoral_rolls_stddev_pop_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Electoral_Rolls_Stddev_Samp_Fields = {
  __typename?: 'electoral_rolls_stddev_samp_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Electoral_Rolls_Sum_Fields = {
  __typename?: 'electoral_rolls_sum_fields';
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "electoral_rolls" */
export enum Electoral_Rolls_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Electoral_Rolls_Var_Pop_Fields = {
  __typename?: 'electoral_rolls_var_pop_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Electoral_Rolls_Var_Samp_Fields = {
  __typename?: 'electoral_rolls_var_samp_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Electoral_Rolls_Variance_Fields = {
  __typename?: 'electoral_rolls_variance_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "candidate_lists" */
  delete_candidate_lists?: Maybe<Candidate_Lists_Mutation_Response>;
  /** delete single row from the table: "candidate_lists" */
  delete_candidate_lists_by_pk?: Maybe<Candidate_Lists>;
  /** delete data from the table: "candidates" */
  delete_candidates?: Maybe<Candidates_Mutation_Response>;
  /** delete single row from the table: "candidates" */
  delete_candidates_by_pk?: Maybe<Candidates>;
  /** delete data from the table: "commision_members" */
  delete_commision_members?: Maybe<Commision_Members_Mutation_Response>;
  /** delete single row from the table: "commision_members" */
  delete_commision_members_by_pk?: Maybe<Commision_Members>;
  /** delete data from the table: "commissions" */
  delete_commissions?: Maybe<Commissions_Mutation_Response>;
  /** delete single row from the table: "commissions" */
  delete_commissions_by_pk?: Maybe<Commissions>;
  /** delete data from the table: "electoral_roll_users" */
  delete_electoral_roll_users?: Maybe<Electoral_Roll_Users_Mutation_Response>;
  /** delete single row from the table: "electoral_roll_users" */
  delete_electoral_roll_users_by_pk?: Maybe<Electoral_Roll_Users>;
  /** delete data from the table: "electoral_rolls" */
  delete_electoral_rolls?: Maybe<Electoral_Rolls_Mutation_Response>;
  /** delete single row from the table: "electoral_rolls" */
  delete_electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** delete data from the table: "political_group_members" */
  delete_political_group_members?: Maybe<Political_Group_Members_Mutation_Response>;
  /** delete single row from the table: "political_group_members" */
  delete_political_group_members_by_pk?: Maybe<Political_Group_Members>;
  /** delete data from the table: "political_group_types" */
  delete_political_group_types?: Maybe<Political_Group_Types_Mutation_Response>;
  /** delete single row from the table: "political_group_types" */
  delete_political_group_types_by_pk?: Maybe<Political_Group_Types>;
  /** delete data from the table: "political_groups" */
  delete_political_groups?: Maybe<Political_Groups_Mutation_Response>;
  /** delete single row from the table: "political_groups" */
  delete_political_groups_by_pk?: Maybe<Political_Groups>;
  /** delete data from the table: "referendum_questions" */
  delete_referendum_questions?: Maybe<Referendum_Questions_Mutation_Response>;
  /** delete single row from the table: "referendum_questions" */
  delete_referendum_questions_by_pk?: Maybe<Referendum_Questions>;
  /** delete data from the table: "referendum_votes" */
  delete_referendum_votes?: Maybe<Referendum_Votes_Mutation_Response>;
  /** delete single row from the table: "referendum_votes" */
  delete_referendum_votes_by_pk?: Maybe<Referendum_Votes>;
  /** delete data from the table: "referendums" */
  delete_referendums?: Maybe<Referendums_Mutation_Response>;
  /** delete single row from the table: "referendums" */
  delete_referendums_by_pk?: Maybe<Referendums>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "settlements" */
  delete_settlements?: Maybe<Settlements_Mutation_Response>;
  /** delete single row from the table: "settlements" */
  delete_settlements_by_pk?: Maybe<Settlements>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "votes" */
  delete_votes?: Maybe<Votes_Mutation_Response>;
  /** delete single row from the table: "votes" */
  delete_votes_by_pk?: Maybe<Votes>;
  /** delete data from the table: "voting_section" */
  delete_voting_section?: Maybe<Voting_Section_Mutation_Response>;
  /** delete single row from the table: "voting_section" */
  delete_voting_section_by_pk?: Maybe<Voting_Section>;
  /** delete data from the table: "voting_section_sessions" */
  delete_voting_section_sessions?: Maybe<Voting_Section_Sessions_Mutation_Response>;
  /** delete single row from the table: "voting_section_sessions" */
  delete_voting_section_sessions_by_pk?: Maybe<Voting_Section_Sessions>;
  /** delete data from the table: "voting_types" */
  delete_voting_types?: Maybe<Voting_Types_Mutation_Response>;
  /** delete single row from the table: "voting_types" */
  delete_voting_types_by_pk?: Maybe<Voting_Types>;
  /** delete data from the table: "votings" */
  delete_votings?: Maybe<Votings_Mutation_Response>;
  /** delete single row from the table: "votings" */
  delete_votings_by_pk?: Maybe<Votings>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "candidate_lists" */
  insert_candidate_lists?: Maybe<Candidate_Lists_Mutation_Response>;
  /** insert a single row into the table: "candidate_lists" */
  insert_candidate_lists_one?: Maybe<Candidate_Lists>;
  /** insert data into the table: "candidates" */
  insert_candidates?: Maybe<Candidates_Mutation_Response>;
  /** insert a single row into the table: "candidates" */
  insert_candidates_one?: Maybe<Candidates>;
  /** insert data into the table: "commision_members" */
  insert_commision_members?: Maybe<Commision_Members_Mutation_Response>;
  /** insert a single row into the table: "commision_members" */
  insert_commision_members_one?: Maybe<Commision_Members>;
  /** insert data into the table: "commissions" */
  insert_commissions?: Maybe<Commissions_Mutation_Response>;
  /** insert a single row into the table: "commissions" */
  insert_commissions_one?: Maybe<Commissions>;
  /** insert data into the table: "electoral_roll_users" */
  insert_electoral_roll_users?: Maybe<Electoral_Roll_Users_Mutation_Response>;
  /** insert a single row into the table: "electoral_roll_users" */
  insert_electoral_roll_users_one?: Maybe<Electoral_Roll_Users>;
  /** insert data into the table: "electoral_rolls" */
  insert_electoral_rolls?: Maybe<Electoral_Rolls_Mutation_Response>;
  /** insert a single row into the table: "electoral_rolls" */
  insert_electoral_rolls_one?: Maybe<Electoral_Rolls>;
  /** insert data into the table: "political_group_members" */
  insert_political_group_members?: Maybe<Political_Group_Members_Mutation_Response>;
  /** insert a single row into the table: "political_group_members" */
  insert_political_group_members_one?: Maybe<Political_Group_Members>;
  /** insert data into the table: "political_group_types" */
  insert_political_group_types?: Maybe<Political_Group_Types_Mutation_Response>;
  /** insert a single row into the table: "political_group_types" */
  insert_political_group_types_one?: Maybe<Political_Group_Types>;
  /** insert data into the table: "political_groups" */
  insert_political_groups?: Maybe<Political_Groups_Mutation_Response>;
  /** insert a single row into the table: "political_groups" */
  insert_political_groups_one?: Maybe<Political_Groups>;
  /** insert data into the table: "referendum_questions" */
  insert_referendum_questions?: Maybe<Referendum_Questions_Mutation_Response>;
  /** insert a single row into the table: "referendum_questions" */
  insert_referendum_questions_one?: Maybe<Referendum_Questions>;
  /** insert data into the table: "referendum_votes" */
  insert_referendum_votes?: Maybe<Referendum_Votes_Mutation_Response>;
  /** insert a single row into the table: "referendum_votes" */
  insert_referendum_votes_one?: Maybe<Referendum_Votes>;
  /** insert data into the table: "referendums" */
  insert_referendums?: Maybe<Referendums_Mutation_Response>;
  /** insert a single row into the table: "referendums" */
  insert_referendums_one?: Maybe<Referendums>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "settlements" */
  insert_settlements?: Maybe<Settlements_Mutation_Response>;
  /** insert a single row into the table: "settlements" */
  insert_settlements_one?: Maybe<Settlements>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "votes" */
  insert_votes?: Maybe<Votes_Mutation_Response>;
  /** insert a single row into the table: "votes" */
  insert_votes_one?: Maybe<Votes>;
  /** insert data into the table: "voting_section" */
  insert_voting_section?: Maybe<Voting_Section_Mutation_Response>;
  /** insert a single row into the table: "voting_section" */
  insert_voting_section_one?: Maybe<Voting_Section>;
  /** insert data into the table: "voting_section_sessions" */
  insert_voting_section_sessions?: Maybe<Voting_Section_Sessions_Mutation_Response>;
  /** insert a single row into the table: "voting_section_sessions" */
  insert_voting_section_sessions_one?: Maybe<Voting_Section_Sessions>;
  /** insert data into the table: "voting_types" */
  insert_voting_types?: Maybe<Voting_Types_Mutation_Response>;
  /** insert a single row into the table: "voting_types" */
  insert_voting_types_one?: Maybe<Voting_Types>;
  /** insert data into the table: "votings" */
  insert_votings?: Maybe<Votings_Mutation_Response>;
  /** insert a single row into the table: "votings" */
  insert_votings_one?: Maybe<Votings>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "candidate_lists" */
  update_candidate_lists?: Maybe<Candidate_Lists_Mutation_Response>;
  /** update single row of the table: "candidate_lists" */
  update_candidate_lists_by_pk?: Maybe<Candidate_Lists>;
  /** update data of the table: "candidates" */
  update_candidates?: Maybe<Candidates_Mutation_Response>;
  /** update single row of the table: "candidates" */
  update_candidates_by_pk?: Maybe<Candidates>;
  /** update data of the table: "commision_members" */
  update_commision_members?: Maybe<Commision_Members_Mutation_Response>;
  /** update single row of the table: "commision_members" */
  update_commision_members_by_pk?: Maybe<Commision_Members>;
  /** update data of the table: "commissions" */
  update_commissions?: Maybe<Commissions_Mutation_Response>;
  /** update single row of the table: "commissions" */
  update_commissions_by_pk?: Maybe<Commissions>;
  /** update data of the table: "electoral_roll_users" */
  update_electoral_roll_users?: Maybe<Electoral_Roll_Users_Mutation_Response>;
  /** update single row of the table: "electoral_roll_users" */
  update_electoral_roll_users_by_pk?: Maybe<Electoral_Roll_Users>;
  /** update data of the table: "electoral_rolls" */
  update_electoral_rolls?: Maybe<Electoral_Rolls_Mutation_Response>;
  /** update single row of the table: "electoral_rolls" */
  update_electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** update data of the table: "political_group_members" */
  update_political_group_members?: Maybe<Political_Group_Members_Mutation_Response>;
  /** update single row of the table: "political_group_members" */
  update_political_group_members_by_pk?: Maybe<Political_Group_Members>;
  /** update data of the table: "political_group_types" */
  update_political_group_types?: Maybe<Political_Group_Types_Mutation_Response>;
  /** update single row of the table: "political_group_types" */
  update_political_group_types_by_pk?: Maybe<Political_Group_Types>;
  /** update data of the table: "political_groups" */
  update_political_groups?: Maybe<Political_Groups_Mutation_Response>;
  /** update single row of the table: "political_groups" */
  update_political_groups_by_pk?: Maybe<Political_Groups>;
  /** update data of the table: "referendum_questions" */
  update_referendum_questions?: Maybe<Referendum_Questions_Mutation_Response>;
  /** update single row of the table: "referendum_questions" */
  update_referendum_questions_by_pk?: Maybe<Referendum_Questions>;
  /** update data of the table: "referendum_votes" */
  update_referendum_votes?: Maybe<Referendum_Votes_Mutation_Response>;
  /** update single row of the table: "referendum_votes" */
  update_referendum_votes_by_pk?: Maybe<Referendum_Votes>;
  /** update data of the table: "referendums" */
  update_referendums?: Maybe<Referendums_Mutation_Response>;
  /** update single row of the table: "referendums" */
  update_referendums_by_pk?: Maybe<Referendums>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "settlements" */
  update_settlements?: Maybe<Settlements_Mutation_Response>;
  /** update single row of the table: "settlements" */
  update_settlements_by_pk?: Maybe<Settlements>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "votes" */
  update_votes?: Maybe<Votes_Mutation_Response>;
  /** update single row of the table: "votes" */
  update_votes_by_pk?: Maybe<Votes>;
  /** update data of the table: "voting_section" */
  update_voting_section?: Maybe<Voting_Section_Mutation_Response>;
  /** update single row of the table: "voting_section" */
  update_voting_section_by_pk?: Maybe<Voting_Section>;
  /** update data of the table: "voting_section_sessions" */
  update_voting_section_sessions?: Maybe<Voting_Section_Sessions_Mutation_Response>;
  /** update single row of the table: "voting_section_sessions" */
  update_voting_section_sessions_by_pk?: Maybe<Voting_Section_Sessions>;
  /** update data of the table: "voting_types" */
  update_voting_types?: Maybe<Voting_Types_Mutation_Response>;
  /** update single row of the table: "voting_types" */
  update_voting_types_by_pk?: Maybe<Voting_Types>;
  /** update data of the table: "votings" */
  update_votings?: Maybe<Votings_Mutation_Response>;
  /** update single row of the table: "votings" */
  update_votings_by_pk?: Maybe<Votings>;
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Candidate_ListsArgs = {
  where: Candidate_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Candidate_Lists_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CandidatesArgs = {
  where: Candidates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Candidates_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Commision_MembersArgs = {
  where: Commision_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Commision_Members_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CommissionsArgs = {
  where: Commissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Commissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Electoral_Roll_UsersArgs = {
  where: Electoral_Roll_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Electoral_Roll_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Electoral_RollsArgs = {
  where: Electoral_Rolls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Electoral_Rolls_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Political_Group_MembersArgs = {
  where: Political_Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Political_Group_Members_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Political_Group_TypesArgs = {
  where: Political_Group_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Political_Group_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Political_GroupsArgs = {
  where: Political_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Political_Groups_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Referendum_QuestionsArgs = {
  where: Referendum_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Referendum_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Referendum_VotesArgs = {
  where: Referendum_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Referendum_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ReferendumsArgs = {
  where: Referendums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Referendums_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SettlementsArgs = {
  where: Settlements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Settlements_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_VotesArgs = {
  where: Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Voting_SectionArgs = {
  where: Voting_Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Voting_Section_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Voting_Section_SessionsArgs = {
  where: Voting_Section_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Voting_Section_Sessions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Voting_TypesArgs = {
  where: Voting_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Voting_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_VotingsArgs = {
  where: Votings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Votings_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Candidate_ListsArgs = {
  objects: Array<Candidate_Lists_Insert_Input>;
  on_conflict?: Maybe<Candidate_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Candidate_Lists_OneArgs = {
  object: Candidate_Lists_Insert_Input;
  on_conflict?: Maybe<Candidate_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CandidatesArgs = {
  objects: Array<Candidates_Insert_Input>;
  on_conflict?: Maybe<Candidates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Candidates_OneArgs = {
  object: Candidates_Insert_Input;
  on_conflict?: Maybe<Candidates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commision_MembersArgs = {
  objects: Array<Commision_Members_Insert_Input>;
  on_conflict?: Maybe<Commision_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commision_Members_OneArgs = {
  object: Commision_Members_Insert_Input;
  on_conflict?: Maybe<Commision_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommissionsArgs = {
  objects: Array<Commissions_Insert_Input>;
  on_conflict?: Maybe<Commissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Commissions_OneArgs = {
  object: Commissions_Insert_Input;
  on_conflict?: Maybe<Commissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Electoral_Roll_UsersArgs = {
  objects: Array<Electoral_Roll_Users_Insert_Input>;
  on_conflict?: Maybe<Electoral_Roll_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Electoral_Roll_Users_OneArgs = {
  object: Electoral_Roll_Users_Insert_Input;
  on_conflict?: Maybe<Electoral_Roll_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Electoral_RollsArgs = {
  objects: Array<Electoral_Rolls_Insert_Input>;
  on_conflict?: Maybe<Electoral_Rolls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Electoral_Rolls_OneArgs = {
  object: Electoral_Rolls_Insert_Input;
  on_conflict?: Maybe<Electoral_Rolls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Political_Group_MembersArgs = {
  objects: Array<Political_Group_Members_Insert_Input>;
  on_conflict?: Maybe<Political_Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Political_Group_Members_OneArgs = {
  object: Political_Group_Members_Insert_Input;
  on_conflict?: Maybe<Political_Group_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Political_Group_TypesArgs = {
  objects: Array<Political_Group_Types_Insert_Input>;
  on_conflict?: Maybe<Political_Group_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Political_Group_Types_OneArgs = {
  object: Political_Group_Types_Insert_Input;
  on_conflict?: Maybe<Political_Group_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Political_GroupsArgs = {
  objects: Array<Political_Groups_Insert_Input>;
  on_conflict?: Maybe<Political_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Political_Groups_OneArgs = {
  object: Political_Groups_Insert_Input;
  on_conflict?: Maybe<Political_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendum_QuestionsArgs = {
  objects: Array<Referendum_Questions_Insert_Input>;
  on_conflict?: Maybe<Referendum_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendum_Questions_OneArgs = {
  object: Referendum_Questions_Insert_Input;
  on_conflict?: Maybe<Referendum_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendum_VotesArgs = {
  objects: Array<Referendum_Votes_Insert_Input>;
  on_conflict?: Maybe<Referendum_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendum_Votes_OneArgs = {
  object: Referendum_Votes_Insert_Input;
  on_conflict?: Maybe<Referendum_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReferendumsArgs = {
  objects: Array<Referendums_Insert_Input>;
  on_conflict?: Maybe<Referendums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendums_OneArgs = {
  object: Referendums_Insert_Input;
  on_conflict?: Maybe<Referendums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SettlementsArgs = {
  objects: Array<Settlements_Insert_Input>;
  on_conflict?: Maybe<Settlements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Settlements_OneArgs = {
  object: Settlements_Insert_Input;
  on_conflict?: Maybe<Settlements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VotesArgs = {
  objects: Array<Votes_Insert_Input>;
  on_conflict?: Maybe<Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Votes_OneArgs = {
  object: Votes_Insert_Input;
  on_conflict?: Maybe<Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voting_SectionArgs = {
  objects: Array<Voting_Section_Insert_Input>;
  on_conflict?: Maybe<Voting_Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voting_Section_OneArgs = {
  object: Voting_Section_Insert_Input;
  on_conflict?: Maybe<Voting_Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voting_Section_SessionsArgs = {
  objects: Array<Voting_Section_Sessions_Insert_Input>;
  on_conflict?: Maybe<Voting_Section_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voting_Section_Sessions_OneArgs = {
  object: Voting_Section_Sessions_Insert_Input;
  on_conflict?: Maybe<Voting_Section_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voting_TypesArgs = {
  objects: Array<Voting_Types_Insert_Input>;
  on_conflict?: Maybe<Voting_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Voting_Types_OneArgs = {
  object: Voting_Types_Insert_Input;
  on_conflict?: Maybe<Voting_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VotingsArgs = {
  objects: Array<Votings_Insert_Input>;
  on_conflict?: Maybe<Votings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Votings_OneArgs = {
  object: Votings_Insert_Input;
  on_conflict?: Maybe<Votings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _inc?: Maybe<Addresses_Inc_Input>;
  _set?: Maybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _inc?: Maybe<Addresses_Inc_Input>;
  _set?: Maybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Candidate_ListsArgs = {
  _inc?: Maybe<Candidate_Lists_Inc_Input>;
  _set?: Maybe<Candidate_Lists_Set_Input>;
  where: Candidate_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Candidate_Lists_By_PkArgs = {
  _inc?: Maybe<Candidate_Lists_Inc_Input>;
  _set?: Maybe<Candidate_Lists_Set_Input>;
  pk_columns: Candidate_Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CandidatesArgs = {
  _inc?: Maybe<Candidates_Inc_Input>;
  _set?: Maybe<Candidates_Set_Input>;
  where: Candidates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Candidates_By_PkArgs = {
  _inc?: Maybe<Candidates_Inc_Input>;
  _set?: Maybe<Candidates_Set_Input>;
  pk_columns: Candidates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Commision_MembersArgs = {
  _inc?: Maybe<Commision_Members_Inc_Input>;
  _set?: Maybe<Commision_Members_Set_Input>;
  where: Commision_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Commision_Members_By_PkArgs = {
  _inc?: Maybe<Commision_Members_Inc_Input>;
  _set?: Maybe<Commision_Members_Set_Input>;
  pk_columns: Commision_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommissionsArgs = {
  _inc?: Maybe<Commissions_Inc_Input>;
  _set?: Maybe<Commissions_Set_Input>;
  where: Commissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Commissions_By_PkArgs = {
  _inc?: Maybe<Commissions_Inc_Input>;
  _set?: Maybe<Commissions_Set_Input>;
  pk_columns: Commissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Electoral_Roll_UsersArgs = {
  _inc?: Maybe<Electoral_Roll_Users_Inc_Input>;
  _set?: Maybe<Electoral_Roll_Users_Set_Input>;
  where: Electoral_Roll_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Electoral_Roll_Users_By_PkArgs = {
  _inc?: Maybe<Electoral_Roll_Users_Inc_Input>;
  _set?: Maybe<Electoral_Roll_Users_Set_Input>;
  pk_columns: Electoral_Roll_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Electoral_RollsArgs = {
  _inc?: Maybe<Electoral_Rolls_Inc_Input>;
  _set?: Maybe<Electoral_Rolls_Set_Input>;
  where: Electoral_Rolls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Electoral_Rolls_By_PkArgs = {
  _inc?: Maybe<Electoral_Rolls_Inc_Input>;
  _set?: Maybe<Electoral_Rolls_Set_Input>;
  pk_columns: Electoral_Rolls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Political_Group_MembersArgs = {
  _inc?: Maybe<Political_Group_Members_Inc_Input>;
  _set?: Maybe<Political_Group_Members_Set_Input>;
  where: Political_Group_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Political_Group_Members_By_PkArgs = {
  _inc?: Maybe<Political_Group_Members_Inc_Input>;
  _set?: Maybe<Political_Group_Members_Set_Input>;
  pk_columns: Political_Group_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Political_Group_TypesArgs = {
  _set?: Maybe<Political_Group_Types_Set_Input>;
  where: Political_Group_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Political_Group_Types_By_PkArgs = {
  _set?: Maybe<Political_Group_Types_Set_Input>;
  pk_columns: Political_Group_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Political_GroupsArgs = {
  _inc?: Maybe<Political_Groups_Inc_Input>;
  _set?: Maybe<Political_Groups_Set_Input>;
  where: Political_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Political_Groups_By_PkArgs = {
  _inc?: Maybe<Political_Groups_Inc_Input>;
  _set?: Maybe<Political_Groups_Set_Input>;
  pk_columns: Political_Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Referendum_QuestionsArgs = {
  _inc?: Maybe<Referendum_Questions_Inc_Input>;
  _set?: Maybe<Referendum_Questions_Set_Input>;
  where: Referendum_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Referendum_Questions_By_PkArgs = {
  _inc?: Maybe<Referendum_Questions_Inc_Input>;
  _set?: Maybe<Referendum_Questions_Set_Input>;
  pk_columns: Referendum_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Referendum_VotesArgs = {
  _inc?: Maybe<Referendum_Votes_Inc_Input>;
  _set?: Maybe<Referendum_Votes_Set_Input>;
  where: Referendum_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Referendum_Votes_By_PkArgs = {
  _inc?: Maybe<Referendum_Votes_Inc_Input>;
  _set?: Maybe<Referendum_Votes_Set_Input>;
  pk_columns: Referendum_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReferendumsArgs = {
  _inc?: Maybe<Referendums_Inc_Input>;
  _set?: Maybe<Referendums_Set_Input>;
  where: Referendums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Referendums_By_PkArgs = {
  _inc?: Maybe<Referendums_Inc_Input>;
  _set?: Maybe<Referendums_Set_Input>;
  pk_columns: Referendums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _inc?: Maybe<Roles_Inc_Input>;
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _inc?: Maybe<Roles_Inc_Input>;
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SettlementsArgs = {
  _inc?: Maybe<Settlements_Inc_Input>;
  _set?: Maybe<Settlements_Set_Input>;
  where: Settlements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Settlements_By_PkArgs = {
  _inc?: Maybe<Settlements_Inc_Input>;
  _set?: Maybe<Settlements_Set_Input>;
  pk_columns: Settlements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VotesArgs = {
  _inc?: Maybe<Votes_Inc_Input>;
  _set?: Maybe<Votes_Set_Input>;
  where: Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Votes_By_PkArgs = {
  _inc?: Maybe<Votes_Inc_Input>;
  _set?: Maybe<Votes_Set_Input>;
  pk_columns: Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_SectionArgs = {
  _inc?: Maybe<Voting_Section_Inc_Input>;
  _set?: Maybe<Voting_Section_Set_Input>;
  where: Voting_Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_Section_By_PkArgs = {
  _inc?: Maybe<Voting_Section_Inc_Input>;
  _set?: Maybe<Voting_Section_Set_Input>;
  pk_columns: Voting_Section_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_Section_SessionsArgs = {
  _inc?: Maybe<Voting_Section_Sessions_Inc_Input>;
  _set?: Maybe<Voting_Section_Sessions_Set_Input>;
  where: Voting_Section_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_Section_Sessions_By_PkArgs = {
  _inc?: Maybe<Voting_Section_Sessions_Inc_Input>;
  _set?: Maybe<Voting_Section_Sessions_Set_Input>;
  pk_columns: Voting_Section_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_TypesArgs = {
  _set?: Maybe<Voting_Types_Set_Input>;
  where: Voting_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_Types_By_PkArgs = {
  _set?: Maybe<Voting_Types_Set_Input>;
  pk_columns: Voting_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VotingsArgs = {
  _inc?: Maybe<Votings_Inc_Input>;
  _set?: Maybe<Votings_Set_Input>;
  where: Votings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Votings_By_PkArgs = {
  _inc?: Maybe<Votings_Inc_Input>;
  _set?: Maybe<Votings_Set_Input>;
  pk_columns: Votings_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "political_group_members" */
export type Political_Group_Members = {
  __typename?: 'political_group_members';
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  politicalGroupId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "political_group_members" */
export type Political_Group_Members_Aggregate = {
  __typename?: 'political_group_members_aggregate';
  aggregate?: Maybe<Political_Group_Members_Aggregate_Fields>;
  nodes: Array<Political_Group_Members>;
};

/** aggregate fields of "political_group_members" */
export type Political_Group_Members_Aggregate_Fields = {
  __typename?: 'political_group_members_aggregate_fields';
  avg?: Maybe<Political_Group_Members_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Political_Group_Members_Max_Fields>;
  min?: Maybe<Political_Group_Members_Min_Fields>;
  stddev?: Maybe<Political_Group_Members_Stddev_Fields>;
  stddev_pop?: Maybe<Political_Group_Members_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Political_Group_Members_Stddev_Samp_Fields>;
  sum?: Maybe<Political_Group_Members_Sum_Fields>;
  var_pop?: Maybe<Political_Group_Members_Var_Pop_Fields>;
  var_samp?: Maybe<Political_Group_Members_Var_Samp_Fields>;
  variance?: Maybe<Political_Group_Members_Variance_Fields>;
};


/** aggregate fields of "political_group_members" */
export type Political_Group_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Political_Group_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Political_Group_Members_Avg_Fields = {
  __typename?: 'political_group_members_avg_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "political_group_members". All fields are combined with a logical 'AND'. */
export type Political_Group_Members_Bool_Exp = {
  _and?: Maybe<Array<Political_Group_Members_Bool_Exp>>;
  _not?: Maybe<Political_Group_Members_Bool_Exp>;
  _or?: Maybe<Array<Political_Group_Members_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  politicalGroupId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "political_group_members" */
export enum Political_Group_Members_Constraint {
  /** unique or primary key constraint */
  PatryMembersPkey = 'patry_members_pkey',
  /** unique or primary key constraint */
  PatryMembersUserIdKey = 'patry_members_userId_key'
}

/** input type for incrementing numeric columns in table "political_group_members" */
export type Political_Group_Members_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "political_group_members" */
export type Political_Group_Members_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Political_Group_Members_Max_Fields = {
  __typename?: 'political_group_members_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Political_Group_Members_Min_Fields = {
  __typename?: 'political_group_members_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "political_group_members" */
export type Political_Group_Members_Mutation_Response = {
  __typename?: 'political_group_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Political_Group_Members>;
};

/** on conflict condition type for table "political_group_members" */
export type Political_Group_Members_On_Conflict = {
  constraint: Political_Group_Members_Constraint;
  update_columns: Array<Political_Group_Members_Update_Column>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "political_group_members". */
export type Political_Group_Members_Order_By = {
  active?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: political_group_members */
export type Political_Group_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "political_group_members" */
export enum Political_Group_Members_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PoliticalGroupId = 'politicalGroupId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "political_group_members" */
export type Political_Group_Members_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Political_Group_Members_Stddev_Fields = {
  __typename?: 'political_group_members_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Political_Group_Members_Stddev_Pop_Fields = {
  __typename?: 'political_group_members_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Political_Group_Members_Stddev_Samp_Fields = {
  __typename?: 'political_group_members_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Political_Group_Members_Sum_Fields = {
  __typename?: 'political_group_members_sum_fields';
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "political_group_members" */
export enum Political_Group_Members_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PoliticalGroupId = 'politicalGroupId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Political_Group_Members_Var_Pop_Fields = {
  __typename?: 'political_group_members_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Political_Group_Members_Var_Samp_Fields = {
  __typename?: 'political_group_members_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Political_Group_Members_Variance_Fields = {
  __typename?: 'political_group_members_variance_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "political_group_types" */
export type Political_Group_Types = {
  __typename?: 'political_group_types';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "political_group_types" */
export type Political_Group_Types_Aggregate = {
  __typename?: 'political_group_types_aggregate';
  aggregate?: Maybe<Political_Group_Types_Aggregate_Fields>;
  nodes: Array<Political_Group_Types>;
};

/** aggregate fields of "political_group_types" */
export type Political_Group_Types_Aggregate_Fields = {
  __typename?: 'political_group_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Political_Group_Types_Max_Fields>;
  min?: Maybe<Political_Group_Types_Min_Fields>;
};


/** aggregate fields of "political_group_types" */
export type Political_Group_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Political_Group_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "political_group_types". All fields are combined with a logical 'AND'. */
export type Political_Group_Types_Bool_Exp = {
  _and?: Maybe<Array<Political_Group_Types_Bool_Exp>>;
  _not?: Maybe<Political_Group_Types_Bool_Exp>;
  _or?: Maybe<Array<Political_Group_Types_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "political_group_types" */
export enum Political_Group_Types_Constraint {
  /** unique or primary key constraint */
  PoliticalGroupTypesPkey = 'political_group_types_pkey'
}

export enum Political_Group_Types_Enum {
  /** коалиция */
  Coalition = 'coalition',
  /** инициативен комитет */
  InitiativeCommittee = 'initiative_committee',
  /** партия */
  Party = 'party'
}

/** Boolean expression to compare columns of type "political_group_types_enum". All fields are combined with logical 'AND'. */
export type Political_Group_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Political_Group_Types_Enum>;
  _in?: Maybe<Array<Political_Group_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Political_Group_Types_Enum>;
  _nin?: Maybe<Array<Political_Group_Types_Enum>>;
};

/** input type for inserting data into table "political_group_types" */
export type Political_Group_Types_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Political_Group_Types_Max_Fields = {
  __typename?: 'political_group_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Political_Group_Types_Min_Fields = {
  __typename?: 'political_group_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "political_group_types" */
export type Political_Group_Types_Mutation_Response = {
  __typename?: 'political_group_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Political_Group_Types>;
};

/** on conflict condition type for table "political_group_types" */
export type Political_Group_Types_On_Conflict = {
  constraint: Political_Group_Types_Constraint;
  update_columns: Array<Political_Group_Types_Update_Column>;
  where?: Maybe<Political_Group_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "political_group_types". */
export type Political_Group_Types_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: political_group_types */
export type Political_Group_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "political_group_types" */
export enum Political_Group_Types_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "political_group_types" */
export type Political_Group_Types_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "political_group_types" */
export enum Political_Group_Types_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "political_groups" */
export type Political_Groups = {
  __typename?: 'political_groups';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Political_Group_Types_Enum;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "political_groups" */
export type Political_Groups_Aggregate = {
  __typename?: 'political_groups_aggregate';
  aggregate?: Maybe<Political_Groups_Aggregate_Fields>;
  nodes: Array<Political_Groups>;
};

/** aggregate fields of "political_groups" */
export type Political_Groups_Aggregate_Fields = {
  __typename?: 'political_groups_aggregate_fields';
  avg?: Maybe<Political_Groups_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Political_Groups_Max_Fields>;
  min?: Maybe<Political_Groups_Min_Fields>;
  stddev?: Maybe<Political_Groups_Stddev_Fields>;
  stddev_pop?: Maybe<Political_Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Political_Groups_Stddev_Samp_Fields>;
  sum?: Maybe<Political_Groups_Sum_Fields>;
  var_pop?: Maybe<Political_Groups_Var_Pop_Fields>;
  var_samp?: Maybe<Political_Groups_Var_Samp_Fields>;
  variance?: Maybe<Political_Groups_Variance_Fields>;
};


/** aggregate fields of "political_groups" */
export type Political_Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Political_Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Political_Groups_Avg_Fields = {
  __typename?: 'political_groups_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "political_groups". All fields are combined with a logical 'AND'. */
export type Political_Groups_Bool_Exp = {
  _and?: Maybe<Array<Political_Groups_Bool_Exp>>;
  _not?: Maybe<Political_Groups_Bool_Exp>;
  _or?: Maybe<Array<Political_Groups_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Political_Group_Types_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "political_groups" */
export enum Political_Groups_Constraint {
  /** unique or primary key constraint */
  PartiesNameKey = 'parties_name_key',
  /** unique or primary key constraint */
  PartiesPkey = 'parties_pkey'
}

/** input type for incrementing numeric columns in table "political_groups" */
export type Political_Groups_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "political_groups" */
export type Political_Groups_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Political_Group_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Political_Groups_Max_Fields = {
  __typename?: 'political_groups_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Political_Groups_Min_Fields = {
  __typename?: 'political_groups_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "political_groups" */
export type Political_Groups_Mutation_Response = {
  __typename?: 'political_groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Political_Groups>;
};

/** on conflict condition type for table "political_groups" */
export type Political_Groups_On_Conflict = {
  constraint: Political_Groups_Constraint;
  update_columns: Array<Political_Groups_Update_Column>;
  where?: Maybe<Political_Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "political_groups". */
export type Political_Groups_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: political_groups */
export type Political_Groups_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "political_groups" */
export enum Political_Groups_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "political_groups" */
export type Political_Groups_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Political_Group_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Political_Groups_Stddev_Fields = {
  __typename?: 'political_groups_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Political_Groups_Stddev_Pop_Fields = {
  __typename?: 'political_groups_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Political_Groups_Stddev_Samp_Fields = {
  __typename?: 'political_groups_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Political_Groups_Sum_Fields = {
  __typename?: 'political_groups_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "political_groups" */
export enum Political_Groups_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Political_Groups_Var_Pop_Fields = {
  __typename?: 'political_groups_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Political_Groups_Var_Samp_Fields = {
  __typename?: 'political_groups_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Political_Groups_Variance_Fields = {
  __typename?: 'political_groups_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "candidate_lists" */
  candidate_lists: Array<Candidate_Lists>;
  /** fetch aggregated fields from the table: "candidate_lists" */
  candidate_lists_aggregate: Candidate_Lists_Aggregate;
  /** fetch data from the table: "candidate_lists" using primary key columns */
  candidate_lists_by_pk?: Maybe<Candidate_Lists>;
  /** fetch data from the table: "candidates" */
  candidates: Array<Candidates>;
  /** fetch aggregated fields from the table: "candidates" */
  candidates_aggregate: Candidates_Aggregate;
  /** fetch data from the table: "candidates" using primary key columns */
  candidates_by_pk?: Maybe<Candidates>;
  /** fetch data from the table: "commision_members" */
  commision_members: Array<Commision_Members>;
  /** fetch aggregated fields from the table: "commision_members" */
  commision_members_aggregate: Commision_Members_Aggregate;
  /** fetch data from the table: "commision_members" using primary key columns */
  commision_members_by_pk?: Maybe<Commision_Members>;
  /** fetch data from the table: "commissions" */
  commissions: Array<Commissions>;
  /** fetch aggregated fields from the table: "commissions" */
  commissions_aggregate: Commissions_Aggregate;
  /** fetch data from the table: "commissions" using primary key columns */
  commissions_by_pk?: Maybe<Commissions>;
  /** fetch data from the table: "electoral_roll_users" */
  electoral_roll_users: Array<Electoral_Roll_Users>;
  /** fetch aggregated fields from the table: "electoral_roll_users" */
  electoral_roll_users_aggregate: Electoral_Roll_Users_Aggregate;
  /** fetch data from the table: "electoral_roll_users" using primary key columns */
  electoral_roll_users_by_pk?: Maybe<Electoral_Roll_Users>;
  /** fetch data from the table: "electoral_rolls" */
  electoral_rolls: Array<Electoral_Rolls>;
  /** fetch aggregated fields from the table: "electoral_rolls" */
  electoral_rolls_aggregate: Electoral_Rolls_Aggregate;
  /** fetch data from the table: "electoral_rolls" using primary key columns */
  electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** fetch data from the table: "political_group_members" */
  political_group_members: Array<Political_Group_Members>;
  /** fetch aggregated fields from the table: "political_group_members" */
  political_group_members_aggregate: Political_Group_Members_Aggregate;
  /** fetch data from the table: "political_group_members" using primary key columns */
  political_group_members_by_pk?: Maybe<Political_Group_Members>;
  /** fetch data from the table: "political_group_types" */
  political_group_types: Array<Political_Group_Types>;
  /** fetch aggregated fields from the table: "political_group_types" */
  political_group_types_aggregate: Political_Group_Types_Aggregate;
  /** fetch data from the table: "political_group_types" using primary key columns */
  political_group_types_by_pk?: Maybe<Political_Group_Types>;
  /** fetch data from the table: "political_groups" */
  political_groups: Array<Political_Groups>;
  /** fetch aggregated fields from the table: "political_groups" */
  political_groups_aggregate: Political_Groups_Aggregate;
  /** fetch data from the table: "political_groups" using primary key columns */
  political_groups_by_pk?: Maybe<Political_Groups>;
  /** fetch data from the table: "referendum_questions" */
  referendum_questions: Array<Referendum_Questions>;
  /** fetch aggregated fields from the table: "referendum_questions" */
  referendum_questions_aggregate: Referendum_Questions_Aggregate;
  /** fetch data from the table: "referendum_questions" using primary key columns */
  referendum_questions_by_pk?: Maybe<Referendum_Questions>;
  /** fetch data from the table: "referendum_votes" */
  referendum_votes: Array<Referendum_Votes>;
  /** fetch aggregated fields from the table: "referendum_votes" */
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  /** fetch data from the table: "referendum_votes" using primary key columns */
  referendum_votes_by_pk?: Maybe<Referendum_Votes>;
  /** fetch data from the table: "referendums" */
  referendums: Array<Referendums>;
  /** fetch aggregated fields from the table: "referendums" */
  referendums_aggregate: Referendums_Aggregate;
  /** fetch data from the table: "referendums" using primary key columns */
  referendums_by_pk?: Maybe<Referendums>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "settlements" */
  settlements: Array<Settlements>;
  /** An aggregate relationship */
  settlements_aggregate: Settlements_Aggregate;
  /** fetch data from the table: "settlements" using primary key columns */
  settlements_by_pk?: Maybe<Settlements>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "votes" */
  votes: Array<Votes>;
  /** fetch aggregated fields from the table: "votes" */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
  /** fetch data from the table: "voting_section" */
  voting_section: Array<Voting_Section>;
  /** fetch aggregated fields from the table: "voting_section" */
  voting_section_aggregate: Voting_Section_Aggregate;
  /** fetch data from the table: "voting_section" using primary key columns */
  voting_section_by_pk?: Maybe<Voting_Section>;
  /** fetch data from the table: "voting_section_sessions" */
  voting_section_sessions: Array<Voting_Section_Sessions>;
  /** fetch aggregated fields from the table: "voting_section_sessions" */
  voting_section_sessions_aggregate: Voting_Section_Sessions_Aggregate;
  /** fetch data from the table: "voting_section_sessions" using primary key columns */
  voting_section_sessions_by_pk?: Maybe<Voting_Section_Sessions>;
  /** fetch data from the table: "voting_types" */
  voting_types: Array<Voting_Types>;
  /** fetch aggregated fields from the table: "voting_types" */
  voting_types_aggregate: Voting_Types_Aggregate;
  /** fetch data from the table: "voting_types" using primary key columns */
  voting_types_by_pk?: Maybe<Voting_Types>;
  /** fetch data from the table: "votings" */
  votings: Array<Votings>;
  /** fetch aggregated fields from the table: "votings" */
  votings_aggregate: Votings_Aggregate;
  /** fetch data from the table: "votings" using primary key columns */
  votings_by_pk?: Maybe<Votings>;
};


export type Query_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCandidate_ListsArgs = {
  distinct_on?: Maybe<Array<Candidate_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidate_Lists_Order_By>>;
  where?: Maybe<Candidate_Lists_Bool_Exp>;
};


export type Query_RootCandidate_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Candidate_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidate_Lists_Order_By>>;
  where?: Maybe<Candidate_Lists_Bool_Exp>;
};


export type Query_RootCandidate_Lists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCandidatesArgs = {
  distinct_on?: Maybe<Array<Candidates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidates_Order_By>>;
  where?: Maybe<Candidates_Bool_Exp>;
};


export type Query_RootCandidates_AggregateArgs = {
  distinct_on?: Maybe<Array<Candidates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidates_Order_By>>;
  where?: Maybe<Candidates_Bool_Exp>;
};


export type Query_RootCandidates_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommision_MembersArgs = {
  distinct_on?: Maybe<Array<Commision_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commision_Members_Order_By>>;
  where?: Maybe<Commision_Members_Bool_Exp>;
};


export type Query_RootCommision_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Commision_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commision_Members_Order_By>>;
  where?: Maybe<Commision_Members_Bool_Exp>;
};


export type Query_RootCommision_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommissionsArgs = {
  distinct_on?: Maybe<Array<Commissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commissions_Order_By>>;
  where?: Maybe<Commissions_Bool_Exp>;
};


export type Query_RootCommissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Commissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commissions_Order_By>>;
  where?: Maybe<Commissions_Bool_Exp>;
};


export type Query_RootCommissions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootElectoral_Roll_UsersArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Users_Order_By>>;
  where?: Maybe<Electoral_Roll_Users_Bool_Exp>;
};


export type Query_RootElectoral_Roll_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Users_Order_By>>;
  where?: Maybe<Electoral_Roll_Users_Bool_Exp>;
};


export type Query_RootElectoral_Roll_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootElectoral_RollsArgs = {
  distinct_on?: Maybe<Array<Electoral_Rolls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Rolls_Order_By>>;
  where?: Maybe<Electoral_Rolls_Bool_Exp>;
};


export type Query_RootElectoral_Rolls_AggregateArgs = {
  distinct_on?: Maybe<Array<Electoral_Rolls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Rolls_Order_By>>;
  where?: Maybe<Electoral_Rolls_Bool_Exp>;
};


export type Query_RootElectoral_Rolls_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPolitical_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


export type Query_RootPolitical_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


export type Query_RootPolitical_Group_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPolitical_Group_TypesArgs = {
  distinct_on?: Maybe<Array<Political_Group_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Types_Order_By>>;
  where?: Maybe<Political_Group_Types_Bool_Exp>;
};


export type Query_RootPolitical_Group_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Types_Order_By>>;
  where?: Maybe<Political_Group_Types_Bool_Exp>;
};


export type Query_RootPolitical_Group_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootPolitical_GroupsArgs = {
  distinct_on?: Maybe<Array<Political_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Groups_Order_By>>;
  where?: Maybe<Political_Groups_Bool_Exp>;
};


export type Query_RootPolitical_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Groups_Order_By>>;
  where?: Maybe<Political_Groups_Bool_Exp>;
};


export type Query_RootPolitical_Groups_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReferendum_QuestionsArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};


export type Query_RootReferendum_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};


export type Query_RootReferendum_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReferendum_VotesArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


export type Query_RootReferendum_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


export type Query_RootReferendum_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReferendumsArgs = {
  distinct_on?: Maybe<Array<Referendums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendums_Order_By>>;
  where?: Maybe<Referendums_Bool_Exp>;
};


export type Query_RootReferendums_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendums_Order_By>>;
  where?: Maybe<Referendums_Bool_Exp>;
};


export type Query_RootReferendums_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSettlementsArgs = {
  distinct_on?: Maybe<Array<Settlements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Settlements_Order_By>>;
  where?: Maybe<Settlements_Bool_Exp>;
};


export type Query_RootSettlements_AggregateArgs = {
  distinct_on?: Maybe<Array<Settlements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Settlements_Order_By>>;
  where?: Maybe<Settlements_Bool_Exp>;
};


export type Query_RootSettlements_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVotesArgs = {
  distinct_on?: Maybe<Array<Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votes_Order_By>>;
  where?: Maybe<Votes_Bool_Exp>;
};


export type Query_RootVotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votes_Order_By>>;
  where?: Maybe<Votes_Bool_Exp>;
};


export type Query_RootVotes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVoting_SectionArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Order_By>>;
  where?: Maybe<Voting_Section_Bool_Exp>;
};


export type Query_RootVoting_Section_AggregateArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Order_By>>;
  where?: Maybe<Voting_Section_Bool_Exp>;
};


export type Query_RootVoting_Section_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVoting_Section_SessionsArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Sessions_Order_By>>;
  where?: Maybe<Voting_Section_Sessions_Bool_Exp>;
};


export type Query_RootVoting_Section_Sessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Sessions_Order_By>>;
  where?: Maybe<Voting_Section_Sessions_Bool_Exp>;
};


export type Query_RootVoting_Section_Sessions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVoting_TypesArgs = {
  distinct_on?: Maybe<Array<Voting_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Types_Order_By>>;
  where?: Maybe<Voting_Types_Bool_Exp>;
};


export type Query_RootVoting_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Voting_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Types_Order_By>>;
  where?: Maybe<Voting_Types_Bool_Exp>;
};


export type Query_RootVoting_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootVotingsArgs = {
  distinct_on?: Maybe<Array<Votings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votings_Order_By>>;
  where?: Maybe<Votings_Bool_Exp>;
};


export type Query_RootVotings_AggregateArgs = {
  distinct_on?: Maybe<Array<Votings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votings_Order_By>>;
  where?: Maybe<Votings_Bool_Exp>;
};


export type Query_RootVotings_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "referendum_questions" */
export type Referendum_Questions = {
  __typename?: 'referendum_questions';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  referendumId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "referendum_questions" */
export type Referendum_Questions_Aggregate = {
  __typename?: 'referendum_questions_aggregate';
  aggregate?: Maybe<Referendum_Questions_Aggregate_Fields>;
  nodes: Array<Referendum_Questions>;
};

/** aggregate fields of "referendum_questions" */
export type Referendum_Questions_Aggregate_Fields = {
  __typename?: 'referendum_questions_aggregate_fields';
  avg?: Maybe<Referendum_Questions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Referendum_Questions_Max_Fields>;
  min?: Maybe<Referendum_Questions_Min_Fields>;
  stddev?: Maybe<Referendum_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Referendum_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Referendum_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Referendum_Questions_Sum_Fields>;
  var_pop?: Maybe<Referendum_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Referendum_Questions_Var_Samp_Fields>;
  variance?: Maybe<Referendum_Questions_Variance_Fields>;
};


/** aggregate fields of "referendum_questions" */
export type Referendum_Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Referendum_Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "referendum_questions" */
export type Referendum_Questions_Aggregate_Order_By = {
  avg?: Maybe<Referendum_Questions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Referendum_Questions_Max_Order_By>;
  min?: Maybe<Referendum_Questions_Min_Order_By>;
  stddev?: Maybe<Referendum_Questions_Stddev_Order_By>;
  stddev_pop?: Maybe<Referendum_Questions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Referendum_Questions_Stddev_Samp_Order_By>;
  sum?: Maybe<Referendum_Questions_Sum_Order_By>;
  var_pop?: Maybe<Referendum_Questions_Var_Pop_Order_By>;
  var_samp?: Maybe<Referendum_Questions_Var_Samp_Order_By>;
  variance?: Maybe<Referendum_Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "referendum_questions" */
export type Referendum_Questions_Arr_Rel_Insert_Input = {
  data: Array<Referendum_Questions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Referendum_Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Referendum_Questions_Avg_Fields = {
  __typename?: 'referendum_questions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "referendum_questions" */
export type Referendum_Questions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "referendum_questions". All fields are combined with a logical 'AND'. */
export type Referendum_Questions_Bool_Exp = {
  _and?: Maybe<Array<Referendum_Questions_Bool_Exp>>;
  _not?: Maybe<Referendum_Questions_Bool_Exp>;
  _or?: Maybe<Array<Referendum_Questions_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  referendumId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "referendum_questions" */
export enum Referendum_Questions_Constraint {
  /** unique or primary key constraint */
  ReferendumRowsPkey = 'referendum_rows_pkey'
}

/** input type for incrementing numeric columns in table "referendum_questions" */
export type Referendum_Questions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendum_questions" */
export type Referendum_Questions_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Referendum_Questions_Max_Fields = {
  __typename?: 'referendum_questions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "referendum_questions" */
export type Referendum_Questions_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Referendum_Questions_Min_Fields = {
  __typename?: 'referendum_questions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "referendum_questions" */
export type Referendum_Questions_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "referendum_questions" */
export type Referendum_Questions_Mutation_Response = {
  __typename?: 'referendum_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Referendum_Questions>;
};

/** on conflict condition type for table "referendum_questions" */
export type Referendum_Questions_On_Conflict = {
  constraint: Referendum_Questions_Constraint;
  update_columns: Array<Referendum_Questions_Update_Column>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "referendum_questions". */
export type Referendum_Questions_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: referendum_questions */
export type Referendum_Questions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "referendum_questions" */
export enum Referendum_Questions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ReferendumId = 'referendumId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "referendum_questions" */
export type Referendum_Questions_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Referendum_Questions_Stddev_Fields = {
  __typename?: 'referendum_questions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "referendum_questions" */
export type Referendum_Questions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Referendum_Questions_Stddev_Pop_Fields = {
  __typename?: 'referendum_questions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "referendum_questions" */
export type Referendum_Questions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Referendum_Questions_Stddev_Samp_Fields = {
  __typename?: 'referendum_questions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "referendum_questions" */
export type Referendum_Questions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Referendum_Questions_Sum_Fields = {
  __typename?: 'referendum_questions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "referendum_questions" */
export type Referendum_Questions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** update columns of table "referendum_questions" */
export enum Referendum_Questions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ReferendumId = 'referendumId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Referendum_Questions_Var_Pop_Fields = {
  __typename?: 'referendum_questions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "referendum_questions" */
export type Referendum_Questions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Referendum_Questions_Var_Samp_Fields = {
  __typename?: 'referendum_questions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "referendum_questions" */
export type Referendum_Questions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Referendum_Questions_Variance_Fields = {
  __typename?: 'referendum_questions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "referendum_questions" */
export type Referendum_Questions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** columns and relationships of "referendum_votes" */
export type Referendum_Votes = {
  __typename?: 'referendum_votes';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  referendumQuestionId: Scalars['Int'];
  sectionId?: Maybe<Scalars['Int']>;
  vote: Scalars['Boolean'];
};

/** aggregated selection of "referendum_votes" */
export type Referendum_Votes_Aggregate = {
  __typename?: 'referendum_votes_aggregate';
  aggregate?: Maybe<Referendum_Votes_Aggregate_Fields>;
  nodes: Array<Referendum_Votes>;
};

/** aggregate fields of "referendum_votes" */
export type Referendum_Votes_Aggregate_Fields = {
  __typename?: 'referendum_votes_aggregate_fields';
  avg?: Maybe<Referendum_Votes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Referendum_Votes_Max_Fields>;
  min?: Maybe<Referendum_Votes_Min_Fields>;
  stddev?: Maybe<Referendum_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Referendum_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Referendum_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Referendum_Votes_Sum_Fields>;
  var_pop?: Maybe<Referendum_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Referendum_Votes_Var_Samp_Fields>;
  variance?: Maybe<Referendum_Votes_Variance_Fields>;
};


/** aggregate fields of "referendum_votes" */
export type Referendum_Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Referendum_Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Referendum_Votes_Avg_Fields = {
  __typename?: 'referendum_votes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "referendum_votes". All fields are combined with a logical 'AND'. */
export type Referendum_Votes_Bool_Exp = {
  _and?: Maybe<Array<Referendum_Votes_Bool_Exp>>;
  _not?: Maybe<Referendum_Votes_Bool_Exp>;
  _or?: Maybe<Array<Referendum_Votes_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  referendumQuestionId?: Maybe<Int_Comparison_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  vote?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "referendum_votes" */
export enum Referendum_Votes_Constraint {
  /** unique or primary key constraint */
  ReferendumVotesPkey = 'referendum_votes_pkey'
}

/** input type for incrementing numeric columns in table "referendum_votes" */
export type Referendum_Votes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  referendumQuestionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendum_votes" */
export type Referendum_Votes_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumQuestionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Referendum_Votes_Max_Fields = {
  __typename?: 'referendum_votes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumQuestionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Referendum_Votes_Min_Fields = {
  __typename?: 'referendum_votes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumQuestionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "referendum_votes" */
export type Referendum_Votes_Mutation_Response = {
  __typename?: 'referendum_votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Referendum_Votes>;
};

/** on conflict condition type for table "referendum_votes" */
export type Referendum_Votes_On_Conflict = {
  constraint: Referendum_Votes_Constraint;
  update_columns: Array<Referendum_Votes_Update_Column>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "referendum_votes". */
export type Referendum_Votes_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  referendumQuestionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  vote?: Maybe<Order_By>;
};

/** primary key columns input for table: referendum_votes */
export type Referendum_Votes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "referendum_votes" */
export enum Referendum_Votes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferendumQuestionId = 'referendumQuestionId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "referendum_votes" */
export type Referendum_Votes_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumQuestionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Referendum_Votes_Stddev_Fields = {
  __typename?: 'referendum_votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Referendum_Votes_Stddev_Pop_Fields = {
  __typename?: 'referendum_votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Referendum_Votes_Stddev_Samp_Fields = {
  __typename?: 'referendum_votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Referendum_Votes_Sum_Fields = {
  __typename?: 'referendum_votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  referendumQuestionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "referendum_votes" */
export enum Referendum_Votes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferendumQuestionId = 'referendumQuestionId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  Vote = 'vote'
}

/** aggregate var_pop on columns */
export type Referendum_Votes_Var_Pop_Fields = {
  __typename?: 'referendum_votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Referendum_Votes_Var_Samp_Fields = {
  __typename?: 'referendum_votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Referendum_Votes_Variance_Fields = {
  __typename?: 'referendum_votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  referendumQuestionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "referendums" */
export type Referendums = {
  __typename?: 'referendums';
  createdAt: Scalars['timestamp'];
  description: Scalars['String'];
  endTime: Scalars['timestamptz'];
  finishedAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  municipalityId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  /** An array relationship */
  referendumRows: Array<Referendum_Questions>;
  /** An aggregate relationship */
  referendumRows_aggregate: Referendum_Questions_Aggregate;
  startTime: Scalars['timestamptz'];
  startedAt: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "referendums" */
export type ReferendumsReferendumRowsArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};


/** columns and relationships of "referendums" */
export type ReferendumsReferendumRows_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};

/** aggregated selection of "referendums" */
export type Referendums_Aggregate = {
  __typename?: 'referendums_aggregate';
  aggregate?: Maybe<Referendums_Aggregate_Fields>;
  nodes: Array<Referendums>;
};

/** aggregate fields of "referendums" */
export type Referendums_Aggregate_Fields = {
  __typename?: 'referendums_aggregate_fields';
  avg?: Maybe<Referendums_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Referendums_Max_Fields>;
  min?: Maybe<Referendums_Min_Fields>;
  stddev?: Maybe<Referendums_Stddev_Fields>;
  stddev_pop?: Maybe<Referendums_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Referendums_Stddev_Samp_Fields>;
  sum?: Maybe<Referendums_Sum_Fields>;
  var_pop?: Maybe<Referendums_Var_Pop_Fields>;
  var_samp?: Maybe<Referendums_Var_Samp_Fields>;
  variance?: Maybe<Referendums_Variance_Fields>;
};


/** aggregate fields of "referendums" */
export type Referendums_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Referendums_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Referendums_Avg_Fields = {
  __typename?: 'referendums_avg_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "referendums". All fields are combined with a logical 'AND'. */
export type Referendums_Bool_Exp = {
  _and?: Maybe<Array<Referendums_Bool_Exp>>;
  _not?: Maybe<Referendums_Bool_Exp>;
  _or?: Maybe<Array<Referendums_Bool_Exp>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  endTime?: Maybe<Timestamptz_Comparison_Exp>;
  finishedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  municipalityId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  referendumRows?: Maybe<Referendum_Questions_Bool_Exp>;
  startTime?: Maybe<Timestamptz_Comparison_Exp>;
  startedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "referendums" */
export enum Referendums_Constraint {
  /** unique or primary key constraint */
  ReferendumsNameKey = 'referendums_name_key',
  /** unique or primary key constraint */
  ReferendumsPkey = 'referendums_pkey'
}

/** input type for incrementing numeric columns in table "referendums" */
export type Referendums_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendums" */
export type Referendums_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumRows?: Maybe<Referendum_Questions_Arr_Rel_Insert_Input>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Referendums_Max_Fields = {
  __typename?: 'referendums_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Referendums_Min_Fields = {
  __typename?: 'referendums_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "referendums" */
export type Referendums_Mutation_Response = {
  __typename?: 'referendums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Referendums>;
};

/** on conflict condition type for table "referendums" */
export type Referendums_On_Conflict = {
  constraint: Referendums_Constraint;
  update_columns: Array<Referendums_Update_Column>;
  where?: Maybe<Referendums_Bool_Exp>;
};

/** Ordering options when selecting data from "referendums". */
export type Referendums_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalityId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumRows_aggregate?: Maybe<Referendum_Questions_Aggregate_Order_By>;
  startTime?: Maybe<Order_By>;
  startedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: referendums */
export type Referendums_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "referendums" */
export enum Referendums_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  EndTime = 'endTime',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalityId = 'municipalityId',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "referendums" */
export type Referendums_Set_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Referendums_Stddev_Fields = {
  __typename?: 'referendums_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Referendums_Stddev_Pop_Fields = {
  __typename?: 'referendums_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Referendums_Stddev_Samp_Fields = {
  __typename?: 'referendums_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Referendums_Sum_Fields = {
  __typename?: 'referendums_sum_fields';
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
};

/** update columns of table "referendums" */
export enum Referendums_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  EndTime = 'endTime',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalityId = 'municipalityId',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Referendums_Var_Pop_Fields = {
  __typename?: 'referendums_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Referendums_Var_Samp_Fields = {
  __typename?: 'referendums_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Referendums_Variance_Fields = {
  __typename?: 'referendums_variance_fields';
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  displayValue: Scalars['String'];
  id: Scalars['Int'];
  value: Scalars['String'];
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  avg?: Maybe<Roles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
  stddev?: Maybe<Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Roles_Sum_Fields>;
  var_pop?: Maybe<Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Roles_Var_Samp_Fields>;
  variance?: Maybe<Roles_Variance_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Roles_Avg_Fields = {
  __typename?: 'roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Roles_Bool_Exp>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Roles_Bool_Exp>>;
  displayValue?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey',
  /** unique or primary key constraint */
  RolesValueKey = 'roles_value_key'
}

/** input type for incrementing numeric columns in table "roles" */
export type Roles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  displayValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  displayValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  displayValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  displayValue?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  DisplayValue = 'displayValue',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  displayValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Roles_Stddev_Fields = {
  __typename?: 'roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Roles_Stddev_Pop_Fields = {
  __typename?: 'roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Roles_Stddev_Samp_Fields = {
  __typename?: 'roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Roles_Sum_Fields = {
  __typename?: 'roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  DisplayValue = 'displayValue',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Roles_Var_Pop_Fields = {
  __typename?: 'roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Roles_Var_Samp_Fields = {
  __typename?: 'roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Roles_Variance_Fields = {
  __typename?: 'roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "settlements" */
export type Settlements = {
  __typename?: 'settlements';
  id: Scalars['Int'];
  isDistrict: Scalars['Boolean'];
  isMunicipality: Scalars['Boolean'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  parentSettlement?: Maybe<Settlements>;
  /** fetch data from the table: "settlements" */
  settlements: Array<Settlements>;
  /** An aggregate relationship */
  settlements_aggregate: Settlements_Aggregate;
};


/** columns and relationships of "settlements" */
export type SettlementsSettlementsArgs = {
  distinct_on?: Maybe<Array<Settlements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Settlements_Order_By>>;
  where?: Maybe<Settlements_Bool_Exp>;
};


/** columns and relationships of "settlements" */
export type SettlementsSettlements_AggregateArgs = {
  distinct_on?: Maybe<Array<Settlements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Settlements_Order_By>>;
  where?: Maybe<Settlements_Bool_Exp>;
};

/** aggregated selection of "settlements" */
export type Settlements_Aggregate = {
  __typename?: 'settlements_aggregate';
  aggregate?: Maybe<Settlements_Aggregate_Fields>;
  nodes: Array<Settlements>;
};

/** aggregate fields of "settlements" */
export type Settlements_Aggregate_Fields = {
  __typename?: 'settlements_aggregate_fields';
  avg?: Maybe<Settlements_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Settlements_Max_Fields>;
  min?: Maybe<Settlements_Min_Fields>;
  stddev?: Maybe<Settlements_Stddev_Fields>;
  stddev_pop?: Maybe<Settlements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Settlements_Stddev_Samp_Fields>;
  sum?: Maybe<Settlements_Sum_Fields>;
  var_pop?: Maybe<Settlements_Var_Pop_Fields>;
  var_samp?: Maybe<Settlements_Var_Samp_Fields>;
  variance?: Maybe<Settlements_Variance_Fields>;
};


/** aggregate fields of "settlements" */
export type Settlements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Settlements_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "settlements" */
export type Settlements_Aggregate_Order_By = {
  avg?: Maybe<Settlements_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Settlements_Max_Order_By>;
  min?: Maybe<Settlements_Min_Order_By>;
  stddev?: Maybe<Settlements_Stddev_Order_By>;
  stddev_pop?: Maybe<Settlements_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Settlements_Stddev_Samp_Order_By>;
  sum?: Maybe<Settlements_Sum_Order_By>;
  var_pop?: Maybe<Settlements_Var_Pop_Order_By>;
  var_samp?: Maybe<Settlements_Var_Samp_Order_By>;
  variance?: Maybe<Settlements_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "settlements" */
export type Settlements_Arr_Rel_Insert_Input = {
  data: Array<Settlements_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Settlements_On_Conflict>;
};

/** aggregate avg on columns */
export type Settlements_Avg_Fields = {
  __typename?: 'settlements_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "settlements" */
export type Settlements_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "settlements". All fields are combined with a logical 'AND'. */
export type Settlements_Bool_Exp = {
  _and?: Maybe<Array<Settlements_Bool_Exp>>;
  _not?: Maybe<Settlements_Bool_Exp>;
  _or?: Maybe<Array<Settlements_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  isDistrict?: Maybe<Boolean_Comparison_Exp>;
  isMunicipality?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parentId?: Maybe<Int_Comparison_Exp>;
  parentSettlement?: Maybe<Settlements_Bool_Exp>;
  settlements?: Maybe<Settlements_Bool_Exp>;
};

/** unique or primary key constraints on table "settlements" */
export enum Settlements_Constraint {
  /** unique or primary key constraint */
  SettlementsPkey = 'settlements_pkey'
}

/** input type for incrementing numeric columns in table "settlements" */
export type Settlements_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "settlements" */
export type Settlements_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  isDistrict?: Maybe<Scalars['Boolean']>;
  isMunicipality?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  parentSettlement?: Maybe<Settlements_Obj_Rel_Insert_Input>;
  settlements?: Maybe<Settlements_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Settlements_Max_Fields = {
  __typename?: 'settlements_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "settlements" */
export type Settlements_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Settlements_Min_Fields = {
  __typename?: 'settlements_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "settlements" */
export type Settlements_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** response of any mutation on the table "settlements" */
export type Settlements_Mutation_Response = {
  __typename?: 'settlements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Settlements>;
};

/** input type for inserting object relation for remote table "settlements" */
export type Settlements_Obj_Rel_Insert_Input = {
  data: Settlements_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Settlements_On_Conflict>;
};

/** on conflict condition type for table "settlements" */
export type Settlements_On_Conflict = {
  constraint: Settlements_Constraint;
  update_columns: Array<Settlements_Update_Column>;
  where?: Maybe<Settlements_Bool_Exp>;
};

/** Ordering options when selecting data from "settlements". */
export type Settlements_Order_By = {
  id?: Maybe<Order_By>;
  isDistrict?: Maybe<Order_By>;
  isMunicipality?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  parentSettlement?: Maybe<Settlements_Order_By>;
  settlements_aggregate?: Maybe<Settlements_Aggregate_Order_By>;
};

/** primary key columns input for table: settlements */
export type Settlements_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "settlements" */
export enum Settlements_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDistrict = 'isDistrict',
  /** column name */
  IsMunicipality = 'isMunicipality',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId'
}

/** input type for updating data in table "settlements" */
export type Settlements_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  isDistrict?: Maybe<Scalars['Boolean']>;
  isMunicipality?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Settlements_Stddev_Fields = {
  __typename?: 'settlements_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "settlements" */
export type Settlements_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Settlements_Stddev_Pop_Fields = {
  __typename?: 'settlements_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "settlements" */
export type Settlements_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Settlements_Stddev_Samp_Fields = {
  __typename?: 'settlements_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "settlements" */
export type Settlements_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Settlements_Sum_Fields = {
  __typename?: 'settlements_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "settlements" */
export type Settlements_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** update columns of table "settlements" */
export enum Settlements_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDistrict = 'isDistrict',
  /** column name */
  IsMunicipality = 'isMunicipality',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId'
}

/** aggregate var_pop on columns */
export type Settlements_Var_Pop_Fields = {
  __typename?: 'settlements_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "settlements" */
export type Settlements_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Settlements_Var_Samp_Fields = {
  __typename?: 'settlements_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "settlements" */
export type Settlements_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Settlements_Variance_Fields = {
  __typename?: 'settlements_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "settlements" */
export type Settlements_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "candidate_lists" */
  candidate_lists: Array<Candidate_Lists>;
  /** fetch aggregated fields from the table: "candidate_lists" */
  candidate_lists_aggregate: Candidate_Lists_Aggregate;
  /** fetch data from the table: "candidate_lists" using primary key columns */
  candidate_lists_by_pk?: Maybe<Candidate_Lists>;
  /** fetch data from the table: "candidates" */
  candidates: Array<Candidates>;
  /** fetch aggregated fields from the table: "candidates" */
  candidates_aggregate: Candidates_Aggregate;
  /** fetch data from the table: "candidates" using primary key columns */
  candidates_by_pk?: Maybe<Candidates>;
  /** fetch data from the table: "commision_members" */
  commision_members: Array<Commision_Members>;
  /** fetch aggregated fields from the table: "commision_members" */
  commision_members_aggregate: Commision_Members_Aggregate;
  /** fetch data from the table: "commision_members" using primary key columns */
  commision_members_by_pk?: Maybe<Commision_Members>;
  /** fetch data from the table: "commissions" */
  commissions: Array<Commissions>;
  /** fetch aggregated fields from the table: "commissions" */
  commissions_aggregate: Commissions_Aggregate;
  /** fetch data from the table: "commissions" using primary key columns */
  commissions_by_pk?: Maybe<Commissions>;
  /** fetch data from the table: "electoral_roll_users" */
  electoral_roll_users: Array<Electoral_Roll_Users>;
  /** fetch aggregated fields from the table: "electoral_roll_users" */
  electoral_roll_users_aggregate: Electoral_Roll_Users_Aggregate;
  /** fetch data from the table: "electoral_roll_users" using primary key columns */
  electoral_roll_users_by_pk?: Maybe<Electoral_Roll_Users>;
  /** fetch data from the table: "electoral_rolls" */
  electoral_rolls: Array<Electoral_Rolls>;
  /** fetch aggregated fields from the table: "electoral_rolls" */
  electoral_rolls_aggregate: Electoral_Rolls_Aggregate;
  /** fetch data from the table: "electoral_rolls" using primary key columns */
  electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** fetch data from the table: "political_group_members" */
  political_group_members: Array<Political_Group_Members>;
  /** fetch aggregated fields from the table: "political_group_members" */
  political_group_members_aggregate: Political_Group_Members_Aggregate;
  /** fetch data from the table: "political_group_members" using primary key columns */
  political_group_members_by_pk?: Maybe<Political_Group_Members>;
  /** fetch data from the table: "political_group_types" */
  political_group_types: Array<Political_Group_Types>;
  /** fetch aggregated fields from the table: "political_group_types" */
  political_group_types_aggregate: Political_Group_Types_Aggregate;
  /** fetch data from the table: "political_group_types" using primary key columns */
  political_group_types_by_pk?: Maybe<Political_Group_Types>;
  /** fetch data from the table: "political_groups" */
  political_groups: Array<Political_Groups>;
  /** fetch aggregated fields from the table: "political_groups" */
  political_groups_aggregate: Political_Groups_Aggregate;
  /** fetch data from the table: "political_groups" using primary key columns */
  political_groups_by_pk?: Maybe<Political_Groups>;
  /** fetch data from the table: "referendum_questions" */
  referendum_questions: Array<Referendum_Questions>;
  /** fetch aggregated fields from the table: "referendum_questions" */
  referendum_questions_aggregate: Referendum_Questions_Aggregate;
  /** fetch data from the table: "referendum_questions" using primary key columns */
  referendum_questions_by_pk?: Maybe<Referendum_Questions>;
  /** fetch data from the table: "referendum_votes" */
  referendum_votes: Array<Referendum_Votes>;
  /** fetch aggregated fields from the table: "referendum_votes" */
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  /** fetch data from the table: "referendum_votes" using primary key columns */
  referendum_votes_by_pk?: Maybe<Referendum_Votes>;
  /** fetch data from the table: "referendums" */
  referendums: Array<Referendums>;
  /** fetch aggregated fields from the table: "referendums" */
  referendums_aggregate: Referendums_Aggregate;
  /** fetch data from the table: "referendums" using primary key columns */
  referendums_by_pk?: Maybe<Referendums>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "settlements" */
  settlements: Array<Settlements>;
  /** An aggregate relationship */
  settlements_aggregate: Settlements_Aggregate;
  /** fetch data from the table: "settlements" using primary key columns */
  settlements_by_pk?: Maybe<Settlements>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "votes" */
  votes: Array<Votes>;
  /** fetch aggregated fields from the table: "votes" */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
  /** fetch data from the table: "voting_section" */
  voting_section: Array<Voting_Section>;
  /** fetch aggregated fields from the table: "voting_section" */
  voting_section_aggregate: Voting_Section_Aggregate;
  /** fetch data from the table: "voting_section" using primary key columns */
  voting_section_by_pk?: Maybe<Voting_Section>;
  /** fetch data from the table: "voting_section_sessions" */
  voting_section_sessions: Array<Voting_Section_Sessions>;
  /** fetch aggregated fields from the table: "voting_section_sessions" */
  voting_section_sessions_aggregate: Voting_Section_Sessions_Aggregate;
  /** fetch data from the table: "voting_section_sessions" using primary key columns */
  voting_section_sessions_by_pk?: Maybe<Voting_Section_Sessions>;
  /** fetch data from the table: "voting_types" */
  voting_types: Array<Voting_Types>;
  /** fetch aggregated fields from the table: "voting_types" */
  voting_types_aggregate: Voting_Types_Aggregate;
  /** fetch data from the table: "voting_types" using primary key columns */
  voting_types_by_pk?: Maybe<Voting_Types>;
  /** fetch data from the table: "votings" */
  votings: Array<Votings>;
  /** fetch aggregated fields from the table: "votings" */
  votings_aggregate: Votings_Aggregate;
  /** fetch data from the table: "votings" using primary key columns */
  votings_by_pk?: Maybe<Votings>;
};


export type Subscription_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCandidate_ListsArgs = {
  distinct_on?: Maybe<Array<Candidate_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidate_Lists_Order_By>>;
  where?: Maybe<Candidate_Lists_Bool_Exp>;
};


export type Subscription_RootCandidate_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Candidate_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidate_Lists_Order_By>>;
  where?: Maybe<Candidate_Lists_Bool_Exp>;
};


export type Subscription_RootCandidate_Lists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCandidatesArgs = {
  distinct_on?: Maybe<Array<Candidates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidates_Order_By>>;
  where?: Maybe<Candidates_Bool_Exp>;
};


export type Subscription_RootCandidates_AggregateArgs = {
  distinct_on?: Maybe<Array<Candidates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Candidates_Order_By>>;
  where?: Maybe<Candidates_Bool_Exp>;
};


export type Subscription_RootCandidates_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommision_MembersArgs = {
  distinct_on?: Maybe<Array<Commision_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commision_Members_Order_By>>;
  where?: Maybe<Commision_Members_Bool_Exp>;
};


export type Subscription_RootCommision_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Commision_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commision_Members_Order_By>>;
  where?: Maybe<Commision_Members_Bool_Exp>;
};


export type Subscription_RootCommision_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommissionsArgs = {
  distinct_on?: Maybe<Array<Commissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commissions_Order_By>>;
  where?: Maybe<Commissions_Bool_Exp>;
};


export type Subscription_RootCommissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Commissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commissions_Order_By>>;
  where?: Maybe<Commissions_Bool_Exp>;
};


export type Subscription_RootCommissions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootElectoral_Roll_UsersArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Users_Order_By>>;
  where?: Maybe<Electoral_Roll_Users_Bool_Exp>;
};


export type Subscription_RootElectoral_Roll_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Users_Order_By>>;
  where?: Maybe<Electoral_Roll_Users_Bool_Exp>;
};


export type Subscription_RootElectoral_Roll_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootElectoral_RollsArgs = {
  distinct_on?: Maybe<Array<Electoral_Rolls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Rolls_Order_By>>;
  where?: Maybe<Electoral_Rolls_Bool_Exp>;
};


export type Subscription_RootElectoral_Rolls_AggregateArgs = {
  distinct_on?: Maybe<Array<Electoral_Rolls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Rolls_Order_By>>;
  where?: Maybe<Electoral_Rolls_Bool_Exp>;
};


export type Subscription_RootElectoral_Rolls_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPolitical_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


export type Subscription_RootPolitical_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


export type Subscription_RootPolitical_Group_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPolitical_Group_TypesArgs = {
  distinct_on?: Maybe<Array<Political_Group_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Types_Order_By>>;
  where?: Maybe<Political_Group_Types_Bool_Exp>;
};


export type Subscription_RootPolitical_Group_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Types_Order_By>>;
  where?: Maybe<Political_Group_Types_Bool_Exp>;
};


export type Subscription_RootPolitical_Group_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootPolitical_GroupsArgs = {
  distinct_on?: Maybe<Array<Political_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Groups_Order_By>>;
  where?: Maybe<Political_Groups_Bool_Exp>;
};


export type Subscription_RootPolitical_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Groups_Order_By>>;
  where?: Maybe<Political_Groups_Bool_Exp>;
};


export type Subscription_RootPolitical_Groups_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReferendum_QuestionsArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};


export type Subscription_RootReferendum_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};


export type Subscription_RootReferendum_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReferendum_VotesArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


export type Subscription_RootReferendum_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


export type Subscription_RootReferendum_Votes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReferendumsArgs = {
  distinct_on?: Maybe<Array<Referendums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendums_Order_By>>;
  where?: Maybe<Referendums_Bool_Exp>;
};


export type Subscription_RootReferendums_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendums_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendums_Order_By>>;
  where?: Maybe<Referendums_Bool_Exp>;
};


export type Subscription_RootReferendums_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSettlementsArgs = {
  distinct_on?: Maybe<Array<Settlements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Settlements_Order_By>>;
  where?: Maybe<Settlements_Bool_Exp>;
};


export type Subscription_RootSettlements_AggregateArgs = {
  distinct_on?: Maybe<Array<Settlements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Settlements_Order_By>>;
  where?: Maybe<Settlements_Bool_Exp>;
};


export type Subscription_RootSettlements_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVotesArgs = {
  distinct_on?: Maybe<Array<Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votes_Order_By>>;
  where?: Maybe<Votes_Bool_Exp>;
};


export type Subscription_RootVotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votes_Order_By>>;
  where?: Maybe<Votes_Bool_Exp>;
};


export type Subscription_RootVotes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVoting_SectionArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Order_By>>;
  where?: Maybe<Voting_Section_Bool_Exp>;
};


export type Subscription_RootVoting_Section_AggregateArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Order_By>>;
  where?: Maybe<Voting_Section_Bool_Exp>;
};


export type Subscription_RootVoting_Section_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVoting_Section_SessionsArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Sessions_Order_By>>;
  where?: Maybe<Voting_Section_Sessions_Bool_Exp>;
};


export type Subscription_RootVoting_Section_Sessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Voting_Section_Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Section_Sessions_Order_By>>;
  where?: Maybe<Voting_Section_Sessions_Bool_Exp>;
};


export type Subscription_RootVoting_Section_Sessions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVoting_TypesArgs = {
  distinct_on?: Maybe<Array<Voting_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Types_Order_By>>;
  where?: Maybe<Voting_Types_Bool_Exp>;
};


export type Subscription_RootVoting_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Voting_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Voting_Types_Order_By>>;
  where?: Maybe<Voting_Types_Bool_Exp>;
};


export type Subscription_RootVoting_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootVotingsArgs = {
  distinct_on?: Maybe<Array<Votings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votings_Order_By>>;
  where?: Maybe<Votings_Bool_Exp>;
};


export type Subscription_RootVotings_AggregateArgs = {
  distinct_on?: Maybe<Array<Votings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votings_Order_By>>;
  where?: Maybe<Votings_Bool_Exp>;
};


export type Subscription_RootVotings_By_PkArgs = {
  id: Scalars['Int'];
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  address: Addresses;
  addressId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  eVoted: Scalars['Boolean'];
  egn: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  family: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  /** An object relationship */
  role: Roles;
  roleId: Scalars['Int'];
  /** An object relationship */
  secondRole?: Maybe<Roles>;
  secondRoleId?: Maybe<Scalars['Int']>;
  surname: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  voted: Scalars['Boolean'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  address?: Maybe<Addresses_Bool_Exp>;
  addressId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  eVoted?: Maybe<Boolean_Comparison_Exp>;
  egn?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  family?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  pin?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  roleId?: Maybe<Int_Comparison_Exp>;
  secondRole?: Maybe<Roles_Bool_Exp>;
  secondRoleId?: Maybe<Int_Comparison_Exp>;
  surname?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  voted?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEgnKey = 'users_egn_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  eVoted?: Maybe<Scalars['Boolean']>;
  egn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  roleId?: Maybe<Scalars['Int']>;
  secondRole?: Maybe<Roles_Obj_Rel_Insert_Input>;
  secondRoleId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  voted?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  egn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  egn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: Maybe<Addresses_Order_By>;
  addressId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  eVoted?: Maybe<Order_By>;
  egn?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  roleId?: Maybe<Order_By>;
  secondRole?: Maybe<Roles_Order_By>;
  secondRoleId?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  voted?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EVoted = 'eVoted',
  /** column name */
  Egn = 'egn',
  /** column name */
  Email = 'email',
  /** column name */
  Family = 'family',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Pin = 'pin',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  SecondRoleId = 'secondRoleId',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Voted = 'voted'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  eVoted?: Maybe<Scalars['Boolean']>;
  egn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  voted?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EVoted = 'eVoted',
  /** column name */
  Egn = 'egn',
  /** column name */
  Email = 'email',
  /** column name */
  Family = 'family',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Pin = 'pin',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  SecondRoleId = 'secondRoleId',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Voted = 'voted'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "votes" */
export type Votes = {
  __typename?: 'votes';
  candidateId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId: Scalars['Int'];
};

/** aggregated selection of "votes" */
export type Votes_Aggregate = {
  __typename?: 'votes_aggregate';
  aggregate?: Maybe<Votes_Aggregate_Fields>;
  nodes: Array<Votes>;
};

/** aggregate fields of "votes" */
export type Votes_Aggregate_Fields = {
  __typename?: 'votes_aggregate_fields';
  avg?: Maybe<Votes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Votes_Max_Fields>;
  min?: Maybe<Votes_Min_Fields>;
  stddev?: Maybe<Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Votes_Sum_Fields>;
  var_pop?: Maybe<Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Votes_Var_Samp_Fields>;
  variance?: Maybe<Votes_Variance_Fields>;
};


/** aggregate fields of "votes" */
export type Votes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Votes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Votes_Avg_Fields = {
  __typename?: 'votes_avg_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "votes". All fields are combined with a logical 'AND'. */
export type Votes_Bool_Exp = {
  _and?: Maybe<Array<Votes_Bool_Exp>>;
  _not?: Maybe<Votes_Bool_Exp>;
  _or?: Maybe<Array<Votes_Bool_Exp>>;
  candidateId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  partyId?: Maybe<Int_Comparison_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  votingId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "votes" */
export enum Votes_Constraint {
  /** unique or primary key constraint */
  VotesPkey = 'votes_pkey'
}

/** input type for incrementing numeric columns in table "votes" */
export type Votes_Inc_Input = {
  candidateId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "votes" */
export type Votes_Insert_Input = {
  candidateId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Votes_Max_Fields = {
  __typename?: 'votes_max_fields';
  candidateId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Votes_Min_Fields = {
  __typename?: 'votes_min_fields';
  candidateId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "votes" */
export type Votes_Mutation_Response = {
  __typename?: 'votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Votes>;
};

/** on conflict condition type for table "votes" */
export type Votes_On_Conflict = {
  constraint: Votes_Constraint;
  update_columns: Array<Votes_Update_Column>;
  where?: Maybe<Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "votes". */
export type Votes_Order_By = {
  candidateId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  partyId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** primary key columns input for table: votes */
export type Votes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "votes" */
export enum Votes_Select_Column {
  /** column name */
  CandidateId = 'candidateId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PartyId = 'partyId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  VotingId = 'votingId'
}

/** input type for updating data in table "votes" */
export type Votes_Set_Input = {
  candidateId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Votes_Stddev_Fields = {
  __typename?: 'votes_stddev_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Votes_Stddev_Pop_Fields = {
  __typename?: 'votes_stddev_pop_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Votes_Stddev_Samp_Fields = {
  __typename?: 'votes_stddev_samp_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Votes_Sum_Fields = {
  __typename?: 'votes_sum_fields';
  candidateId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** update columns of table "votes" */
export enum Votes_Update_Column {
  /** column name */
  CandidateId = 'candidateId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PartyId = 'partyId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  VotingId = 'votingId'
}

/** aggregate var_pop on columns */
export type Votes_Var_Pop_Fields = {
  __typename?: 'votes_var_pop_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Votes_Var_Samp_Fields = {
  __typename?: 'votes_var_samp_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Votes_Variance_Fields = {
  __typename?: 'votes_variance_fields';
  candidateId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "voting_section" */
export type Voting_Section = {
  __typename?: 'voting_section';
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  openedAt?: Maybe<Scalars['timestamptz']>;
  settlementId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "voting_section" */
export type Voting_Section_Aggregate = {
  __typename?: 'voting_section_aggregate';
  aggregate?: Maybe<Voting_Section_Aggregate_Fields>;
  nodes: Array<Voting_Section>;
};

/** aggregate fields of "voting_section" */
export type Voting_Section_Aggregate_Fields = {
  __typename?: 'voting_section_aggregate_fields';
  avg?: Maybe<Voting_Section_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Voting_Section_Max_Fields>;
  min?: Maybe<Voting_Section_Min_Fields>;
  stddev?: Maybe<Voting_Section_Stddev_Fields>;
  stddev_pop?: Maybe<Voting_Section_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Voting_Section_Stddev_Samp_Fields>;
  sum?: Maybe<Voting_Section_Sum_Fields>;
  var_pop?: Maybe<Voting_Section_Var_Pop_Fields>;
  var_samp?: Maybe<Voting_Section_Var_Samp_Fields>;
  variance?: Maybe<Voting_Section_Variance_Fields>;
};


/** aggregate fields of "voting_section" */
export type Voting_Section_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Voting_Section_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Voting_Section_Avg_Fields = {
  __typename?: 'voting_section_avg_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "voting_section". All fields are combined with a logical 'AND'. */
export type Voting_Section_Bool_Exp = {
  _and?: Maybe<Array<Voting_Section_Bool_Exp>>;
  _not?: Maybe<Voting_Section_Bool_Exp>;
  _or?: Maybe<Array<Voting_Section_Bool_Exp>>;
  closedAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  openedAt?: Maybe<Timestamptz_Comparison_Exp>;
  settlementId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "voting_section" */
export enum Voting_Section_Constraint {
  /** unique or primary key constraint */
  VotingSectionPkey = 'voting_section_pkey'
}

/** input type for incrementing numeric columns in table "voting_section" */
export type Voting_Section_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "voting_section" */
export type Voting_Section_Insert_Input = {
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  settlementId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Voting_Section_Max_Fields = {
  __typename?: 'voting_section_max_fields';
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  settlementId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Voting_Section_Min_Fields = {
  __typename?: 'voting_section_min_fields';
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  settlementId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "voting_section" */
export type Voting_Section_Mutation_Response = {
  __typename?: 'voting_section_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Voting_Section>;
};

/** on conflict condition type for table "voting_section" */
export type Voting_Section_On_Conflict = {
  constraint: Voting_Section_Constraint;
  update_columns: Array<Voting_Section_Update_Column>;
  where?: Maybe<Voting_Section_Bool_Exp>;
};

/** Ordering options when selecting data from "voting_section". */
export type Voting_Section_Order_By = {
  closedAt?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  openedAt?: Maybe<Order_By>;
  settlementId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: voting_section */
export type Voting_Section_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voting_section" */
export enum Voting_Section_Select_Column {
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OpenedAt = 'openedAt',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "voting_section_sessions" */
export type Voting_Section_Sessions = {
  __typename?: 'voting_section_sessions';
  candidatesListId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamptz'];
  finishedAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  referendumId?: Maybe<Scalars['Int']>;
  sectionId: Scalars['Int'];
  startedAt: Scalars['timestamptz'];
  tour?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  votingId: Scalars['Int'];
};

/** aggregated selection of "voting_section_sessions" */
export type Voting_Section_Sessions_Aggregate = {
  __typename?: 'voting_section_sessions_aggregate';
  aggregate?: Maybe<Voting_Section_Sessions_Aggregate_Fields>;
  nodes: Array<Voting_Section_Sessions>;
};

/** aggregate fields of "voting_section_sessions" */
export type Voting_Section_Sessions_Aggregate_Fields = {
  __typename?: 'voting_section_sessions_aggregate_fields';
  avg?: Maybe<Voting_Section_Sessions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Voting_Section_Sessions_Max_Fields>;
  min?: Maybe<Voting_Section_Sessions_Min_Fields>;
  stddev?: Maybe<Voting_Section_Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Voting_Section_Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Voting_Section_Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Voting_Section_Sessions_Sum_Fields>;
  var_pop?: Maybe<Voting_Section_Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Voting_Section_Sessions_Var_Samp_Fields>;
  variance?: Maybe<Voting_Section_Sessions_Variance_Fields>;
};


/** aggregate fields of "voting_section_sessions" */
export type Voting_Section_Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Voting_Section_Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Voting_Section_Sessions_Avg_Fields = {
  __typename?: 'voting_section_sessions_avg_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "voting_section_sessions". All fields are combined with a logical 'AND'. */
export type Voting_Section_Sessions_Bool_Exp = {
  _and?: Maybe<Array<Voting_Section_Sessions_Bool_Exp>>;
  _not?: Maybe<Voting_Section_Sessions_Bool_Exp>;
  _or?: Maybe<Array<Voting_Section_Sessions_Bool_Exp>>;
  candidatesListId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  finishedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  referendumId?: Maybe<Int_Comparison_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  startedAt?: Maybe<Timestamptz_Comparison_Exp>;
  tour?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  votingId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "voting_section_sessions" */
export enum Voting_Section_Sessions_Constraint {
  /** unique or primary key constraint */
  VotingSectionSessionsPkey = 'voting_section_sessions_pkey'
}

/** input type for incrementing numeric columns in table "voting_section_sessions" */
export type Voting_Section_Sessions_Inc_Input = {
  candidatesListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  tour?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "voting_section_sessions" */
export type Voting_Section_Sessions_Insert_Input = {
  candidatesListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  tour?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Voting_Section_Sessions_Max_Fields = {
  __typename?: 'voting_section_sessions_max_fields';
  candidatesListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  tour?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Voting_Section_Sessions_Min_Fields = {
  __typename?: 'voting_section_sessions_min_fields';
  candidatesListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  tour?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "voting_section_sessions" */
export type Voting_Section_Sessions_Mutation_Response = {
  __typename?: 'voting_section_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Voting_Section_Sessions>;
};

/** on conflict condition type for table "voting_section_sessions" */
export type Voting_Section_Sessions_On_Conflict = {
  constraint: Voting_Section_Sessions_Constraint;
  update_columns: Array<Voting_Section_Sessions_Update_Column>;
  where?: Maybe<Voting_Section_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "voting_section_sessions". */
export type Voting_Section_Sessions_Order_By = {
  candidatesListId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  startedAt?: Maybe<Order_By>;
  tour?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** primary key columns input for table: voting_section_sessions */
export type Voting_Section_Sessions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voting_section_sessions" */
export enum Voting_Section_Sessions_Select_Column {
  /** column name */
  CandidatesListId = 'candidatesListId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferendumId = 'referendumId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  Tour = 'tour',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingId = 'votingId'
}

/** input type for updating data in table "voting_section_sessions" */
export type Voting_Section_Sessions_Set_Input = {
  candidatesListId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  tour?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Voting_Section_Sessions_Stddev_Fields = {
  __typename?: 'voting_section_sessions_stddev_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Voting_Section_Sessions_Stddev_Pop_Fields = {
  __typename?: 'voting_section_sessions_stddev_pop_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Voting_Section_Sessions_Stddev_Samp_Fields = {
  __typename?: 'voting_section_sessions_stddev_samp_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Voting_Section_Sessions_Sum_Fields = {
  __typename?: 'voting_section_sessions_sum_fields';
  candidatesListId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  tour?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** update columns of table "voting_section_sessions" */
export enum Voting_Section_Sessions_Update_Column {
  /** column name */
  CandidatesListId = 'candidatesListId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferendumId = 'referendumId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  Tour = 'tour',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingId = 'votingId'
}

/** aggregate var_pop on columns */
export type Voting_Section_Sessions_Var_Pop_Fields = {
  __typename?: 'voting_section_sessions_var_pop_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Voting_Section_Sessions_Var_Samp_Fields = {
  __typename?: 'voting_section_sessions_var_samp_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Voting_Section_Sessions_Variance_Fields = {
  __typename?: 'voting_section_sessions_variance_fields';
  candidatesListId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  tour?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** input type for updating data in table "voting_section" */
export type Voting_Section_Set_Input = {
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  settlementId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Voting_Section_Stddev_Fields = {
  __typename?: 'voting_section_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Voting_Section_Stddev_Pop_Fields = {
  __typename?: 'voting_section_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Voting_Section_Stddev_Samp_Fields = {
  __typename?: 'voting_section_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Voting_Section_Sum_Fields = {
  __typename?: 'voting_section_sum_fields';
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** update columns of table "voting_section" */
export enum Voting_Section_Update_Column {
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OpenedAt = 'openedAt',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Voting_Section_Var_Pop_Fields = {
  __typename?: 'voting_section_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Voting_Section_Var_Samp_Fields = {
  __typename?: 'voting_section_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Voting_Section_Variance_Fields = {
  __typename?: 'voting_section_variance_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "voting_types" */
export type Voting_Types = {
  __typename?: 'voting_types';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "voting_types" */
export type Voting_Types_Aggregate = {
  __typename?: 'voting_types_aggregate';
  aggregate?: Maybe<Voting_Types_Aggregate_Fields>;
  nodes: Array<Voting_Types>;
};

/** aggregate fields of "voting_types" */
export type Voting_Types_Aggregate_Fields = {
  __typename?: 'voting_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Voting_Types_Max_Fields>;
  min?: Maybe<Voting_Types_Min_Fields>;
};


/** aggregate fields of "voting_types" */
export type Voting_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Voting_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "voting_types". All fields are combined with a logical 'AND'. */
export type Voting_Types_Bool_Exp = {
  _and?: Maybe<Array<Voting_Types_Bool_Exp>>;
  _not?: Maybe<Voting_Types_Bool_Exp>;
  _or?: Maybe<Array<Voting_Types_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "voting_types" */
export enum Voting_Types_Constraint {
  /** unique or primary key constraint */
  VotingTypesPkey = 'voting_types_pkey',
  /** unique or primary key constraint */
  VotingTypesValueKey = 'voting_types_value_key'
}

export enum Voting_Types_Enum {
  /** Избори за местна власт */
  LocalGovernment = 'local_government',
  /** Местен референдум */
  LocalReferendum = 'local_referendum',
  /** Кметски избори в 2 тура */
  Mayoral = 'mayoral',
  /** Национален референдум */
  NationalReferendum = 'national_referendum',
  /** Парламентарни избори */
  Parliamentary = 'parliamentary',
  /** Президентски избори в 2 тура */
  Presidential = 'presidential'
}

/** Boolean expression to compare columns of type "voting_types_enum". All fields are combined with logical 'AND'. */
export type Voting_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Voting_Types_Enum>;
  _in?: Maybe<Array<Voting_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Voting_Types_Enum>;
  _nin?: Maybe<Array<Voting_Types_Enum>>;
};

/** input type for inserting data into table "voting_types" */
export type Voting_Types_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Voting_Types_Max_Fields = {
  __typename?: 'voting_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Voting_Types_Min_Fields = {
  __typename?: 'voting_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "voting_types" */
export type Voting_Types_Mutation_Response = {
  __typename?: 'voting_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Voting_Types>;
};

/** on conflict condition type for table "voting_types" */
export type Voting_Types_On_Conflict = {
  constraint: Voting_Types_Constraint;
  update_columns: Array<Voting_Types_Update_Column>;
  where?: Maybe<Voting_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "voting_types". */
export type Voting_Types_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: voting_types */
export type Voting_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "voting_types" */
export enum Voting_Types_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "voting_types" */
export type Voting_Types_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "voting_types" */
export enum Voting_Types_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "votings" */
export type Votings = {
  __typename?: 'votings';
  createdAt: Scalars['timestamptz'];
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  type: Voting_Types_Enum;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "votings" */
export type Votings_Aggregate = {
  __typename?: 'votings_aggregate';
  aggregate?: Maybe<Votings_Aggregate_Fields>;
  nodes: Array<Votings>;
};

/** aggregate fields of "votings" */
export type Votings_Aggregate_Fields = {
  __typename?: 'votings_aggregate_fields';
  avg?: Maybe<Votings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Votings_Max_Fields>;
  min?: Maybe<Votings_Min_Fields>;
  stddev?: Maybe<Votings_Stddev_Fields>;
  stddev_pop?: Maybe<Votings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Votings_Stddev_Samp_Fields>;
  sum?: Maybe<Votings_Sum_Fields>;
  var_pop?: Maybe<Votings_Var_Pop_Fields>;
  var_samp?: Maybe<Votings_Var_Samp_Fields>;
  variance?: Maybe<Votings_Variance_Fields>;
};


/** aggregate fields of "votings" */
export type Votings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Votings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Votings_Avg_Fields = {
  __typename?: 'votings_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "votings". All fields are combined with a logical 'AND'. */
export type Votings_Bool_Exp = {
  _and?: Maybe<Array<Votings_Bool_Exp>>;
  _not?: Maybe<Votings_Bool_Exp>;
  _or?: Maybe<Array<Votings_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  endTime?: Maybe<Timestamptz_Comparison_Exp>;
  finishedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  startTime?: Maybe<Timestamptz_Comparison_Exp>;
  startedAt?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<Voting_Types_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "votings" */
export enum Votings_Constraint {
  /** unique or primary key constraint */
  VotingsPkey = 'votings_pkey'
}

/** input type for incrementing numeric columns in table "votings" */
export type Votings_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "votings" */
export type Votings_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Voting_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Votings_Max_Fields = {
  __typename?: 'votings_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Votings_Min_Fields = {
  __typename?: 'votings_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "votings" */
export type Votings_Mutation_Response = {
  __typename?: 'votings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Votings>;
};

/** on conflict condition type for table "votings" */
export type Votings_On_Conflict = {
  constraint: Votings_Constraint;
  update_columns: Array<Votings_Update_Column>;
  where?: Maybe<Votings_Bool_Exp>;
};

/** Ordering options when selecting data from "votings". */
export type Votings_Order_By = {
  createdAt?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
  startedAt?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: votings */
export type Votings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "votings" */
export enum Votings_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndTime = 'endTime',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "votings" */
export type Votings_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Voting_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Votings_Stddev_Fields = {
  __typename?: 'votings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Votings_Stddev_Pop_Fields = {
  __typename?: 'votings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Votings_Stddev_Samp_Fields = {
  __typename?: 'votings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Votings_Sum_Fields = {
  __typename?: 'votings_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "votings" */
export enum Votings_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndTime = 'endTime',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Votings_Var_Pop_Fields = {
  __typename?: 'votings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Votings_Var_Samp_Fields = {
  __typename?: 'votings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Votings_Variance_Fields = {
  __typename?: 'votings_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetDistrictsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDistrictsQuery = (
  { __typename?: 'query_root' }
  & { settlements: Array<(
    { __typename?: 'settlements' }
    & { childs: (
      { __typename?: 'settlements_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'settlements_aggregate_fields' }
        & Pick<Settlements_Aggregate_Fields, 'count'>
      )> }
    ) }
    & SettlementsBaseFieldsFragment
  )> }
);

export type SettlementsBaseFieldsFragment = (
  { __typename?: 'settlements' }
  & Pick<Settlements, 'id' | 'parentId' | 'name' | 'isDistrict' | 'isMunicipality'>
);

export type GetUsersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Users_Bool_Exp;
  orderBy?: Maybe<Array<Users_Order_By> | Users_Order_By>;
}>;


export type GetUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )>, users_aggregate: (
    { __typename?: 'users_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'users_aggregate_fields' }
      & Pick<Users_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  set: Users_Set_Input;
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'createdAt' | 'updatedAt' | 'roleId' | 'secondRoleId' | 'name' | 'surname' | 'family' | 'egn' | 'email' | 'pin' | 'password' | 'addressId' | 'voted' | 'eVoted'>
  & { address: (
    { __typename?: 'addresses' }
    & Pick<Addresses, 'id' | 'settlementId' | 'districtId' | 'number' | 'street'>
  ) }
);

export const SettlementsBaseFieldsFragmentDoc = gql`
    fragment SettlementsBaseFields on settlements {
  id
  parentId
  name
  isDistrict
  isMunicipality
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on users {
  id
  createdAt
  updatedAt
  roleId
  secondRoleId
  name
  surname
  family
  egn
  email
  pin
  password
  addressId
  voted
  eVoted
  address {
    id
    settlementId
    districtId
    number
    street
  }
}
    `;
export const GetDistrictsDocument = gql`
    query GetDistricts {
  settlements(where: {isDistrict: {_eq: true}}) {
    ...SettlementsBaseFields
    childs: settlements_aggregate {
      aggregate {
        count
      }
    }
  }
}
    ${SettlementsBaseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDistrictsGQL extends Apollo.Query<GetDistrictsQuery, GetDistrictsQueryVariables> {
    document = GetDistrictsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUsersDocument = gql`
    query GetUsers($limit: Int, $offset: Int, $condition: users_bool_exp! = {}, $orderBy: [users_order_by!] = {createdAt: desc}) {
  users(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...UserFields
  }
  users_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation CreateUser($input: users_insert_input!) {
  insert_users_one(object: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $set: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $set) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }