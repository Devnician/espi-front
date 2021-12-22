alter table "public"."votes"
  add constraint "votes_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
