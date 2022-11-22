import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function GooglePopup() {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google");
    }
    if (status === "authenticated") {
      window.close();
    }
  }, [status]);

  return <>구글로그인</>;
}
//함수 프로토타입이용하였고, 객체에 추가하는 방식임
GooglePopup.isInLayout = true;
