alter table "public"."commissions"
  add constraint "commissions_settlementId_fkey"
  foreign key ("settlementId")
  references "public"."settlements"
  ("id") on update restrict on delete restrict;
