CREATE TABLE "public"."candidates" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "candidateListId" integer NOT NULL, "partyMemberId" integer NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_candidates_updatedAt"
BEFORE UPDATE ON "public"."candidates"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_candidates_updatedAt" ON "public"."candidates" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
