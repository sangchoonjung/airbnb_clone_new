import { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import { HostTypeContext } from "../../../components/context/hostType";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import HostLeftGrid from "../../../components/custom/hostLeftGrid";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import PropertyTypeItem from "../../../components/hostSelectType/propertyTypeItem";

function propertyType() {
  const router = useRouter();
  const { itemId } = router.query;

  const [selectedType, setselectedType] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
  };
  console.log(selectedType);

  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ type: selectedType, _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/privacy-type");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <HostLeftGrid showText="다음중 숙소를 가장 잘 설명하는 문구는 무엇인가요?" />
      {/* 오른쪽 */}
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <HostSelectHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PropertyTypeItem
              setselectedType={setselectedType}
              selectedType={selectedType as string}
            />
          </Box>
          <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
        </Box>
      </Grid>
    </Grid>
  );
}
propertyType.isInLayout = true;
export default propertyType;
