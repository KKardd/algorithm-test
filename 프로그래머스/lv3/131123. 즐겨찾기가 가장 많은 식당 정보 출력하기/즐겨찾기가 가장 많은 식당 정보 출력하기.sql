-- 코드를 입력하세요
SELECT FOOD_TYPE, REST_ID, REST_NAME, FAVORITES
FROM (SELECT * FROM REST_INFO ORDER BY FAVORITES DESC LIMIT 1000000000) AS REST_INFO
GROUP BY FOOD_TYPE
ORDER BY FOOD_TYPE DESC