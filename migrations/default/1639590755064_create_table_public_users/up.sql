CREATE TABLE "public"."users" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "roleId" integer NOT NULL, "secondRoleId" integer, "name" text NOT NULL, "surname" text NOT NULL, "family" text NOT NULL, "egn" text NOT NULL, "email" text, "pin" text, "password" text, "addressId" integer NOT NULL, "sectionId" integer, PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updatedAt"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updatedAt" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_updatedAt"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_users_updatedAt" ON "public"."users" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
