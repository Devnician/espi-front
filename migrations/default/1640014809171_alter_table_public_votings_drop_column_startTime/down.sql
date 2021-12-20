alter table "public"."votings" alter column "startTime" drop not null;
alter table "public"."votings" add column "startTime" timestamptz;
