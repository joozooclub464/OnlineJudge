#가격이 제일 비싼 식품의 정보 출력하기
SELECT 
    PRODUCT_ID,
    PRODUCT_NAME,
    PRODUCT_CD,
    CATEGORY,
    PRICE
FROM FOOD_PRODUCT
ORDER BY PRICE DESC
LIMIT 1
/*
mssql만 계속 사용했더니 LIMIT 1의 위치를 TOP 1 위치와 헷갈려서 오류 발생.
mysql, oracle은 맨 아래 LIMIT 1
mssql은 맨 위에 TOP 1
*/
