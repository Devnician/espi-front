alter table "public"."electoral_rolls" alter column "createdBy" drop not null;
alter table "public"."electoral_rolls" add column "createdBy" int4;
