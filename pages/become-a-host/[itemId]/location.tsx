import { useRouter } from "next/router";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ThirdStepItem from "../../../components/hostSelectType/privacyTypeItem";
import { useContext, useEffect, useState } from "react";
import LocationSelect from "../../../components/hostSelectType/location/locationSelect";
import LocationDetail from "../../../components/hostSelectType/location/locationDetail";
import { HostTypeContext } from "../../../components/context/hostType";
import LocationCheck from "../../../components/hostSelectType/location/locationCheck";
import Image from "next/image";
import HostLeftGrid from "../../../components/custom/hostLeftGrid";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";

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
      const endPoint = `/google/autocomplete?input=${ctx?.inputVal}&key=AIzaSyBQ4KAEwnbMnekJ8qqcpUbdyNQwX9AhsBo&types=address`;
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
    const { address, lat, lng } = ctx?.userPickLocation as any;
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <HostLeftGrid showText="숙소 위치는 어디인가요?" />
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
          position: "relative",
        }}
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
            overflowY: "scroll",
          }}
        >
          {ctx?.mode !== "checkLocation" && (
            <img
              draggable={false}
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${baseLocation.lat},${baseLocation.lng}&zoom=13&size=1000x1000&maptype=roadmap&key=AIzaSyBQ4KAEwnbMnekJ8qqcpUbdyNQwX9AhsBo`}
              alt={"none"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                verticalAlign: "bottom",
                position: "relative",
              }}
            />
          )}
          {ctx?.mode === "inputVal" && <LocationSelect />}
          {ctx?.mode === "locationDetail" && <LocationDetail />}
          {ctx?.mode === "checkLocation" && <LocationCheck />}
        </Box>

        <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
      </Grid>
    </Grid>
  );
}
Location.isInLayout = true;
export default Location;
