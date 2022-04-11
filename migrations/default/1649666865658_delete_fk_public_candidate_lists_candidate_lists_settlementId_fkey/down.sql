alter table "public"."candidate_lists"
  add constraint "candidate_lists_settlementId_fkey"
  foreign key ("settlementId")
  references "public"."settlements"
  ("id") on update restrict on delete restrict;
