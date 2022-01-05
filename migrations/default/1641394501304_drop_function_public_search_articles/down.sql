CREATE OR REPLACE FUNCTION public.search_articles(search text)
 RETURNS SETOF settlements
 LANGUAGE sql
 STABLE
AS $function$
    SELECT *
    FROM settlements
    WHERE true
$function$;
