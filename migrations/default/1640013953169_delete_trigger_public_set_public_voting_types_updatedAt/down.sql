CREATE TRIGGER "set_public_voting_types_updatedAt"
BEFORE UPDATE ON "public"."voting_types"
FOR EACH ROW EXECUTE FUNCTION "set_current_timestamp_updatedAt"();COMMENT ON TRIGGER "set_public_voting_types_updatedAt" ON "public"."voting_types"
IS E'trigger to set value of column "updatedAt" to current timestamp on row update';
