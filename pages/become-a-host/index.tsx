import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { AiTwotoneHome } from "react-icons/ai";
import { RiHomeSmileLine, RiArrowRightSLine } from "react-icons/ri";
import LeftGrid from "../../components/custom/hostLeftGrid";
import HostSelectHeader from "../../components/custom/hostSelectHeader";

function BecomeAHost() {
  const { data, status } = useSession();
  //   console.log(data);
  const router = useRouter();
  const goToNext = () => {
    router.push("/become-a-host/property-type-group");
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <LeftGrid showText={`${data?.user?.name}님 환영합니다!!`} />
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        <HostSelectHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            width: "100%",
            maxHeight: "100vh",
            alignItems: "center",
            py: 10,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 900, marginBottom: 2 }}>
            숙소 등록 완료하기
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              width: "20rem",
              height: "6rem",
              marginBottom: 2,
              border: "solid 1px #999999",
              justifyContent: "start",
            }}
          >
            <AiTwotoneHome style={{ fontSize: 20, marginRight: 10 }} />
            숙소 등록일
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              width: "20rem",
              height: "6rem",
              marginBottom: 2,
              border: "solid 1px #999999",
              justifyContent: "start",
            }}
          >
            <AiTwotoneHome style={{ fontSize: 20, marginRight: 10 }} />
            별채 숙소 등록일
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 900, marginBottom: 2 }}>
            숙소 등록 시작하기
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              width: "20rem",
              height: "6rem",
              marginBottom: 2,
              border: "none",
              borderRadius: 0,
              borderBottom: "solid 1px #999999",
              justifyContent: "start",
            }}
            onClick={goToNext}
          >
            <RiHomeSmileLine style={{ fontSize: 20, marginRight: 10 }} />
            새로운 숙소 등록하기
            <RiArrowRightSLine style={{ marginLeft: 100, fontSize: 20 }} />
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              width: "20rem",
              height: "6rem",
              marginBottom: 2,
              border: "none",
              borderRadius: 0,
              borderBottom: "solid 1px #999999",
              justifyContent: "start",
            }}
          >
            <RiHomeSmileLine style={{ fontSize: 20, marginRight: 10 }} />
            기존 숙소 복사하기
            <RiArrowRightSLine style={{ marginLeft: 100, fontSize: 20 }} />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

BecomeAHost.isInLayout = true;
export default BecomeAHost;
