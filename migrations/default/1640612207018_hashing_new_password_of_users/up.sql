CREATE OR REPLACE FUNCTION "public"."hash_password"() RETURNS TRIGGER AS $$ DECLARE   _new record; BEGIN   _new := NEW;   IF NEW."password" IS NOT NULL THEN   _new."password" = crypt(NEW."password", gen_salt('md5'));   END IF;   RETURN _new; END; $$ LANGUAGE plpgsql; CREATE TRIGGER "set_hashed_user_password" BEFORE UPDATE ON "public"."users" FOR EACH ROW EXECUTE PROCEDURE "public"."hash_password"();
