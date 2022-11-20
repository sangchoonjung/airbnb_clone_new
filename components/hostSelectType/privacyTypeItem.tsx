import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import { Typography } from "@mui/material";
type con = {
  setSelectPrivacy: (a: string) => void;
  selectPrivacy: string;
};
function PrivacyTypeItem(props: con) {
  const privacyType = [
    {
      title: "공간전체",
      description: "게스트가 숙소 전체를 단독으로 사용합니다.",
    },
    {
      title: "개인실",
      description:
        "게스트는 개인실에서 숙박하지만,일부 공간은 호스트나 다른 사람과 함께 사용할수 있습니다.",
    },
    {
      title: "다인실",
      description:
        "게스트가 개인공간 없이 호스트나 다른사람과 함께 쓰는 침실이나 공용 공간에서 숙박합니다.",
    },
  ];

  return (
    <>
      {privacyType.map((item) => {
        return (
          <ToggleButton
            value={item.title}
            key={item.title}
            color="warning"
            selected={props.selectPrivacy === item.title}
            onClick={() => {
              props.setSelectPrivacy(item.title);
            }}
            defaultValue={item.title}
            sx={{
              width: "25rem",
              border: "solid 1px #999999",
              justifyContent: "start",
              borderRadius: 3,
              color: "black",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              marginBottom: 2,
              alignItems: "start",
            }}
          >
            <Typography style={{ fontWeight: "bold", color: "black" }}>
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </ToggleButton>
        );
      })}
    </>
  );
}

export default PrivacyTypeItem;
