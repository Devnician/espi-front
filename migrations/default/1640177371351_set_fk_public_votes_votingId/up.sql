alter table "public"."votes"
  add constraint "votes_votingId_fkey"
  foreign key ("votingId")
  references "public"."votings"
  ("id") on update restrict on delete restrict;
