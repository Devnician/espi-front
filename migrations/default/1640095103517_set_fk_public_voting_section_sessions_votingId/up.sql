alter table "public"."voting_section_sessions"
  add constraint "voting_section_sessions_votingId_fkey"
  foreign key ("votingId")
  references "public"."votings"
  ("id") on update restrict on delete restrict;
