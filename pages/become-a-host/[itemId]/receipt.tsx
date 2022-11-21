import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { HostUploadPhotoContext } from "../../../components/context/hostUploadPhoto";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import HostDB from "../../../lib/model/schema/hostSchema";
import HostType from "../../../lib/model/interface/hostType";
import { BsCalendar2Check } from "react-icons/bs";
import { MdCalendarToday } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import ReceiptBoxItem from "../../../components/hostSelectType/receipt/receiptBoxItem";

const Recript = ({ hosting }: { hosting: HostType }) => {
  const ctx = useContext(HostUploadPhotoContext);
  console.log(hosting.picture);
  const router = useRouter();
  const { itemId } = router.query;
  const [titleText, setTitleText] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
    // console.log("QQQ");
  };
  const nextStep = async () => {
    if (confirm("완료하시겠습니까??")) {
      router.push("/become-a-host/" + itemId + "/publish-celebration");
    } else {
      alert("취소됨");
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HostSelectHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "fadein 2s",
          mt: 7,
        }}
      >
        <ReceiptBoxItem
          imgSrc={hosting.picture[0].extraUrl as string}
          title={hosting.title}
          price={hosting.price}
        />
      </Box>
      <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
    </Box>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.itemId as string;
  const hosting = await HostDB.findById(itemId).lean();

  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    //바로 json 파일을 넘겨버리면 에러뜸! 패치를 통해서 할때만 제이슨으로 응답받아서 넘길수있다
    props: {
      hosting: JSON.parse(JSON.stringify(hosting)),
    },
  };
};
Recript.isInLayout = true;
export default Recript;
