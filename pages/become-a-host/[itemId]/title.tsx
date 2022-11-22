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
import mongooseInit from "../../../lib/mongooseInit";

const Title = ({ hosting }: { hosting: HostType }) => {
  const ctx = useContext(HostUploadPhotoContext);
  const router = useRouter();
  const { itemId } = router.query;
  const [titleText, setTitleText] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
    // console.log("QQQ");
  };
  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ title: titleText, _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/description");
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HostSelectHeader />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // position: "relative",
          // backgroundColor: "white",
          animation: "fadein 2s",
          // justifyContent: "center",
          mt: 20,
        }}
      >
        <Typography>이제 {hosting.type} 에 이름을 지어주세요.</Typography>
        <Typography>
          숙소 이름은 짧을수록 효과적입니다.나중에 언제든지 변경할수있으니,너무
          걱정하지마세요.
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "30rem" }}
          color="info"
          value={titleText}
          multiline
          rows={5}
          onChange={(e) => {
            setTitleText(e.currentTarget.value);
            console.log(titleText?.length);
          }}
        />
        <Typography>{titleText?.length}/32</Typography>
      </Box>

      <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
    </Box>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.itemId as string;
  mongooseInit();
  const hosting = await HostDB.findById(itemId).lean();

  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    //바로 json 파일을 넘겨버리면 에러뜸
    props: {
      hosting: JSON.parse(JSON.stringify(hosting)),
    },
  };
};
Title.isInLayout = true;
export default Title;
