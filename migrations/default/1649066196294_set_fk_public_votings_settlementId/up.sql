alter table "public"."votings"
  add constraint "votings_settlementId_fkey"
  foreign key ("settlementId")
  references "public"."settlements"
  ("id") on update set default on delete restrict;
