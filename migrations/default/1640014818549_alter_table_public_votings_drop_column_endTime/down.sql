alter table "public"."votings" alter column "endTime" drop not null;
alter table "public"."votings" add column "endTime" timestamptz;
