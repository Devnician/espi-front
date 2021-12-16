alter table "public"."votes"
  add constraint "votes_sectionId_fkey"
  foreign key ("sectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
