import { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import { HostTypeContext } from "../../../components/context/hostType";
import ToggleButton from "@mui/material/ToggleButton";
import SecondStepItem from "../../../components/hostSelectType/secondStepItem";

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
          다음 중 숙소를 가장 잘 설명하는 문구는 무엇인가요?
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
          <SecondStepItem
            setselectedType={setselectedType}
            selectedType={selectedType as string}
          />
        </Box>
        {/* 하단버튼 */}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={prevStep}>
            뒤로
          </Button>
          <Button variant="contained" onClick={nextStep}>
            다음
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
propertyType.isInLayout = true;
export default propertyType;
