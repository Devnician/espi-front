alter table "public"."candidates"
  add constraint "candidates_partyMemberId_fkey"
  foreign key ("partyMemberId")
  references "public"."patry_members"
  ("id") on update restrict on delete restrict;
