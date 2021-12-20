alter table "public"."referendums" alter column "endTime" drop not null;
alter table "public"."referendums" add column "endTime" timestamptz;
