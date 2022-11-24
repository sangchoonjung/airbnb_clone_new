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
import HostLeftGrid from "../../../components/custom/hostLeftGrid";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";

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

  // console.log(selected_1);
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
      <HostLeftGrid showText="숙소 편의 시설 추가" />
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ position: "relative" }}
      >
        <HostSelectHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            width: "100%",
            maxHeight: "100vh",
            alignItems: "center",
            py: 10,
            overflowY: "scroll",
          }}
        >
          <Box>
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

        <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
      </Grid>
    </Grid>
  );
}
Convenience.isInLayout = true;
export default Convenience;
