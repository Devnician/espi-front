alter table "public"."voting_section"
  add constraint "voting_section_addressId_fkey"
  foreign key ("addressId")
  references "public"."addresses"
  ("id") on update restrict on delete restrict;
