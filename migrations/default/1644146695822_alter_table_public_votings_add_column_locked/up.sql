alter table "public"."votings" add column "locked" boolean
 not null default 'false';
