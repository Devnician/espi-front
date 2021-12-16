CREATE TABLE "public"."voting_types" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "value" text NOT NULL, "displayText" text NOT NULL, "description" text NOT NULL, "tours" integer NOT NULL DEFAULT 1, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_voting_types_updatedAt"
BEFORE UPDATE ON "public"."voting_types"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_voting_types_updatedAt" ON "public"."voting_types" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
