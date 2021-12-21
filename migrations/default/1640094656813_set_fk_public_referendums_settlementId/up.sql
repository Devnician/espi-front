alter table "public"."referendums"
  add constraint "referendums_settlementId_fkey"
  foreign key ("settlementId")
  references "public"."settlements"
  ("id") on update restrict on delete restrict;
