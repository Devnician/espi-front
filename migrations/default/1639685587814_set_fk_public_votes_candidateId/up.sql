alter table "public"."votes"
  add constraint "votes_candidateId_fkey"
  foreign key ("candidateId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
