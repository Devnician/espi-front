alter table "public"."votes" alter column "eVote" drop not null;
alter table "public"."votes" add column "eVote" text;
