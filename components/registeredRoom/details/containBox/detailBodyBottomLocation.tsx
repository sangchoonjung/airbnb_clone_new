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
    const map = new window.google.maps.Map(ref.current!, {
      center: {
        lat: Number(ctx?.itemData.location.lat),
        lng: Number(ctx?.itemData.location.lng),
      },
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
    });
    new google.maps.Marker({
      position: {
        lat: Number(ctx?.itemData.location.lat),
        lng: Number(ctx?.itemData.location.lng),
      },
      map,
      title: "Hello World!",
    });
  }, []);

  return (
    <Box ref={ref} id="map" sx={{ height: "50vw", width: "100%", mb: 5 }}></Box>
  );
}

const render = (status: Status) => {
  if (status === Status.FAILURE) return <>실패</>;
  return <LoadingSpinner />;
};

const MyApp = () => {
  return (
    <Wrapper apiKey={"AIzaSyBQ4KAEwnbMnekJ8qqcpUbdyNQwX9AhsBo"} render={render}>
      <MyMapComponent />
    </Wrapper>
  );
};

export default MyApp;
