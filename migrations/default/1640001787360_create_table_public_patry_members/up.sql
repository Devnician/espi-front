CREATE TABLE "public"."patry_members" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "partyId" integer NOT NULL, "userId" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_patry_members_updatedAt"
BEFORE UPDATE ON "public"."patry_members"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_patry_members_updatedAt" ON "public"."patry_members" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
