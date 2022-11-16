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

function LocationSelect() {
  const ctx = useContext(HostTypeContext);
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "27rem", top: 100, left: 100, bgcolor: "white" }}
        onChange={(e) => {
          ctx?.setInputVal(e.currentTarget.value);
        }}
        value={ctx?.inputVal}
      />
      <List>
        {ctx?.predictions &&
          ctx?.predictions.map((item) => {
            return (
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
            );
          })}
      </List>
    </Box>
  );
}

export default LocationSelect;
