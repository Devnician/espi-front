alter table "public"."voting_section" alter column "candidateListId" drop not null;
alter table "public"."voting_section" add column "candidateListId" int4;
