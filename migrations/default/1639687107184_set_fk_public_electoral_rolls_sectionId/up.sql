alter table "public"."electoral_rolls"
  add constraint "electoral_rolls_sectionId_fkey"
  foreign key ("sectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
