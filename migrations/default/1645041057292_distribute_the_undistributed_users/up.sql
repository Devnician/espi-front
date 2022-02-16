CREATE OR REPLACE FUNCTION distribute_the_undistributed_users(lim int) RETURNS integer AS
$function$
DECLARE
    r users;
    a_count integer;
BEGIN
    a_count := 0;
    set local statement_timeout = '300 s';
    FOR r IN
        SELECT * FROM users u WHERE u."votingSectionId" IS NULL LIMIT lim
    LOOP
        UPDATE users SET "votingSectionId" = (
            SELECT vs.id from voting_section vs
            JOIN addresses a ON a.id = vs."addressId"
            WHERE a."settlementId" =
            (SELECT a."settlementId" FROM addresses a WHERE a.id =
            (SELECT u."addressId" FROM users u WHERE u.id = r."id")))
            WHERE id =  r."id";
            a_count := a_count + 1; 
    END LOOP;
    raise notice 'counter: %', a_count;
    RETURN a_count;
    set local statement_timeout to default;
END;
$function$
LANGUAGE plpgsql;
