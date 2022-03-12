alter table "public"."political_group_members"
  add constraint "political_group_members_votingId_fkey"
  foreign key ("votingId")
  references "public"."votings"
  ("id") on update restrict on delete set null;
