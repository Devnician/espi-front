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
  cityId: Scalars['Int'];
  id: Scalars['Int'];
  municipalityId: Scalars['Int'];
  number: Scalars['Int'];
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
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Addresses_Bool_Exp>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Addresses_Bool_Exp>>;
  cityId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  municipalityId?: Maybe<Int_Comparison_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey'
}

/** input type for incrementing numeric columns in table "addresses" */
export type Addresses_Inc_Input = {
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields';
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields';
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
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
  cityId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalityId?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
};

/** primary key columns input for table: addresses */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  CityId = 'cityId',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalityId = 'municipalityId',
  /** column name */
  Number = 'number',
  /** column name */
  Street = 'street'
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields';
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  CityId = 'cityId',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalityId = 'municipalityId',
  /** column name */
  Number = 'number',
  /** column name */
  Street = 'street'
}

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: 'addresses_var_pop_fields';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "electoral_roll_rows" */
export type Electoral_Roll_Rows = {
  __typename?: 'electoral_roll_rows';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  electoralRollId: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  party?: Maybe<Parties>;
  partyId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "electoral_roll_rows" */
export type Electoral_Roll_Rows_Aggregate = {
  __typename?: 'electoral_roll_rows_aggregate';
  aggregate?: Maybe<Electoral_Roll_Rows_Aggregate_Fields>;
  nodes: Array<Electoral_Roll_Rows>;
};

/** aggregate fields of "electoral_roll_rows" */
export type Electoral_Roll_Rows_Aggregate_Fields = {
  __typename?: 'electoral_roll_rows_aggregate_fields';
  avg?: Maybe<Electoral_Roll_Rows_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Electoral_Roll_Rows_Max_Fields>;
  min?: Maybe<Electoral_Roll_Rows_Min_Fields>;
  stddev?: Maybe<Electoral_Roll_Rows_Stddev_Fields>;
  stddev_pop?: Maybe<Electoral_Roll_Rows_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Electoral_Roll_Rows_Stddev_Samp_Fields>;
  sum?: Maybe<Electoral_Roll_Rows_Sum_Fields>;
  var_pop?: Maybe<Electoral_Roll_Rows_Var_Pop_Fields>;
  var_samp?: Maybe<Electoral_Roll_Rows_Var_Samp_Fields>;
  variance?: Maybe<Electoral_Roll_Rows_Variance_Fields>;
};


/** aggregate fields of "electoral_roll_rows" */
export type Electoral_Roll_Rows_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Electoral_Roll_Rows_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Electoral_Roll_Rows_Avg_Fields = {
  __typename?: 'electoral_roll_rows_avg_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "electoral_roll_rows". All fields are combined with a logical 'AND'. */
export type Electoral_Roll_Rows_Bool_Exp = {
  _and?: Maybe<Array<Electoral_Roll_Rows_Bool_Exp>>;
  _not?: Maybe<Electoral_Roll_Rows_Bool_Exp>;
  _or?: Maybe<Array<Electoral_Roll_Rows_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  electoralRollId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  party?: Maybe<Parties_Bool_Exp>;
  partyId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "electoral_roll_rows" */
export enum Electoral_Roll_Rows_Constraint {
  /** unique or primary key constraint */
  ElectoralRollRowsPkey = 'electoral_roll_rows_pkey'
}

/** input type for incrementing numeric columns in table "electoral_roll_rows" */
export type Electoral_Roll_Rows_Inc_Input = {
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "electoral_roll_rows" */
export type Electoral_Roll_Rows_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  party?: Maybe<Parties_Obj_Rel_Insert_Input>;
  partyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Electoral_Roll_Rows_Max_Fields = {
  __typename?: 'electoral_roll_rows_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Electoral_Roll_Rows_Min_Fields = {
  __typename?: 'electoral_roll_rows_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "electoral_roll_rows" */
export type Electoral_Roll_Rows_Mutation_Response = {
  __typename?: 'electoral_roll_rows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Electoral_Roll_Rows>;
};

/** on conflict condition type for table "electoral_roll_rows" */
export type Electoral_Roll_Rows_On_Conflict = {
  constraint: Electoral_Roll_Rows_Constraint;
  update_columns: Array<Electoral_Roll_Rows_Update_Column>;
  where?: Maybe<Electoral_Roll_Rows_Bool_Exp>;
};

/** Ordering options when selecting data from "electoral_roll_rows". */
export type Electoral_Roll_Rows_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  electoralRollId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  party?: Maybe<Parties_Order_By>;
  partyId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: electoral_roll_rows */
export type Electoral_Roll_Rows_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "electoral_roll_rows" */
export enum Electoral_Roll_Rows_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ElectoralRollId = 'electoralRollId',
  /** column name */
  Id = 'id',
  /** column name */
  PartyId = 'partyId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "electoral_roll_rows" */
export type Electoral_Roll_Rows_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Electoral_Roll_Rows_Stddev_Fields = {
  __typename?: 'electoral_roll_rows_stddev_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Electoral_Roll_Rows_Stddev_Pop_Fields = {
  __typename?: 'electoral_roll_rows_stddev_pop_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Electoral_Roll_Rows_Stddev_Samp_Fields = {
  __typename?: 'electoral_roll_rows_stddev_samp_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Electoral_Roll_Rows_Sum_Fields = {
  __typename?: 'electoral_roll_rows_sum_fields';
  electoralRollId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "electoral_roll_rows" */
export enum Electoral_Roll_Rows_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ElectoralRollId = 'electoralRollId',
  /** column name */
  Id = 'id',
  /** column name */
  PartyId = 'partyId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Electoral_Roll_Rows_Var_Pop_Fields = {
  __typename?: 'electoral_roll_rows_var_pop_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Electoral_Roll_Rows_Var_Samp_Fields = {
  __typename?: 'electoral_roll_rows_var_samp_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Electoral_Roll_Rows_Variance_Fields = {
  __typename?: 'electoral_roll_rows_variance_fields';
  electoralRollId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  partyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "electoral_rolls" */
export type Electoral_Rolls = {
  __typename?: 'electoral_rolls';
  closedAt: Scalars['timestamptz'];
  closedBy: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  municipalityId?: Maybe<Scalars['Int']>;
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
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "electoral_rolls". All fields are combined with a logical 'AND'. */
export type Electoral_Rolls_Bool_Exp = {
  _and?: Maybe<Array<Electoral_Rolls_Bool_Exp>>;
  _not?: Maybe<Electoral_Rolls_Bool_Exp>;
  _or?: Maybe<Array<Electoral_Rolls_Bool_Exp>>;
  closedAt?: Maybe<Timestamptz_Comparison_Exp>;
  closedBy?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  municipalityId?: Maybe<Int_Comparison_Exp>;
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
  closedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "electoral_rolls" */
export type Electoral_Rolls_Insert_Input = {
  closedAt?: Maybe<Scalars['timestamptz']>;
  closedBy?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Electoral_Rolls_Max_Fields = {
  __typename?: 'electoral_rolls_max_fields';
  closedAt?: Maybe<Scalars['timestamptz']>;
  closedBy?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Electoral_Rolls_Min_Fields = {
  __typename?: 'electoral_rolls_min_fields';
  closedAt?: Maybe<Scalars['timestamptz']>;
  closedBy?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
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
  closedAt?: Maybe<Order_By>;
  closedBy?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalityId?: Maybe<Order_By>;
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
  ClosedAt = 'closedAt',
  /** column name */
  ClosedBy = 'closedBy',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalityId = 'municipalityId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "electoral_rolls" */
export type Electoral_Rolls_Set_Input = {
  closedAt?: Maybe<Scalars['timestamptz']>;
  closedBy?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Electoral_Rolls_Stddev_Fields = {
  __typename?: 'electoral_rolls_stddev_fields';
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Electoral_Rolls_Stddev_Pop_Fields = {
  __typename?: 'electoral_rolls_stddev_pop_fields';
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Electoral_Rolls_Stddev_Samp_Fields = {
  __typename?: 'electoral_rolls_stddev_samp_fields';
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Electoral_Rolls_Sum_Fields = {
  __typename?: 'electoral_rolls_sum_fields';
  closedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  municipalityId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "electoral_rolls" */
export enum Electoral_Rolls_Update_Column {
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  ClosedBy = 'closedBy',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalityId = 'municipalityId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Electoral_Rolls_Var_Pop_Fields = {
  __typename?: 'electoral_rolls_var_pop_fields';
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Electoral_Rolls_Var_Samp_Fields = {
  __typename?: 'electoral_rolls_var_samp_fields';
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Electoral_Rolls_Variance_Fields = {
  __typename?: 'electoral_rolls_variance_fields';
  closedBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  municipalityId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "electoral_roll_rows" */
  delete_electoral_roll_rows?: Maybe<Electoral_Roll_Rows_Mutation_Response>;
  /** delete single row from the table: "electoral_roll_rows" */
  delete_electoral_roll_rows_by_pk?: Maybe<Electoral_Roll_Rows>;
  /** delete data from the table: "electoral_rolls" */
  delete_electoral_rolls?: Maybe<Electoral_Rolls_Mutation_Response>;
  /** delete single row from the table: "electoral_rolls" */
  delete_electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** delete data from the table: "parties" */
  delete_parties?: Maybe<Parties_Mutation_Response>;
  /** delete single row from the table: "parties" */
  delete_parties_by_pk?: Maybe<Parties>;
  /** delete data from the table: "referendum_rows" */
  delete_referendum_rows?: Maybe<Referendum_Rows_Mutation_Response>;
  /** delete single row from the table: "referendum_rows" */
  delete_referendum_rows_by_pk?: Maybe<Referendum_Rows>;
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
  /** insert data into the table: "electoral_roll_rows" */
  insert_electoral_roll_rows?: Maybe<Electoral_Roll_Rows_Mutation_Response>;
  /** insert a single row into the table: "electoral_roll_rows" */
  insert_electoral_roll_rows_one?: Maybe<Electoral_Roll_Rows>;
  /** insert data into the table: "electoral_rolls" */
  insert_electoral_rolls?: Maybe<Electoral_Rolls_Mutation_Response>;
  /** insert a single row into the table: "electoral_rolls" */
  insert_electoral_rolls_one?: Maybe<Electoral_Rolls>;
  /** insert data into the table: "parties" */
  insert_parties?: Maybe<Parties_Mutation_Response>;
  /** insert a single row into the table: "parties" */
  insert_parties_one?: Maybe<Parties>;
  /** insert data into the table: "referendum_rows" */
  insert_referendum_rows?: Maybe<Referendum_Rows_Mutation_Response>;
  /** insert a single row into the table: "referendum_rows" */
  insert_referendum_rows_one?: Maybe<Referendum_Rows>;
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
  /** update data of the table: "electoral_roll_rows" */
  update_electoral_roll_rows?: Maybe<Electoral_Roll_Rows_Mutation_Response>;
  /** update single row of the table: "electoral_roll_rows" */
  update_electoral_roll_rows_by_pk?: Maybe<Electoral_Roll_Rows>;
  /** update data of the table: "electoral_rolls" */
  update_electoral_rolls?: Maybe<Electoral_Rolls_Mutation_Response>;
  /** update single row of the table: "electoral_rolls" */
  update_electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** update data of the table: "parties" */
  update_parties?: Maybe<Parties_Mutation_Response>;
  /** update single row of the table: "parties" */
  update_parties_by_pk?: Maybe<Parties>;
  /** update data of the table: "referendum_rows" */
  update_referendum_rows?: Maybe<Referendum_Rows_Mutation_Response>;
  /** update single row of the table: "referendum_rows" */
  update_referendum_rows_by_pk?: Maybe<Referendum_Rows>;
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
export type Mutation_RootDelete_Electoral_Roll_RowsArgs = {
  where: Electoral_Roll_Rows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Electoral_Roll_Rows_By_PkArgs = {
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
export type Mutation_RootDelete_PartiesArgs = {
  where: Parties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parties_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Referendum_RowsArgs = {
  where: Referendum_Rows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Referendum_Rows_By_PkArgs = {
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
export type Mutation_RootDelete_Voting_TypesArgs = {
  where: Voting_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Voting_Types_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_Electoral_Roll_RowsArgs = {
  objects: Array<Electoral_Roll_Rows_Insert_Input>;
  on_conflict?: Maybe<Electoral_Roll_Rows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Electoral_Roll_Rows_OneArgs = {
  object: Electoral_Roll_Rows_Insert_Input;
  on_conflict?: Maybe<Electoral_Roll_Rows_On_Conflict>;
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
export type Mutation_RootInsert_PartiesArgs = {
  objects: Array<Parties_Insert_Input>;
  on_conflict?: Maybe<Parties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parties_OneArgs = {
  object: Parties_Insert_Input;
  on_conflict?: Maybe<Parties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendum_RowsArgs = {
  objects: Array<Referendum_Rows_Insert_Input>;
  on_conflict?: Maybe<Referendum_Rows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Referendum_Rows_OneArgs = {
  object: Referendum_Rows_Insert_Input;
  on_conflict?: Maybe<Referendum_Rows_On_Conflict>;
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
export type Mutation_RootUpdate_Electoral_Roll_RowsArgs = {
  _inc?: Maybe<Electoral_Roll_Rows_Inc_Input>;
  _set?: Maybe<Electoral_Roll_Rows_Set_Input>;
  where: Electoral_Roll_Rows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Electoral_Roll_Rows_By_PkArgs = {
  _inc?: Maybe<Electoral_Roll_Rows_Inc_Input>;
  _set?: Maybe<Electoral_Roll_Rows_Set_Input>;
  pk_columns: Electoral_Roll_Rows_Pk_Columns_Input;
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
export type Mutation_RootUpdate_PartiesArgs = {
  _inc?: Maybe<Parties_Inc_Input>;
  _set?: Maybe<Parties_Set_Input>;
  where: Parties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parties_By_PkArgs = {
  _inc?: Maybe<Parties_Inc_Input>;
  _set?: Maybe<Parties_Set_Input>;
  pk_columns: Parties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Referendum_RowsArgs = {
  _inc?: Maybe<Referendum_Rows_Inc_Input>;
  _set?: Maybe<Referendum_Rows_Set_Input>;
  where: Referendum_Rows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Referendum_Rows_By_PkArgs = {
  _inc?: Maybe<Referendum_Rows_Inc_Input>;
  _set?: Maybe<Referendum_Rows_Set_Input>;
  pk_columns: Referendum_Rows_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Voting_TypesArgs = {
  _inc?: Maybe<Voting_Types_Inc_Input>;
  _set?: Maybe<Voting_Types_Set_Input>;
  where: Voting_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Voting_Types_By_PkArgs = {
  _inc?: Maybe<Voting_Types_Inc_Input>;
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

/** columns and relationships of "parties" */
export type Parties = {
  __typename?: 'parties';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "parties" */
export type Parties_Aggregate = {
  __typename?: 'parties_aggregate';
  aggregate?: Maybe<Parties_Aggregate_Fields>;
  nodes: Array<Parties>;
};

/** aggregate fields of "parties" */
export type Parties_Aggregate_Fields = {
  __typename?: 'parties_aggregate_fields';
  avg?: Maybe<Parties_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Parties_Max_Fields>;
  min?: Maybe<Parties_Min_Fields>;
  stddev?: Maybe<Parties_Stddev_Fields>;
  stddev_pop?: Maybe<Parties_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parties_Stddev_Samp_Fields>;
  sum?: Maybe<Parties_Sum_Fields>;
  var_pop?: Maybe<Parties_Var_Pop_Fields>;
  var_samp?: Maybe<Parties_Var_Samp_Fields>;
  variance?: Maybe<Parties_Variance_Fields>;
};


/** aggregate fields of "parties" */
export type Parties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parties_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Parties_Avg_Fields = {
  __typename?: 'parties_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "parties". All fields are combined with a logical 'AND'. */
export type Parties_Bool_Exp = {
  _and?: Maybe<Array<Parties_Bool_Exp>>;
  _not?: Maybe<Parties_Bool_Exp>;
  _or?: Maybe<Array<Parties_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "parties" */
export enum Parties_Constraint {
  /** unique or primary key constraint */
  PartiesNameKey = 'parties_name_key',
  /** unique or primary key constraint */
  PartiesPkey = 'parties_pkey'
}

/** input type for incrementing numeric columns in table "parties" */
export type Parties_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parties" */
export type Parties_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Parties_Max_Fields = {
  __typename?: 'parties_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Parties_Min_Fields = {
  __typename?: 'parties_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "parties" */
export type Parties_Mutation_Response = {
  __typename?: 'parties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parties>;
};

/** input type for inserting object relation for remote table "parties" */
export type Parties_Obj_Rel_Insert_Input = {
  data: Parties_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Parties_On_Conflict>;
};

/** on conflict condition type for table "parties" */
export type Parties_On_Conflict = {
  constraint: Parties_Constraint;
  update_columns: Array<Parties_Update_Column>;
  where?: Maybe<Parties_Bool_Exp>;
};

/** Ordering options when selecting data from "parties". */
export type Parties_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: parties */
export type Parties_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "parties" */
export enum Parties_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "parties" */
export type Parties_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Parties_Stddev_Fields = {
  __typename?: 'parties_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Parties_Stddev_Pop_Fields = {
  __typename?: 'parties_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Parties_Stddev_Samp_Fields = {
  __typename?: 'parties_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Parties_Sum_Fields = {
  __typename?: 'parties_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "parties" */
export enum Parties_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Parties_Var_Pop_Fields = {
  __typename?: 'parties_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Parties_Var_Samp_Fields = {
  __typename?: 'parties_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Parties_Variance_Fields = {
  __typename?: 'parties_variance_fields';
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
  /** fetch data from the table: "electoral_roll_rows" */
  electoral_roll_rows: Array<Electoral_Roll_Rows>;
  /** fetch aggregated fields from the table: "electoral_roll_rows" */
  electoral_roll_rows_aggregate: Electoral_Roll_Rows_Aggregate;
  /** fetch data from the table: "electoral_roll_rows" using primary key columns */
  electoral_roll_rows_by_pk?: Maybe<Electoral_Roll_Rows>;
  /** fetch data from the table: "electoral_rolls" */
  electoral_rolls: Array<Electoral_Rolls>;
  /** fetch aggregated fields from the table: "electoral_rolls" */
  electoral_rolls_aggregate: Electoral_Rolls_Aggregate;
  /** fetch data from the table: "electoral_rolls" using primary key columns */
  electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** fetch data from the table: "parties" */
  parties: Array<Parties>;
  /** fetch aggregated fields from the table: "parties" */
  parties_aggregate: Parties_Aggregate;
  /** fetch data from the table: "parties" using primary key columns */
  parties_by_pk?: Maybe<Parties>;
  /** fetch data from the table: "referendum_rows" */
  referendum_rows: Array<Referendum_Rows>;
  /** fetch aggregated fields from the table: "referendum_rows" */
  referendum_rows_aggregate: Referendum_Rows_Aggregate;
  /** fetch data from the table: "referendum_rows" using primary key columns */
  referendum_rows_by_pk?: Maybe<Referendum_Rows>;
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
  /** An aggregate relationship */
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
  /** fetch data from the table: "voting_types" */
  voting_types: Array<Voting_Types>;
  /** fetch aggregated fields from the table: "voting_types" */
  voting_types_aggregate: Voting_Types_Aggregate;
  /** fetch data from the table: "voting_types" using primary key columns */
  voting_types_by_pk?: Maybe<Voting_Types>;
  /** fetch data from the table: "votings" */
  votings: Array<Votings>;
  /** An aggregate relationship */
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


export type Query_RootElectoral_Roll_RowsArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Rows_Order_By>>;
  where?: Maybe<Electoral_Roll_Rows_Bool_Exp>;
};


export type Query_RootElectoral_Roll_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Rows_Order_By>>;
  where?: Maybe<Electoral_Roll_Rows_Bool_Exp>;
};


export type Query_RootElectoral_Roll_Rows_By_PkArgs = {
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


export type Query_RootPartiesArgs = {
  distinct_on?: Maybe<Array<Parties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parties_Order_By>>;
  where?: Maybe<Parties_Bool_Exp>;
};


export type Query_RootParties_AggregateArgs = {
  distinct_on?: Maybe<Array<Parties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parties_Order_By>>;
  where?: Maybe<Parties_Bool_Exp>;
};


export type Query_RootParties_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReferendum_RowsArgs = {
  distinct_on?: Maybe<Array<Referendum_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Rows_Order_By>>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
};


export type Query_RootReferendum_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Rows_Order_By>>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
};


export type Query_RootReferendum_Rows_By_PkArgs = {
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
  id: Scalars['Int'];
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

/** columns and relationships of "referendum_rows" */
export type Referendum_Rows = {
  __typename?: 'referendum_rows';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  referendumId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "referendum_rows" */
export type Referendum_Rows_Aggregate = {
  __typename?: 'referendum_rows_aggregate';
  aggregate?: Maybe<Referendum_Rows_Aggregate_Fields>;
  nodes: Array<Referendum_Rows>;
};

/** aggregate fields of "referendum_rows" */
export type Referendum_Rows_Aggregate_Fields = {
  __typename?: 'referendum_rows_aggregate_fields';
  avg?: Maybe<Referendum_Rows_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Referendum_Rows_Max_Fields>;
  min?: Maybe<Referendum_Rows_Min_Fields>;
  stddev?: Maybe<Referendum_Rows_Stddev_Fields>;
  stddev_pop?: Maybe<Referendum_Rows_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Referendum_Rows_Stddev_Samp_Fields>;
  sum?: Maybe<Referendum_Rows_Sum_Fields>;
  var_pop?: Maybe<Referendum_Rows_Var_Pop_Fields>;
  var_samp?: Maybe<Referendum_Rows_Var_Samp_Fields>;
  variance?: Maybe<Referendum_Rows_Variance_Fields>;
};


/** aggregate fields of "referendum_rows" */
export type Referendum_Rows_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Referendum_Rows_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "referendum_rows" */
export type Referendum_Rows_Aggregate_Order_By = {
  avg?: Maybe<Referendum_Rows_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Referendum_Rows_Max_Order_By>;
  min?: Maybe<Referendum_Rows_Min_Order_By>;
  stddev?: Maybe<Referendum_Rows_Stddev_Order_By>;
  stddev_pop?: Maybe<Referendum_Rows_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Referendum_Rows_Stddev_Samp_Order_By>;
  sum?: Maybe<Referendum_Rows_Sum_Order_By>;
  var_pop?: Maybe<Referendum_Rows_Var_Pop_Order_By>;
  var_samp?: Maybe<Referendum_Rows_Var_Samp_Order_By>;
  variance?: Maybe<Referendum_Rows_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "referendum_rows" */
export type Referendum_Rows_Arr_Rel_Insert_Input = {
  data: Array<Referendum_Rows_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Referendum_Rows_On_Conflict>;
};

/** aggregate avg on columns */
export type Referendum_Rows_Avg_Fields = {
  __typename?: 'referendum_rows_avg_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "referendum_rows" */
export type Referendum_Rows_Avg_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "referendum_rows". All fields are combined with a logical 'AND'. */
export type Referendum_Rows_Bool_Exp = {
  _and?: Maybe<Array<Referendum_Rows_Bool_Exp>>;
  _not?: Maybe<Referendum_Rows_Bool_Exp>;
  _or?: Maybe<Array<Referendum_Rows_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  referendumId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "referendum_rows" */
export enum Referendum_Rows_Constraint {
  /** unique or primary key constraint */
  ReferendumRowsPkey = 'referendum_rows_pkey'
}

/** input type for incrementing numeric columns in table "referendum_rows" */
export type Referendum_Rows_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendum_rows" */
export type Referendum_Rows_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Referendum_Rows_Max_Fields = {
  __typename?: 'referendum_rows_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "referendum_rows" */
export type Referendum_Rows_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Referendum_Rows_Min_Fields = {
  __typename?: 'referendum_rows_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "referendum_rows" */
export type Referendum_Rows_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "referendum_rows" */
export type Referendum_Rows_Mutation_Response = {
  __typename?: 'referendum_rows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Referendum_Rows>;
};

/** on conflict condition type for table "referendum_rows" */
export type Referendum_Rows_On_Conflict = {
  constraint: Referendum_Rows_Constraint;
  update_columns: Array<Referendum_Rows_Update_Column>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
};

/** Ordering options when selecting data from "referendum_rows". */
export type Referendum_Rows_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: referendum_rows */
export type Referendum_Rows_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "referendum_rows" */
export enum Referendum_Rows_Select_Column {
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

/** input type for updating data in table "referendum_rows" */
export type Referendum_Rows_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Referendum_Rows_Stddev_Fields = {
  __typename?: 'referendum_rows_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "referendum_rows" */
export type Referendum_Rows_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Referendum_Rows_Stddev_Pop_Fields = {
  __typename?: 'referendum_rows_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "referendum_rows" */
export type Referendum_Rows_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Referendum_Rows_Stddev_Samp_Fields = {
  __typename?: 'referendum_rows_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "referendum_rows" */
export type Referendum_Rows_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Referendum_Rows_Sum_Fields = {
  __typename?: 'referendum_rows_sum_fields';
  id?: Maybe<Scalars['Int']>;
  referendumId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "referendum_rows" */
export type Referendum_Rows_Sum_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** update columns of table "referendum_rows" */
export enum Referendum_Rows_Update_Column {
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
export type Referendum_Rows_Var_Pop_Fields = {
  __typename?: 'referendum_rows_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "referendum_rows" */
export type Referendum_Rows_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Referendum_Rows_Var_Samp_Fields = {
  __typename?: 'referendum_rows_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "referendum_rows" */
export type Referendum_Rows_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Referendum_Rows_Variance_Fields = {
  __typename?: 'referendum_rows_variance_fields';
  id?: Maybe<Scalars['Float']>;
  referendumId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "referendum_rows" */
export type Referendum_Rows_Variance_Order_By = {
  id?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
};

/** columns and relationships of "referendum_votes" */
export type Referendum_Votes = {
  __typename?: 'referendum_votes';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  referendumRowId: Scalars['Int'];
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
  referendumRowId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "referendum_votes". All fields are combined with a logical 'AND'. */
export type Referendum_Votes_Bool_Exp = {
  _and?: Maybe<Array<Referendum_Votes_Bool_Exp>>;
  _not?: Maybe<Referendum_Votes_Bool_Exp>;
  _or?: Maybe<Array<Referendum_Votes_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  referendumRowId?: Maybe<Int_Comparison_Exp>;
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
  referendumRowId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendum_votes" */
export type Referendum_Votes_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumRowId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Referendum_Votes_Max_Fields = {
  __typename?: 'referendum_votes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumRowId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Referendum_Votes_Min_Fields = {
  __typename?: 'referendum_votes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumRowId?: Maybe<Scalars['Int']>;
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
  referendumRowId?: Maybe<Order_By>;
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
  ReferendumRowId = 'referendumRowId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "referendum_votes" */
export type Referendum_Votes_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  referendumRowId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Referendum_Votes_Stddev_Fields = {
  __typename?: 'referendum_votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  referendumRowId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Referendum_Votes_Stddev_Pop_Fields = {
  __typename?: 'referendum_votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumRowId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Referendum_Votes_Stddev_Samp_Fields = {
  __typename?: 'referendum_votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumRowId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Referendum_Votes_Sum_Fields = {
  __typename?: 'referendum_votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  referendumRowId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "referendum_votes" */
export enum Referendum_Votes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferendumRowId = 'referendumRowId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  Vote = 'vote'
}

/** aggregate var_pop on columns */
export type Referendum_Votes_Var_Pop_Fields = {
  __typename?: 'referendum_votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  referendumRowId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Referendum_Votes_Var_Samp_Fields = {
  __typename?: 'referendum_votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  referendumRowId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Referendum_Votes_Variance_Fields = {
  __typename?: 'referendum_votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  referendumRowId?: Maybe<Scalars['Float']>;
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
  referendumRows: Array<Referendum_Rows>;
  /** An aggregate relationship */
  referendumRows_aggregate: Referendum_Rows_Aggregate;
  startTime: Scalars['timestamptz'];
  startedAt: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "referendums" */
export type ReferendumsReferendumRowsArgs = {
  distinct_on?: Maybe<Array<Referendum_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Rows_Order_By>>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
};


/** columns and relationships of "referendums" */
export type ReferendumsReferendumRows_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Rows_Order_By>>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
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
  referendumRows?: Maybe<Referendum_Rows_Bool_Exp>;
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
  referendumRows?: Maybe<Referendum_Rows_Arr_Rel_Insert_Input>;
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
  referendumRows_aggregate?: Maybe<Referendum_Rows_Aggregate_Order_By>;
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** An array relationship */
  usersWithSecondRole: Array<Users>;
  /** An aggregate relationship */
  usersWithSecondRole_aggregate: Users_Aggregate;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsersWithSecondRoleArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsersWithSecondRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
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
  users?: Maybe<Users_Bool_Exp>;
  usersWithSecondRole?: Maybe<Users_Bool_Exp>;
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
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
  usersWithSecondRole?: Maybe<Users_Arr_Rel_Insert_Input>;
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
  usersWithSecondRole_aggregate?: Maybe<Users_Aggregate_Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
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
  Name = 'name',
  /** column name */
  ParentId = 'parentId'
}

/** input type for updating data in table "settlements" */
export type Settlements_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  isDistrict?: Maybe<Scalars['Boolean']>;
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
  /** fetch data from the table: "electoral_roll_rows" */
  electoral_roll_rows: Array<Electoral_Roll_Rows>;
  /** fetch aggregated fields from the table: "electoral_roll_rows" */
  electoral_roll_rows_aggregate: Electoral_Roll_Rows_Aggregate;
  /** fetch data from the table: "electoral_roll_rows" using primary key columns */
  electoral_roll_rows_by_pk?: Maybe<Electoral_Roll_Rows>;
  /** fetch data from the table: "electoral_rolls" */
  electoral_rolls: Array<Electoral_Rolls>;
  /** fetch aggregated fields from the table: "electoral_rolls" */
  electoral_rolls_aggregate: Electoral_Rolls_Aggregate;
  /** fetch data from the table: "electoral_rolls" using primary key columns */
  electoral_rolls_by_pk?: Maybe<Electoral_Rolls>;
  /** fetch data from the table: "parties" */
  parties: Array<Parties>;
  /** fetch aggregated fields from the table: "parties" */
  parties_aggregate: Parties_Aggregate;
  /** fetch data from the table: "parties" using primary key columns */
  parties_by_pk?: Maybe<Parties>;
  /** fetch data from the table: "referendum_rows" */
  referendum_rows: Array<Referendum_Rows>;
  /** fetch aggregated fields from the table: "referendum_rows" */
  referendum_rows_aggregate: Referendum_Rows_Aggregate;
  /** fetch data from the table: "referendum_rows" using primary key columns */
  referendum_rows_by_pk?: Maybe<Referendum_Rows>;
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
  /** An aggregate relationship */
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
  /** fetch data from the table: "voting_types" */
  voting_types: Array<Voting_Types>;
  /** fetch aggregated fields from the table: "voting_types" */
  voting_types_aggregate: Voting_Types_Aggregate;
  /** fetch data from the table: "voting_types" using primary key columns */
  voting_types_by_pk?: Maybe<Voting_Types>;
  /** fetch data from the table: "votings" */
  votings: Array<Votings>;
  /** An aggregate relationship */
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


export type Subscription_RootElectoral_Roll_RowsArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Rows_Order_By>>;
  where?: Maybe<Electoral_Roll_Rows_Bool_Exp>;
};


export type Subscription_RootElectoral_Roll_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Electoral_Roll_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Electoral_Roll_Rows_Order_By>>;
  where?: Maybe<Electoral_Roll_Rows_Bool_Exp>;
};


export type Subscription_RootElectoral_Roll_Rows_By_PkArgs = {
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


export type Subscription_RootPartiesArgs = {
  distinct_on?: Maybe<Array<Parties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parties_Order_By>>;
  where?: Maybe<Parties_Bool_Exp>;
};


export type Subscription_RootParties_AggregateArgs = {
  distinct_on?: Maybe<Array<Parties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parties_Order_By>>;
  where?: Maybe<Parties_Bool_Exp>;
};


export type Subscription_RootParties_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReferendum_RowsArgs = {
  distinct_on?: Maybe<Array<Referendum_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Rows_Order_By>>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
};


export type Subscription_RootReferendum_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Rows_Order_By>>;
  where?: Maybe<Referendum_Rows_Bool_Exp>;
};


export type Subscription_RootReferendum_Rows_By_PkArgs = {
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
  id: Scalars['Int'];
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
  sectionId?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
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
  sectionId?: Maybe<Int_Comparison_Exp>;
  surname?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  voted?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
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
  sectionId?: Maybe<Scalars['Int']>;
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
  sectionId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  addressId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  egn?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
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
  sectionId?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  addressId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  egn?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
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
  sectionId?: Maybe<Order_By>;
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
  SectionId = 'sectionId',
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
  sectionId?: Maybe<Scalars['Int']>;
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
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
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
  SectionId = 'sectionId',
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
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
  secondRoleId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
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
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
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
};

/** Boolean expression to filter rows from the table "voting_section". All fields are combined with a logical 'AND'. */
export type Voting_Section_Bool_Exp = {
  _and?: Maybe<Array<Voting_Section_Bool_Exp>>;
  _not?: Maybe<Voting_Section_Bool_Exp>;
  _or?: Maybe<Array<Voting_Section_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
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
};

/** input type for inserting data into table "voting_section" */
export type Voting_Section_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Voting_Section_Max_Fields = {
  __typename?: 'voting_section_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Voting_Section_Min_Fields = {
  __typename?: 'voting_section_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
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
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: voting_section */
export type Voting_Section_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voting_section" */
export enum Voting_Section_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "voting_section" */
export type Voting_Section_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Voting_Section_Stddev_Fields = {
  __typename?: 'voting_section_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Voting_Section_Stddev_Pop_Fields = {
  __typename?: 'voting_section_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Voting_Section_Stddev_Samp_Fields = {
  __typename?: 'voting_section_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Voting_Section_Sum_Fields = {
  __typename?: 'voting_section_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "voting_section" */
export enum Voting_Section_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Voting_Section_Var_Pop_Fields = {
  __typename?: 'voting_section_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Voting_Section_Var_Samp_Fields = {
  __typename?: 'voting_section_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Voting_Section_Variance_Fields = {
  __typename?: 'voting_section_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "voting_types" */
export type Voting_Types = {
  __typename?: 'voting_types';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  displayText: Scalars['String'];
  id: Scalars['Int'];
  tours: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  value: Scalars['String'];
  /** fetch data from the table: "votings" */
  votings: Array<Votings>;
  /** An aggregate relationship */
  votings_aggregate: Votings_Aggregate;
};


/** columns and relationships of "voting_types" */
export type Voting_TypesVotingsArgs = {
  distinct_on?: Maybe<Array<Votings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votings_Order_By>>;
  where?: Maybe<Votings_Bool_Exp>;
};


/** columns and relationships of "voting_types" */
export type Voting_TypesVotings_AggregateArgs = {
  distinct_on?: Maybe<Array<Votings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votings_Order_By>>;
  where?: Maybe<Votings_Bool_Exp>;
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
  avg?: Maybe<Voting_Types_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Voting_Types_Max_Fields>;
  min?: Maybe<Voting_Types_Min_Fields>;
  stddev?: Maybe<Voting_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Voting_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Voting_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Voting_Types_Sum_Fields>;
  var_pop?: Maybe<Voting_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Voting_Types_Var_Samp_Fields>;
  variance?: Maybe<Voting_Types_Variance_Fields>;
};


/** aggregate fields of "voting_types" */
export type Voting_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Voting_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Voting_Types_Avg_Fields = {
  __typename?: 'voting_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "voting_types". All fields are combined with a logical 'AND'. */
export type Voting_Types_Bool_Exp = {
  _and?: Maybe<Array<Voting_Types_Bool_Exp>>;
  _not?: Maybe<Voting_Types_Bool_Exp>;
  _or?: Maybe<Array<Voting_Types_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  displayText?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  tours?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
  votings?: Maybe<Votings_Bool_Exp>;
};

/** unique or primary key constraints on table "voting_types" */
export enum Voting_Types_Constraint {
  /** unique or primary key constraint */
  VotingTypesPkey = 'voting_types_pkey'
}

/** input type for incrementing numeric columns in table "voting_types" */
export type Voting_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  tours?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "voting_types" */
export type Voting_Types_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tours?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
  votings?: Maybe<Votings_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Voting_Types_Max_Fields = {
  __typename?: 'voting_types_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tours?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Voting_Types_Min_Fields = {
  __typename?: 'voting_types_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tours?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
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

/** input type for inserting object relation for remote table "voting_types" */
export type Voting_Types_Obj_Rel_Insert_Input = {
  data: Voting_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Voting_Types_On_Conflict>;
};

/** on conflict condition type for table "voting_types" */
export type Voting_Types_On_Conflict = {
  constraint: Voting_Types_Constraint;
  update_columns: Array<Voting_Types_Update_Column>;
  where?: Maybe<Voting_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "voting_types". */
export type Voting_Types_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayText?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tours?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  votings_aggregate?: Maybe<Votings_Aggregate_Order_By>;
};

/** primary key columns input for table: voting_types */
export type Voting_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voting_types" */
export enum Voting_Types_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayText = 'displayText',
  /** column name */
  Id = 'id',
  /** column name */
  Tours = 'tours',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "voting_types" */
export type Voting_Types_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tours?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Voting_Types_Stddev_Fields = {
  __typename?: 'voting_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Voting_Types_Stddev_Pop_Fields = {
  __typename?: 'voting_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Voting_Types_Stddev_Samp_Fields = {
  __typename?: 'voting_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Voting_Types_Sum_Fields = {
  __typename?: 'voting_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
  tours?: Maybe<Scalars['Int']>;
};

/** update columns of table "voting_types" */
export enum Voting_Types_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayText = 'displayText',
  /** column name */
  Id = 'id',
  /** column name */
  Tours = 'tours',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Voting_Types_Var_Pop_Fields = {
  __typename?: 'voting_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Voting_Types_Var_Samp_Fields = {
  __typename?: 'voting_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Voting_Types_Variance_Fields = {
  __typename?: 'voting_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tours?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "votings" */
export type Votings = {
  __typename?: 'votings';
  createdAt: Scalars['timestamptz'];
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  votingType: Voting_Types;
  votingTypeId: Scalars['Int'];
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

/** order by aggregate values of table "votings" */
export type Votings_Aggregate_Order_By = {
  avg?: Maybe<Votings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Votings_Max_Order_By>;
  min?: Maybe<Votings_Min_Order_By>;
  stddev?: Maybe<Votings_Stddev_Order_By>;
  stddev_pop?: Maybe<Votings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Votings_Stddev_Samp_Order_By>;
  sum?: Maybe<Votings_Sum_Order_By>;
  var_pop?: Maybe<Votings_Var_Pop_Order_By>;
  var_samp?: Maybe<Votings_Var_Samp_Order_By>;
  variance?: Maybe<Votings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "votings" */
export type Votings_Arr_Rel_Insert_Input = {
  data: Array<Votings_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Votings_On_Conflict>;
};

/** aggregate avg on columns */
export type Votings_Avg_Fields = {
  __typename?: 'votings_avg_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "votings" */
export type Votings_Avg_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
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
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  votingType?: Maybe<Voting_Types_Bool_Exp>;
  votingTypeId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "votings" */
export enum Votings_Constraint {
  /** unique or primary key constraint */
  VotingsPkey = 'votings_pkey'
}

/** input type for incrementing numeric columns in table "votings" */
export type Votings_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  votingTypeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "votings" */
export type Votings_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingType?: Maybe<Voting_Types_Obj_Rel_Insert_Input>;
  votingTypeId?: Maybe<Scalars['Int']>;
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
  votingTypeId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "votings" */
export type Votings_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
  startedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
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
  votingTypeId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "votings" */
export type Votings_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  endTime?: Maybe<Order_By>;
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
  startedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
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
  updatedAt?: Maybe<Order_By>;
  votingType?: Maybe<Voting_Types_Order_By>;
  votingTypeId?: Maybe<Order_By>;
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
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingTypeId = 'votingTypeId'
}

/** input type for updating data in table "votings" */
export type Votings_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  endTime?: Maybe<Scalars['timestamptz']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingTypeId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Votings_Stddev_Fields = {
  __typename?: 'votings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "votings" */
export type Votings_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Votings_Stddev_Pop_Fields = {
  __typename?: 'votings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "votings" */
export type Votings_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Votings_Stddev_Samp_Fields = {
  __typename?: 'votings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "votings" */
export type Votings_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Votings_Sum_Fields = {
  __typename?: 'votings_sum_fields';
  id?: Maybe<Scalars['Int']>;
  votingTypeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "votings" */
export type Votings_Sum_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
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
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingTypeId = 'votingTypeId'
}

/** aggregate var_pop on columns */
export type Votings_Var_Pop_Fields = {
  __typename?: 'votings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "votings" */
export type Votings_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Votings_Var_Samp_Fields = {
  __typename?: 'votings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "votings" */
export type Votings_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Votings_Variance_Fields = {
  __typename?: 'votings_variance_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "votings" */
export type Votings_Variance_Order_By = {
  id?: Maybe<Order_By>;
  votingTypeId?: Maybe<Order_By>;
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
  & Pick<Settlements, 'id' | 'parentId' | 'name' | 'isDistrict'>
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
  & Pick<Users, 'id' | 'createdAt' | 'updatedAt' | 'roleId' | 'secondRoleId' | 'name' | 'surname' | 'family' | 'egn' | 'email' | 'pin' | 'password' | 'addressId' | 'sectionId' | 'voted' | 'eVoted'>
  & { address: (
    { __typename?: 'addresses' }
    & Pick<Addresses, 'id' | 'cityId' | 'municipalityId' | 'number' | 'street'>
  ) }
);

export const SettlementsBaseFieldsFragmentDoc = gql`
    fragment SettlementsBaseFields on settlements {
  id
  parentId
  name
  isDistrict
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
  sectionId
  voted
  eVoted
  address {
    id
    cityId
    municipalityId
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