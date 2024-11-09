#저자별 카테고리별 매출액 집계하기
SELECT
    c.AUTHOR_ID,
    c.AUTHOR_NAME,
    a.CATEGORY,
    SUM(b.SALES*a.PRICE) as TOTAL_SALES
FROM BOOK as a
JOIN AUTHOR as c
    on c.AUTHOR_ID = a.AUTHOR_ID
JOIN BOOK_SALES as b
    on b.BOOK_ID = a.BOOK_ID
WHERE b.SALES_DATE like '%2022-01%'
GROUP BY c.AUTHOR_ID, a.CATEGORY
ORDER BY c.AUTHOR_ID, a.CATEGORY desc