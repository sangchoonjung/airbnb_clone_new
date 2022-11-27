import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { RoomDetailDataContext } from "../../../context/roomDetailData";
import LoadingSpinner from "../../../custom/loadingSpinner";

export function MyMapComponent() {
  const ref = useRef<HTMLElement>();
  const ctx = useContext(RoomDetailDataContext);
  console.log(ctx?.itemData.location);
  useEffect(() => {
    new window.google.maps.Map(ref.current!, {
      center: {
        lat: ctx?.itemData.location.lat,
        lng: ctx?.itemData.location.lng,
      },
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
    });
  });

  return <Box ref={ref} id="map" sx={{ height: "50vh", width: "50vw" }}></Box>;
}

const render = (status: Status) => {
  if (status === Status.FAILURE) return <>실패</>;
  return <LoadingSpinner />;
};

const MyApp = () => {
  return (
    <Wrapper apiKey={"AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM"} render={render}>
      <MyMapComponent />
    </Wrapper>
  );
};

export default MyApp;
