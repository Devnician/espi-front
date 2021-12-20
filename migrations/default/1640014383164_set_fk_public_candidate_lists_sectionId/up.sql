alter table "public"."candidate_lists"
  add constraint "candidate_lists_sectionId_fkey"
  foreign key ("sectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
