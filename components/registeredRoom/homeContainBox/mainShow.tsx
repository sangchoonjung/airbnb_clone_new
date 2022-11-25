import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HostType from "../../../lib/model/interface/hostType";
import MainShowItem from "./mainShowItem";
type con = {
  datas: [];
};

function MainShow(props: con) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 12 }}
      columns={{ xs: 2, sm: 6, md: 12 }}
    >
      <MainShowItem datas={props.datas} />
    </Grid>
  );
}

export default MainShow;
