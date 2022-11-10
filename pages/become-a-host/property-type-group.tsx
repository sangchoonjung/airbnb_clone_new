import { Box, Button } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { useRouter } from "next/router";
import { HostTypeContext } from "../../components/context/hostType";

function propertyTypeGroup() {
  const ctx = useContext(HostTypeContext);
  console.log(ctx?.firstSelect);
  const router = useRouter();
  const prevStep = () => {
    router.push("/become-a-host");
  };
  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ group: ctx?.firstSelect }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    const itemId = data.message._id;
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/property-type");
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      {/* 왼쪽 */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        style={{
          backgroundImage:
            "linear-gradient(0deg,rgba(67,34,170,1)0%,rgba(141,33,156,1)35%,rgba(201,37,120,1)100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            marginLeft: 50,
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          호스팅할 숙소 유형을 알려주세요
        </Box>
      </Grid>
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "end",
            margin: 30,
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            style={{ backgroundColor: "#999999" }}
          >
            나가기
          </Button>
        </Box>
        <Box
          sx={{
            my: 5,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToggleButton
            value="아파트"
            color="warning"
            selected={ctx?.firstSelect === "아파트"}
            onClick={() => {
              ctx?.setFirstHandler("아파트");
            }}
          >
            아파트
          </ToggleButton>
          <ToggleButton
            value="주택"
            color="warning"
            selected={ctx?.firstSelect === "주택"}
            onClick={() => {
              ctx?.setFirstHandler("주택");
            }}
          >
            주택
          </ToggleButton>
          <ToggleButton
            value="별채"
            color="warning"
            selected={ctx?.firstSelect === "별채"}
            onClick={() => {
              ctx?.setFirstHandler("별채");
            }}
          >
            별채
          </ToggleButton>
          <ToggleButton
            value="부티크 호텔"
            color="warning"
            selected={ctx?.firstSelect === "부티크 호텔"}
            onClick={() => {
              ctx?.setFirstHandler("부티크 호텔");
            }}
          >
            부티크 호텔
          </ToggleButton>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={prevStep}>
            뒤로
          </Button>
          <Button variant="contained" onClick={nextStep}>
            다음
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

propertyTypeGroup.isInLayout = true;
export default propertyTypeGroup;
