import { Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import DetailPicture from "./detailPicture";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../context/roomDetailData";
import DetailConvenience from "./detailConvenience";

type con = {
  item: {
    title: string;
    picture: any[];
    uniqueId: string;
    type: string;
    personnel: {
      guest: number;
      bedRoom: number;
      bathRoom: number;
    };
    description: string;
  };
};

function RoomDetail(props: con) {
  const { item } = props;
  const ctx = useContext(RoomDetailDataContext);
  const a = ctx?.setItemData(item);
  // console.log(ctx?.itemData, "2wwwwwwwwwww");

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
          <Typography variant="h4">{item.title}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>5.0 후기 수퍼 호스트 위치</Box>
            <Box>공유하기 / 저장</Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <DetailPicture item={item} />

        <Divider sx={{ my: 2 }} />
        <Box>
          {item.uniqueId} 님이 호스팅하는 {item.type}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
          }}
        >
          <Typography sx={{ mr: 1 }}>
            최대인원 {item.personnel.guest}명
          </Typography>
          <Typography sx={{ mr: 1 }}>
            침실 {item.personnel.bedRoom}개
          </Typography>
          <Typography sx={{ mr: 1 }}>
            욕실 {item.personnel.bathRoom}개
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography>상세 설명</Typography>
          <Typography>
            {item.description ? item.description : "없음"}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <DetailConvenience />

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography>호스팅 지역</Typography>
        </Box>
      </Box>
    </>
  );
}

export default RoomDetail;
