CREATE OR REPLACE FUNCTION public.login(egn text, pass text)  RETURNS SETOF users  LANGUAGE sql  STABLE AS $function$   SELECT * FROM users u WHERE u."egn" = $1 AND u."password" = crypt($2, u."password") ;  $function$;