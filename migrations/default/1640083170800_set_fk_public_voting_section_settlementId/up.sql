alter table "public"."voting_section"
  add constraint "voting_section_settlementId_fkey"
  foreign key ("settlementId")
  references "public"."settlements"
  ("id") on update restrict on delete restrict;
