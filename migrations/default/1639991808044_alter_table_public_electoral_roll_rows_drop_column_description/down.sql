alter table "public"."electoral_roll_rows" alter column "description" drop not null;
alter table "public"."electoral_roll_rows" add column "description" text;
