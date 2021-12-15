alter table "public"."users"
  add constraint "users_addressId_fkey"
  foreign key ("addressId")
  references "public"."addresses"
  ("id") on update restrict on delete restrict;
