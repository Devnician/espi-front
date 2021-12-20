alter table "public"."voting_types" alter column "id" set default nextval('voting_types_id_seq'::regclass);
alter table "public"."voting_types" alter column "id" drop not null;
alter table "public"."voting_types" add column "id" int4;
