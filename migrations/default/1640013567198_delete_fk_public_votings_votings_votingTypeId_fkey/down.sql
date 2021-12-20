alter table "public"."votings"
  add constraint "votings_votingTypeId_fkey"
  foreign key ("votingTypeId")
  references "public"."voting_types"
  ("id") on update restrict on delete restrict;
