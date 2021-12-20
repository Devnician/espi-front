alter table "public"."voting_types" alter column "displayText" drop not null;
alter table "public"."voting_types" add column "displayText" text;
