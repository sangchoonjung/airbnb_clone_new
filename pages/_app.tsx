import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import UserAuthContextProvider from "../components/context/userAuth";
import CloneLayout from "../components/layout/index";
import hostTypeContextProvider from "../components/context/hostType";
import HostTypeContextProvider from "../components/context/hostType";
import "../styles/globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
export default function App({ Component, pageProps }: AppProps) {
  // console.log(Component.isInLayout);
  //컨포넌트에 있는 프로토타입객체 빼오기 및 강제로 타입매기기
  const { isInLayout } = Component as NextPage & { isInLayout?: boolean };

  // console.log(isInLayout, "!!!!!!!!!!!!");
  return (
    <SessionProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <HostTypeContextProvider>
          {!isInLayout && (
            <>
              <CloneLayout>
                <Head>
                  <title>여행!</title>
                </Head>
                <Component {...pageProps} />
              </CloneLayout>
            </>
          )}
          {isInLayout && <Component {...pageProps} />}
        </HostTypeContextProvider>
      </LocalizationProvider>
    </SessionProvider>
  );
}
