CREATE OR REPLACE FUNCTION public.create_voting_section( setId int ) 
RETURNS void LANGUAGE sql VOLATILE AS $function$    
WITH addr AS (INSERT INTO addresses ("settlementId", "street", "number", "description") 	
VALUES ($1, 	(select (array['Borisova', 'Ген. Скобелев', 'Муткурова'])[floor(random() * 3 + 1)]),    
(select (ARRAY[2,4,6,8,10])[floor(RANDOM() * 5 + 1)]),	
(select (ARRAY['СОУ "Христо Ботев"', 'НСУ "м-р Атанас Узунов"', 'СОУ "Йордан Йовков"'])[floor(random() * 3 + 1)])) RETURNING id) 	
INSERT INTO voting_section ("addressId") SELECT id FROM addr  $function$; 

SELECT create_voting_section(id) FROM settlements s  WHERE s."isMunicipality" = TRUE;