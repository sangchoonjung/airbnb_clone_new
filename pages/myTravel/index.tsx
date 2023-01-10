import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { unstable_getServerSession } from "next-auth";
import { option } from "../api/auth/[...nextauth]";
import BuyerDB from "../../lib/model/schema/buyerSchema";
import mongooseInit from "../../lib/mongooseInit";
import BuyerType from "../../lib/model/interface/buyerType";
import { format } from "date-fns";
import Head from "next/head";

function MyPage({ items }: { items: [] }) {
  const [exsistTravel, setExsistTravel] = useState<boolean>(false);
  console.log(items, "아이템들");
  return (
    <Box sx={{ mt: 5 }}>
      <Head>
        <title>내 예약정보</title>
      </Head>
      <Typography>내 예약정보</Typography>
      <Divider sx={{ my: 2 }} />
      {items.map((one: BuyerType) => {
        return (
          <Box>
            <Box
              key={one._id as any}
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: 5,
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>결제일</Typography>
                <Typography>
                  {format(new Date(one?.payauth?.create_time), "yyyy.MM.dd")}
                </Typography>
                <Typography>숙소 이용일</Typography>
                <Typography>
                  {one.useDate?.start}~{one.useDate?.end}
                </Typography>
                <Typography>인원</Typography>
                <Typography>어른 {one.guest?.adult}명</Typography>
                <Typography>결제금액</Typography>
                <Typography>{one?.price?.total.toLocaleString()}</Typography>
              </Box>
              <Box sx={{ width: "200px", heigh: "100px" }}>
                <img
                  src={one?.roomInformation?.picture[0].extraUrl}
                  width="100%"
                  height="100%"
                  alt="none"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Box>
        );
      })}
      {/* 여행없을떄 */}
      {/* {!items && (
        <Box>
          <Typography>아직 예약된 여행이 없습니다!</Typography>
          <Typography>
            여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
          </Typography>
          <Button variant="contained">숙소 검색하기</Button>
        </Box>
      )} */}
    </Box>
  );
}

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await unstable_getServerSession(req, res, option);
  console.log(session?.user?.email, "세션");
  mongooseInit();
  const response = await BuyerDB.find({ buyerId: session?.user?.email });
  // console.log(response, "seeeeeeeeeee");

  if (!response) {
    return {
      notFound: true,
    };
  }
  //바로 json 파일을 넘겨버리면 에러뜸! 패치를 통해서 할때만 제이슨으로 응답받아서 넘길수있다
  return {
    props: {
      items: JSON.parse(JSON.stringify(response)),
    },
  };
};
