alter table "public"."votes" alter column "vote" drop not null;
alter table "public"."votes" add column "vote" text;
