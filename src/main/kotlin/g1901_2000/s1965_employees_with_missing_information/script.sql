# Write your MySQL query statement below
# #Easy #Database #SQL_I_Day_4_Union_and_Select
# #2023_06_21_Time_1355_ms_(23.96%)_Space_0B_(100.00%)
select employee_id
from employees
where employee_id not in (select employee_id from salaries)
UNION
select employee_id
from salaries
where employee_id not in (select employee_id from Employees)
order by 1
