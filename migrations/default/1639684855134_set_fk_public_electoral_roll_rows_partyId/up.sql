alter table "public"."electoral_roll_rows"
  add constraint "electoral_roll_rows_partyId_fkey"
  foreign key ("partyId")
  references "public"."parties"
  ("id") on update restrict on delete restrict;
