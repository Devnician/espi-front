alter table "public"."votes"
  add constraint "votes_partyId_fkey"
  foreign key ("partyId")
  references "public"."political_groups"
  ("id") on update restrict on delete restrict;
