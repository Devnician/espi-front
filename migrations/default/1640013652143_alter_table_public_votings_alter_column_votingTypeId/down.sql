alter table "public"."votings" rename column "type" to "votingTypeId";
ALTER TABLE "public"."votings" ALTER COLUMN "votingTypeId" TYPE integer;
