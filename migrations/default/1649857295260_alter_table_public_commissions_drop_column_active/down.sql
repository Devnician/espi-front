alter table "public"."commissions" alter column "active" set default true;
alter table "public"."commissions" alter column "active" drop not null;
alter table "public"."commissions" add column "active" bool;
