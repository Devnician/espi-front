alter table "public"."candidate_lists"
  add constraint "candidate_lists_votingId_fkey"
  foreign key ("votingId")
  references "public"."votings"
  ("id") on update restrict on delete restrict;
