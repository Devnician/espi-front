alter table "public"."referendum_votes" alter column "vote" drop not null;
alter table "public"."referendum_votes" add column "vote" text;
