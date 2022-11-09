import { Button, Typography } from "@mui/material";

function PersonalConsent() {
  return (
    <>
      <h3>개인정보동의</h3>

      <Typography>
        동의 및 계속하기를 선택하여 에어비앤비 서비스 약관, 결제 서비스 약관,
        위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에 동의합니다.
      </Typography>
      <Button
        variant="contained"
        disableElevation
        sx={{ width: 300 }}
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          color: "pink",
          backgroundColor: "#E61E4D",
        }}
        type="submit"
      >
        동의 및 계속하기
      </Button>
    </>
  );
}

export default PersonalConsent;
