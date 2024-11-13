#조건에 맞는 도서 리스트 출력하기
SELECT
    BOOK_ID,
    date_format(PUBLISHED_DATE, '%Y-%m-%d') as PUBLISHED_DATE
FROM BOOK
WHERE PUBLISHED_DATE like '%2021%'
    and CATEGORY = '인문'
ORDER BY PUBLISHED_DATE asc;
/*
select의 출판일 데이트포맷 땜시 한 번 틀림
*/
