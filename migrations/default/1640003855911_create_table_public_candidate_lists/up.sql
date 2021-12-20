CREATE TABLE "public"."candidate_lists" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "votingId" integer NOT NULL, "name" text NOT NULL, "description" text NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_candidate_lists_updatedAt"
BEFORE UPDATE ON "public"."candidate_lists"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_candidate_lists_updatedAt" ON "public"."candidate_lists" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
