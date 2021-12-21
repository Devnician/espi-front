alter table "public"."settlements" alter column "isDistrict" set default false;
alter table "public"."settlements" alter column "isDistrict" drop not null;
alter table "public"."settlements" add column "isDistrict" bool;
