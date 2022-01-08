CREATE OR REPLACE FUNCTION get_random_int_between_two_int(low INT ,high INT) RETURNS INT AS $$ BEGIN    RETURN floor(random() * (high-low + 1) + low)::INT; END; $$ language 'plpgsql' STRICT;
