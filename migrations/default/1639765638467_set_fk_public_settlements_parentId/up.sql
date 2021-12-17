alter table "public"."settlements"
  add constraint "settlements_parentId_fkey"
  foreign key ("parentId")
  references "public"."settlements"
  ("id") on update restrict on delete restrict;
