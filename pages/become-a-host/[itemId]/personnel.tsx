import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import HostLeftGrid from "../../../components/custom/hostLeftGrid";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";

function Personnel() {
  const router = useRouter();
  const [guestCount, setGuestCount] = React.useState(0);
  const [bedCount, setBedCount] = React.useState(0);
  const [bathRoomCount, setBathRoomCount] = React.useState(0);

  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    const { itemId } = router.query;
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({
        _id: itemId,
        personnel: {
          guest: guestCount,
          bed: bedCount,
          bathRoom: bathRoomCount,
        },
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/convenience");
  };
  return (
    <Grid container component="main" sx={{ height: "95vh" }}>
      <HostLeftGrid showText="숙소 기본정보를 알려주세요" />
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HostSelectHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // position: "relative",
            backgroundColor: "white",
            mt: 20,
          }}
        >
          {/* 게스트 */}
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
            }}
          >
            <Box>
              <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                게스트
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                sx={{ borderRadius: 20, color: "black" }}
                onClick={() => {
                  setGuestCount(guestCount - 1);
                }}
                disabled={guestCount < 1 ? true : false}
              >
                <BiMinusCircle style={{ fontSize: 40 }} />
              </Button>
              <Typography style={{ fontSize: 40 }}>{guestCount}</Typography>
              <Button
                sx={{ borderRadius: 20, color: "black" }}
                onClick={() => {
                  setGuestCount(guestCount + 1);
                }}
              >
                <BiPlusCircle style={{ fontSize: 40 }} />
              </Button>
            </Box>
          </Box>
          {/* 침대 */}
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
            }}
          >
            <Box>
              <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                침대
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                sx={{ borderRadius: 20, color: "black" }}
                onClick={() => {
                  setBedCount(bedCount - 1);
                }}
                disabled={bedCount < 1 ? true : false}
              >
                <BiMinusCircle style={{ fontSize: 40 }} />
              </Button>
              <Typography style={{ fontSize: 40 }}>{bedCount}</Typography>
              <Button
                sx={{ borderRadius: 20, color: "black" }}
                onClick={() => {
                  setBedCount(bedCount + 1);
                }}
              >
                <BiPlusCircle style={{ fontSize: 40 }} />
              </Button>
            </Box>
          </Box>
          {/* 욕실 */}
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
            }}
          >
            <Box>
              <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                욕실
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                sx={{ borderRadius: 20, color: "black" }}
                onClick={() => {
                  setBathRoomCount(bathRoomCount - 1);
                }}
                disabled={bathRoomCount < 1 ? true : false}
              >
                <BiMinusCircle style={{ fontSize: 40 }} />
              </Button>
              <Typography style={{ fontSize: 40 }}>{bathRoomCount}</Typography>
              <Button
                sx={{ borderRadius: 20, color: "black" }}
                onClick={() => {
                  setBathRoomCount(bathRoomCount + 1);
                }}
              >
                <BiPlusCircle style={{ fontSize: 40 }} />
              </Button>
            </Box>
          </Box>
        </Box>

        <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
      </Grid>
    </Grid>
  );
}
Personnel.isInLayout = true;
export default Personnel;
