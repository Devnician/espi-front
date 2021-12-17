CREATE TABLE "public"."settlements" ("id" integer NOT NULL, "parentId" integer, "name" text NOT NULL, "isDistrict" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") , UNIQUE ("id"));
