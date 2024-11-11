#식품분류별 가장 비싼 식품의 정보 조회하기
SELECT b.CATEGORY, b.MAX_PRICE, PRODUCT_NAME
    FROM FOOD_PRODUCT as a
    JOIN (SELECT CATEGORY, MAX(PRICE) AS MAX_PRICE
            FROM FOOD_PRODUCT
            WHERE CATEGORY REGEXP '과자|국|김치|식용유'
            GROUP BY CATEGORY) as b
      ON a.CATEGORY = b.CATEGORY AND a.PRICE = b.MAX_PRICE
    ORDER BY MAX_PRICE DESC

/*
카테고리별 max price 구하는 과정에서 스칼라 서브쿼리 오류가 발생하여 오답처리됐다.
힌트를 얻어서 푼 문제라 나중에 다시 풀어봐야함.

REGEXP는 SQL에서 **정규 표현식(Regular Expression)**을 사용해 특정 패턴과 일치하는 문자열을 찾기 위해 사용하는 연산자입니다. 
이 연산자는 문자열이 특정 패턴을 포함하는지 확인하는 조건으로 주로 WHERE 절에 사용됩니다.
예를 들어, CATEGORY REGEXP '과자|국|김치|식용유'는 CATEGORY 열의 값이 "과자", "국", "김치", 또는 "식용유"라는 문자열을 포함하고 있는지를 확인합니다
*/
