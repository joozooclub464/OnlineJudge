#흉부외과 또는 일반외과 의사 목록 출력하기
SELECT 
    DR_NAME, 
    DR_ID, 
    MCDP_CD,  
    DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD in ('CS', 'GS')
ORDER BY HIRE_YMD DESC, DR_NAME

/*
계속 오답으로 떠서 한참을 헤맸는데 알고보니 date format 때문이었다......
자료형 생각하는걸 자꾸 잊는다.. 
DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
HIRE_YMD을 yyyy-MM-dd 형식으로 뽑아내기
*/
