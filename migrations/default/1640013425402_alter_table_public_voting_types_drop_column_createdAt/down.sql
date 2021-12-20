alter table "public"."voting_types" alter column "createdAt" set default now();
alter table "public"."voting_types" alter column "createdAt" drop not null;
alter table "public"."voting_types" add column "createdAt" timestamptz;
