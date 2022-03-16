alter table "public"."votes" alter column "eVoteUserId" drop not null;
alter table "public"."votes" add column "eVoteUserId" int4;
