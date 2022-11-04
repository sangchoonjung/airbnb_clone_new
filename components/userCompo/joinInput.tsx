import { Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import PersonalConsent from "./personalConsent";
type insertAndBack = {
  inputEmail: string;
  changeMode: (s: string) => void;
};

function JoinInput(props: insertAndBack) {
  const nameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //   console.log(inputEmail);
  const joinSubmitHandler: FormEventHandler = async (evt) => {
    evt.preventDefault();
    const name = nameRef.current?.value;
    const birth = birthRef.current?.value;
    const password = passwordRef.current?.value;

    const regExp =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regExp.test(props.inputEmail as string)) {
      const response = await fetch("/api/userApi/joinApi", {
        method: "POST",
        body: JSON.stringify({
          name,
          birth,
          email: props.inputEmail,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.result === true) {
        alert("가입완료");
        props.changeMode("inputEmail");
      } else {
        alert("가입실패");
      }
    } else {
      alert("이메일 형식오류");
    }
  };
  return (
    <Typography style={{ overflowY: "auto" }}>
      <form onSubmit={joinSubmitHandler}>
        <TextField
          fullWidth
          label="name"
          type="text"
          inputRef={nameRef}
          style={{ marginTop: 10 }}
        />
        <label style={{ fontSize: 12, color: "#666666" }}>
          정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
        </label>
        <TextField
          fullWidth
          label="birth"
          inputRef={birthRef}
          placeholder={"19900101"}
          style={{ marginTop: 10 }}
        />
        <label style={{ fontSize: 12, color: "#666666" }}>
          만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의
          다른 회원에게 공개되지 않습니다.
        </label>
        <TextField
          fullWidth
          label="email"
          type="email"
          style={{ marginTop: 10 }}
          value={props.inputEmail}
          disabled
        />
        <label style={{ fontSize: 12, color: "#666666" }}>
          예약 확인과 영수증을 이메일로 보내드립니다.
        </label>
        <TextField
          fullWidth
          label="password"
          type="password"
          inputRef={passwordRef}
          style={{ marginTop: 10 }}
        />

        <PersonalConsent />
      </form>
    </Typography>
  );
}

export default JoinInput;
