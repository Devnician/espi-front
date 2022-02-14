CREATE OR REPLACE VIEW referendum_countings as 
select 
t."questionId", 
count(t."eVote") as "votesCount", 
count(*) FILTER (WHERE t."eVote" = true) AS "votesTrue", 
count(*) FILTER (WHERE t."eVote" = false) AS "votesFalse"
from referendum_votes t
inner join (
select max("referendum_votes"."id") as "maxId", "referendum_votes"."userId", "referendum_votes"."questionId" 
from referendum_votes
group by "referendum_votes"."userId", "referendum_votes"."questionId") 
tm on t.id = tm."maxId"
group by t."questionId";
