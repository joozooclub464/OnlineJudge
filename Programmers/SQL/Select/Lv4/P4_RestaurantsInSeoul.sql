#서울에 위치한 식당 목록 출력하기
SELECT
    a.REST_ID,
    a.REST_NAME,
    a.FOOD_TYPE,
    a.FAVORITES,
    a.ADDRESS,
    round(AVG(b.REVIEW_SCORE),2) as SCORE
FROM REST_INFO as a
INNER JOIN REST_REVIEW as b
    on a.REST_ID = b.REST_ID
WHERE a.ADDRESS like '서울%'
GROUP BY a.REST_ID
ORDER BY SCORE DESC, FAVORITES DESC

/*
'서울에 위치한' 조건 떄문에 조금 헤맸다. 앞뒤로 와일드카드를 뒤에만 붙여야 했음.
*/
