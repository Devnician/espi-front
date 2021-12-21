alter table "public"."candidate_lists" rename column "settlementId" to "sectionId";
alter table "public"."candidate_lists" alter column "sectionId" drop not null;
