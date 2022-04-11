alter table "public"."votes" alter column "eVoteGroupId" drop not null;
alter table "public"."votes" add column "eVoteGroupId" int4;
