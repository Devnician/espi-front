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
  numeric: any;
  timestamptz: any;
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

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
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

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['numeric'];
  quantity: Scalars['Int'];
  sale_price: Scalars['numeric'];
  sku: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  avg?: Maybe<Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
  stddev?: Maybe<Items_Stddev_Fields>;
  stddev_pop?: Maybe<Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Items_Stddev_Samp_Fields>;
  sum?: Maybe<Items_Sum_Fields>;
  var_pop?: Maybe<Items_Var_Pop_Fields>;
  var_samp?: Maybe<Items_Var_Samp_Fields>;
  variance?: Maybe<Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Items_Avg_Fields = {
  __typename?: 'items_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Items_Bool_Exp>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Items_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  sale_price?: Maybe<Numeric_Comparison_Exp>;
  sku?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey',
  /** unique or primary key constraint */
  ItemsSkuKey = 'items_sku_key'
}

/** input type for incrementing numeric columns in table "items" */
export type Items_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['numeric']>;
  sku?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['numeric']>;
  sku?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['numeric']>;
  sku?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  sale_price?: Maybe<Order_By>;
  sku?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SalePrice = 'sale_price',
  /** column name */
  Sku = 'sku',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['numeric']>;
  sku?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Items_Stddev_Fields = {
  __typename?: 'items_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Items_Stddev_Pop_Fields = {
  __typename?: 'items_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Items_Stddev_Samp_Fields = {
  __typename?: 'items_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Items_Sum_Fields = {
  __typename?: 'items_sum_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['numeric']>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SalePrice = 'sale_price',
  /** column name */
  Sku = 'sku',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Items_Var_Pop_Fields = {
  __typename?: 'items_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Items_Var_Samp_Fields = {
  __typename?: 'items_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Items_Variance_Fields = {
  __typename?: 'items_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "order_lines" */
  delete_order_lines?: Maybe<Order_Lines_Mutation_Response>;
  /** delete single row from the table: "order_lines" */
  delete_order_lines_by_pk?: Maybe<Order_Lines>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "pepe" */
  delete_pepe?: Maybe<Pepe_Mutation_Response>;
  /** delete single row from the table: "pepe" */
  delete_pepe_by_pk?: Maybe<Pepe>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "order_lines" */
  insert_order_lines?: Maybe<Order_Lines_Mutation_Response>;
  /** insert a single row into the table: "order_lines" */
  insert_order_lines_one?: Maybe<Order_Lines>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "pepe" */
  insert_pepe?: Maybe<Pepe_Mutation_Response>;
  /** insert a single row into the table: "pepe" */
  insert_pepe_one?: Maybe<Pepe>;
  testAction?: Maybe<SampleOutput>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update data of the table: "order_lines" */
  update_order_lines?: Maybe<Order_Lines_Mutation_Response>;
  /** update single row of the table: "order_lines" */
  update_order_lines_by_pk?: Maybe<Order_Lines>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "pepe" */
  update_pepe?: Maybe<Pepe_Mutation_Response>;
  /** update single row of the table: "pepe" */
  update_pepe_by_pk?: Maybe<Pepe>;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Order_LinesArgs = {
  where: Order_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Lines_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PepeArgs = {
  where: Pepe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pepe_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_LinesArgs = {
  objects: Array<Order_Lines_Insert_Input>;
  on_conflict?: Maybe<Order_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Lines_OneArgs = {
  object: Order_Lines_Insert_Input;
  on_conflict?: Maybe<Order_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PepeArgs = {
  objects: Array<Pepe_Insert_Input>;
  on_conflict?: Maybe<Pepe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pepe_OneArgs = {
  object: Pepe_Insert_Input;
  on_conflict?: Maybe<Pepe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootTestActionArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _inc?: Maybe<Items_Inc_Input>;
  _set?: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _inc?: Maybe<Items_Inc_Input>;
  _set?: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_LinesArgs = {
  _inc?: Maybe<Order_Lines_Inc_Input>;
  _set?: Maybe<Order_Lines_Set_Input>;
  where: Order_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Lines_By_PkArgs = {
  _inc?: Maybe<Order_Lines_Inc_Input>;
  _set?: Maybe<Order_Lines_Set_Input>;
  pk_columns: Order_Lines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PepeArgs = {
  _inc?: Maybe<Pepe_Inc_Input>;
  _set?: Maybe<Pepe_Set_Input>;
  where: Pepe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pepe_By_PkArgs = {
  _inc?: Maybe<Pepe_Inc_Input>;
  _set?: Maybe<Pepe_Set_Input>;
  pk_columns: Pepe_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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

/** columns and relationships of "order_lines" */
export type Order_Lines = {
  __typename?: 'order_lines';
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  item: Items;
  item_id: Scalars['Int'];
  order_id: Scalars['Int'];
  quantity: Scalars['Int'];
};

/** aggregated selection of "order_lines" */
export type Order_Lines_Aggregate = {
  __typename?: 'order_lines_aggregate';
  aggregate?: Maybe<Order_Lines_Aggregate_Fields>;
  nodes: Array<Order_Lines>;
};

/** aggregate fields of "order_lines" */
export type Order_Lines_Aggregate_Fields = {
  __typename?: 'order_lines_aggregate_fields';
  avg?: Maybe<Order_Lines_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Lines_Max_Fields>;
  min?: Maybe<Order_Lines_Min_Fields>;
  stddev?: Maybe<Order_Lines_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Lines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Lines_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Lines_Sum_Fields>;
  var_pop?: Maybe<Order_Lines_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Lines_Var_Samp_Fields>;
  variance?: Maybe<Order_Lines_Variance_Fields>;
};


/** aggregate fields of "order_lines" */
export type Order_Lines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Lines_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_lines" */
export type Order_Lines_Aggregate_Order_By = {
  avg?: Maybe<Order_Lines_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Lines_Max_Order_By>;
  min?: Maybe<Order_Lines_Min_Order_By>;
  stddev?: Maybe<Order_Lines_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Lines_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Lines_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Lines_Sum_Order_By>;
  var_pop?: Maybe<Order_Lines_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Lines_Var_Samp_Order_By>;
  variance?: Maybe<Order_Lines_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_lines" */
export type Order_Lines_Arr_Rel_Insert_Input = {
  data: Array<Order_Lines_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Order_Lines_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Lines_Avg_Fields = {
  __typename?: 'order_lines_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_lines" */
export type Order_Lines_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_lines". All fields are combined with a logical 'AND'. */
export type Order_Lines_Bool_Exp = {
  _and?: Maybe<Array<Order_Lines_Bool_Exp>>;
  _not?: Maybe<Order_Lines_Bool_Exp>;
  _or?: Maybe<Array<Order_Lines_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  item?: Maybe<Items_Bool_Exp>;
  item_id?: Maybe<Int_Comparison_Exp>;
  order_id?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_lines" */
export enum Order_Lines_Constraint {
  /** unique or primary key constraint */
  OrderLinesPkey = 'order_lines_pkey'
}

/** input type for incrementing numeric columns in table "order_lines" */
export type Order_Lines_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_lines" */
export type Order_Lines_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Items_Obj_Rel_Insert_Input>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Lines_Max_Fields = {
  __typename?: 'order_lines_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_lines" */
export type Order_Lines_Max_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Lines_Min_Fields = {
  __typename?: 'order_lines_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_lines" */
export type Order_Lines_Min_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_lines" */
export type Order_Lines_Mutation_Response = {
  __typename?: 'order_lines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Lines>;
};

/** on conflict condition type for table "order_lines" */
export type Order_Lines_On_Conflict = {
  constraint: Order_Lines_Constraint;
  update_columns: Array<Order_Lines_Update_Column>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};

/** Ordering options when selecting data from "order_lines". */
export type Order_Lines_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item?: Maybe<Items_Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** primary key columns input for table: order_lines */
export type Order_Lines_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order_lines" */
export enum Order_Lines_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "order_lines" */
export type Order_Lines_Set_Input = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Lines_Stddev_Fields = {
  __typename?: 'order_lines_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_lines" */
export type Order_Lines_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Lines_Stddev_Pop_Fields = {
  __typename?: 'order_lines_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_lines" */
export type Order_Lines_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Lines_Stddev_Samp_Fields = {
  __typename?: 'order_lines_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_lines" */
export type Order_Lines_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Lines_Sum_Fields = {
  __typename?: 'order_lines_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_lines" */
export type Order_Lines_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "order_lines" */
export enum Order_Lines_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Order_Lines_Var_Pop_Fields = {
  __typename?: 'order_lines_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_lines" */
export type Order_Lines_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Lines_Var_Samp_Fields = {
  __typename?: 'order_lines_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_lines" */
export type Order_Lines_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Lines_Variance_Fields = {
  __typename?: 'order_lines_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_lines" */
export type Order_Lines_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  order_lines: Array<Order_Lines>;
  /** An aggregate relationship */
  order_lines_aggregate: Order_Lines_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_LinesArgs = {
  distinct_on?: Maybe<Array<Order_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Lines_Order_By>>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Lines_Order_By>>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Orders_Bool_Exp>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Orders_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  order_lines?: Maybe<Order_Lines_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order_lines?: Maybe<Order_Lines_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_lines_aggregate?: Maybe<Order_Lines_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "pepe" */
export type Pepe = {
  __typename?: 'pepe';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
};

/** aggregated selection of "pepe" */
export type Pepe_Aggregate = {
  __typename?: 'pepe_aggregate';
  aggregate?: Maybe<Pepe_Aggregate_Fields>;
  nodes: Array<Pepe>;
};

/** aggregate fields of "pepe" */
export type Pepe_Aggregate_Fields = {
  __typename?: 'pepe_aggregate_fields';
  avg?: Maybe<Pepe_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pepe_Max_Fields>;
  min?: Maybe<Pepe_Min_Fields>;
  stddev?: Maybe<Pepe_Stddev_Fields>;
  stddev_pop?: Maybe<Pepe_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pepe_Stddev_Samp_Fields>;
  sum?: Maybe<Pepe_Sum_Fields>;
  var_pop?: Maybe<Pepe_Var_Pop_Fields>;
  var_samp?: Maybe<Pepe_Var_Samp_Fields>;
  variance?: Maybe<Pepe_Variance_Fields>;
};


/** aggregate fields of "pepe" */
export type Pepe_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pepe_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pepe_Avg_Fields = {
  __typename?: 'pepe_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pepe". All fields are combined with a logical 'AND'. */
export type Pepe_Bool_Exp = {
  _and?: Maybe<Array<Pepe_Bool_Exp>>;
  _not?: Maybe<Pepe_Bool_Exp>;
  _or?: Maybe<Array<Pepe_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pepe" */
export enum Pepe_Constraint {
  /** unique or primary key constraint */
  PepePkey = 'pepe_pkey'
}

/** input type for incrementing numeric columns in table "pepe" */
export type Pepe_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "pepe" */
export type Pepe_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pepe_Max_Fields = {
  __typename?: 'pepe_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Pepe_Min_Fields = {
  __typename?: 'pepe_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "pepe" */
export type Pepe_Mutation_Response = {
  __typename?: 'pepe_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pepe>;
};

/** on conflict condition type for table "pepe" */
export type Pepe_On_Conflict = {
  constraint: Pepe_Constraint;
  update_columns: Array<Pepe_Update_Column>;
  where?: Maybe<Pepe_Bool_Exp>;
};

/** Ordering options when selecting data from "pepe". */
export type Pepe_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: pepe */
export type Pepe_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pepe" */
export enum Pepe_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "pepe" */
export type Pepe_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pepe_Stddev_Fields = {
  __typename?: 'pepe_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pepe_Stddev_Pop_Fields = {
  __typename?: 'pepe_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pepe_Stddev_Samp_Fields = {
  __typename?: 'pepe_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Pepe_Sum_Fields = {
  __typename?: 'pepe_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "pepe" */
export enum Pepe_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Pepe_Var_Pop_Fields = {
  __typename?: 'pepe_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pepe_Var_Samp_Fields = {
  __typename?: 'pepe_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pepe_Variance_Fields = {
  __typename?: 'pepe_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** An array relationship */
  order_lines: Array<Order_Lines>;
  /** An aggregate relationship */
  order_lines_aggregate: Order_Lines_Aggregate;
  /** fetch data from the table: "order_lines" using primary key columns */
  order_lines_by_pk?: Maybe<Order_Lines>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "pepe" */
  pepe: Array<Pepe>;
  /** fetch aggregated fields from the table: "pepe" */
  pepe_aggregate: Pepe_Aggregate;
  /** fetch data from the table: "pepe" using primary key columns */
  pepe_by_pk?: Maybe<Pepe>;
};


export type Query_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrder_LinesArgs = {
  distinct_on?: Maybe<Array<Order_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Lines_Order_By>>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};


export type Query_RootOrder_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Lines_Order_By>>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};


export type Query_RootOrder_Lines_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPepeArgs = {
  distinct_on?: Maybe<Array<Pepe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pepe_Order_By>>;
  where?: Maybe<Pepe_Bool_Exp>;
};


export type Query_RootPepe_AggregateArgs = {
  distinct_on?: Maybe<Array<Pepe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pepe_Order_By>>;
  where?: Maybe<Pepe_Bool_Exp>;
};


export type Query_RootPepe_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** An array relationship */
  order_lines: Array<Order_Lines>;
  /** An aggregate relationship */
  order_lines_aggregate: Order_Lines_Aggregate;
  /** fetch data from the table: "order_lines" using primary key columns */
  order_lines_by_pk?: Maybe<Order_Lines>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "pepe" */
  pepe: Array<Pepe>;
  /** fetch aggregated fields from the table: "pepe" */
  pepe_aggregate: Pepe_Aggregate;
  /** fetch data from the table: "pepe" using primary key columns */
  pepe_by_pk?: Maybe<Pepe>;
};


export type Subscription_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrder_LinesArgs = {
  distinct_on?: Maybe<Array<Order_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Lines_Order_By>>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};


export type Subscription_RootOrder_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Lines_Order_By>>;
  where?: Maybe<Order_Lines_Bool_Exp>;
};


export type Subscription_RootOrder_Lines_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPepeArgs = {
  distinct_on?: Maybe<Array<Pepe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pepe_Order_By>>;
  where?: Maybe<Pepe_Bool_Exp>;
};


export type Subscription_RootPepe_AggregateArgs = {
  distinct_on?: Maybe<Array<Pepe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pepe_Order_By>>;
  where?: Maybe<Pepe_Bool_Exp>;
};


export type Subscription_RootPepe_By_PkArgs = {
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

export type ActionCallMutationVariables = Exact<{
  arg: SampleInput;
}>;


export type ActionCallMutation = (
  { __typename?: 'mutation_root' }
  & { testAction?: Maybe<(
    { __typename?: 'SampleOutput' }
    & Pick<SampleOutput, 'accessToken'>
  )> }
);

export type GetOrdersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  condition?: Orders_Bool_Exp;
  orderBy?: Maybe<Array<Orders_Order_By> | Orders_Order_By>;
}>;


export type GetOrdersQuery = (
  { __typename?: 'query_root' }
  & { orders: Array<(
    { __typename?: 'orders' }
    & OrderFieldsFragment
  )>, orders_aggregate: (
    { __typename?: 'orders_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'orders_aggregate_fields' }
      & Pick<Orders_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type CreateOrdersMutationVariables = Exact<{
  input: Orders_Insert_Input;
}>;


export type CreateOrdersMutation = (
  { __typename?: 'mutation_root' }
  & { insert_orders_one?: Maybe<(
    { __typename?: 'orders' }
    & OrderFieldsFragment
  )> }
);

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['Int'];
  set?: Maybe<Orders_Set_Input>;
}>;


export type UpdateOrderMutation = (
  { __typename?: 'mutation_root' }
  & { update_orders_by_pk?: Maybe<(
    { __typename?: 'orders' }
    & OrderFieldsFragment
  )> }
);

export type OrderFieldsFragment = (
  { __typename?: 'orders' }
  & Pick<Orders, 'id' | 'created_at' | 'updated_at' | 'amount'>
  & { order_lines: Array<(
    { __typename?: 'order_lines' }
    & Pick<Order_Lines, 'id' | 'created_at' | 'amount' | 'quantity'>
    & { item: (
      { __typename?: 'items' }
      & Pick<Items, 'id' | 'created_at' | 'updated_at' | 'name' | 'price' | 'sale_price' | 'sku'>
    ) }
  )> }
);

export const OrderFieldsFragmentDoc = gql`
    fragment OrderFields on orders {
  id
  created_at
  updated_at
  amount
  order_lines {
    id
    created_at
    amount
    quantity
    item {
      id
      created_at
      updated_at
      name
      price
      sale_price
      sku
    }
  }
}
    `;
export const ActionCallDocument = gql`
    mutation ActionCall($arg: SampleInput!) {
  testAction(arg1: $arg) {
    accessToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActionCallGQL extends Apollo.Mutation<ActionCallMutation, ActionCallMutationVariables> {
    document = ActionCallDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOrdersDocument = gql`
    query GetOrders($limit: Int, $offset: Int, $condition: orders_bool_exp! = {}, $orderBy: [orders_order_by!] = {created_at: desc}) {
  orders(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...OrderFields
  }
  orders_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${OrderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrdersGQL extends Apollo.Query<GetOrdersQuery, GetOrdersQueryVariables> {
    document = GetOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrdersDocument = gql`
    mutation CreateOrders($input: orders_insert_input!) {
  insert_orders_one(object: $input) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrdersGQL extends Apollo.Mutation<CreateOrdersMutation, CreateOrdersMutationVariables> {
    document = CreateOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: Int!, $set: orders_set_input) {
  update_orders_by_pk(pk_columns: {id: $id}, _set: $set) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOrderGQL extends Apollo.Mutation<UpdateOrderMutation, UpdateOrderMutationVariables> {
    document = UpdateOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }