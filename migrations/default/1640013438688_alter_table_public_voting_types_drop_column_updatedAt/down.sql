alter table "public"."voting_types" alter column "updatedAt" set default now();
alter table "public"."voting_types" alter column "updatedAt" drop not null;
alter table "public"."voting_types" add column "updatedAt" timestamptz;
