alter table "public"."political_groups"
  add constraint "political_groups_type_fkey"
  foreign key ("type")
  references "public"."political_group_types"
  ("value") on update restrict on delete restrict;
