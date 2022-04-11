alter table "public"."candidates"
  add constraint "candidates_partyMemberId_fkey"
  foreign key ("politicalGroupMemberId")
  references "public"."political_group_members"
  ("id") on update restrict on delete restrict;
