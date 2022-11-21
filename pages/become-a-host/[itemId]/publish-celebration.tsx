import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import HostLeftGrid from "../../../components/custom/hostLeftGrid";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import PrivacyTypeItem from "../../../components/hostSelectType/privacyTypeItem";

function PublishCelebration() {
  const router = useRouter();
  const { itemId } = router.query;
  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    router.push("/");
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <HostLeftGrid showText="축하드립니다 숙소 등록에 성공하였습니다!" />
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
        }}
      >
        <HostSelectHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5,
          }}
        ></Box>
        {/* 완료 버튼자리 */}
      </Grid>
    </Grid>
  );
}
PublishCelebration.isInLayout = true;
export default PublishCelebration;
