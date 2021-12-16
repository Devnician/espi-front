alter table "public"."referendum_rows"
  add constraint "referendum_rows_referendumId_fkey"
  foreign key ("referendumId")
  references "public"."referendums"
  ("id") on update restrict on delete restrict;
