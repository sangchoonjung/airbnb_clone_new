import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import { useRouter } from "next/router";
import { HostUploadPhotoContext } from "../../../components/context/hostUploadPhoto";
import { useContext, useState } from "react";

function Description() {
  const ctx = useContext(HostUploadPhotoContext);
  const router = useRouter();
  const { itemId } = router.query;
  const [description, setDescription] = useState<string | null>(
    "이 독특한 숙소에서 보낸 시간은 영원히 잊지 못하실 거예요."
  );
  const prevStep = () => {
    router.back();
    // console.log("QQQ");
  };
  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ description: description, _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/price");
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
        <Typography>숙소 설명 작성하기</Typography>
        <Typography>숙소의 특징과 장점을 알려주세요.</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "30rem" }}
          color="info"
          value={description}
          multiline
          rows={5}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
            console.log(description?.length);
          }}
        />
        <Typography>{description?.length}/500</Typography>
      </Box>

      <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
    </Box>
  );
}
Description.isInLayout = true;
export default Description;
