alter table "public"."patry_members"
  add constraint "patry_members_partyId_fkey"
  foreign key ("partyId")
  references "public"."parties"
  ("id") on update restrict on delete restrict;
