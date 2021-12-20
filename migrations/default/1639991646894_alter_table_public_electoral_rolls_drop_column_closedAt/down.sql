alter table "public"."electoral_rolls" alter column "closedAt" drop not null;
alter table "public"."electoral_rolls" add column "closedAt" timestamptz;
