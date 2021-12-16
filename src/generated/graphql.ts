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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "votings" */
  delete_votings?: Maybe<Votings_Mutation_Response>;
  /** delete single row from the table: "votings" */
  delete_votings_by_pk?: Maybe<Votings>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "votings" */
  insert_votings?: Maybe<Votings_Mutation_Response>;
  /** insert a single row into the table: "votings" */
  insert_votings_one?: Maybe<Votings>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
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
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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
  roleId: Scalars['Int'];
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

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
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
  roleId?: Maybe<Int_Comparison_Exp>;
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
  roleId?: Maybe<Scalars['Int']>;
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
  roleId?: Maybe<Order_By>;
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

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
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

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  addressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  secondRoleId?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
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

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  secondRoleId?: Maybe<Scalars['Float']>;
  sectionId?: Maybe<Scalars['Float']>;
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

/** aggregate avg on columns */
export type Votings_Avg_Fields = {
  __typename?: 'votings_avg_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
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

/** aggregate stddev_pop on columns */
export type Votings_Stddev_Pop_Fields = {
  __typename?: 'votings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Votings_Stddev_Samp_Fields = {
  __typename?: 'votings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Votings_Sum_Fields = {
  __typename?: 'votings_sum_fields';
  id?: Maybe<Scalars['Int']>;
  votingTypeId?: Maybe<Scalars['Int']>;
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

/** aggregate var_samp on columns */
export type Votings_Var_Samp_Fields = {
  __typename?: 'votings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Votings_Variance_Fields = {
  __typename?: 'votings_variance_fields';
  id?: Maybe<Scalars['Float']>;
  votingTypeId?: Maybe<Scalars['Float']>;
};

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