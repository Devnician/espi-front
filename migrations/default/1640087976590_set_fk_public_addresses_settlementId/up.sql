alter table "public"."addresses"
  add constraint "addresses_settlementId_fkey"
  foreign key ("settlementId")
  references "public"."settlements"
  ("id") on update restrict on delete restrict;
