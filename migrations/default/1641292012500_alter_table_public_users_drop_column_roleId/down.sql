alter table "public"."users" alter column "roleId" drop not null;
alter table "public"."users" add column "roleId" int4;
