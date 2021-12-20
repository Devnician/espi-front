alter table "public"."voting_section" alter column "commisionId" drop not null;
alter table "public"."voting_section" add column "commisionId" int4;
