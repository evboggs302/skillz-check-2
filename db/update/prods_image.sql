UPDATE product SET img = $2
WHERE id = $1;

SELECT *
FROM product;