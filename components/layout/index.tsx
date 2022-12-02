import { AppBar } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import RoomDetailDataContextProvider from "../context/roomDetailData";
import Header from "./header";
import Nav from "./nav";

export default function CloneLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar
        // position="absolute"
        color="inherit"
        elevation={0}
        sx={{
          position: "relative",
        }}
      >
        <RoomDetailDataContextProvider>
          <Header />
          <Nav />
        </RoomDetailDataContextProvider>
      </AppBar>
      <Container sx={{ minHeight: "120vh", width: "100vw" }}>
        {children}
      </Container>
      <footer>꼬리말</footer>
    </>
  );
}
