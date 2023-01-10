import { Alert, Box, Button, TextField, Typography } from "@mui/material";
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
    console.log(result, "결과");
    if (result!.ok) {
      props.handleClose();
    } else {
      alert("비밀번호가 틀렸습니다.");
      // passwordRef.current.value = "";
      passRef.current?.focus();
      passRef.current?.select();
    }
  };

  return (
    <Box>
      <form onSubmit={clickHandle}>
        <TextField
          fullWidth
          label="password"
          type="password"
          style={{ marginTop: 10 }}
          inputRef={passRef}
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{
            color: "pink",
            backgroundColor: "#E61E4D",
            width: "100%",
            mt: 2,
          }}
          type="submit"
        >
          로그인
        </Button>
      </form>
    </Box>
  );
}

export default ConfirmPass;
