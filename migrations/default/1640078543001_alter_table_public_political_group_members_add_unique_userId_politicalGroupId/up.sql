alter table "public"."political_group_members" drop constraint "patry_members_userId_key";
alter table "public"."political_group_members" add constraint "political_group_members_userId_politicalGroupId_key" unique ("userId", "politicalGroupId");
