import { Box, Button } from "@mui/material";

import Typography from "@mui/material/Typography";

import { BsCalendar2Check } from "react-icons/bs";
import { MdCalendarToday } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

type con = {
  imgSrc: string;
  title: string;
  price: number;
};
const explain = [
  {
    num: 1,
    title: "세부 정보를 확인하고 숙소를 등록하세요",
    description:
      "본인 인증이 필요하거나 현지 정부에 등록해야 하는 경우 안내해드리겠습니다.",
  },
  {
    num: 2,
    title: "달력 설정하기",
    description:
      "숙소 예약 가능일을 선택해주세요. 숙소는 등록 완료 후 24시간이 지나면 일반에 공개됩니다.",
  },
  {
    num: 3,
    title: "설정 변경하기",
    description:
      "숙소 이용규칙 설정, 환불 정책 선택, 게스트의 예약 방식 선택 등 필요한 작업을 하세요.",
  },
];

function ReceiptBoxItem(props: con) {
  //   console.log(props.title);
  return (
    <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          숙소 검토하기
        </Typography>
        <Typography sx={{ fontSize: 18, color: "#717171" }}>
          게스트에게 표시되는 정보는 다음과 같습니다. 모든 정보가 정확한지
          확인하세요.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            bgcolor: "white",
            display: "block",
            borderRadius: "20px",
            border: "solid 1px #999999",
            overflow: "hidden",
            boxShadow: 10,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bgcolor: "white",
              borderRadius: 1,
              fontSize: 12,
              mt: 10,
              p: 1,
              fontWeight: "600",
              left: 20,
            }}
          >
            미리보기 표시
          </Typography>
          <Box sx={{ width: "300px", heigh: "300px" }}>
            <img
              src={props.imgSrc}
              width="100%"
              height="100%"
              alt="none"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ ml: 3, my: 1 }}>
            <Typography>{props.title}</Typography>
            <Typography>₩{props.price}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", m: 5 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              다음 단계
            </Typography>
          </Box>
          {explain.map((item) => {
            return (
              <Box sx={{ display: "flex", flexDirection: "row", my: 2 }}>
                <Box>
                  {item.num === 1 && (
                    <BsCalendar2Check style={{ fontSize: 30 }} />
                  )}
                  {item.num === 2 && (
                    <MdCalendarToday style={{ fontSize: 30 }} />
                  )}
                  {item.num === 3 && <BsPencil style={{ fontSize: 30 }} />}
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: "600" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#717171" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default ReceiptBoxItem;
