import { Box, Button } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { useRouter } from "next/router";
import { HostTypeContext } from "../../components/context/hostType";
import LeftGrid from "../../components/custom/hostLeftGrid";
import HostExitButton from "../../components/custom/hostSelectHeader";
import HostSelectfooter from "../../components/custom/hostSelectfooter";

function propertyTypeGroup() {
  const ctx = useContext(HostTypeContext);
  console.log(ctx?.firstSelect);
  const router = useRouter();
  const typeList = [
    "아파트",
    "주택",
    "별채",
    "부티크호텔",
    "asd",
    "asdasd",
    "asdasd",
    "adasd",
  ];

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
      <LeftGrid showText={"호스팅할 숙소 유형을 알려주세요"} />
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        position="relative"
      >
        <HostExitButton />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "80%",
          }}
        >
          {typeList.map((item: string) => {
            return (
              <ToggleButton
                value={item}
                color="warning"
                selected={ctx?.firstSelect == item}
                onClick={() => {
                  ctx?.setFirstHandler!(item);
                }}
                key={item}
                sx={{
                  width: "15rem",
                  height: "6rem",
                  marginBottom: 2,
                  border: "solid 1px #999999",
                  justifyContent: "start",
                  borderRadius: 5,
                  fontSize: 20,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                {item}
              </ToggleButton>
            );
          })}
        </Box>
        <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
      </Grid>
    </Grid>
  );
}

propertyTypeGroup.isInLayout = true;
export default propertyTypeGroup;
