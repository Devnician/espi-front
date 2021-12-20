alter table "public"."voting_section_sessions"
  add constraint "voting_section_sessions_candidatesListId_fkey"
  foreign key ("candidatesListId")
  references "public"."candidate_lists"
  ("id") on update restrict on delete restrict;
