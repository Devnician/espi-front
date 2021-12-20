alter table "public"."commision_members"
  add constraint "commision_members_commisionId_fkey"
  foreign key ("commisionId")
  references "public"."commissions"
  ("id") on update restrict on delete restrict;
