import { Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { signIn } from "next-auth/react";

function ConfirmPass({ inputEmail }: { inputEmail: string }) {
  const passRef = useRef<HTMLInputElement>(null);
  console.log(inputEmail, "이메일 넘어오기");
  const clickHandle = async () => {
    const email = inputEmail;
    const password = passRef.current!.value;
    console.log(email, password);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    // console.log(result, "chek!!!");
    if (result?.ok) {
      console.log(result);
    } else {
      // passwordRef.current.value = "";
      passRef.current?.focus();
      passRef.current?.select();
    }
    console.log("!!!!!!!!!!!!!!!!");
  };

  return (
    <Typography>
      <form onSubmit={clickHandle}>
        <TextField
          fullWidth
          label="password"
          type="password"
          style={{ marginTop: 10 }}
          ref={passRef}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{ width: 480, height: 50 }}
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
          로그인
        </Button>
      </form>
      <Typography>비밀번호를 잊으셨나요?</Typography>
    </Typography>
  );
}

export default ConfirmPass;
