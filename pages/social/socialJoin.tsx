import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEventHandler, useRef } from "react";
import PersonalConsent from "../../components/userCompo/personalConsent";

const SocailJoin = () => {
  const router = useRouter();
  const { name, email, provider, providerAccountId } = router.query;
  const birthRef = useRef<HTMLInputElement>(null);

  const createSocialAccountHandler: FormEventHandler = async (evt) => {
    evt.preventDefault();
    const birth = birthRef.current?.value;
    const response = await fetch("/api/userApi/socialJoin", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        birth: birth,
        email: email,
        provider: provider,
        providerAccountId: providerAccountId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (data.result === true) {
      alert("가입완료!!!");
      window.close();
    } else {
      alert("가입에러");
    }
    await signIn("google", { redirect: false });
  };
  return (
    <Box style={{ overflowY: "auto" }}>
      <form onSubmit={createSocialAccountHandler}>
        <TextField
          fullWidth
          type="text"
          value={name}
          style={{ marginTop: 10 }}
          disabled
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
          type="email"
          style={{ marginTop: 10 }}
          value={email}
          disabled
        />
        <label style={{ fontSize: 12, color: "#666666" }}>
          예약 확인과 영수증을 이메일로 보내드립니다.
        </label>

        <PersonalConsent />
      </form>
    </Box>
  );
};
export default SocailJoin;
SocailJoin.isInLayout = true;
