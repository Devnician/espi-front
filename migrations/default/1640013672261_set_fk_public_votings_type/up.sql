alter table "public"."votings"
  add constraint "votings_type_fkey"
  foreign key ("type")
  references "public"."voting_types"
  ("value") on update restrict on delete restrict;
