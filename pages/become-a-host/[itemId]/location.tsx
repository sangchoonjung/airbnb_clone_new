import { useRouter } from "next/router";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ThirdStepItem from "../../../components/hostSelectType/thirdStepItem";
import { useContext, useEffect, useState } from "react";
import LocationSelect from "../../../components/hostSelectType/locationSelect";
import LocationDetail from "../../../components/hostSelectType/locationDetail";
import { HostTypeContext } from "../../../components/context/hostType";
import LocationCheck from "../../../components/hostSelectType/locationCheck";
import Image from "next/image";

function Location() {
  const ctx = useContext(HostTypeContext);

  const router = useRouter();
  const { itemId } = router.query;

  useEffect(() => {
    const timerID = setTimeout(async () => {
      // console.log(inputVal);
      if (ctx?.inputVal?.trim().length === 0) {
        return;
      }
      const endPoint = `/google/autocomplete?input=${ctx?.inputVal}&key=AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM&types=address`;
      const response = await fetch(endPoint);
      const data = await response.json();
      ctx?.setPredictions(data.predictions);
      // console.log(data.predictions, "aaaaaaaa");
    }, 1000);

    //1초이내의 타이핑은 모두 취소 처리함.
    return () => {
      // console.log(timerID, "........");
      clearTimeout(timerID);
    };
  }, [ctx?.inputVal]);

  // console.log(addressLocation, addressDetail, "gkgkgkgkgkg");
  //   const [selectPrivacy, setSelectPrivacy] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    const { address, lat, lng } = ctx?.userPickLocation;
    console.log(address, lat, lng);
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({
        _id: itemId,
        location: { address: address, lat: lat, lng: lng },
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/personnel");
  };
  //정적맵 기본 위도,경도
  const baseLocation = { lat: 35.1653428, lng: 126.9092003 };
  return (
    <Grid container component="main" sx={{ height: "95vh" }}>
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
          숙소위치는 어디인가요?
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
            style={{
              backgroundColor: "#999999",
              position: "absolute",
              top: 10,
            }}
          >
            나가기
          </Button>
        </Box>
        {ctx?.mode !== "checkLocation" && (
          <Box>
            <img
              draggable={false}
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${baseLocation.lat},${baseLocation.lng}&zoom=13&size=1000x1000&maptype=roadmap&key=AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM`}
              alt={"none"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                verticalAlign: "bottom",
                position: "relative",
              }}
            />
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            backgroundColor: "white",
          }}
        >
          {ctx?.mode === "inputVal" && <LocationSelect />}
          {ctx?.mode === "locationDetail" && <LocationDetail />}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            position: "sticky",
          }}
        >
          {ctx?.mode === "checkLocation" && <LocationCheck />}
        </Box>

        {/* 하단버튼 */}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={prevStep}>
            뒤로
          </Button>
          {ctx.mode === "checkLocation" && (
            <Button variant="contained" onClick={nextStep}>
              다음
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
Location.isInLayout = true;
export default Location;
