alter table "public"."voting_section"
  add constraint "voting_section_settlementId_fkey"
  foreign key (settlementId)
  references "public"."settlements"
  (id) on update restrict on delete restrict;
alter table "public"."voting_section" alter column "settlementId" drop not null;
alter table "public"."voting_section" add column "settlementId" int4;
