import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { UserAuthContext } from "../components/context/userAuth";

export default function Home() {
  const { data, status } = useSession();
  // const ctx = useContext(UserAuthContext);
  // console.log(ctx, "..............");
  // console.log(data);
  return (
    <div>
      <h1>메인</h1>
      <h2>{status}</h2>
      <h2>{JSON.stringify(data)}</h2>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
}
