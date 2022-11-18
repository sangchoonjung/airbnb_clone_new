import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import {
  basicList,
  specialList,
  safetyObjects,
} from "../../../lib/data/convenidenceList";

function Convenience() {
  const [selected_1, setSelected_1] = useState<any[]>([]);
  const [selected_2, setSelected_2] = useState<any[]>([]);
  const [selected_3, setSelected_3] = useState<any[]>([]);
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
  const select_2Handler = (item: any) => {
    if (selected_2.includes(item)) {
      const result = selected_2.filter((prev) => prev != item);
      console.log(result);
      return setSelected_2(result);
    } else {
      setSelected_2((current) => {
        return [...current, item];
      });
    }
  };
  const select_3Handler = (item: any) => {
    if (selected_3.includes(item)) {
      const result = selected_3.filter((prev) => prev != item);
      console.log(result);
      return setSelected_3(result);
    } else {
      setSelected_3((current) => {
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
        convenience: [
          { basic: selected_1, special: selected_2, safety: selected_3 },
        ],
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
            <Typography variant="h4">
              숙소 편의시설 정보를 추가하세요
            </Typography>
            <Typography variant="h6">
              여기에 추가하려는 편의시설이 보이지 않더라도 걱정하지 마세요!
              숙소를 등록한 후에 편의시설을 추가할 수 있습니다.
            </Typography>
          </Box>

          <Box style={{ width: "50%" }}>
            <Box>
              {basicList.map((item) => {
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
                    sx={{ m: 1 }}
                  >
                    <Box>{item}</Box>
                  </ToggleButton>
                );
              })}
            </Box>

            <Box>
              <Typography>특별히 내세울 만한 편의시설이 있나요?</Typography>
              {specialList.map((item) => {
                return (
                  <ToggleButton
                    value={item}
                    key={item}
                    color="warning"
                    //   selected={= item}
                    onClick={() => {
                      select_2Handler(item);
                    }}
                    selected={selected_2.includes(item)}
                    sx={{ m: 1 }}
                  >
                    <Box>{item}</Box>
                  </ToggleButton>
                );
              })}
            </Box>

            <Box>
              <Typography>다음과 같은 안전 관련 물품이 있나요?</Typography>
              {safetyObjects.map((item) => {
                return (
                  <ToggleButton
                    value={item}
                    key={item}
                    color="warning"
                    //   selected={= item}
                    onClick={() => {
                      select_3Handler(item);
                    }}
                    selected={selected_3.includes(item)}
                    sx={{ m: 1 }}
                  >
                    <Box>{item}</Box>
                  </ToggleButton>
                );
              })}
            </Box>
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
