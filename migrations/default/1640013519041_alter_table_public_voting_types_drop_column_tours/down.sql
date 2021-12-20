alter table "public"."voting_types" alter column "tours" set default 1;
alter table "public"."voting_types" alter column "tours" drop not null;
alter table "public"."voting_types" add column "tours" int4;
