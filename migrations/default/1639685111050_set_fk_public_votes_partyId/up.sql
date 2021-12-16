alter table "public"."votes"
  add constraint "votes_partyId_fkey"
  foreign key ("partyId")
  references "public"."parties"
  ("id") on update restrict on delete restrict;
