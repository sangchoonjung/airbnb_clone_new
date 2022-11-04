import type { AppProps } from "next/app";
import UserAuthContextProvider from "../components/context/userAuth";
import CloneLayout from "../components/layout/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <UserAuthContextProvider>
    <CloneLayout>
      <Component {...pageProps} />
    </CloneLayout>
    // </UserAuthContextProvider>
  );
}
