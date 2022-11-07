import { Button, Typography } from "@mui/material";
import GoogleLogin from "./googleLogin";
import LoginInputEmail from "./loginInputEmail";
type con = {
  changeMode: (s: string) => void;
  setInputEmail: (s: string) => void;
};
function MethodOfLogin(props: con) {
  return (
    <Typography>
      <Typography id="modal-modal-description" sx={{ m: 3 }}>
        <p
          style={{
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          에어비앤비에 오신 것을 환영합니다.
        </p>
      </Typography>

      <Typography>
        <LoginInputEmail
          changeMode={props.changeMode}
          setInputEmail={props.setInputEmail}
        />
      </Typography>

      <Typography>
        <GoogleLogin />
      </Typography>
    </Typography>
  );
}

export default MethodOfLogin;
