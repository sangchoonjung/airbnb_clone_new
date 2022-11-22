import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
type con = {
  essentialhandleChange?: (b: any) => void;
  selectivehandleChange?: (b: any) => void;
  Essentialchecked?: boolean;
  selectiveChecked?: boolean;
  submitAct?: boolean;
  buttonActivate?: boolean;
};
function PersonalConsent(props: con) {
  return (
    <Box>
      <Typography sx={{ fontSize: 12 }}>
        개인정보 수집 및 이용에 동의합니다.
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Typography sx={{ fontSize: 12 }}>
          1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을 이용하는 데
          필요한 정보 당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의
          개인 정보를 수집합니다. 그렇지 않은 경우, 에어비앤비는 요청하신
          서비스를 회원님께 제공하지 못할 수 있습니다. 이러한 정보에는 다음이
          포함됩니다.
        </Typography>
        <Checkbox
          checked={props.Essentialchecked}
          onChange={props.essentialhandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      <Typography sx={{ fontSize: 12 }}>
        마케팅 이메일 수신을 원합니다(선택).
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Typography sx={{ fontSize: 12 }}>
          에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시 알림을
          보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 수신을 거부할 수
          있습니다.
        </Typography>
        <Checkbox
          checked={props.selectiveChecked}
          onChange={props.selectivehandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      <Box>
        동의 및 계속하기를 선택하여 에어비앤비 서비스 약관, 결제 서비스 약관,
        위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에 동의합니다.
      </Box>

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
          color: "white",
          backgroundColor: props.buttonActivate === true ? "grey" : "pink",
        }}
        type="submit"
        disabled={props.buttonActivate as boolean}
      >
        동의 및 계속하기
      </Button>
    </Box>
  );
}

export default PersonalConsent;
