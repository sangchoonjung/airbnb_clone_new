import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HostTypeContext } from "../context/hostType";

type con = {
  setInputVal: (s: string) => void;
  inputVal: string;
  predictions: any[];
  placeDetailHandler: (s: string) => void;
};

function LocationSelect() {
  const ctx = useContext(HostTypeContext);
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          ctx?.setInputVal(e.currentTarget.value);
        }}
        value={ctx?.inputVal}
      />
      {ctx?.predictions &&
        ctx?.predictions.map((item) => {
          return (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.description}
                    key={item.place_id}
                    onClick={(i) => {
                      console.log(item.place_id);
                      ctx?.placeDetailHandler(item.place_id);
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
    </Box>
  );
}

export default LocationSelect;
