alter table "public"."commissions"
  add constraint "commissions_settlementId_fkey"
  foreign key (settlementId)
  references "public"."settlements"
  (id) on update restrict on delete restrict;
alter table "public"."commissions" alter column "settlementId" drop not null;
alter table "public"."commissions" add column "settlementId" int4;
