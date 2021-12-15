alter table "public"."users"
  add constraint "users_secondRoleId_fkey"
  foreign key ("secondRoleId")
  references "public"."roles"
  ("id") on update restrict on delete restrict;
