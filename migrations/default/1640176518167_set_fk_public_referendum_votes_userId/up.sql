alter table "public"."referendum_votes"
  add constraint "referendum_votes_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
