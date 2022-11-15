import { Box, Button, TextField, Typography } from "@mui/material";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import PersonalConsent from "./personalConsent";
type insertAndBack = {
  inputEmail: string;
  changeMode: (s: string) => void;
};

function JoinInput(props: insertAndBack) {
  const [Essentialchecked, setEssentialChecked] = useState(false);
  const [selectiveChecked, setSelectiveChecked] = useState(false);
  const essentialhandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEssentialChecked(event.target.checked);
  };
  const selectivehandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectiveChecked(event.target.checked);
  };

  const [inputValue, setInputValue] = useState<{
    name: string;
    birth: string;
    password: string;
  }>({ name: "", birth: "", password: "" });
  const [validCheck, setValidCheck] = useState({
    name: true,
    birth: true,
    password: true,
  });
  const [buttonActivate, setButtonActivate] = useState(true);

  

  
  useEffect(() => {
    if(inputValue.name.length>1){
      setValidCheck((e)=>{return {...e,name:false}})
    }else{
      setValidCheck((e)=>{return {...e,name:true}})
    }
    if(inputValue.birth.length>7){
      setValidCheck((e)=>{return {...e,birth:false}})
    }else{
      setValidCheck((e)=>{return {...e,birth:true}})
    }
    if(inputValue.password.length>7){
      setValidCheck((e)=>{return {...e,password:false}})
      setButtonActivate(false);
    }else{
      setValidCheck((e)=>{return {...e,password:true}})
      setButtonActivate(true);
    }
    


  }, [inputValue]);

  const joinSubmitHandler: FormEventHandler = async (evt) => {
    evt.preventDefault();

    const regExp =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regExp.test(props.inputEmail as string)) {
      const response = await fetch("/api/userApi/joinApi", {
        method: "POST",
        body: JSON.stringify({
          name: inputValue.name,
          birth: inputValue.birth,
          email: props.inputEmail,
          password: inputValue.password,
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
    <Box style={{ overflowY: "auto" }}>
      <form onSubmit={joinSubmitHandler}>
        <TextField
          fullWidth
          label="name"
          type="text"
          style={{ marginTop: 10 }}
          error={validCheck.name}
          onChange={(e) => {
            setInputValue((c) => {
              return { ...c, name: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 12, color: "#666666" }}>
          정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
        </label>
        <TextField
          fullWidth
          label="birth"
          type="number"
          placeholder={"19900101"}
          style={{ marginTop: 10 }}
          error={validCheck.birth}
          onChange={(e) => {
            setInputValue((c) => {
              return { ...c, birth: e.target.value };
            });
          }}
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
          style={{ marginTop: 10 }}
          error={validCheck.password}
          onChange={(e) => {
            setInputValue((c) => {
              return { ...c, password: e.target.value };
            });
          }}
        />
                <label style={{ fontSize: 12, color: "#666666" }}>
          8자 이상입니다.
        </label>

        <PersonalConsent
          essentialhandleChange={essentialhandleChange}
          selectivehandleChange={selectivehandleChange}
          Essentialchecked={Essentialchecked}
          selectiveChecked={selectiveChecked}
          buttonActivate={buttonActivate}
        />
      </form>
    </Box>
  );
}

export default JoinInput;
