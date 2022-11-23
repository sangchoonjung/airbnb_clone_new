import HostType from "../../lib/model/interface/hostType";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { formatDistance } from "date-fns";
import { ko } from "date-fns/locale";
import { useRouter } from "next/router";
type con = {
  datas: [];
};

function MainShowItem(props: con) {
  const router = useRouter();
  console.log(props.datas);
  const goToDetail = (item: {}) => {
    router.push(`/rooms/${item._id}`);
  };
  return (
    <>
      {props.datas.map((item: any) => {
        // console.log(typeof item.receipt);
        return (
          <Grid item xs={2} sm={2} md={4} key={item._id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: 10,
                width: "300px",
                height: "380px",
              }}
            >
              <Box sx={{ width: "300px", heigh: "300px", p: 1 }}>
                <img
                  src={item.picture[0].extraUrl}
                  width="100%"
                  height="250px"
                  alt="none"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: 1 }}>
                <Typography sx={{ fontWeight: "600" }}>
                  제목 - {item.title}
                </Typography>
                <Typography sx={{ color: "#888888" }}>
                  등록일 -{" "}
                  {formatDistance(new Date(item.receipt), new Date(), {
                    addSuffix: true,
                    locale: ko,
                  })}
                </Typography>
                <Typography sx={{ fontWeight: "600" }}>
                  요금 - ₩{item.price.toLocaleString()}/박
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default MainShowItem;
