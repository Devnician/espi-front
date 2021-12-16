CREATE TABLE "public"."referendums" ("id" serial NOT NULL, "createdAt" Timestamp NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), "startTime" timestamptz NOT NULL, "endTime" timestamptz NOT NULL, "startedAt" timestamptz NOT NULL, "finishedAt" timestamptz NOT NULL, "name" text NOT NULL, "description" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("name"));
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
CREATE TRIGGER "set_public_referendums_updatedAt"
BEFORE UPDATE ON "public"."referendums"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_referendums_updatedAt" ON "public"."referendums" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
