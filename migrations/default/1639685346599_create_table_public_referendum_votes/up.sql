CREATE TABLE "public"."referendum_votes" ("id" serial NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "referendumRowId" integer NOT NULL, "vote" boolean NOT NULL, PRIMARY KEY ("id") );
