ALTER TABLE "public"."votings" ALTER COLUMN "votingTypeId" TYPE text;
alter table "public"."votings" rename column "votingTypeId" to "type";
