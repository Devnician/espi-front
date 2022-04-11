alter table "public"."candidates"
  add constraint "candidates_candidateListId_fkey"
  foreign key ("candidateListId")
  references "public"."candidate_lists"
  ("id") on update restrict on delete restrict;
