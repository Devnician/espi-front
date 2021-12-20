alter table "public"."referendums" alter column "finishedAt" drop not null;
alter table "public"."referendums" add column "finishedAt" timestamptz;
