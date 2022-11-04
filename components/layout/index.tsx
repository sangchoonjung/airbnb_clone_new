import { AppBar } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import Header from "./header";
import Nav from "./nav";

export default function CloneLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar
        position="absolute"
        color="inherit"
        elevation={0}
        sx={{
          position: "relative",
        }}
      >
        <Header />
        <Nav />
      </AppBar>
      <Container sx={{ height: "120vh" }}>{children}</Container>
    </>
  );
}
