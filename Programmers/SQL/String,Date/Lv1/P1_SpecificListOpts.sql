#특정 옵션이 포함된 자동차 리스트 구하기
SELECT
    CAR_ID,
    CAR_TYPE,
    DAILY_FEE,
    OPTIONS
FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS like '%네비게이션%'
ORDER BY CAR_ID desc