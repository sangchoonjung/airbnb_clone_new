import { Button, Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function GoogleLogin() {
  const googleSigninHandle = () => {
    //새창 띄우기
    const topX = screenX + screen.width / 2 - 300 / 2;
    const topY = screenY + screen.height / 2 - 100 / 2;
    window.open(
      "http://sangchoon:3000/popup/gAuth",
      "popup",
      `width=${topX},height=${topY},top=300,left=800`
    );
  };
  return (
    <Button
      variant="outlined"
      sx={{ my: 2 }}
      fullWidth
      style={{
        borderColor: "#666666",
        color: "black",
        fontSize: 18,
      }}
      onClick={googleSigninHandle}
    >
      <FcGoogle />
      <Typography>구글로 로그인하기</Typography>
    </Button>
  );
}

export default GoogleLogin;
