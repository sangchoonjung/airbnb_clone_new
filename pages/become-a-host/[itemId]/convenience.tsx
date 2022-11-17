import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
function Convenience() {
  const selectList_1 = [
    "무선인터넷",
    "TV",
    "주방",
    "세탁기",
    "건물 내 무료주차",
    "건물 내 유료주차",
    "에어컨",
    "업무 전용 공간",
  ];
  const [selected_1, setSelected_1] = useState<any[]>([]);
  //   console.log(selected_1, "선택한 배열");

  const select_1Handler = (item: any) => {
    if (selected_1.includes(item)) {
      const result = selected_1.filter((prev) => prev != item);
      console.log(result);
      return setSelected_1(result);
    } else {
      setSelected_1((current) => {
        return [...current, item];
      });
    }
  };
  console.log(selected_1);
  const router = useRouter();
  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    const { itemId } = router.query;
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({
        _id: itemId,
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/photos");
  };
  return (
    <Grid container component="main" sx={{ height: "95vh" }}>
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
          숙소 편의시설 추가
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
            style={{
              backgroundColor: "#999999",
              position: "absolute",
              top: 10,
            }}
          >
            나가기
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <Box>
            <Typography>숙소 편의시설 정보를 추가하세요</Typography>
          </Box>
          <Box style={{ width: "50%" }}>
            {selectList_1.map((item) => {
              return (
                <ToggleButton
                  value={item}
                  key={item}
                  color="warning"
                  //   selected={= item}
                  onClick={() => {
                    select_1Handler(item);
                  }}
                  selected={selected_1.includes(item)}
                >
                  <Box>{item}</Box>
                </ToggleButton>
              );
            })}
          </Box>
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
Convenience.isInLayout = true;
export default Convenience;
