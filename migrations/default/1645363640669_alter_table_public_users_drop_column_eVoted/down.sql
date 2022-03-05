alter table "public"."users" alter column "eVoted" set default false;
alter table "public"."users" alter column "eVoted" drop not null;
alter table "public"."users" add column "eVoted" bool;
