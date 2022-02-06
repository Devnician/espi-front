alter table "public"."users"
  add constraint "users_votingSectionId_fkey"
  foreign key ("votingSectionId")
  references "public"."voting_section"
  ("id") on update restrict on delete restrict;
