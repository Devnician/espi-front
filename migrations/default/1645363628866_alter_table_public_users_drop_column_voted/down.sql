alter table "public"."users" alter column "voted" set default false;
alter table "public"."users" alter column "voted" drop not null;
alter table "public"."users" add column "voted" bool;
