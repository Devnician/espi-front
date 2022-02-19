CREATE TABLE "public"."counters" ("id" serial NOT NULL, "count" integer NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."counters" IS E'for non-trackable functions';
