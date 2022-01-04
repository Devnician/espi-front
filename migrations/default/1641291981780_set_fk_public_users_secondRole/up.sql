alter table "public"."users"
  add constraint "users_secondRole_fkey"
  foreign key ("secondRole")
  references "public"."role_types"
  ("value") on update restrict on delete restrict;
