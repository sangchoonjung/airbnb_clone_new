import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { UserAuthContext } from "../components/context/userAuth";
import MainShow from "../components/registeredRoom/homeContainBox/mainShow";
import { GetServerSideProps } from "next";
import { Box, Button } from "@mui/material";
import RoomDetailDataContextProvider from "../components/context/roomDetailData";
import LoadingSpinner from "../components/custom/loadingSpinner";

export default function Home(props: any) {
  const { data, status } = useSession();
  // const ctx = useContext(UserAuthContext);
  // console.log(ctx, "..............");
  // console.log(props.roomDatas);
  if (!props) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ mt: 5 }}>
      {/* <h2>{status}</h2>
      <h2>{JSON.stringify(data)}</h2> */}
      <MainShow datas={props.roomDatas} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.query);
  const { tag } = context.query;

  const response = await fetch(
    `${process.env.SERVER_ADDRESS}/api/hostApi/readHostApi`,
    {
      method: "POST",
      body: JSON.stringify({
        tag: tag,
      }),
      headers: { "Content-type": "application/json" },
    }
  );
  const roomDatas = await response.json();
  console.log(roomDatas);

  if (!roomDatas) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      roomDatas: roomDatas.message,
    },
  };
};
