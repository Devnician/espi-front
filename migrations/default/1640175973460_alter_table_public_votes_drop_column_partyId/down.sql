alter table "public"."votes" alter column "partyId" drop not null;
alter table "public"."votes" add column "partyId" int4;
