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

function Location() {
  const router = useRouter();
  const { itemId } = router.query;
  const [inputVal, setInputVal] = useState<string>("");
  const [predictions, setPredictions] = useState<any[] | null>(null);
  const [addressDetail, setAddressDetail] = useState<any[] | null>(null);
  const [addressLocation, setAddressLocation] = useState<{}>({
    lat: "",
    lng: "",
  });
  const [mode, setMode] = useState<string>("inputVal");

  useEffect(() => {
    const timerID = setTimeout(async () => {
      // console.log("QQQQQ", inputVal);
      if (inputVal.trim().length === 0) {
        return;
      }
      const endPoint = `/google/autocomplete?input=${inputVal}&key=AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM`;
      const response = await fetch(endPoint);
      const data = await response.json();
      console.log(data.predictions);
      setPredictions(data.predictions);
    }, 1000);

    //1초이내의 타이핑은 모두 취소 처리함.
    return () => {
      // console.log(timerID, "........");
      clearTimeout(timerID);
    };
  }, [inputVal]);

  const placeDetailHandler = async (place_id: string) => {
    const endPoint = `/google/placeID?place_id=${place_id}&key=AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM&language=ko`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const addressArray = data.result.address_components;
    const lat = data.result.geometry.location.lat;
    const lng = data.result.geometry.location.lng;
    setAddressDetail(addressArray);
    setAddressLocation({ lat: lat, lng: lng });
    setMode("locationDetail");
  };
  // console.log(addressLocation, addressDetail, "gkgkgkgkgkg");
  //   const [selectPrivacy, setSelectPrivacy] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/location");
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
          {mode === "inputVal" && (
            <LocationSelect
              setInputVal={setInputVal}
              inputVal={inputVal}
              predictions={predictions as []}
              placeDetailHandler={placeDetailHandler}
            />
          )}
          {mode === "locationDetail" && (
            <LocationDetail
              addressDetail={addressDetail}
              addressLocation={addressLocation}
            />
          )}
        </Box>

        {/* 하단버튼 */}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={prevStep}>
            뒤로
          </Button>
          <Button variant="contained">다음</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
Location.isInLayout = true;
export default Location;
