alter table "public"."candidate_lists" alter column "sectionId" set not null;
alter table "public"."candidate_lists" rename column "sectionId" to "settlementId";
