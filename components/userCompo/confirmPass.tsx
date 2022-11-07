import { Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

type vari = {
  inputEmail: string;
  handleClose: () => void;
};

function ConfirmPass(props: vari) {
  const { data, status } = useSession();
  // console.log(data, "data!!!!!!!!!", status, "status!!!!!!!!!!");
  // console.log(inputEmail, "이메일 넘어오기");
  const passRef = useRef<HTMLInputElement>(null);
  console.log(status);
  console.log(data);

  const clickHandle = async (evt: any) => {
    evt.preventDefault();
    const email = props.inputEmail;
    const password = passRef.current?.value;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result!.ok) {
      console.log(result, "결과");
      props.handleClose();
    } else {
      // passwordRef.current.value = "";
      passRef.current?.focus();
      passRef.current?.select();
    }
  };

  return (
    <Typography>
      <form onSubmit={clickHandle}>
        <TextField
          fullWidth
          label="password"
          type="password"
          style={{ marginTop: 10 }}
          inputRef={passRef}
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
