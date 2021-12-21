alter table "public"."commissions"
  add constraint "commissions_votingSectionId_fkey"
  foreign key ("votingSectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
