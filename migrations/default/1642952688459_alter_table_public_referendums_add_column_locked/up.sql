alter table "public"."referendums" add column "locked" boolean
 not null default 'false';
