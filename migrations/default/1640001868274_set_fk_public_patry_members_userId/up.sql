alter table "public"."patry_members"
  add constraint "patry_members_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
