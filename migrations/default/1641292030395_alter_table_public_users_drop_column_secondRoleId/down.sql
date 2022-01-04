alter table "public"."users" alter column "secondRoleId" drop not null;
alter table "public"."users" add column "secondRoleId" int4;
