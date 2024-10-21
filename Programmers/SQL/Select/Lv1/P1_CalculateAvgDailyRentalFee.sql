#평균 일일 대여 요금 구하기
select round(avg(DAILY_FEE)) as AVERGE_FEE
from CAR_RENTAL_COMPANY_CAR
where CAR_TYPE = 'SUV'

/*
프로그래머스 sql 문제는 mysql과 oracle로만 가능하다.
mssql만 써서 oracle은 거의 까먹었는데,, 오히려 좋아(?)
*/
