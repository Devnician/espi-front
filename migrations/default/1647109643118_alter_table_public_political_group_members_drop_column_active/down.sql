alter table "public"."political_group_members" alter column "active" set default true;
alter table "public"."political_group_members" alter column "active" drop not null;
alter table "public"."political_group_members" add column "active" bool;
