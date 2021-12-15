alter table "public"."users"
  add constraint "users_roleId_fkey"
  foreign key ("roleId")
  references "public"."roles"
  ("id") on update restrict on delete restrict;
