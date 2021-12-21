alter table "public"."addresses" alter column "districtId" drop not null;
alter table "public"."addresses" add column "districtId" int4;
