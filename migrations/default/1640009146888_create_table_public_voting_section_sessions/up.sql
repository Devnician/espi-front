CREATE TABLE "public"."voting_section_sessions" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "startedAt" timestamptz NOT NULL, "finishedAt" timestamptz NOT NULL, "sectionId" integer NOT NULL, "votingId" integer NOT NULL, "candidatesListId" integer, "referendumId" integer, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_voting_section_sessions_updatedAt"
BEFORE UPDATE ON "public"."voting_section_sessions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_voting_section_sessions_updatedAt" ON "public"."voting_section_sessions" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
