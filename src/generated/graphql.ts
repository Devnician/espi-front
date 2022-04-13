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
  bigint: any;
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

export type LoginInput = {
  egn: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String'];
  fetchToken: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  found: Scalars['Boolean'];
};

export type RegisterUserInsertInput = {
  egn: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  pin: Scalars['String'];
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

export type SwitchRoleInput = {
  roleIndex: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SwithcRoleOutput = {
  __typename?: 'SwithcRoleOutput';
  fetchToken: Scalars['String'];
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  number: Scalars['String'];
  /** An object relationship */
  settlement: Settlements;
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
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Addresses_Bool_Exp>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Addresses_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  number?: Maybe<String_Comparison_Exp>;
  settlement?: Maybe<Settlements_Bool_Exp>;
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
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  settlement?: Maybe<Settlements_Obj_Rel_Insert_Input>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
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
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  settlement?: Maybe<Settlements_Order_By>;
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
  Description = 'description',
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
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields';
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  Description = 'description',
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
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "commision_members" */
export type Commision_Members = {
  __typename?: 'commision_members';
  commisionId: Scalars['Int'];
  /** An object relationship */
  commission: Commissions;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isLeader?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
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

/** order by aggregate values of table "commision_members" */
export type Commision_Members_Aggregate_Order_By = {
  avg?: Maybe<Commision_Members_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Commision_Members_Max_Order_By>;
  min?: Maybe<Commision_Members_Min_Order_By>;
  stddev?: Maybe<Commision_Members_Stddev_Order_By>;
  stddev_pop?: Maybe<Commision_Members_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Commision_Members_Stddev_Samp_Order_By>;
  sum?: Maybe<Commision_Members_Sum_Order_By>;
  var_pop?: Maybe<Commision_Members_Var_Pop_Order_By>;
  var_samp?: Maybe<Commision_Members_Var_Samp_Order_By>;
  variance?: Maybe<Commision_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "commision_members" */
export type Commision_Members_Arr_Rel_Insert_Input = {
  data: Array<Commision_Members_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Commision_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type Commision_Members_Avg_Fields = {
  __typename?: 'commision_members_avg_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "commision_members" */
export type Commision_Members_Avg_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "commision_members". All fields are combined with a logical 'AND'. */
export type Commision_Members_Bool_Exp = {
  _and?: Maybe<Array<Commision_Members_Bool_Exp>>;
  _not?: Maybe<Commision_Members_Bool_Exp>;
  _or?: Maybe<Array<Commision_Members_Bool_Exp>>;
  commisionId?: Maybe<Int_Comparison_Exp>;
  commission?: Maybe<Commissions_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isLeader?: Maybe<Boolean_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "commision_members" */
export enum Commision_Members_Constraint {
  /** unique or primary key constraint */
  CommisionMembersPkey = 'commision_members_pkey',
  /** unique or primary key constraint */
  CommisionMembersUserIdCommisionIdKey = 'commision_members_userId_commisionId_key'
}

/** input type for incrementing numeric columns in table "commision_members" */
export type Commision_Members_Inc_Input = {
  commisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "commision_members" */
export type Commision_Members_Insert_Input = {
  commisionId?: Maybe<Scalars['Int']>;
  commission?: Maybe<Commissions_Obj_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
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

/** order by max() on columns of table "commision_members" */
export type Commision_Members_Max_Order_By = {
  commisionId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
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

/** order by min() on columns of table "commision_members" */
export type Commision_Members_Min_Order_By = {
  commisionId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
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
  commisionId?: Maybe<Order_By>;
  commission?: Maybe<Commissions_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isLeader?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: commision_members */
export type Commision_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "commision_members" */
export enum Commision_Members_Select_Column {
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

/** order by stddev() on columns of table "commision_members" */
export type Commision_Members_Stddev_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Commision_Members_Stddev_Pop_Fields = {
  __typename?: 'commision_members_stddev_pop_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "commision_members" */
export type Commision_Members_Stddev_Pop_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Commision_Members_Stddev_Samp_Fields = {
  __typename?: 'commision_members_stddev_samp_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "commision_members" */
export type Commision_Members_Stddev_Samp_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Commision_Members_Sum_Fields = {
  __typename?: 'commision_members_sum_fields';
  commisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "commision_members" */
export type Commision_Members_Sum_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "commision_members" */
export enum Commision_Members_Update_Column {
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

/** order by var_pop() on columns of table "commision_members" */
export type Commision_Members_Var_Pop_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Commision_Members_Var_Samp_Fields = {
  __typename?: 'commision_members_var_samp_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "commision_members" */
export type Commision_Members_Var_Samp_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Commision_Members_Variance_Fields = {
  __typename?: 'commision_members_variance_fields';
  commisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "commision_members" */
export type Commision_Members_Variance_Order_By = {
  commisionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "commissions" */
export type Commissions = {
  __typename?: 'commissions';
  /** An array relationship */
  commision_members: Array<Commision_Members>;
  /** An aggregate relationship */
  commision_members_aggregate: Commision_Members_Aggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  votingSectionId?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "commissions" */
export type CommissionsCommision_MembersArgs = {
  distinct_on?: Maybe<Array<Commision_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commision_Members_Order_By>>;
  where?: Maybe<Commision_Members_Bool_Exp>;
};


/** columns and relationships of "commissions" */
export type CommissionsCommision_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Commision_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Commision_Members_Order_By>>;
  where?: Maybe<Commision_Members_Bool_Exp>;
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
  commision_members?: Maybe<Commision_Members_Bool_Exp>;
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
  commision_members?: Maybe<Commision_Members_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "commissions" */
export type Commissions_Obj_Rel_Insert_Input = {
  data: Commissions_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Commissions_On_Conflict>;
};

/** on conflict condition type for table "commissions" */
export type Commissions_On_Conflict = {
  constraint: Commissions_Constraint;
  update_columns: Array<Commissions_Update_Column>;
  where?: Maybe<Commissions_Bool_Exp>;
};

/** Ordering options when selecting data from "commissions". */
export type Commissions_Order_By = {
  commision_members_aggregate?: Maybe<Commision_Members_Aggregate_Order_By>;
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

/**
 * for non-trackable functions
 *
 *
 * columns and relationships of "counters"
 */
export type Counters = {
  __typename?: 'counters';
  counter: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "counters" */
export type Counters_Aggregate = {
  __typename?: 'counters_aggregate';
  aggregate?: Maybe<Counters_Aggregate_Fields>;
  nodes: Array<Counters>;
};

/** aggregate fields of "counters" */
export type Counters_Aggregate_Fields = {
  __typename?: 'counters_aggregate_fields';
  avg?: Maybe<Counters_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Counters_Max_Fields>;
  min?: Maybe<Counters_Min_Fields>;
  stddev?: Maybe<Counters_Stddev_Fields>;
  stddev_pop?: Maybe<Counters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Counters_Stddev_Samp_Fields>;
  sum?: Maybe<Counters_Sum_Fields>;
  var_pop?: Maybe<Counters_Var_Pop_Fields>;
  var_samp?: Maybe<Counters_Var_Samp_Fields>;
  variance?: Maybe<Counters_Variance_Fields>;
};


/** aggregate fields of "counters" */
export type Counters_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Counters_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Counters_Avg_Fields = {
  __typename?: 'counters_avg_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "counters". All fields are combined with a logical 'AND'. */
export type Counters_Bool_Exp = {
  _and?: Maybe<Array<Counters_Bool_Exp>>;
  _not?: Maybe<Counters_Bool_Exp>;
  _or?: Maybe<Array<Counters_Bool_Exp>>;
  counter?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "counters" */
export enum Counters_Constraint {
  /** unique or primary key constraint */
  CountersPkey = 'counters_pkey'
}

/** input type for incrementing numeric columns in table "counters" */
export type Counters_Inc_Input = {
  counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "counters" */
export type Counters_Insert_Input = {
  counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Counters_Max_Fields = {
  __typename?: 'counters_max_fields';
  counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Counters_Min_Fields = {
  __typename?: 'counters_min_fields';
  counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "counters" */
export type Counters_Mutation_Response = {
  __typename?: 'counters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Counters>;
};

/** on conflict condition type for table "counters" */
export type Counters_On_Conflict = {
  constraint: Counters_Constraint;
  update_columns: Array<Counters_Update_Column>;
  where?: Maybe<Counters_Bool_Exp>;
};

/** Ordering options when selecting data from "counters". */
export type Counters_Order_By = {
  counter?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: counters */
export type Counters_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "counters" */
export enum Counters_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "counters" */
export type Counters_Set_Input = {
  counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Counters_Stddev_Fields = {
  __typename?: 'counters_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Counters_Stddev_Pop_Fields = {
  __typename?: 'counters_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Counters_Stddev_Samp_Fields = {
  __typename?: 'counters_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Counters_Sum_Fields = {
  __typename?: 'counters_sum_fields';
  counter?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "counters" */
export enum Counters_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Counters_Var_Pop_Fields = {
  __typename?: 'counters_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Counters_Var_Samp_Fields = {
  __typename?: 'counters_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Counters_Variance_Fields = {
  __typename?: 'counters_variance_fields';
  counter?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Distribute_The_Undistributed_Users_New_Args = {
  lim?: Maybe<Scalars['Int']>;
};

export type Login_Args = {
  egn?: Maybe<Scalars['String']>;
  pass?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "commision_members" */
  delete_commision_members?: Maybe<Commision_Members_Mutation_Response>;
  /** delete single row from the table: "commision_members" */
  delete_commision_members_by_pk?: Maybe<Commision_Members>;
  /** delete data from the table: "commissions" */
  delete_commissions?: Maybe<Commissions_Mutation_Response>;
  /** delete single row from the table: "commissions" */
  delete_commissions_by_pk?: Maybe<Commissions>;
  /** delete data from the table: "counters" */
  delete_counters?: Maybe<Counters_Mutation_Response>;
  /** delete single row from the table: "counters" */
  delete_counters_by_pk?: Maybe<Counters>;
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
  /** delete data from the table: "role_types" */
  delete_role_types?: Maybe<Role_Types_Mutation_Response>;
  /** delete single row from the table: "role_types" */
  delete_role_types_by_pk?: Maybe<Role_Types>;
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
  /** execute VOLATILE function "distribute_the_undistributed_users_new" which returns "counters" */
  distribute_the_undistributed_users_new: Array<Counters>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "commision_members" */
  insert_commision_members?: Maybe<Commision_Members_Mutation_Response>;
  /** insert a single row into the table: "commision_members" */
  insert_commision_members_one?: Maybe<Commision_Members>;
  /** insert data into the table: "commissions" */
  insert_commissions?: Maybe<Commissions_Mutation_Response>;
  /** insert a single row into the table: "commissions" */
  insert_commissions_one?: Maybe<Commissions>;
  /** insert data into the table: "counters" */
  insert_counters?: Maybe<Counters_Mutation_Response>;
  /** insert a single row into the table: "counters" */
  insert_counters_one?: Maybe<Counters>;
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
  /** insert data into the table: "role_types" */
  insert_role_types?: Maybe<Role_Types_Mutation_Response>;
  /** insert a single row into the table: "role_types" */
  insert_role_types_one?: Maybe<Role_Types>;
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
  /** update data of the table: "commision_members" */
  update_commision_members?: Maybe<Commision_Members_Mutation_Response>;
  /** update single row of the table: "commision_members" */
  update_commision_members_by_pk?: Maybe<Commision_Members>;
  /** update data of the table: "commissions" */
  update_commissions?: Maybe<Commissions_Mutation_Response>;
  /** update single row of the table: "commissions" */
  update_commissions_by_pk?: Maybe<Commissions>;
  /** update data of the table: "counters" */
  update_counters?: Maybe<Counters_Mutation_Response>;
  /** update single row of the table: "counters" */
  update_counters_by_pk?: Maybe<Counters>;
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
  /** update data of the table: "role_types" */
  update_role_types?: Maybe<Role_Types_Mutation_Response>;
  /** update single row of the table: "role_types" */
  update_role_types_by_pk?: Maybe<Role_Types>;
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
export type Mutation_RootDelete_CountersArgs = {
  where: Counters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Counters_By_PkArgs = {
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
export type Mutation_RootDelete_Role_TypesArgs = {
  where: Role_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Types_By_PkArgs = {
  value: Scalars['String'];
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
export type Mutation_RootDistribute_The_Undistributed_Users_NewArgs = {
  args: Distribute_The_Undistributed_Users_New_Args;
  distinct_on?: Maybe<Array<Counters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Counters_Order_By>>;
  where?: Maybe<Counters_Bool_Exp>;
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
export type Mutation_RootInsert_CountersArgs = {
  objects: Array<Counters_Insert_Input>;
  on_conflict?: Maybe<Counters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Counters_OneArgs = {
  object: Counters_Insert_Input;
  on_conflict?: Maybe<Counters_On_Conflict>;
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
export type Mutation_RootInsert_Role_TypesArgs = {
  objects: Array<Role_Types_Insert_Input>;
  on_conflict?: Maybe<Role_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Types_OneArgs = {
  object: Role_Types_Insert_Input;
  on_conflict?: Maybe<Role_Types_On_Conflict>;
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
export type Mutation_RootUpdate_CountersArgs = {
  _inc?: Maybe<Counters_Inc_Input>;
  _set?: Maybe<Counters_Set_Input>;
  where: Counters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Counters_By_PkArgs = {
  _inc?: Maybe<Counters_Inc_Input>;
  _set?: Maybe<Counters_Set_Input>;
  pk_columns: Counters_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Role_TypesArgs = {
  _set?: Maybe<Role_Types_Set_Input>;
  where: Role_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Types_By_PkArgs = {
  _set?: Maybe<Role_Types_Set_Input>;
  pk_columns: Role_Types_Pk_Columns_Input;
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
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  politicalGroupId: Scalars['Int'];
  /** An object relationship */
  political_group: Political_Groups;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
  /** An object relationship */
  voting?: Maybe<Votings>;
  votingId?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "political_group_members" */
export type Political_Group_Members_Aggregate_Order_By = {
  avg?: Maybe<Political_Group_Members_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Political_Group_Members_Max_Order_By>;
  min?: Maybe<Political_Group_Members_Min_Order_By>;
  stddev?: Maybe<Political_Group_Members_Stddev_Order_By>;
  stddev_pop?: Maybe<Political_Group_Members_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Political_Group_Members_Stddev_Samp_Order_By>;
  sum?: Maybe<Political_Group_Members_Sum_Order_By>;
  var_pop?: Maybe<Political_Group_Members_Var_Pop_Order_By>;
  var_samp?: Maybe<Political_Group_Members_Var_Samp_Order_By>;
  variance?: Maybe<Political_Group_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "political_group_members" */
export type Political_Group_Members_Arr_Rel_Insert_Input = {
  data: Array<Political_Group_Members_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Political_Group_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type Political_Group_Members_Avg_Fields = {
  __typename?: 'political_group_members_avg_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "political_group_members" */
export type Political_Group_Members_Avg_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "political_group_members". All fields are combined with a logical 'AND'. */
export type Political_Group_Members_Bool_Exp = {
  _and?: Maybe<Array<Political_Group_Members_Bool_Exp>>;
  _not?: Maybe<Political_Group_Members_Bool_Exp>;
  _or?: Maybe<Array<Political_Group_Members_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  politicalGroupId?: Maybe<Int_Comparison_Exp>;
  political_group?: Maybe<Political_Groups_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
  voting?: Maybe<Votings_Bool_Exp>;
  votingId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "political_group_members" */
export enum Political_Group_Members_Constraint {
  /** unique or primary key constraint */
  PatryMembersPkey = 'patry_members_pkey',
  /** unique or primary key constraint */
  PoliticalGroupMembersUserIdPoliticalGroupIdKey = 'political_group_members_userId_politicalGroupId_key'
}

/** input type for incrementing numeric columns in table "political_group_members" */
export type Political_Group_Members_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "political_group_members" */
export type Political_Group_Members_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  political_group?: Maybe<Political_Groups_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
  voting?: Maybe<Votings_Obj_Rel_Insert_Input>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Political_Group_Members_Max_Fields = {
  __typename?: 'political_group_members_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "political_group_members" */
export type Political_Group_Members_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Political_Group_Members_Min_Fields = {
  __typename?: 'political_group_members_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "political_group_members" */
export type Political_Group_Members_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
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
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  political_group?: Maybe<Political_Groups_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
  voting?: Maybe<Votings_Order_By>;
  votingId?: Maybe<Order_By>;
};

/** primary key columns input for table: political_group_members */
export type Political_Group_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "political_group_members" */
export enum Political_Group_Members_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PoliticalGroupId = 'politicalGroupId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  VotingId = 'votingId'
}

/** input type for updating data in table "political_group_members" */
export type Political_Group_Members_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Political_Group_Members_Stddev_Fields = {
  __typename?: 'political_group_members_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "political_group_members" */
export type Political_Group_Members_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Political_Group_Members_Stddev_Pop_Fields = {
  __typename?: 'political_group_members_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "political_group_members" */
export type Political_Group_Members_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Political_Group_Members_Stddev_Samp_Fields = {
  __typename?: 'political_group_members_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "political_group_members" */
export type Political_Group_Members_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Political_Group_Members_Sum_Fields = {
  __typename?: 'political_group_members_sum_fields';
  id?: Maybe<Scalars['Int']>;
  politicalGroupId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "political_group_members" */
export type Political_Group_Members_Sum_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** update columns of table "political_group_members" */
export enum Political_Group_Members_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PoliticalGroupId = 'politicalGroupId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  VotingId = 'votingId'
}

/** aggregate var_pop on columns */
export type Political_Group_Members_Var_Pop_Fields = {
  __typename?: 'political_group_members_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "political_group_members" */
export type Political_Group_Members_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Political_Group_Members_Var_Samp_Fields = {
  __typename?: 'political_group_members_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "political_group_members" */
export type Political_Group_Members_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Political_Group_Members_Variance_Fields = {
  __typename?: 'political_group_members_variance_fields';
  id?: Maybe<Scalars['Float']>;
  politicalGroupId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "political_group_members" */
export type Political_Group_Members_Variance_Order_By = {
  id?: Maybe<Order_By>;
  politicalGroupId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
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

/** input type for inserting object relation for remote table "political_group_types" */
export type Political_Group_Types_Obj_Rel_Insert_Input = {
  data: Political_Group_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Political_Group_Types_On_Conflict>;
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
  /** An array relationship */
  political_group_members: Array<Political_Group_Members>;
  /** An aggregate relationship */
  political_group_members_aggregate: Political_Group_Members_Aggregate;
  /** An object relationship */
  political_group_type: Political_Group_Types;
  type: Political_Group_Types_Enum;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "political_groups" */
export type Political_GroupsPolitical_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


/** columns and relationships of "political_groups" */
export type Political_GroupsPolitical_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
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
  political_group_members?: Maybe<Political_Group_Members_Bool_Exp>;
  political_group_type?: Maybe<Political_Group_Types_Bool_Exp>;
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
  political_group_members?: Maybe<Political_Group_Members_Arr_Rel_Insert_Input>;
  political_group_type?: Maybe<Political_Group_Types_Obj_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "political_groups" */
export type Political_Groups_Obj_Rel_Insert_Input = {
  data: Political_Groups_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Political_Groups_On_Conflict>;
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
  political_group_members_aggregate?: Maybe<Political_Group_Members_Aggregate_Order_By>;
  political_group_type?: Maybe<Political_Group_Types_Order_By>;
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
  LoginAction?: Maybe<LoginOutput>;
  RefreshToken?: Maybe<SwithcRoleOutput>;
  RegisterAction?: Maybe<RegisterOutput>;
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** An array relationship */
  commision_members: Array<Commision_Members>;
  /** An aggregate relationship */
  commision_members_aggregate: Commision_Members_Aggregate;
  /** fetch data from the table: "commision_members" using primary key columns */
  commision_members_by_pk?: Maybe<Commision_Members>;
  /** fetch data from the table: "commissions" */
  commissions: Array<Commissions>;
  /** fetch aggregated fields from the table: "commissions" */
  commissions_aggregate: Commissions_Aggregate;
  /** fetch data from the table: "commissions" using primary key columns */
  commissions_by_pk?: Maybe<Commissions>;
  /** fetch data from the table: "counters" */
  counters: Array<Counters>;
  /** fetch aggregated fields from the table: "counters" */
  counters_aggregate: Counters_Aggregate;
  /** fetch data from the table: "counters" using primary key columns */
  counters_by_pk?: Maybe<Counters>;
  /** execute function "login" which returns "users" */
  login: Array<Users>;
  /** execute function "login" and query aggregates on result of table type "users" */
  login_aggregate: Users_Aggregate;
  /** An array relationship */
  political_group_members: Array<Political_Group_Members>;
  /** An aggregate relationship */
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
  /** fetch data from the table: "referendum_countings" */
  referendum_countings: Array<Referendum_Countings>;
  /** fetch aggregated fields from the table: "referendum_countings" */
  referendum_countings_aggregate: Referendum_Countings_Aggregate;
  /** fetch data from the table: "referendum_questions" */
  referendum_questions: Array<Referendum_Questions>;
  /** fetch aggregated fields from the table: "referendum_questions" */
  referendum_questions_aggregate: Referendum_Questions_Aggregate;
  /** fetch data from the table: "referendum_questions" using primary key columns */
  referendum_questions_by_pk?: Maybe<Referendum_Questions>;
  /** fetch data from the table: "referendum_votes" */
  referendum_votes: Array<Referendum_Votes>;
  /** An aggregate relationship */
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  /** fetch data from the table: "referendum_votes" using primary key columns */
  referendum_votes_by_pk?: Maybe<Referendum_Votes>;
  /** fetch data from the table: "referendums" */
  referendums: Array<Referendums>;
  /** fetch aggregated fields from the table: "referendums" */
  referendums_aggregate: Referendums_Aggregate;
  /** fetch data from the table: "referendums" using primary key columns */
  referendums_by_pk?: Maybe<Referendums>;
  /** fetch data from the table: "role_types" */
  role_types: Array<Role_Types>;
  /** fetch aggregated fields from the table: "role_types" */
  role_types_aggregate: Role_Types_Aggregate;
  /** fetch data from the table: "role_types" using primary key columns */
  role_types_by_pk?: Maybe<Role_Types>;
  /** An array relationship */
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
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
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
  /** fetch aggregated fields from the table: "votings" */
  votings_aggregate: Votings_Aggregate;
  /** fetch data from the table: "votings" using primary key columns */
  votings_by_pk?: Maybe<Votings>;
};


export type Query_RootLoginActionArgs = {
  args: LoginInput;
};


export type Query_RootRefreshTokenArgs = {
  args: SwitchRoleInput;
};


export type Query_RootRegisterActionArgs = {
  arg1: RegisterUserInsertInput;
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


export type Query_RootCountersArgs = {
  distinct_on?: Maybe<Array<Counters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Counters_Order_By>>;
  where?: Maybe<Counters_Bool_Exp>;
};


export type Query_RootCounters_AggregateArgs = {
  distinct_on?: Maybe<Array<Counters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Counters_Order_By>>;
  where?: Maybe<Counters_Bool_Exp>;
};


export type Query_RootCounters_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLoginArgs = {
  args: Login_Args;
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootLogin_AggregateArgs = {
  args: Login_Args;
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
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


export type Query_RootReferendum_CountingsArgs = {
  distinct_on?: Maybe<Array<Referendum_Countings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Countings_Order_By>>;
  where?: Maybe<Referendum_Countings_Bool_Exp>;
};


export type Query_RootReferendum_Countings_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Countings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Countings_Order_By>>;
  where?: Maybe<Referendum_Countings_Bool_Exp>;
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


export type Query_RootRole_TypesArgs = {
  distinct_on?: Maybe<Array<Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Types_Order_By>>;
  where?: Maybe<Role_Types_Bool_Exp>;
};


export type Query_RootRole_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Types_Order_By>>;
  where?: Maybe<Role_Types_Bool_Exp>;
};


export type Query_RootRole_Types_By_PkArgs = {
  value: Scalars['String'];
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

/** columns and relationships of "referendum_countings" */
export type Referendum_Countings = {
  __typename?: 'referendum_countings';
  evoted?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  question?: Maybe<Referendum_Questions>;
  questionId?: Maybe<Scalars['Int']>;
  voted?: Maybe<Scalars['bigint']>;
  votesCount?: Maybe<Scalars['bigint']>;
  votesFalse?: Maybe<Scalars['bigint']>;
  votesTrue?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "referendum_countings" */
export type Referendum_Countings_Aggregate = {
  __typename?: 'referendum_countings_aggregate';
  aggregate?: Maybe<Referendum_Countings_Aggregate_Fields>;
  nodes: Array<Referendum_Countings>;
};

/** aggregate fields of "referendum_countings" */
export type Referendum_Countings_Aggregate_Fields = {
  __typename?: 'referendum_countings_aggregate_fields';
  avg?: Maybe<Referendum_Countings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Referendum_Countings_Max_Fields>;
  min?: Maybe<Referendum_Countings_Min_Fields>;
  stddev?: Maybe<Referendum_Countings_Stddev_Fields>;
  stddev_pop?: Maybe<Referendum_Countings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Referendum_Countings_Stddev_Samp_Fields>;
  sum?: Maybe<Referendum_Countings_Sum_Fields>;
  var_pop?: Maybe<Referendum_Countings_Var_Pop_Fields>;
  var_samp?: Maybe<Referendum_Countings_Var_Samp_Fields>;
  variance?: Maybe<Referendum_Countings_Variance_Fields>;
};


/** aggregate fields of "referendum_countings" */
export type Referendum_Countings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Referendum_Countings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Referendum_Countings_Avg_Fields = {
  __typename?: 'referendum_countings_avg_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "referendum_countings". All fields are combined with a logical 'AND'. */
export type Referendum_Countings_Bool_Exp = {
  _and?: Maybe<Array<Referendum_Countings_Bool_Exp>>;
  _not?: Maybe<Referendum_Countings_Bool_Exp>;
  _or?: Maybe<Array<Referendum_Countings_Bool_Exp>>;
  evoted?: Maybe<Bigint_Comparison_Exp>;
  question?: Maybe<Referendum_Questions_Bool_Exp>;
  questionId?: Maybe<Int_Comparison_Exp>;
  voted?: Maybe<Bigint_Comparison_Exp>;
  votesCount?: Maybe<Bigint_Comparison_Exp>;
  votesFalse?: Maybe<Bigint_Comparison_Exp>;
  votesTrue?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Referendum_Countings_Max_Fields = {
  __typename?: 'referendum_countings_max_fields';
  evoted?: Maybe<Scalars['bigint']>;
  questionId?: Maybe<Scalars['Int']>;
  voted?: Maybe<Scalars['bigint']>;
  votesCount?: Maybe<Scalars['bigint']>;
  votesFalse?: Maybe<Scalars['bigint']>;
  votesTrue?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Referendum_Countings_Min_Fields = {
  __typename?: 'referendum_countings_min_fields';
  evoted?: Maybe<Scalars['bigint']>;
  questionId?: Maybe<Scalars['Int']>;
  voted?: Maybe<Scalars['bigint']>;
  votesCount?: Maybe<Scalars['bigint']>;
  votesFalse?: Maybe<Scalars['bigint']>;
  votesTrue?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "referendum_countings". */
export type Referendum_Countings_Order_By = {
  evoted?: Maybe<Order_By>;
  question?: Maybe<Referendum_Questions_Order_By>;
  questionId?: Maybe<Order_By>;
  voted?: Maybe<Order_By>;
  votesCount?: Maybe<Order_By>;
  votesFalse?: Maybe<Order_By>;
  votesTrue?: Maybe<Order_By>;
};

/** select columns of table "referendum_countings" */
export enum Referendum_Countings_Select_Column {
  /** column name */
  Evoted = 'evoted',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  Voted = 'voted',
  /** column name */
  VotesCount = 'votesCount',
  /** column name */
  VotesFalse = 'votesFalse',
  /** column name */
  VotesTrue = 'votesTrue'
}

/** aggregate stddev on columns */
export type Referendum_Countings_Stddev_Fields = {
  __typename?: 'referendum_countings_stddev_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Referendum_Countings_Stddev_Pop_Fields = {
  __typename?: 'referendum_countings_stddev_pop_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Referendum_Countings_Stddev_Samp_Fields = {
  __typename?: 'referendum_countings_stddev_samp_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Referendum_Countings_Sum_Fields = {
  __typename?: 'referendum_countings_sum_fields';
  evoted?: Maybe<Scalars['bigint']>;
  questionId?: Maybe<Scalars['Int']>;
  voted?: Maybe<Scalars['bigint']>;
  votesCount?: Maybe<Scalars['bigint']>;
  votesFalse?: Maybe<Scalars['bigint']>;
  votesTrue?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Referendum_Countings_Var_Pop_Fields = {
  __typename?: 'referendum_countings_var_pop_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Referendum_Countings_Var_Samp_Fields = {
  __typename?: 'referendum_countings_var_samp_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Referendum_Countings_Variance_Fields = {
  __typename?: 'referendum_countings_variance_fields';
  evoted?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  voted?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
  votesFalse?: Maybe<Scalars['Float']>;
  votesTrue?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "referendum_questions" */
export type Referendum_Questions = {
  __typename?: 'referendum_questions';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  question: Scalars['String'];
  /** An object relationship */
  referendum: Referendums;
  referendumId: Scalars['Int'];
  /** fetch data from the table: "referendum_votes" */
  referendum_votes: Array<Referendum_Votes>;
  /** An aggregate relationship */
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "referendum_questions" */
export type Referendum_QuestionsReferendum_VotesArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


/** columns and relationships of "referendum_questions" */
export type Referendum_QuestionsReferendum_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
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
  id?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<String_Comparison_Exp>;
  referendum?: Maybe<Referendums_Bool_Exp>;
  referendumId?: Maybe<Int_Comparison_Exp>;
  referendum_votes?: Maybe<Referendum_Votes_Bool_Exp>;
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
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  referendum?: Maybe<Referendums_Obj_Rel_Insert_Input>;
  referendumId?: Maybe<Scalars['Int']>;
  referendum_votes?: Maybe<Referendum_Votes_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Referendum_Questions_Max_Fields = {
  __typename?: 'referendum_questions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "referendum_questions" */
export type Referendum_Questions_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  referendumId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Referendum_Questions_Min_Fields = {
  __typename?: 'referendum_questions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  referendumId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "referendum_questions" */
export type Referendum_Questions_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
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

/** input type for inserting object relation for remote table "referendum_questions" */
export type Referendum_Questions_Obj_Rel_Insert_Input = {
  data: Referendum_Questions_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Referendum_Questions_On_Conflict>;
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
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  referendum?: Maybe<Referendums_Order_By>;
  referendumId?: Maybe<Order_By>;
  referendum_votes_aggregate?: Maybe<Referendum_Votes_Aggregate_Order_By>;
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
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  ReferendumId = 'referendumId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "referendum_questions" */
export type Referendum_Questions_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
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
  Id = 'id',
  /** column name */
  Question = 'question',
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
  eVote?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  questionId: Scalars['Int'];
  /** An object relationship */
  referendum_question: Referendum_Questions;
  sectionId?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  vote?: Maybe<Scalars['Boolean']>;
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

/** order by aggregate values of table "referendum_votes" */
export type Referendum_Votes_Aggregate_Order_By = {
  avg?: Maybe<Referendum_Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Referendum_Votes_Max_Order_By>;
  min?: Maybe<Referendum_Votes_Min_Order_By>;
  stddev?: Maybe<Referendum_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Referendum_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Referendum_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Referendum_Votes_Sum_Order_By>;
  var_pop?: Maybe<Referendum_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Referendum_Votes_Var_Samp_Order_By>;
  variance?: Maybe<Referendum_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "referendum_votes" */
export type Referendum_Votes_Arr_Rel_Insert_Input = {
  data: Array<Referendum_Votes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Referendum_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Referendum_Votes_Avg_Fields = {
  __typename?: 'referendum_votes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "referendum_votes" */
export type Referendum_Votes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "referendum_votes". All fields are combined with a logical 'AND'. */
export type Referendum_Votes_Bool_Exp = {
  _and?: Maybe<Array<Referendum_Votes_Bool_Exp>>;
  _not?: Maybe<Referendum_Votes_Bool_Exp>;
  _or?: Maybe<Array<Referendum_Votes_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  eVote?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  questionId?: Maybe<Int_Comparison_Exp>;
  referendum_question?: Maybe<Referendum_Questions_Bool_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
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
  questionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendum_votes" */
export type Referendum_Votes_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  eVote?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  referendum_question?: Maybe<Referendum_Questions_Obj_Rel_Insert_Input>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Referendum_Votes_Max_Fields = {
  __typename?: 'referendum_votes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "referendum_votes" */
export type Referendum_Votes_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Referendum_Votes_Min_Fields = {
  __typename?: 'referendum_votes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "referendum_votes" */
export type Referendum_Votes_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
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
  eVote?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  referendum_question?: Maybe<Referendum_Questions_Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
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
  EVote = 'eVote',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UserId = 'userId',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "referendum_votes" */
export type Referendum_Votes_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  eVote?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Referendum_Votes_Stddev_Fields = {
  __typename?: 'referendum_votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "referendum_votes" */
export type Referendum_Votes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Referendum_Votes_Stddev_Pop_Fields = {
  __typename?: 'referendum_votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "referendum_votes" */
export type Referendum_Votes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Referendum_Votes_Stddev_Samp_Fields = {
  __typename?: 'referendum_votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "referendum_votes" */
export type Referendum_Votes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Referendum_Votes_Sum_Fields = {
  __typename?: 'referendum_votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "referendum_votes" */
export type Referendum_Votes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "referendum_votes" */
export enum Referendum_Votes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EVote = 'eVote',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UserId = 'userId',
  /** column name */
  Vote = 'vote'
}

/** aggregate var_pop on columns */
export type Referendum_Votes_Var_Pop_Fields = {
  __typename?: 'referendum_votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "referendum_votes" */
export type Referendum_Votes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Referendum_Votes_Var_Samp_Fields = {
  __typename?: 'referendum_votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "referendum_votes" */
export type Referendum_Votes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Referendum_Votes_Variance_Fields = {
  __typename?: 'referendum_votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "referendum_votes" */
export type Referendum_Votes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "referendums" */
export type Referendums = {
  __typename?: 'referendums';
  createdAt: Scalars['timestamp'];
  description: Scalars['String'];
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  referendumQuestions: Array<Referendum_Questions>;
  /** An aggregate relationship */
  referendumQuestions_aggregate: Referendum_Questions_Aggregate;
  /** An object relationship */
  settlement?: Maybe<Settlements>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "referendums" */
export type ReferendumsReferendumQuestionsArgs = {
  distinct_on?: Maybe<Array<Referendum_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Questions_Order_By>>;
  where?: Maybe<Referendum_Questions_Bool_Exp>;
};


/** columns and relationships of "referendums" */
export type ReferendumsReferendumQuestions_AggregateArgs = {
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
  settlementId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "referendums". All fields are combined with a logical 'AND'. */
export type Referendums_Bool_Exp = {
  _and?: Maybe<Array<Referendums_Bool_Exp>>;
  _not?: Maybe<Referendums_Bool_Exp>;
  _or?: Maybe<Array<Referendums_Bool_Exp>>;
  createdAt?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  finishedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locked?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  referendumQuestions?: Maybe<Referendum_Questions_Bool_Exp>;
  settlement?: Maybe<Settlements_Bool_Exp>;
  settlementId?: Maybe<Int_Comparison_Exp>;
  startDate?: Maybe<Timestamptz_Comparison_Exp>;
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
  settlementId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "referendums" */
export type Referendums_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  referendumQuestions?: Maybe<Referendum_Questions_Arr_Rel_Insert_Input>;
  settlement?: Maybe<Settlements_Obj_Rel_Insert_Input>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Referendums_Max_Fields = {
  __typename?: 'referendums_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Referendums_Min_Fields = {
  __typename?: 'referendums_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
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

/** input type for inserting object relation for remote table "referendums" */
export type Referendums_Obj_Rel_Insert_Input = {
  data: Referendums_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Referendums_On_Conflict>;
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
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locked?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  referendumQuestions_aggregate?: Maybe<Referendum_Questions_Aggregate_Order_By>;
  settlement?: Maybe<Settlements_Order_By>;
  settlementId?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
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
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "referendums" */
export type Referendums_Set_Input = {
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Referendums_Stddev_Fields = {
  __typename?: 'referendums_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Referendums_Stddev_Pop_Fields = {
  __typename?: 'referendums_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Referendums_Stddev_Samp_Fields = {
  __typename?: 'referendums_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Referendums_Sum_Fields = {
  __typename?: 'referendums_sum_fields';
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** update columns of table "referendums" */
export enum Referendums_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StartedAt = 'startedAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Referendums_Var_Pop_Fields = {
  __typename?: 'referendums_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Referendums_Var_Samp_Fields = {
  __typename?: 'referendums_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Referendums_Variance_Fields = {
  __typename?: 'referendums_variance_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "role_types" */
export type Role_Types = {
  __typename?: 'role_types';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "role_types" */
export type Role_Types_Aggregate = {
  __typename?: 'role_types_aggregate';
  aggregate?: Maybe<Role_Types_Aggregate_Fields>;
  nodes: Array<Role_Types>;
};

/** aggregate fields of "role_types" */
export type Role_Types_Aggregate_Fields = {
  __typename?: 'role_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Types_Max_Fields>;
  min?: Maybe<Role_Types_Min_Fields>;
};


/** aggregate fields of "role_types" */
export type Role_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role_types". All fields are combined with a logical 'AND'. */
export type Role_Types_Bool_Exp = {
  _and?: Maybe<Array<Role_Types_Bool_Exp>>;
  _not?: Maybe<Role_Types_Bool_Exp>;
  _or?: Maybe<Array<Role_Types_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_types" */
export enum Role_Types_Constraint {
  /** unique or primary key constraint */
  RoleTypesPkey = 'role_types_pkey'
}

export enum Role_Types_Enum {
  /** Администратор */
  Admin = 'admin',
  /** Член на ЦИК */
  Central = 'central',
  /** Ръководител на ЦИК */
  CentralLeader = 'centralLeader',
  /** Член на СИК */
  Section = 'section',
  /** Ръководител на СИК */
  SectionLeader = 'sectionLeader',
  /** Гласоподавател */
  User = 'user'
}

/** Boolean expression to compare columns of type "role_types_enum". All fields are combined with logical 'AND'. */
export type Role_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Role_Types_Enum>;
  _in?: Maybe<Array<Role_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Role_Types_Enum>;
  _nin?: Maybe<Array<Role_Types_Enum>>;
};

/** input type for inserting data into table "role_types" */
export type Role_Types_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Types_Max_Fields = {
  __typename?: 'role_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Types_Min_Fields = {
  __typename?: 'role_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role_types" */
export type Role_Types_Mutation_Response = {
  __typename?: 'role_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Types>;
};

/** input type for inserting object relation for remote table "role_types" */
export type Role_Types_Obj_Rel_Insert_Input = {
  data: Role_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Role_Types_On_Conflict>;
};

/** on conflict condition type for table "role_types" */
export type Role_Types_On_Conflict = {
  constraint: Role_Types_Constraint;
  update_columns: Array<Role_Types_Update_Column>;
  where?: Maybe<Role_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "role_types". */
export type Role_Types_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: role_types */
export type Role_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "role_types" */
export enum Role_Types_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "role_types" */
export type Role_Types_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "role_types" */
export enum Role_Types_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "settlements" */
export type Settlements = {
  __typename?: 'settlements';
  id: Scalars['Int'];
  isMunicipality: Scalars['Boolean'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  parentSettlement?: Maybe<Settlements>;
  /** An array relationship */
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
  IsMunicipality = 'isMunicipality',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId'
}

/** input type for updating data in table "settlements" */
export type Settlements_Set_Input = {
  id?: Maybe<Scalars['Int']>;
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
  /** An array relationship */
  commision_members: Array<Commision_Members>;
  /** An aggregate relationship */
  commision_members_aggregate: Commision_Members_Aggregate;
  /** fetch data from the table: "commision_members" using primary key columns */
  commision_members_by_pk?: Maybe<Commision_Members>;
  /** fetch data from the table: "commissions" */
  commissions: Array<Commissions>;
  /** fetch aggregated fields from the table: "commissions" */
  commissions_aggregate: Commissions_Aggregate;
  /** fetch data from the table: "commissions" using primary key columns */
  commissions_by_pk?: Maybe<Commissions>;
  /** fetch data from the table: "counters" */
  counters: Array<Counters>;
  /** fetch aggregated fields from the table: "counters" */
  counters_aggregate: Counters_Aggregate;
  /** fetch data from the table: "counters" using primary key columns */
  counters_by_pk?: Maybe<Counters>;
  /** execute function "login" which returns "users" */
  login: Array<Users>;
  /** execute function "login" and query aggregates on result of table type "users" */
  login_aggregate: Users_Aggregate;
  /** An array relationship */
  political_group_members: Array<Political_Group_Members>;
  /** An aggregate relationship */
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
  /** fetch data from the table: "referendum_countings" */
  referendum_countings: Array<Referendum_Countings>;
  /** fetch aggregated fields from the table: "referendum_countings" */
  referendum_countings_aggregate: Referendum_Countings_Aggregate;
  /** fetch data from the table: "referendum_questions" */
  referendum_questions: Array<Referendum_Questions>;
  /** fetch aggregated fields from the table: "referendum_questions" */
  referendum_questions_aggregate: Referendum_Questions_Aggregate;
  /** fetch data from the table: "referendum_questions" using primary key columns */
  referendum_questions_by_pk?: Maybe<Referendum_Questions>;
  /** fetch data from the table: "referendum_votes" */
  referendum_votes: Array<Referendum_Votes>;
  /** An aggregate relationship */
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  /** fetch data from the table: "referendum_votes" using primary key columns */
  referendum_votes_by_pk?: Maybe<Referendum_Votes>;
  /** fetch data from the table: "referendums" */
  referendums: Array<Referendums>;
  /** fetch aggregated fields from the table: "referendums" */
  referendums_aggregate: Referendums_Aggregate;
  /** fetch data from the table: "referendums" using primary key columns */
  referendums_by_pk?: Maybe<Referendums>;
  /** fetch data from the table: "role_types" */
  role_types: Array<Role_Types>;
  /** fetch aggregated fields from the table: "role_types" */
  role_types_aggregate: Role_Types_Aggregate;
  /** fetch data from the table: "role_types" using primary key columns */
  role_types_by_pk?: Maybe<Role_Types>;
  /** An array relationship */
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
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
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


export type Subscription_RootCountersArgs = {
  distinct_on?: Maybe<Array<Counters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Counters_Order_By>>;
  where?: Maybe<Counters_Bool_Exp>;
};


export type Subscription_RootCounters_AggregateArgs = {
  distinct_on?: Maybe<Array<Counters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Counters_Order_By>>;
  where?: Maybe<Counters_Bool_Exp>;
};


export type Subscription_RootCounters_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLoginArgs = {
  args: Login_Args;
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootLogin_AggregateArgs = {
  args: Login_Args;
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
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


export type Subscription_RootReferendum_CountingsArgs = {
  distinct_on?: Maybe<Array<Referendum_Countings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Countings_Order_By>>;
  where?: Maybe<Referendum_Countings_Bool_Exp>;
};


export type Subscription_RootReferendum_Countings_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Countings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Countings_Order_By>>;
  where?: Maybe<Referendum_Countings_Bool_Exp>;
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


export type Subscription_RootRole_TypesArgs = {
  distinct_on?: Maybe<Array<Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Types_Order_By>>;
  where?: Maybe<Role_Types_Bool_Exp>;
};


export type Subscription_RootRole_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Types_Order_By>>;
  where?: Maybe<Role_Types_Bool_Exp>;
};


export type Subscription_RootRole_Types_By_PkArgs = {
  value: Scalars['String'];
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
  egn: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  family: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  /** An array relationship */
  political_group_members: Array<Political_Group_Members>;
  /** An aggregate relationship */
  political_group_members_aggregate: Political_Group_Members_Aggregate;
  /** fetch data from the table: "referendum_votes" */
  referendum_votes: Array<Referendum_Votes>;
  /** An aggregate relationship */
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  role?: Maybe<Role_Types_Enum>;
  /** An object relationship */
  roleType?: Maybe<Role_Types>;
  secondRole?: Maybe<Role_Types_Enum>;
  /** An object relationship */
  secondRoleType?: Maybe<Role_Types>;
  surname: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
  votingSectionId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  voting_section?: Maybe<Voting_Section>;
};


/** columns and relationships of "users" */
export type UsersPolitical_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPolitical_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReferendum_VotesArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReferendum_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Referendum_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Referendum_Votes_Order_By>>;
  where?: Maybe<Referendum_Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVotesArgs = {
  distinct_on?: Maybe<Array<Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votes_Order_By>>;
  where?: Maybe<Votes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Votes_Order_By>>;
  where?: Maybe<Votes_Bool_Exp>;
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
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  address?: Maybe<Addresses_Bool_Exp>;
  addressId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  egn?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  family?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  pin?: Maybe<String_Comparison_Exp>;
  political_group_members?: Maybe<Political_Group_Members_Bool_Exp>;
  referendum_votes?: Maybe<Referendum_Votes_Bool_Exp>;
  role?: Maybe<Role_Types_Enum_Comparison_Exp>;
  roleType?: Maybe<Role_Types_Bool_Exp>;
  secondRole?: Maybe<Role_Types_Enum_Comparison_Exp>;
  secondRoleType?: Maybe<Role_Types_Bool_Exp>;
  surname?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  votes?: Maybe<Votes_Bool_Exp>;
  votingSectionId?: Maybe<Int_Comparison_Exp>;
  voting_section?: Maybe<Voting_Section_Bool_Exp>;
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
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  egn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  political_group_members?: Maybe<Political_Group_Members_Arr_Rel_Insert_Input>;
  referendum_votes?: Maybe<Referendum_Votes_Arr_Rel_Insert_Input>;
  role?: Maybe<Role_Types_Enum>;
  roleType?: Maybe<Role_Types_Obj_Rel_Insert_Input>;
  secondRole?: Maybe<Role_Types_Enum>;
  secondRoleType?: Maybe<Role_Types_Obj_Rel_Insert_Input>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votes?: Maybe<Votes_Arr_Rel_Insert_Input>;
  votingSectionId?: Maybe<Scalars['Int']>;
  voting_section?: Maybe<Voting_Section_Obj_Rel_Insert_Input>;
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
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
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
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
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
  egn?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
  political_group_members_aggregate?: Maybe<Political_Group_Members_Aggregate_Order_By>;
  referendum_votes_aggregate?: Maybe<Referendum_Votes_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
  roleType?: Maybe<Role_Types_Order_By>;
  secondRole?: Maybe<Order_By>;
  secondRoleType?: Maybe<Role_Types_Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  votes_aggregate?: Maybe<Votes_Aggregate_Order_By>;
  votingSectionId?: Maybe<Order_By>;
  voting_section?: Maybe<Voting_Section_Order_By>;
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
  Role = 'role',
  /** column name */
  SecondRole = 'secondRole',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingSectionId = 'votingSectionId'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  egn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  role?: Maybe<Role_Types_Enum>;
  secondRole?: Maybe<Role_Types_Enum>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  votingSectionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  CreatedAt = 'createdAt',
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
  Role = 'role',
  /** column name */
  SecondRole = 'secondRole',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VotingSectionId = 'votingSectionId'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votingSectionId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "votes" */
export type Votes = {
  __typename?: 'votes';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  inSection: Scalars['Boolean'];
  sectionId?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "votes" */
export type Votes_Aggregate_Order_By = {
  avg?: Maybe<Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Votes_Max_Order_By>;
  min?: Maybe<Votes_Min_Order_By>;
  stddev?: Maybe<Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Votes_Sum_Order_By>;
  var_pop?: Maybe<Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Votes_Var_Samp_Order_By>;
  variance?: Maybe<Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "votes" */
export type Votes_Arr_Rel_Insert_Input = {
  data: Array<Votes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Votes_Avg_Fields = {
  __typename?: 'votes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "votes" */
export type Votes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "votes". All fields are combined with a logical 'AND'. */
export type Votes_Bool_Exp = {
  _and?: Maybe<Array<Votes_Bool_Exp>>;
  _not?: Maybe<Votes_Bool_Exp>;
  _or?: Maybe<Array<Votes_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inSection?: Maybe<Boolean_Comparison_Exp>;
  sectionId?: Maybe<Int_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
  voteGroupId?: Maybe<Int_Comparison_Exp>;
  voteUserId?: Maybe<Int_Comparison_Exp>;
  votingId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "votes" */
export enum Votes_Constraint {
  /** unique or primary key constraint */
  VotesPkey = 'votes_pkey',
  /** unique or primary key constraint */
  VotesVotingIdUserIdKey = 'votes_votingId_userId_key'
}

/** input type for incrementing numeric columns in table "votes" */
export type Votes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "votes" */
export type Votes_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inSection?: Maybe<Scalars['Boolean']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Votes_Max_Fields = {
  __typename?: 'votes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "votes" */
export type Votes_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Votes_Min_Fields = {
  __typename?: 'votes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "votes" */
export type Votes_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
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
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inSection?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** primary key columns input for table: votes */
export type Votes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "votes" */
export enum Votes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InSection = 'inSection',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UserId = 'userId',
  /** column name */
  VoteGroupId = 'voteGroupId',
  /** column name */
  VoteUserId = 'voteUserId',
  /** column name */
  VotingId = 'votingId'
}

/** input type for updating data in table "votes" */
export type Votes_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inSection?: Maybe<Scalars['Boolean']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Votes_Stddev_Fields = {
  __typename?: 'votes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "votes" */
export type Votes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Votes_Stddev_Pop_Fields = {
  __typename?: 'votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "votes" */
export type Votes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Votes_Stddev_Samp_Fields = {
  __typename?: 'votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "votes" */
export type Votes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Votes_Sum_Fields = {
  __typename?: 'votes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  voteGroupId?: Maybe<Scalars['Int']>;
  voteUserId?: Maybe<Scalars['Int']>;
  votingId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "votes" */
export type Votes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** update columns of table "votes" */
export enum Votes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InSection = 'inSection',
  /** column name */
  SectionId = 'sectionId',
  /** column name */
  UserId = 'userId',
  /** column name */
  VoteGroupId = 'voteGroupId',
  /** column name */
  VoteUserId = 'voteUserId',
  /** column name */
  VotingId = 'votingId'
}

/** aggregate var_pop on columns */
export type Votes_Var_Pop_Fields = {
  __typename?: 'votes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "votes" */
export type Votes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Votes_Var_Samp_Fields = {
  __typename?: 'votes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "votes" */
export type Votes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Votes_Variance_Fields = {
  __typename?: 'votes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  voteGroupId?: Maybe<Scalars['Float']>;
  voteUserId?: Maybe<Scalars['Float']>;
  votingId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "votes" */
export type Votes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  sectionId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  voteGroupId?: Maybe<Order_By>;
  voteUserId?: Maybe<Order_By>;
  votingId?: Maybe<Order_By>;
};

/** columns and relationships of "voting_section" */
export type Voting_Section = {
  __typename?: 'voting_section';
  /** An object relationship */
  address?: Maybe<Addresses>;
  addressId?: Maybe<Scalars['Int']>;
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  openedAt?: Maybe<Scalars['timestamptz']>;
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
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "voting_section". All fields are combined with a logical 'AND'. */
export type Voting_Section_Bool_Exp = {
  _and?: Maybe<Array<Voting_Section_Bool_Exp>>;
  _not?: Maybe<Voting_Section_Bool_Exp>;
  _or?: Maybe<Array<Voting_Section_Bool_Exp>>;
  address?: Maybe<Addresses_Bool_Exp>;
  addressId?: Maybe<Int_Comparison_Exp>;
  closedAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  openedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "voting_section" */
export enum Voting_Section_Constraint {
  /** unique or primary key constraint */
  VotingSectionPkey = 'voting_section_pkey'
}

/** input type for incrementing numeric columns in table "voting_section" */
export type Voting_Section_Inc_Input = {
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "voting_section" */
export type Voting_Section_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  addressId?: Maybe<Scalars['Int']>;
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Voting_Section_Max_Fields = {
  __typename?: 'voting_section_max_fields';
  addressId?: Maybe<Scalars['Int']>;
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Voting_Section_Min_Fields = {
  __typename?: 'voting_section_min_fields';
  addressId?: Maybe<Scalars['Int']>;
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
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

/** input type for inserting object relation for remote table "voting_section" */
export type Voting_Section_Obj_Rel_Insert_Input = {
  data: Voting_Section_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Voting_Section_On_Conflict>;
};

/** on conflict condition type for table "voting_section" */
export type Voting_Section_On_Conflict = {
  constraint: Voting_Section_Constraint;
  update_columns: Array<Voting_Section_Update_Column>;
  where?: Maybe<Voting_Section_Bool_Exp>;
};

/** Ordering options when selecting data from "voting_section". */
export type Voting_Section_Order_By = {
  address?: Maybe<Addresses_Order_By>;
  addressId?: Maybe<Order_By>;
  closedAt?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  openedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: voting_section */
export type Voting_Section_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "voting_section" */
export enum Voting_Section_Select_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OpenedAt = 'openedAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "voting_section" */
export type Voting_Section_Set_Input = {
  addressId?: Maybe<Scalars['Int']>;
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Voting_Section_Stddev_Fields = {
  __typename?: 'voting_section_stddev_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Voting_Section_Stddev_Pop_Fields = {
  __typename?: 'voting_section_stddev_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Voting_Section_Stddev_Samp_Fields = {
  __typename?: 'voting_section_stddev_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Voting_Section_Sum_Fields = {
  __typename?: 'voting_section_sum_fields';
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "voting_section" */
export enum Voting_Section_Update_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OpenedAt = 'openedAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Voting_Section_Var_Pop_Fields = {
  __typename?: 'voting_section_var_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Voting_Section_Var_Samp_Fields = {
  __typename?: 'voting_section_var_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Voting_Section_Variance_Fields = {
  __typename?: 'voting_section_variance_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
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
  description: Scalars['String'];
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  political_group_members: Array<Political_Group_Members>;
  /** An aggregate relationship */
  political_group_members_aggregate: Political_Group_Members_Aggregate;
  /** An object relationship */
  settlement?: Maybe<Settlements>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  type: Voting_Types_Enum;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  voting_type: Voting_Types;
};


/** columns and relationships of "votings" */
export type VotingsPolitical_Group_MembersArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
};


/** columns and relationships of "votings" */
export type VotingsPolitical_Group_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Political_Group_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Political_Group_Members_Order_By>>;
  where?: Maybe<Political_Group_Members_Bool_Exp>;
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
  settlementId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "votings". All fields are combined with a logical 'AND'. */
export type Votings_Bool_Exp = {
  _and?: Maybe<Array<Votings_Bool_Exp>>;
  _not?: Maybe<Votings_Bool_Exp>;
  _or?: Maybe<Array<Votings_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  finishedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locked?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  political_group_members?: Maybe<Political_Group_Members_Bool_Exp>;
  settlement?: Maybe<Settlements_Bool_Exp>;
  settlementId?: Maybe<Int_Comparison_Exp>;
  startDate?: Maybe<Timestamptz_Comparison_Exp>;
  startedAt?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<Voting_Types_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  voting_type?: Maybe<Voting_Types_Bool_Exp>;
};

/** unique or primary key constraints on table "votings" */
export enum Votings_Constraint {
  /** unique or primary key constraint */
  VotingsPkey = 'votings_pkey'
}

/** input type for incrementing numeric columns in table "votings" */
export type Votings_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "votings" */
export type Votings_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  political_group_members?: Maybe<Political_Group_Members_Arr_Rel_Insert_Input>;
  settlement?: Maybe<Settlements_Obj_Rel_Insert_Input>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Voting_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  voting_type?: Maybe<Voting_Types_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Votings_Max_Fields = {
  __typename?: 'votings_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Votings_Min_Fields = {
  __typename?: 'votings_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
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

/** input type for inserting object relation for remote table "votings" */
export type Votings_Obj_Rel_Insert_Input = {
  data: Votings_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Votings_On_Conflict>;
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
  description?: Maybe<Order_By>;
  finishedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locked?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  political_group_members_aggregate?: Maybe<Political_Group_Members_Aggregate_Order_By>;
  settlement?: Maybe<Settlements_Order_By>;
  settlementId?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  startedAt?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  voting_type?: Maybe<Voting_Types_Order_By>;
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
  Description = 'description',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  StartDate = 'startDate',
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
  description?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  settlementId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  startedAt?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Voting_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Votings_Stddev_Fields = {
  __typename?: 'votings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Votings_Stddev_Pop_Fields = {
  __typename?: 'votings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Votings_Stddev_Samp_Fields = {
  __typename?: 'votings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Votings_Sum_Fields = {
  __typename?: 'votings_sum_fields';
  id?: Maybe<Scalars['Int']>;
  settlementId?: Maybe<Scalars['Int']>;
};

/** update columns of table "votings" */
export enum Votings_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FinishedAt = 'finishedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  SettlementId = 'settlementId',
  /** column name */
  StartDate = 'startDate',
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
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Votings_Var_Samp_Fields = {
  __typename?: 'votings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Votings_Variance_Fields = {
  __typename?: 'votings_variance_fields';
  id?: Maybe<Scalars['Float']>;
  settlementId?: Maybe<Scalars['Float']>;
};

export type RegisterQueryVariables = Exact<{
  args: RegisterUserInsertInput;
}>;


export type RegisterQuery = (
  { __typename?: 'query_root' }
  & { RegisterAction?: Maybe<(
    { __typename?: 'RegisterOutput' }
    & Pick<RegisterOutput, 'found'>
  )> }
);

export type LoginActionQueryVariables = Exact<{
  args: LoginInput;
}>;


export type LoginActionQuery = (
  { __typename?: 'query_root' }
  & { LoginAction?: Maybe<(
    { __typename?: 'LoginOutput' }
    & Pick<LoginOutput, 'accessToken' | 'fetchToken'>
  )> }
);

export type RefreshQueryVariables = Exact<{
  args: SwitchRoleInput;
}>;


export type RefreshQuery = (
  { __typename?: 'query_root' }
  & { RefreshToken?: Maybe<(
    { __typename?: 'SwithcRoleOutput' }
    & Pick<SwithcRoleOutput, 'fetchToken'>
  )> }
);

export type AddressShortFragment = (
  { __typename?: 'addresses' }
  & Pick<Addresses, 'id' | 'number' | 'street' | 'description' | 'settlementId'>
);

export type AddressFullFragment = (
  { __typename?: 'addresses' }
  & Pick<Addresses, 'id' | 'street' | 'number' | 'description' | 'settlementId'>
  & { settlement: (
    { __typename?: 'settlements' }
    & SettlementFiledsFragment
  ) }
);

export type SettlementsBaseFieldsFragment = (
  { __typename?: 'settlements' }
  & Pick<Settlements, 'id' | 'parentId' | 'name' | 'isMunicipality'>
);

export type SettlementFiledsFragment = (
  { __typename?: 'settlements' }
  & Pick<Settlements, 'id' | 'name' | 'isMunicipality' | 'parentId'>
  & { parentSettlement?: Maybe<(
    { __typename?: 'settlements' }
    & Pick<Settlements, 'id' | 'isMunicipality' | 'name'>
  )> }
);

export type GetFinishedReferendumsQueryVariables = Exact<{
  where?: Maybe<Referendums_Bool_Exp>;
}>;


export type GetFinishedReferendumsQuery = (
  { __typename?: 'query_root' }
  & { referendums: Array<(
    { __typename?: 'referendums' }
    & ReferendumFieldsFragment
  )>, referendums_aggregate: (
    { __typename?: 'referendums_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'referendums_aggregate_fields' }
      & Pick<Referendums_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetReferendumCountingsQueryVariables = Exact<{
  where?: Maybe<Referendum_Countings_Bool_Exp>;
}>;


export type GetReferendumCountingsQuery = (
  { __typename?: 'query_root' }
  & { referendum_countings: Array<(
    { __typename?: 'referendum_countings' }
    & Pick<Referendum_Countings, 'votesCount' | 'votesTrue' | 'votesFalse' | 'voted' | 'evoted'>
    & { question?: Maybe<(
      { __typename?: 'referendum_questions' }
      & Pick<Referendum_Questions, 'referendumId' | 'id' | 'question'>
    )> }
  )> }
);

export type GetPoliticalGroupsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Political_Groups_Bool_Exp;
  orderBy?: Maybe<Array<Political_Groups_Order_By> | Political_Groups_Order_By>;
}>;


export type GetPoliticalGroupsQuery = (
  { __typename?: 'query_root' }
  & { political_groups: Array<(
    { __typename?: 'political_groups' }
    & { membersCount: (
      { __typename?: 'political_group_members_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'political_group_members_aggregate_fields' }
        & Pick<Political_Group_Members_Aggregate_Fields, 'count'>
      )> }
    ) }
    & PoliticalGroupFieldsFragment
  )>, political_groups_aggregate: (
    { __typename?: 'political_groups_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'political_groups_aggregate_fields' }
      & Pick<Political_Groups_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type CreatePoliticalGroupMutationVariables = Exact<{
  object: Political_Groups_Insert_Input;
}>;


export type CreatePoliticalGroupMutation = (
  { __typename?: 'mutation_root' }
  & { insert_political_groups_one?: Maybe<(
    { __typename?: 'political_groups' }
    & PoliticalGroupFieldsFragment
  )> }
);

export type UpdatePoliticalGroupMutationVariables = Exact<{
  id: Scalars['Int'];
  set: Political_Groups_Set_Input;
}>;


export type UpdatePoliticalGroupMutation = (
  { __typename?: 'mutation_root' }
  & { update_political_groups_by_pk?: Maybe<(
    { __typename?: 'political_groups' }
    & PoliticalGroupFieldsFragment
  )> }
);

export type RemoveMemberFromGroupMutationVariables = Exact<{
  memberId: Scalars['Int'];
}>;


export type RemoveMemberFromGroupMutation = (
  { __typename?: 'mutation_root' }
  & { delete_political_group_members_by_pk?: Maybe<(
    { __typename?: 'political_group_members' }
    & Pick<Political_Group_Members, 'id'>
  )> }
);

export type AddPoliticalMemberMutationVariables = Exact<{
  object: Political_Group_Members_Insert_Input;
}>;


export type AddPoliticalMemberMutation = (
  { __typename?: 'mutation_root' }
  & { insert_political_group_members_one?: Maybe<(
    { __typename?: 'political_group_members' }
    & Pick<Political_Group_Members, 'id'>
  )> }
);

export type GetUpcomingVotingsQueryVariables = Exact<{
  startDate: Scalars['timestamptz'];
}>;


export type GetUpcomingVotingsQuery = (
  { __typename?: 'query_root' }
  & { votings: Array<(
    { __typename?: 'votings' }
    & VotingVieldsFragment
  )> }
);

export type UpdatePoliticalMemberVotingIdMutationVariables = Exact<{
  id: Scalars['Int'];
  votingId: Scalars['Int'];
}>;


export type UpdatePoliticalMemberVotingIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_political_group_members_by_pk?: Maybe<(
    { __typename?: 'political_group_members' }
    & Pick<Political_Group_Members, 'id'>
  )> }
);

export type GetPoliticalGroupMembersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Political_Group_Members_Bool_Exp;
  orderBy?: Maybe<Array<Political_Group_Members_Order_By> | Political_Group_Members_Order_By>;
}>;


export type GetPoliticalGroupMembersQuery = (
  { __typename?: 'query_root' }
  & { political_group_members: Array<(
    { __typename?: 'political_group_members' }
    & Pick<Political_Group_Members, 'id' | 'createdAt' | 'updatedAt' | 'votingId' | 'politicalGroupId'>
    & { voting?: Maybe<(
      { __typename?: 'votings' }
      & Pick<Votings, 'name'>
    )>, user: (
      { __typename?: 'users' }
      & Pick<Users, 'name' | 'surname' | 'family' | 'egn'>
    ) }
  )>, political_group_members_aggregate: (
    { __typename?: 'political_group_members_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'political_group_members_aggregate_fields' }
      & Pick<Political_Group_Members_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type PoliticalGroupFieldsFragment = (
  { __typename?: 'political_groups' }
  & Pick<Political_Groups, 'id' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'description'>
  & { political_group_type: (
    { __typename?: 'political_group_types' }
    & Pick<Political_Group_Types, 'value' | 'description'>
  ) }
);

export type AutoSuggestSettlementsQueryVariables = Exact<{
  condition: Settlements_Bool_Exp;
}>;


export type AutoSuggestSettlementsQuery = (
  { __typename?: 'query_root' }
  & { settlements: Array<(
    { __typename?: 'settlements' }
    & SettlementsBaseFieldsFragment
  )> }
);

export type GetDistrictsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDistrictsQuery = (
  { __typename?: 'query_root' }
  & { settlements: Array<(
    { __typename?: 'settlements' }
    & { settlements_aggregate: (
      { __typename?: 'settlements_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'settlements_aggregate_fields' }
        & Pick<Settlements_Aggregate_Fields, 'count'>
      )> }
    ) }
    & SettlementsBaseFieldsFragment
  )> }
);

export type GetMunicipalitiesIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMunicipalitiesIdsQuery = (
  { __typename?: 'query_root' }
  & { settlements: Array<(
    { __typename?: 'settlements' }
    & Pick<Settlements, 'id'>
  )>, settlements_aggregate: (
    { __typename?: 'settlements_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'settlements_aggregate_fields' }
      & Pick<Settlements_Aggregate_Fields, 'count'>
    )> }
  ) }
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

export type AutocompleteUsersQueryVariables = Exact<{
  condition?: Users_Bool_Exp;
  orderBy: Array<Users_Order_By> | Users_Order_By;
}>;


export type AutocompleteUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )> }
);

export type FetchUserWitnConditionQueryVariables = Exact<{
  condition?: Users_Bool_Exp;
  limit: Scalars['Int'];
}>;


export type FetchUserWitnConditionQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )> }
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

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  addrId: Scalars['Int'];
  addressSet: Addresses_Set_Input;
  userId: Scalars['Int'];
  userSet: Users_Set_Input;
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_addresses_by_pk?: Maybe<(
    { __typename?: 'addresses' }
    & AddressShortFragment
  )>, update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & UserFieldsFragment
  )> }
);

export type BulkInsertUsersMutationVariables = Exact<{
  objects: Array<Users_Insert_Input> | Users_Insert_Input;
}>;


export type BulkInsertUsersMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'surname' | 'family' | 'egn' | 'email' | 'pin' | 'addressId' | 'votingSectionId'>
  & { roleType?: Maybe<(
    { __typename?: 'role_types' }
    & Pick<Role_Types, 'value' | 'description'>
  )>, secondRoleType?: Maybe<(
    { __typename?: 'role_types' }
    & Pick<Role_Types, 'value' | 'description'>
  )>, address: (
    { __typename?: 'addresses' }
    & { settlement: (
      { __typename?: 'settlements' }
      & SettlementFiledsFragment
    ) }
    & AddressShortFragment
  ), referendum_votes: Array<(
    { __typename?: 'referendum_votes' }
    & Pick<Referendum_Votes, 'id' | 'createdAt' | 'questionId' | 'vote' | 'eVote'>
    & { referendum_question: (
      { __typename?: 'referendum_questions' }
      & { referendum: (
        { __typename?: 'referendums' }
        & Pick<Referendums, 'id'>
      ) }
    ) }
  )>, votes: Array<(
    { __typename?: 'votes' }
    & Pick<Votes, 'id' | 'createdAt' | 'votingId' | 'inSection' | 'sectionId' | 'voteGroupId' | 'voteUserId'>
  )> }
);

export type CountUndistributedToVotingSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CountUndistributedToVotingSectionsQuery = (
  { __typename?: 'query_root' }
  & { users_aggregate: (
    { __typename?: 'users_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'users_aggregate_fields' }
      & Pick<Users_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type DistributeUsersMutationVariables = Exact<{
  arg: Distribute_The_Undistributed_Users_New_Args;
}>;


export type DistributeUsersMutation = (
  { __typename?: 'mutation_root' }
  & { distribute_the_undistributed_users_new: Array<(
    { __typename?: 'counters' }
    & Pick<Counters, 'id' | 'counter'>
  )> }
);

export type MarkReferendumEvoteAsVoteMutationVariables = Exact<{
  objects: Array<Referendum_Votes_Insert_Input> | Referendum_Votes_Insert_Input;
}>;


export type MarkReferendumEvoteAsVoteMutation = (
  { __typename?: 'mutation_root' }
  & { insert_referendum_votes?: Maybe<(
    { __typename?: 'referendum_votes_mutation_response' }
    & Pick<Referendum_Votes_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetVotingSectionsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Voting_Section_Bool_Exp;
  orderBy?: Maybe<Array<Voting_Section_Order_By> | Voting_Section_Order_By>;
}>;


export type GetVotingSectionsQuery = (
  { __typename?: 'query_root' }
  & { voting_section: Array<(
    { __typename?: 'voting_section' }
    & Pick<Voting_Section, 'id' | 'createdAt' | 'updatedAt' | 'openedAt' | 'closedAt' | 'addressId'>
    & { address?: Maybe<(
      { __typename?: 'addresses' }
      & AddressFullFragment
    )> }
  )>, voting_section_aggregate: (
    { __typename?: 'voting_section_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'voting_section_aggregate_fields' }
      & Pick<Voting_Section_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type OpenVotingSectionMutationVariables = Exact<{
  sectionId: Scalars['Int'];
  when: Scalars['timestamptz'];
}>;


export type OpenVotingSectionMutation = (
  { __typename?: 'mutation_root' }
  & { update_voting_section_by_pk?: Maybe<(
    { __typename?: 'voting_section' }
    & Pick<Voting_Section, 'id' | 'openedAt'>
  )> }
);

export type CloseVotingSectionMutationVariables = Exact<{
  sectionId: Scalars['Int'];
  when: Scalars['timestamptz'];
}>;


export type CloseVotingSectionMutation = (
  { __typename?: 'mutation_root' }
  & { update_voting_section_by_pk?: Maybe<(
    { __typename?: 'voting_section' }
    & Pick<Voting_Section, 'id' | 'closedAt'>
  )> }
);

export type GetCommissionOfVotingSectionQueryVariables = Exact<{
  sectionId: Scalars['Int'];
}>;


export type GetCommissionOfVotingSectionQuery = (
  { __typename?: 'query_root' }
  & { commissions: Array<(
    { __typename?: 'commissions' }
    & SectionCommissionFieldsFragment
  )> }
);

export type CreateSectionCommissionMutationVariables = Exact<{
  set: Array<Users_Insert_Input> | Users_Insert_Input;
  commission: Commissions_Insert_Input;
}>;


export type CreateSectionCommissionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'users' }
      & UserFieldsFragment
    )> }
  )>, insert_commissions_one?: Maybe<(
    { __typename?: 'commissions' }
    & SectionCommissionFieldsFragment
  )> }
);

export type SectionCommissionFieldsFragment = (
  { __typename?: 'commissions' }
  & Pick<Commissions, 'id' | 'createdAt' | 'updatedAt' | 'votingSectionId'>
  & { commision_members: Array<(
    { __typename?: 'commision_members' }
    & Pick<Commision_Members, 'id' | 'createdAt' | 'updatedAt' | 'isLeader'>
    & { user: (
      { __typename?: 'users' }
      & UserFieldsFragment
    ) }
  )> }
);

export type CreateReferendumMutationVariables = Exact<{
  referendum: Referendums_Insert_Input;
}>;


export type CreateReferendumMutation = (
  { __typename?: 'mutation_root' }
  & { insert_referendums_one?: Maybe<(
    { __typename?: 'referendums' }
    & ReferendumFieldsFragment
  )> }
);

export type UpdateReferendumAndQuestionMutationVariables = Exact<{
  referendumId: Scalars['Int'];
  set: Referendums_Set_Input;
  questions: Array<Referendum_Questions_Insert_Input> | Referendum_Questions_Insert_Input;
  removed?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type UpdateReferendumAndQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_referendum_questions?: Maybe<(
    { __typename?: 'referendum_questions_mutation_response' }
    & { returning: Array<(
      { __typename?: 'referendum_questions' }
      & ReferendumQuestionsFieldsFragment
    )> }
  )>, delete_referendum_questions?: Maybe<(
    { __typename?: 'referendum_questions_mutation_response' }
    & Pick<Referendum_Questions_Mutation_Response, 'affected_rows'>
  )>, update_referendums_by_pk?: Maybe<(
    { __typename?: 'referendums' }
    & ReferendumFieldsFragment
  )> }
);

export type GetReferendumsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Referendums_Bool_Exp;
  orderBy?: Maybe<Array<Referendums_Order_By> | Referendums_Order_By>;
}>;


export type GetReferendumsQuery = (
  { __typename?: 'query_root' }
  & { referendums: Array<(
    { __typename?: 'referendums' }
    & ReferendumFieldsFragment
  )>, referendums_aggregate: (
    { __typename?: 'referendums_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'referendums_aggregate_fields' }
      & Pick<Referendums_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetStartedReferendumsQueryVariables = Exact<{
  where?: Maybe<Referendums_Bool_Exp>;
}>;


export type GetStartedReferendumsQuery = (
  { __typename?: 'query_root' }
  & { referendums: Array<(
    { __typename?: 'referendums' }
    & ReferendumFieldsFragment
  )>, referendums_aggregate: (
    { __typename?: 'referendums_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'referendums_aggregate_fields' }
      & Pick<Referendums_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type ReferendumFieldsFragment = (
  { __typename?: 'referendums' }
  & Pick<Referendums, 'id' | 'createdAt' | 'updatedAt' | 'startDate' | 'locked' | 'name' | 'description' | 'settlementId' | 'startedAt' | 'finishedAt'>
  & { settlement?: Maybe<(
    { __typename?: 'settlements' }
    & SettlementFiledsFragment
  )>, referendumQuestions: Array<(
    { __typename?: 'referendum_questions' }
    & ReferendumQuestionsFieldsFragment
  )> }
);

export type ReferendumQuestionsFieldsFragment = (
  { __typename?: 'referendum_questions' }
  & Pick<Referendum_Questions, 'id' | 'createdAt' | 'updatedAt' | 'question' | 'referendumId'>
);

export type AddVoteForTheReferendumMutationVariables = Exact<{
  votes: Array<Referendum_Votes_Insert_Input> | Referendum_Votes_Insert_Input;
}>;


export type AddVoteForTheReferendumMutation = (
  { __typename?: 'mutation_root' }
  & { insert_referendum_votes?: Maybe<(
    { __typename?: 'referendum_votes_mutation_response' }
    & Pick<Referendum_Votes_Mutation_Response, 'affected_rows'>
  )> }
);

export type CreateVotingMutationVariables = Exact<{
  input: Votings_Insert_Input;
}>;


export type CreateVotingMutation = (
  { __typename?: 'mutation_root' }
  & { insert_votings_one?: Maybe<(
    { __typename?: 'votings' }
    & VotingVieldsFragment
  )> }
);

export type UpdateVotingMutationVariables = Exact<{
  id: Scalars['Int'];
  input: Votings_Set_Input;
}>;


export type UpdateVotingMutation = (
  { __typename?: 'mutation_root' }
  & { update_votings_by_pk?: Maybe<(
    { __typename?: 'votings' }
    & VotingVieldsFragment
  )> }
);

export type GetVotingsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Votings_Bool_Exp;
  orderBy?: Maybe<Array<Votings_Order_By> | Votings_Order_By>;
}>;


export type GetVotingsQuery = (
  { __typename?: 'query_root' }
  & { votings: Array<(
    { __typename?: 'votings' }
    & VotingVieldsFragment
  )>, votings_aggregate: (
    { __typename?: 'votings_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'votings_aggregate_fields' }
      & Pick<Votings_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetStartedVotingsQueryVariables = Exact<{
  where?: Maybe<Votings_Bool_Exp>;
}>;


export type GetStartedVotingsQuery = (
  { __typename?: 'query_root' }
  & { votings: Array<(
    { __typename?: 'votings' }
    & VotingVieldsFragment
  )>, votings_aggregate: (
    { __typename?: 'votings_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'votings_aggregate_fields' }
      & Pick<Votings_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetParticipantsInVotingQueryVariables = Exact<{
  votingId: Scalars['Int'];
}>;


export type GetParticipantsInVotingQuery = (
  { __typename?: 'query_root' }
  & { votings_by_pk?: Maybe<(
    { __typename?: 'votings' }
    & Pick<Votings, 'id'>
    & { political_group_members: Array<(
      { __typename?: 'political_group_members' }
      & Pick<Political_Group_Members, 'id' | 'userId' | 'votingId'>
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'name' | 'surname' | 'family'>
      ), political_group: (
        { __typename?: 'political_groups' }
        & Pick<Political_Groups, 'id' | 'name' | 'description'>
        & { political_group_type: (
          { __typename?: 'political_group_types' }
          & Pick<Political_Group_Types, 'value' | 'description'>
        ) }
      ) }
    )> }
  )> }
);

export type VotingVieldsFragment = (
  { __typename?: 'votings' }
  & Pick<Votings, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'type' | 'locked' | 'startDate' | 'settlementId' | 'startedAt' | 'finishedAt'>
  & { settlement?: Maybe<(
    { __typename?: 'settlements' }
    & SettlementFiledsFragment
  )>, voting_type: (
    { __typename?: 'voting_types' }
    & Pick<Voting_Types, 'value' | 'description'>
  ) }
);

export type VoteMutationVariables = Exact<{
  input: Array<Votes_Insert_Input> | Votes_Insert_Input;
}>;


export type VoteMutation = (
  { __typename?: 'mutation_root' }
  & { insert_votes?: Maybe<(
    { __typename?: 'votes_mutation_response' }
    & Pick<Votes_Mutation_Response, 'affected_rows'>
  )> }
);

export type MarkVoteAsInSectionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MarkVoteAsInSectionMutation = (
  { __typename?: 'mutation_root' }
  & { update_votes_by_pk?: Maybe<(
    { __typename?: 'votes' }
    & Pick<Votes, 'id'>
  )> }
);

export const SettlementFiledsFragmentDoc = gql`
    fragment SettlementFileds on settlements {
  id
  name
  isMunicipality
  parentId
  parentSettlement {
    id
    isMunicipality
    name
  }
}
    `;
export const AddressFullFragmentDoc = gql`
    fragment AddressFull on addresses {
  id
  street
  number
  description
  settlementId
  settlement {
    ...SettlementFileds
  }
}
    ${SettlementFiledsFragmentDoc}`;
export const SettlementsBaseFieldsFragmentDoc = gql`
    fragment SettlementsBaseFields on settlements {
  id
  parentId
  name
  isMunicipality
}
    `;
export const PoliticalGroupFieldsFragmentDoc = gql`
    fragment PoliticalGroupFields on political_groups {
  id
  createdAt
  updatedAt
  type
  political_group_type {
    value
    description
  }
  name
  description
}
    `;
export const AddressShortFragmentDoc = gql`
    fragment AddressShort on addresses {
  id
  number
  street
  description
  settlementId
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on users {
  id
  createdAt
  updatedAt
  name
  surname
  family
  egn
  email
  pin
  addressId
  votingSectionId
  roleType {
    value
    description
  }
  secondRoleType {
    value
    description
  }
  address {
    ...AddressShort
    settlement {
      ...SettlementFileds
    }
  }
  referendum_votes(order_by: {createdAt: desc}) {
    id
    createdAt
    questionId
    vote
    eVote
    referendum_question {
      referendum {
        id
      }
    }
  }
  votes {
    id
    createdAt
    votingId
    inSection
    sectionId
    voteGroupId
    voteUserId
  }
}
    ${AddressShortFragmentDoc}
${SettlementFiledsFragmentDoc}`;
export const SectionCommissionFieldsFragmentDoc = gql`
    fragment SectionCommissionFields on commissions {
  id
  createdAt
  updatedAt
  votingSectionId
  commision_members {
    id
    createdAt
    updatedAt
    isLeader
    user {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const ReferendumQuestionsFieldsFragmentDoc = gql`
    fragment ReferendumQuestionsFields on referendum_questions {
  id
  createdAt
  updatedAt
  question
  referendumId
}
    `;
export const ReferendumFieldsFragmentDoc = gql`
    fragment ReferendumFields on referendums {
  id
  createdAt
  updatedAt
  startDate
  locked
  name
  description
  settlementId
  settlement {
    ...SettlementFileds
  }
  startedAt
  finishedAt
  referendumQuestions {
    ...ReferendumQuestionsFields
  }
}
    ${SettlementFiledsFragmentDoc}
${ReferendumQuestionsFieldsFragmentDoc}`;
export const VotingVieldsFragmentDoc = gql`
    fragment VotingVields on votings {
  id
  createdAt
  updatedAt
  name
  description
  type
  locked
  startDate
  settlementId
  settlement {
    ...SettlementFileds
  }
  voting_type {
    value
    description
  }
  startedAt
  finishedAt
}
    ${SettlementFiledsFragmentDoc}`;
export const RegisterDocument = gql`
    query Register($args: RegisterUserInsertInput!) {
  RegisterAction(arg1: $args) {
    found
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Query<RegisterQuery, RegisterQueryVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginActionDocument = gql`
    query LoginAction($args: LoginInput!) {
  LoginAction(args: $args) {
    accessToken
    fetchToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginActionGQL extends Apollo.Query<LoginActionQuery, LoginActionQueryVariables> {
    document = LoginActionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RefreshDocument = gql`
    query Refresh($args: SwitchRoleInput!) {
  RefreshToken(args: $args) {
    fetchToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RefreshGQL extends Apollo.Query<RefreshQuery, RefreshQueryVariables> {
    document = RefreshDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFinishedReferendumsDocument = gql`
    query GetFinishedReferendums($where: referendums_bool_exp) {
  referendums(where: $where) {
    ...ReferendumFields
  }
  referendums_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${ReferendumFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFinishedReferendumsGQL extends Apollo.Query<GetFinishedReferendumsQuery, GetFinishedReferendumsQueryVariables> {
    document = GetFinishedReferendumsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetReferendumCountingsDocument = gql`
    query getReferendumCountings($where: referendum_countings_bool_exp) {
  referendum_countings(where: $where) {
    question {
      referendumId
      id
      question
    }
    votesCount
    votesTrue
    votesFalse
    voted
    evoted
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetReferendumCountingsGQL extends Apollo.Query<GetReferendumCountingsQuery, GetReferendumCountingsQueryVariables> {
    document = GetReferendumCountingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPoliticalGroupsDocument = gql`
    query GetPoliticalGroups($limit: Int, $offset: Int, $condition: political_groups_bool_exp! = {}, $orderBy: [political_groups_order_by!] = {createdAt: desc}) {
  political_groups(
    where: $condition
    limit: $limit
    offset: $offset
    order_by: $orderBy
  ) {
    ...PoliticalGroupFields
    membersCount: political_group_members_aggregate {
      aggregate {
        count
      }
    }
  }
  political_groups_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${PoliticalGroupFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPoliticalGroupsGQL extends Apollo.Query<GetPoliticalGroupsQuery, GetPoliticalGroupsQueryVariables> {
    document = GetPoliticalGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePoliticalGroupDocument = gql`
    mutation CreatePoliticalGroup($object: political_groups_insert_input!) {
  insert_political_groups_one(object: $object) {
    ...PoliticalGroupFields
  }
}
    ${PoliticalGroupFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePoliticalGroupGQL extends Apollo.Mutation<CreatePoliticalGroupMutation, CreatePoliticalGroupMutationVariables> {
    document = CreatePoliticalGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePoliticalGroupDocument = gql`
    mutation UpdatePoliticalGroup($id: Int!, $set: political_groups_set_input!) {
  update_political_groups_by_pk(pk_columns: {id: $id}, _set: $set) {
    ...PoliticalGroupFields
  }
}
    ${PoliticalGroupFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePoliticalGroupGQL extends Apollo.Mutation<UpdatePoliticalGroupMutation, UpdatePoliticalGroupMutationVariables> {
    document = UpdatePoliticalGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveMemberFromGroupDocument = gql`
    mutation RemoveMemberFromGroup($memberId: Int!) {
  delete_political_group_members_by_pk(id: $memberId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveMemberFromGroupGQL extends Apollo.Mutation<RemoveMemberFromGroupMutation, RemoveMemberFromGroupMutationVariables> {
    document = RemoveMemberFromGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddPoliticalMemberDocument = gql`
    mutation AddPoliticalMember($object: political_group_members_insert_input!) {
  insert_political_group_members_one(object: $object) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddPoliticalMemberGQL extends Apollo.Mutation<AddPoliticalMemberMutation, AddPoliticalMemberMutationVariables> {
    document = AddPoliticalMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUpcomingVotingsDocument = gql`
    query GetUpcomingVotings($startDate: timestamptz!) {
  votings(
    where: {_and: [{locked: {_eq: true}}, {startDate: {_gt: $startDate}}, {finishedAt: {_is_null: true}}]}
  ) {
    ...VotingVields
  }
}
    ${VotingVieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUpcomingVotingsGQL extends Apollo.Query<GetUpcomingVotingsQuery, GetUpcomingVotingsQueryVariables> {
    document = GetUpcomingVotingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePoliticalMemberVotingIdDocument = gql`
    mutation UpdatePoliticalMemberVotingId($id: Int!, $votingId: Int!) {
  update_political_group_members_by_pk(
    pk_columns: {id: $id}
    _set: {votingId: $votingId}
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePoliticalMemberVotingIdGQL extends Apollo.Mutation<UpdatePoliticalMemberVotingIdMutation, UpdatePoliticalMemberVotingIdMutationVariables> {
    document = UpdatePoliticalMemberVotingIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPoliticalGroupMembersDocument = gql`
    query getPoliticalGroupMembers($limit: Int, $offset: Int, $condition: political_group_members_bool_exp! = {}, $orderBy: [political_group_members_order_by!] = {createdAt: desc}) {
  political_group_members(
    where: $condition
    limit: $limit
    offset: $offset
    order_by: $orderBy
  ) {
    id
    createdAt
    updatedAt
    votingId
    voting {
      name
    }
    politicalGroupId
    user {
      name
      surname
      family
      egn
    }
  }
  political_group_members_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPoliticalGroupMembersGQL extends Apollo.Query<GetPoliticalGroupMembersQuery, GetPoliticalGroupMembersQueryVariables> {
    document = GetPoliticalGroupMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoSuggestSettlementsDocument = gql`
    query AutoSuggestSettlements($condition: settlements_bool_exp!) {
  settlements(where: $condition) {
    ...SettlementsBaseFields
  }
}
    ${SettlementsBaseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoSuggestSettlementsGQL extends Apollo.Query<AutoSuggestSettlementsQuery, AutoSuggestSettlementsQueryVariables> {
    document = AutoSuggestSettlementsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDistrictsDocument = gql`
    query GetDistricts {
  settlements(where: {parentId: {_is_null: true}}) {
    ...SettlementsBaseFields
    settlements_aggregate {
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
export const GetMunicipalitiesIdsDocument = gql`
    query GetMunicipalitiesIds {
  settlements(where: {isMunicipality: {_eq: true}}) {
    id
  }
  settlements_aggregate(where: {isMunicipality: {_eq: true}}) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMunicipalitiesIdsGQL extends Apollo.Query<GetMunicipalitiesIdsQuery, GetMunicipalitiesIdsQueryVariables> {
    document = GetMunicipalitiesIdsDocument;
    
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
export const AutocompleteUsersDocument = gql`
    query AutocompleteUsers($condition: users_bool_exp! = {}, $orderBy: [users_order_by!]!) {
  users(where: $condition, order_by: $orderBy) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AutocompleteUsersGQL extends Apollo.Query<AutocompleteUsersQuery, AutocompleteUsersQueryVariables> {
    document = AutocompleteUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchUserWitnConditionDocument = gql`
    query FetchUserWitnCondition($condition: users_bool_exp! = {}, $limit: Int!) {
  users(where: $condition, limit: $limit) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchUserWitnConditionGQL extends Apollo.Query<FetchUserWitnConditionQuery, FetchUserWitnConditionQueryVariables> {
    document = FetchUserWitnConditionDocument;
    
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
export const GetUserByIdDocument = gql`
    query GetUserById($id: Int!) {
  users_by_pk(id: $id) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserByIdGQL extends Apollo.Query<GetUserByIdQuery, GetUserByIdQueryVariables> {
    document = GetUserByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($addrId: Int!, $addressSet: addresses_set_input!, $userId: Int!, $userSet: users_set_input!) {
  update_addresses_by_pk(pk_columns: {id: $addrId}, _set: $addressSet) {
    ...AddressShort
  }
  update_users_by_pk(pk_columns: {id: $userId}, _set: $userSet) {
    ...UserFields
  }
}
    ${AddressShortFragmentDoc}
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
export const BulkInsertUsersDocument = gql`
    mutation BulkInsertUsers($objects: [users_insert_input!]!) {
  insert_users(
    objects: $objects
    on_conflict: {constraint: users_egn_key, update_columns: []}
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkInsertUsersGQL extends Apollo.Mutation<BulkInsertUsersMutation, BulkInsertUsersMutationVariables> {
    document = BulkInsertUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CountUndistributedToVotingSectionsDocument = gql`
    query countUndistributedToVotingSections {
  users_aggregate(where: {votingSectionId: {_is_null: true}}) {
    aggregate {
      count
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CountUndistributedToVotingSectionsGQL extends Apollo.Query<CountUndistributedToVotingSectionsQuery, CountUndistributedToVotingSectionsQueryVariables> {
    document = CountUndistributedToVotingSectionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DistributeUsersDocument = gql`
    mutation distributeUsers($arg: distribute_the_undistributed_users_new_args!) {
  distribute_the_undistributed_users_new(args: $arg) {
    id
    counter
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DistributeUsersGQL extends Apollo.Mutation<DistributeUsersMutation, DistributeUsersMutationVariables> {
    document = DistributeUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkReferendumEvoteAsVoteDocument = gql`
    mutation MarkReferendumEvoteAsVote($objects: [referendum_votes_insert_input!]!) {
  insert_referendum_votes(
    objects: $objects
    on_conflict: {constraint: referendum_votes_pkey, update_columns: [sectionId, vote, eVote]}
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkReferendumEvoteAsVoteGQL extends Apollo.Mutation<MarkReferendumEvoteAsVoteMutation, MarkReferendumEvoteAsVoteMutationVariables> {
    document = MarkReferendumEvoteAsVoteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetVotingSectionsDocument = gql`
    query GetVotingSections($limit: Int, $offset: Int, $condition: voting_section_bool_exp! = {}, $orderBy: [voting_section_order_by!] = {createdAt: desc}) {
  voting_section(
    limit: $limit
    offset: $offset
    where: $condition
    order_by: $orderBy
  ) {
    id
    createdAt
    updatedAt
    openedAt
    closedAt
    addressId
    address {
      ...AddressFull
    }
  }
  voting_section_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${AddressFullFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetVotingSectionsGQL extends Apollo.Query<GetVotingSectionsQuery, GetVotingSectionsQueryVariables> {
    document = GetVotingSectionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OpenVotingSectionDocument = gql`
    mutation OpenVotingSection($sectionId: Int!, $when: timestamptz!) {
  update_voting_section_by_pk(
    pk_columns: {id: $sectionId}
    _set: {openedAt: $when}
  ) {
    id
    openedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OpenVotingSectionGQL extends Apollo.Mutation<OpenVotingSectionMutation, OpenVotingSectionMutationVariables> {
    document = OpenVotingSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloseVotingSectionDocument = gql`
    mutation CloseVotingSection($sectionId: Int!, $when: timestamptz!) {
  update_voting_section_by_pk(
    pk_columns: {id: $sectionId}
    _set: {closedAt: $when}
  ) {
    id
    closedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloseVotingSectionGQL extends Apollo.Mutation<CloseVotingSectionMutation, CloseVotingSectionMutationVariables> {
    document = CloseVotingSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCommissionOfVotingSectionDocument = gql`
    query GetCommissionOfVotingSection($sectionId: Int!) {
  commissions(where: {votingSectionId: {_eq: $sectionId}}) {
    ...SectionCommissionFields
  }
}
    ${SectionCommissionFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCommissionOfVotingSectionGQL extends Apollo.Query<GetCommissionOfVotingSectionQuery, GetCommissionOfVotingSectionQueryVariables> {
    document = GetCommissionOfVotingSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateSectionCommissionDocument = gql`
    mutation CreateSectionCommission($set: [users_insert_input!]!, $commission: commissions_insert_input!) {
  insert_users(
    objects: $set
    on_conflict: {constraint: users_pkey, update_columns: [role, secondRole]}
  ) {
    returning {
      ...UserFields
    }
  }
  insert_commissions_one(object: $commission) {
    ...SectionCommissionFields
  }
}
    ${UserFieldsFragmentDoc}
${SectionCommissionFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSectionCommissionGQL extends Apollo.Mutation<CreateSectionCommissionMutation, CreateSectionCommissionMutationVariables> {
    document = CreateSectionCommissionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateReferendumDocument = gql`
    mutation CreateReferendum($referendum: referendums_insert_input!) {
  insert_referendums_one(object: $referendum) {
    ...ReferendumFields
  }
}
    ${ReferendumFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateReferendumGQL extends Apollo.Mutation<CreateReferendumMutation, CreateReferendumMutationVariables> {
    document = CreateReferendumDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateReferendumAndQuestionDocument = gql`
    mutation UpdateReferendumAndQuestion($referendumId: Int!, $set: referendums_set_input!, $questions: [referendum_questions_insert_input!]!, $removed: [Int!]) {
  insert_referendum_questions(
    objects: $questions
    on_conflict: {constraint: referendum_rows_pkey, update_columns: [question]}
  ) {
    returning {
      ...ReferendumQuestionsFields
    }
  }
  delete_referendum_questions(where: {id: {_in: $removed}}) {
    affected_rows
  }
  update_referendums_by_pk(pk_columns: {id: $referendumId}, _set: $set) {
    ...ReferendumFields
  }
}
    ${ReferendumQuestionsFieldsFragmentDoc}
${ReferendumFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateReferendumAndQuestionGQL extends Apollo.Mutation<UpdateReferendumAndQuestionMutation, UpdateReferendumAndQuestionMutationVariables> {
    document = UpdateReferendumAndQuestionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetReferendumsDocument = gql`
    query GetReferendums($limit: Int, $offset: Int, $condition: referendums_bool_exp! = {}, $orderBy: [referendums_order_by!] = {createdAt: desc}) {
  referendums(
    where: $condition
    limit: $limit
    offset: $offset
    order_by: $orderBy
  ) {
    ...ReferendumFields
  }
  referendums_aggregate {
    aggregate {
      count
    }
  }
}
    ${ReferendumFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetReferendumsGQL extends Apollo.Query<GetReferendumsQuery, GetReferendumsQueryVariables> {
    document = GetReferendumsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetStartedReferendumsDocument = gql`
    query GetStartedReferendums($where: referendums_bool_exp) {
  referendums(where: $where) {
    ...ReferendumFields
  }
  referendums_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${ReferendumFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStartedReferendumsGQL extends Apollo.Query<GetStartedReferendumsQuery, GetStartedReferendumsQueryVariables> {
    document = GetStartedReferendumsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddVoteForTheReferendumDocument = gql`
    mutation AddVoteForTheReferendum($votes: [referendum_votes_insert_input!]!) {
  insert_referendum_votes(objects: $votes) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddVoteForTheReferendumGQL extends Apollo.Mutation<AddVoteForTheReferendumMutation, AddVoteForTheReferendumMutationVariables> {
    document = AddVoteForTheReferendumDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateVotingDocument = gql`
    mutation CreateVoting($input: votings_insert_input!) {
  insert_votings_one(object: $input) {
    ...VotingVields
  }
}
    ${VotingVieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateVotingGQL extends Apollo.Mutation<CreateVotingMutation, CreateVotingMutationVariables> {
    document = CreateVotingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateVotingDocument = gql`
    mutation UpdateVoting($id: Int!, $input: votings_set_input!) {
  update_votings_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...VotingVields
  }
}
    ${VotingVieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateVotingGQL extends Apollo.Mutation<UpdateVotingMutation, UpdateVotingMutationVariables> {
    document = UpdateVotingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetVotingsDocument = gql`
    query GetVotings($limit: Int, $offset: Int, $condition: votings_bool_exp! = {}, $orderBy: [votings_order_by!] = {createdAt: desc}) {
  votings(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...VotingVields
  }
  votings_aggregate {
    aggregate {
      count
    }
  }
}
    ${VotingVieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetVotingsGQL extends Apollo.Query<GetVotingsQuery, GetVotingsQueryVariables> {
    document = GetVotingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetStartedVotingsDocument = gql`
    query GetStartedVotings($where: votings_bool_exp) {
  votings(where: $where) {
    ...VotingVields
  }
  votings_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${VotingVieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStartedVotingsGQL extends Apollo.Query<GetStartedVotingsQuery, GetStartedVotingsQueryVariables> {
    document = GetStartedVotingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetParticipantsInVotingDocument = gql`
    query GetParticipantsInVoting($votingId: Int!) {
  votings_by_pk(id: $votingId) {
    id
    political_group_members {
      id
      userId
      user {
        name
        surname
        family
      }
      votingId
      political_group {
        id
        name
        description
        political_group_type {
          value
          description
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetParticipantsInVotingGQL extends Apollo.Query<GetParticipantsInVotingQuery, GetParticipantsInVotingQueryVariables> {
    document = GetParticipantsInVotingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VoteDocument = gql`
    mutation Vote($input: [votes_insert_input!]!) {
  insert_votes(
    objects: $input
    on_conflict: {constraint: votes_pkey, update_columns: [voteGroupId, voteUserId]}
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VoteGQL extends Apollo.Mutation<VoteMutation, VoteMutationVariables> {
    document = VoteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkVoteAsInSectionDocument = gql`
    mutation MarkVoteAsInSection($id: Int!) {
  update_votes_by_pk(pk_columns: {id: $id}, _set: {inSection: true}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkVoteAsInSectionGQL extends Apollo.Mutation<MarkVoteAsInSectionMutation, MarkVoteAsInSectionMutationVariables> {
    document = MarkVoteAsInSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }