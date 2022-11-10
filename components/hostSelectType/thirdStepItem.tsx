import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
type con = {
  setSelectPrivacy: (a: string) => void;
  selectPrivacy: string;
};
function ThirdStepItem(props: con) {
  const privacyType = ["공간전체", "개인실", "다인실"];

  return (
    <>
      {privacyType.map((item) => {
        return (
          <ToggleButton
            value={item}
            key={item}
            color="warning"
            selected={props.selectPrivacy === item}
            onClick={() => {
              props.setSelectPrivacy(item);
            }}
          >
            <Box>{item}</Box>
          </ToggleButton>
        );
      })}
    </>
  );
}

export default ThirdStepItem;
