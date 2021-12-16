alter table "public"."referendum_votes"
  add constraint "referendum_votes_sectionId_fkey"
  foreign key ("sectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
