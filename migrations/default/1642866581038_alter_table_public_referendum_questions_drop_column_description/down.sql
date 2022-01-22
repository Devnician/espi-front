alter table "public"."referendum_questions" alter column "description" drop not null;
alter table "public"."referendum_questions" add column "description" text;
