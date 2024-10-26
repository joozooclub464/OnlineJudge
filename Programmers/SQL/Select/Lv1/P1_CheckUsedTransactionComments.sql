#조건에 부합하는 중고거래 댓글 조회하기
SELECT 
    a.TITLE,
    a.BOARD_ID,
    b.REPLY_ID,
    b.WRITER_ID,
    b.CONTENTS,
    date_format(b.CREATED_DATE,'%Y-%m-%d') as CREATED_DATE
FROM USED_GOODS_BOARD as a
JOIN USED_GOODS_REPLY as b
    on a.BOARD_ID = b.BOARD_ID
WHERE DATE_FORMAT(a.CREATED_DATE,'%Y-%m') = '2022-10'
ORDER BY b.CREATED_DATE,a.TITLE;
/*
LEFT JOIN 을 썼는디 댓글이 있는 게시글만 비교하기 때문에 LEFT JOIN을 쓰면 안된다.
*/
