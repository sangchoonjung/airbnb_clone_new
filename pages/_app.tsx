import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import UserAuthContextProvider from "../components/context/userAuth";
import CloneLayout from "../components/layout/index";

export default function App({ Component, pageProps }: AppProps) {
  // console.log(Component.isInLayout);
  //컨포넌트에 있는 프로토타입객체 빼오기 및 강제로 타입매기기
  const { isInLayout } = Component as NextPage & { isInLayout?: boolean };

  console.log(isInLayout, "!!!!!!!!!!!!");
  return (
    <SessionProvider>
      <UserAuthContextProvider>
        {!isInLayout && (
          <CloneLayout>
            <Component {...pageProps} />
          </CloneLayout>
        )}
        {isInLayout && <Component {...pageProps} />}
      </UserAuthContextProvider>
    </SessionProvider>
  );
}
