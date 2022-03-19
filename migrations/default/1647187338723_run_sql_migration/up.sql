CREATE OR REPLACE VIEW mayor_countings as 
select 
t."votingId",
t."preference", 
count(t."eVote") as "votes"
-- count(*) FILTER (WHERE t."eVote" IS NOT NULL) AS "evoted",
-- count(*) FILTER (WHERE t."vote" IS NOT NULL) AS "voted"
from votes t
inner join (
select max("votes"."id") as "maxId", "votes"."userId" 
from votes
group by "votes"."userId") 
tm on t.id = tm."maxId"
group by t."votingId", t."preference";
