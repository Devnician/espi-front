alter table "public"."electoral_roll_rows"
  add constraint "electoral_roll_rows_electoralRollId_fkey"
  foreign key ("electoralRollId")
  references "public"."electoral_rolls"
  ("id") on update restrict on delete restrict;
