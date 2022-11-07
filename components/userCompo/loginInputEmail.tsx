import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
type con = {
  changeMode: (s: string) => void;
  setInputEmail: (s: string) => void;
};

function LoginInputEmail(props: con) {
  const emailRef = useRef<HTMLInputElement>(null);

  const onLoginHandler: FormEventHandler = async (evt) => {
    evt.preventDefault();
    const email = emailRef.current?.value;
    props.setInputEmail(email!);
    const response = await fetch("/api/userApi/loginApi", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);

    if (data.result === true) {
      alert("이메일 존재함 ,  성공=> 비번창으로 옮기기");
      props.changeMode("confirmPass");
    } else {
      alert("이메일 존재하지않음, 실패 = > 회원가입창으로 유도");
      props.changeMode("joinInput");
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <form onSubmit={onLoginHandler}>
        <TextField fullWidth label="email" inputRef={emailRef} type="email" />
        <Button
          variant="contained"
          disableElevation
          sx={{
            width: 500,
            maxWidth: "100%",
            backgroundColor: "#E61E4D",
            marginTop: 2,
            padding: 1.5,
            borderRadius: 2,
          }}
          type="submit"
        >
          계속
        </Button>
      </form>
    </Box>
  );
}

export default LoginInputEmail;
