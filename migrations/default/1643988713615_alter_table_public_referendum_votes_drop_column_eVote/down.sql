alter table "public"."referendum_votes" alter column "eVote" drop not null;
alter table "public"."referendum_votes" add column "eVote" text;
