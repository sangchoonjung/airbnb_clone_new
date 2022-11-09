import { Box, Button } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function propertyTypeGroup() {
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
          호스팅할 숙소 유형을 알려주세요
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
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            아파트
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            주택
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            별채
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            독특한 숙소
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            B&B
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ px: 30, py: 3, my: 1 }}
            fullWidth
          >
            부티크 호텔
          </Button>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained">뒤로</Button>
          <Button variant="contained">다음</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

propertyTypeGroup.isInLayout = true;
export default propertyTypeGroup;
