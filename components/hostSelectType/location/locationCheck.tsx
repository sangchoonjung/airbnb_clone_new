import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { HostTypeContext } from "../../context/hostType";
import { Wrapper } from "@googlemaps/react-wrapper";
import RoomIcon from "@mui/icons-material/Room";
//래핑으로 감싸서 컨포넌트 이중처리
export function MapComponent() {
  const ctx = useContext(HostTypeContext);
  const ref = useRef<HTMLElement>();
  console.log(ctx!.addressLocation, "세부정보에서 넘어온거");
  let map: google.maps.Map;
  useEffect(() => {
    map = new window.google.maps.Map(ref.current!, {
      center: {
        lat: ctx?.addressLocation!.lat!,
        lng: ctx?.addressLocation!.lng!,
      },
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
    });
    // console.log(map.getCenter(), "센터값");
    //이벤트리스너 마다 정해진 이름이 있음.
    map.addListener("center_changed", () => {
      const center = map.getCenter();
      console.log(center?.lat(), center?.lng(), "지도에서 직접 찍은거");
      // console.log(ctx?.addressFullName, "풀네임");
      ctx?.addessSubmitHandler(
        center?.lat() as number,
        center?.lng() as number
      );
    });
  }, []);
  return (
    <>
      <Box id="map" ref={ref} sx={{ height: "80vh", width: "100%" }}></Box>
      <RoomIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: 40,
          color: "purple",
        }}
      />
    </>
  );
}

function LocationCheck() {
  const ctx = useContext(HostTypeContext);
  // console.log("체크");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Wrapper apiKey={"AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM"}>
        <MapComponent />
      </Wrapper>
      {/* 하단버튼 */}
      <Box style={{ margin: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            ctx?.setMode("locationDetail");
          }}
          sx={{ bgcolor: "#FF385C" }}
        >
          주소 다시 확인하기
        </Button>
      </Box>
    </Box>
  );
}

export default LocationCheck;
