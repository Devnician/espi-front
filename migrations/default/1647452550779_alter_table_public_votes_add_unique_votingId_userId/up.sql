alter table "public"."votes" add constraint "votes_votingId_userId_key" unique ("votingId", "userId");
