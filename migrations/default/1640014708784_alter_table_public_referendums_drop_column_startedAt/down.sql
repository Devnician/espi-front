alter table "public"."referendums" alter column "startedAt" drop not null;
alter table "public"."referendums" add column "startedAt" timestamptz;
