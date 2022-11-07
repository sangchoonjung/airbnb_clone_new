import { Button, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
function GoogleLogin() {
  const googleSigninHandle = () => {
    //새창 띄우기
    const topX = screenX + screen.width / 2 - 300 / 2;
    const topY = screenY + screen.height / 2 - 100 / 2;
    window.open(
      "http://localhost:3000/popup/google",
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
      구글로 로그인하기
    </Button>
  );
}

export default GoogleLogin;
