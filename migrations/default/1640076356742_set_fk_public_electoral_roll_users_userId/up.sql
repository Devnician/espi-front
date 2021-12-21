alter table "public"."electoral_roll_users"
  add constraint "electoral_roll_users_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
