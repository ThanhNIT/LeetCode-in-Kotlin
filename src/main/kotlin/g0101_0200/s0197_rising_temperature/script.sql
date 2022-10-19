# Write your MySQL query statement below
#Easy #Database #SQL_I_Day_6_Union #2022_10_19_Time_394_ms_(94.15%)_Space_0B_(100.00%)
SELECT SecondDate.id as Id
FROM Weather SecondDate JOIN Weather FirstDate
ON ADDDATE(FirstDate.recordDate,1) = SecondDate.recordDate
AND SecondDate.temperature > FirstDate.temperature;
