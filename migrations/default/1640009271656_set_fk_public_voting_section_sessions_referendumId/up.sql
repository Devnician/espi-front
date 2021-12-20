alter table "public"."voting_section_sessions"
  add constraint "voting_section_sessions_referendumId_fkey"
  foreign key ("referendumId")
  references "public"."referendums"
  ("id") on update restrict on delete restrict;
