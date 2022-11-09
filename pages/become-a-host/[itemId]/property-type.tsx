import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";

function propertyType() {
  const router = useRouter();
  const { itemId } = router.query;

  const nextStepHandle = () => {
    // 데이터 업데이트 fetch...===>
    // 정상처리가 된다면
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
          {itemId}다음 중 숙소를 가장 잘 설명하는 문구는 무엇인가요?
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
          숙소 등록 완료하기
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            주택 숙소
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            아파트 숙소
          </Button>
        </Box>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          숙소 등록 시작하기
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            새로운 숙소 등록하기
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            기존 숙소 복사하기
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
propertyType.isInLayout = true;
export default propertyType;
