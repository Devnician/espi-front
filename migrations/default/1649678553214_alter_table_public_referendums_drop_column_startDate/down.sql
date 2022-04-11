alter table "public"."referendums" alter column "startDate" drop not null;
alter table "public"."referendums" add column "startDate" timetz;
