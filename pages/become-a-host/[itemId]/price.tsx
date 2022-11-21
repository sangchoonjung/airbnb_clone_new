import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import { useRouter } from "next/router";
import { HostUploadPhotoContext } from "../../../components/context/hostUploadPhoto";
import { useContext, useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

function Price() {
  const ctx = useContext(HostUploadPhotoContext);
  const router = useRouter();
  const { itemId } = router.query;
  const [price, setPrice] = useState<number | null>(13401);
  const prevStep = () => {
    router.back();
    // console.log("QQQ");
  };
  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ price: price, _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/receipt");
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HostSelectHeader />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // position: "relative",
          // backgroundColor: "white",
          animation: "fadein 2s",
          // justifyContent: "center",
          mt: 20,
        }}
      >
        <Typography>이제 요금을 설정하세요</Typography>
        <Typography>언제든지 변경하실수 있습니다.</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "rgb(247,247,247)",
            px: 10,
            py: 15,
            alignItems: "center",
            border: "1px solid rgb(221, 221, 221)",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              sx={{ borderRadius: 20, color: "black" }}
              onClick={() => {
                setPrice(price - 1000);
              }}
              disabled={price <= 13000 ? true : false}
            >
              <BiMinusCircle
                style={{
                  fontSize: 40,
                  // overflow: "hidden",
                }}
              />
            </Button>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type={"Number"}
              sx={{ width: "20rem", fontSize: "30px", bgcolor: "white" }}
              color="info"
              value={price}
              inputProps={{ style: { fontSize: "40px", fontWeight: "600" } }}
              //   multiline
              //   rows={5}
              onChange={(e) => {
                setPrice(e.currentTarget.value);
              }}
            />
            <Button
              sx={{ borderRadius: 20, color: "black" }}
              onClick={() => {
                setPrice(price + 1000);
              }}
            >
              <BiPlusCircle style={{ fontSize: 40 }} />
            </Button>
          </Box>

          <Box>
            <Typography>/박</Typography>
          </Box>
          <Box>
            <Typography>
              이 지역에서 비슷한 숙소의 요금은
              <br /> 보통 ₩42,342~₩70,571 사이입니다.
            </Typography>
          </Box>
        </Box>
      </Box>

      <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
    </Box>
  );
}
Price.isInLayout = true;
export default Price;
