import { useContext, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { HostTypeContext } from "../context/hostType";
import property from "../../lib/data/properties.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
type con = {
  setselectedType: (a: string) => void;
  selectedType: string;
};

function SecondStepItem(props: con) {
  //   console.log(property, "pppppppppppppppppppp");
  const ctx = useContext(HostTypeContext);

  return (
    <>
      {ctx?.firstSelect === "아파트" &&
        property[0].types.map((item) => {
          return (
            <ToggleButton
              value={item.property}
              key={item.property}
              color="warning"
              selected={props.selectedType === item.property}
              onClick={() => {
                props.setselectedType(item.property);
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box style={{ fontWeight: "bold", color: "black" }}>
                  {item.property}
                </Box>
                <Box>{item.description}</Box>
              </Box>
            </ToggleButton>
          );
        })}
      {ctx?.firstSelect === "주택" &&
        property[1].types.map((item) => {
          return (
            <ToggleButton
              value={item.property}
              key={item.property}
              color="warning"
              selected={props.selectedType === item.property}
              onClick={() => {
                props.setselectedType(item.property);
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box style={{ fontWeight: "bold", color: "black" }}>
                  {item.property}
                </Box>
                <Box>{item.description}</Box>
              </Box>
            </ToggleButton>
          );
        })}
      {ctx?.firstSelect === "별채" &&
        property[2].types.map((item) => {
          return (
            <ToggleButton
              value={item.property}
              key={item.property}
              color="warning"
              selected={props.selectedType === item.property}
              onClick={() => {
                props.setselectedType(item.property);
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box style={{ fontWeight: "bold", color: "black" }}>
                  {item.property}
                </Box>
                <Box>{item.description}</Box>
              </Box>
            </ToggleButton>
          );
        })}
      {ctx?.firstSelect === "부티크 호텔" &&
        property[3].types.map((item) => {
          return (
            <ToggleButton
              value={item.property}
              key={item.property}
              color="warning"
              selected={props.selectedType === item.property}
              onClick={() => {
                props.setselectedType(item.property);
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box style={{ fontWeight: "bold", color: "black" }}>
                  {item.property}
                </Box>
                <Box>{item.description}</Box>
              </Box>
            </ToggleButton>
          );
        })}
    </>
  );
}

export default SecondStepItem;
