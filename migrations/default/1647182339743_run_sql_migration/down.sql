-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."votes" add column "preference" int4;
alter table "public"."votes"
    add constraint "votes_political_group_preference_fkey"
    foreign key ("preference")
    references "public"."political_group_members"
    ("id") on update restrict on delete restrict;
    
alter table "public"."votes" alter column "eVote" type integer USING "eVote"::integer;
alter table "public"."votes"    
    add constraint "votes_evote_political_groupId_fkey"
    foreign key ("eVote")
    references "public"."political_groups"
    ("id") on update restrict on delete restrict;
    
alter table "public"."votes" alter column "vote" type integer USING "vote"::integer;
alter table "public"."votes"   
    add constraint "votes_vote_political_groupId_fkey"
    foreign key ("vote")
    references "public"."political_groups"
    ("id") on update restrict on delete restrict;
