import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import HostLeftGrid from "../../../components/custom/hostLeftGrid";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import PrivacyTypeItem from "../../../components/hostSelectType/privacyTypeItem";

function privacyType() {
  const router = useRouter();
  const { itemId } = router.query;
  const [selectPrivacy, setSelectPrivacy] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ detail: selectPrivacy, _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/location");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <HostLeftGrid showText="게스트가 사용할 숙소 유형을 선택하여주세요" />
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
          // justifyContent: "center",
        }}
      >
        <HostSelectHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <PrivacyTypeItem
            setSelectPrivacy={setSelectPrivacy}
            selectPrivacy={selectPrivacy as string}
          />
        </Box>
        <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
      </Grid>
    </Grid>
  );
}
privacyType.isInLayout = true;
export default privacyType;
