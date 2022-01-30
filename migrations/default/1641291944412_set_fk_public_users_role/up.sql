ALTER TABLE "public"."users"
ADD "role" text;

alter table "public"."users"
  add constraint "users_role_fkey"
  foreign key ("role")
  references "public"."role_types"
  ("value") on update restrict on delete restrict;
