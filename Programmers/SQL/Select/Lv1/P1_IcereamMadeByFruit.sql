-- 과일로 만든 아이스크림 고르기
select c.flavor 
from (
    SELECT 
        a.flavor, 
        a.total_order, 
        b.ingredient_type
    from first_half as a
        join icecream_info as b
            on a.flavor = b.flavor
    where a.total_order >= 3000
        and b.ingredient_type = 'fruit_based'
    order by a.total_order desc
) as c
