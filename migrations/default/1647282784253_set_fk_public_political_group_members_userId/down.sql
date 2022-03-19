alter table "public"."political_group_members" drop constraint "political_group_members_userId_fkey",
  add constraint "patry_members_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
