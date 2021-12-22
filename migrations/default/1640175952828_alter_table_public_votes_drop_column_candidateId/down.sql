alter table "public"."votes" alter column "candidateId" drop not null;
alter table "public"."votes" add column "candidateId" int4;
