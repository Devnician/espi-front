alter table "public"."commision_members" alter column "active" set default true;
alter table "public"."commision_members" alter column "active" drop not null;
alter table "public"."commision_members" add column "active" bool;
