#3월에 태어난 여성 회원 목록 출력하기
SELECT MEMBER_ID, 
    MEMBER_NAME, 
    GENDER, 
    date_format(DATE_OF_BIRTH, "%Y-%m-%d") as DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE MONTH(DATE_OF_BIRTH) = '03'
    and TLNO is not null
    and GENDER = 'W'
ORDER BY MEMBER_ID

/*
date_format 포맷 정의를 잘못해서 버벅임
*/
