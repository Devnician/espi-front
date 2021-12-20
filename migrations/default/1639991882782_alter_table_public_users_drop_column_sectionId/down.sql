alter table "public"."users" alter column "sectionId" drop not null;
alter table "public"."users" add column "sectionId" int4;
