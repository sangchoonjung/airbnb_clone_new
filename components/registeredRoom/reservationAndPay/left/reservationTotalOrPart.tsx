import { Box, Button, TextField, Typography } from "@mui/material";
function ReservationTotalOrPart() {
  return (
    <Box>
      <Typography>결제방식 선택하기</Typography>
      <Box sx={{ border: "solid 1px black" }}>
        <Typography>전액결제</Typography>
        <Typography>총액을 결제하시면 모든 절차가 완료됩니다.</Typography>
      </Box>
      <Box sx={{ border: "solid 1px black" }}>
        <Typography>요금 일부는 지금 결제, 나머지는 나중에 결제</Typography>
        <Typography>
          지금 ₩368,928을(를) 결제하시면, 나머지 금액(₩368,927)은 동일한
          결제수단으로 2023년 3월 5일 자동 청구됩니다. 추가 수수료는 없습니다.
        </Typography>
      </Box>
    </Box>
  );
}

export default ReservationTotalOrPart;
