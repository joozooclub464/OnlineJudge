#즐겨찾기가 가장 많은 식당 정보 출력하기
SELECT
    b.FOOD_TYPE,
    b.REST_ID,
    b.REST_NAME,
    b.FAVORITES
FROM REST_INFO b
INNER JOIN (select MAX(FAVORITES) as FAVORITES, FOOD_TYPE
    from REST_INFO
    group by food_type) a
    on a.FOOD_TYPE = b.FOOD_TYPE and a.FAVORITES = b.FAVORITES
ORDER BY FOOD_TYPE desc

