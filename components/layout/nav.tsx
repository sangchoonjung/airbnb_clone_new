import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Router, useRouter } from "next/router";
import { SyntheticEvent, useState, useEffect } from "react";
import { useContext } from "react";
import { HostTypeContext } from "../context/hostType";
import { RoomDetailDataContext } from "../context/roomDetailData";

type Section = { title: string; url: string };

const sections: Section[] = [
  { title: "신규", url: "#" },
  { title: "아파트", url: "#" },
  { title: "주택", url: "#" },
  { title: "별채", url: "#" },
  { title: "부티크호텔", url: "#" },
];

export default function Nav() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const tabChangeHandle = async (event: SyntheticEvent, value: any) => {
    console.log(value, "밸류");
    setValue(value);
    // if (value == "신규") {
    //   const response = await fetch(
    //     `${process.env.SERVER_ADDRESS}/api/hostApi/readHostApi`,
    //     {
    //       method: "POST",
    //     }
    //   );
    //   const roomDatas = await response.json();
    // }
  };

  return (
    <Toolbar component="nav" variant="dense" sx={{ justifyContent: "center" }}>
      <Tabs value={value} onChange={tabChangeHandle}>
        {sections.map((section) => (
          <Tab
            label={section.title}
            key={section.title}
            value={section.title}
            onClick={() => router.push("/?tag=" + section.title)}
          />
        ))}
      </Tabs>
    </Toolbar>
  );
}
