alter table "public"."electoral_rolls" alter column "municipalityId" drop not null;
alter table "public"."electoral_rolls" add column "municipalityId" int4;
