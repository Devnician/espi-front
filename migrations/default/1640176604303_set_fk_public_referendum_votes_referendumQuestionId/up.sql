alter table "public"."referendum_votes"
  add constraint "referendum_votes_referendumQuestionId_fkey"
  foreign key ("referendumQuestionId")
  references "public"."referendum_questions"
  ("id") on update restrict on delete restrict;
