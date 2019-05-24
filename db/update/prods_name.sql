UPDATE product SET name = $2
WHERE id = $1;

SELECT *
FROM product;