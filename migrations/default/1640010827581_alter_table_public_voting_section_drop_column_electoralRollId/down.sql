alter table "public"."voting_section" alter column "electoralRollId" drop not null;
alter table "public"."voting_section" add column "electoralRollId" int4;
