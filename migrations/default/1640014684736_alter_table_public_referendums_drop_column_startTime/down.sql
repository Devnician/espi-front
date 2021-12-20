alter table "public"."referendums" alter column "startTime" drop not null;
alter table "public"."referendums" add column "startTime" timestamptz;
