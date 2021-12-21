alter table "public"."voting_section_sessions"
  add constraint "voting_section_sessions_sectionId_fkey"
  foreign key ("sectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
