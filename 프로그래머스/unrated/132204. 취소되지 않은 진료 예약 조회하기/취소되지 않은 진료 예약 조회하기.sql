-- 코드를 입력하세요
SELECT APNT_NO, (SELECT P.PT_NAME FROM PATIENT AS P WHERE P.PT_NO = A.PT_NO) AS PT_NAME, 
A.PT_NO, MCDP_CD, (SELECT DR_NAME FROM DOCTOR WHERE MDDR_ID = DR_ID) AS DR_NAME, APNT_YMD
FROM APPOINTMENT AS A
WHERE APNT_CNCL_YN = "N" AND MCDP_CD = "CS" AND
DATE_FORMAT(APNT_YMD, "%Y-%m-%d") = "2022-04-13"
ORDER BY APNT_YMD;