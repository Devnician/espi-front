alter table "public"."commision_members"
  add constraint "commision_members_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
