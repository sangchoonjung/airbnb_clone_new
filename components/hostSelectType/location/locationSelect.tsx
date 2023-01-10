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
import { HostTypeContext } from "../../context/hostType";

function LocationSelect() {
  const ctx = useContext(HostTypeContext);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        top: 200,
        left: 150,
        position: "absolute",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ minWidth: "400px", bgcolor: "white" }}
        onChange={(e) => {
          ctx?.setInputVal(e.currentTarget.value);
        }}
        value={ctx?.inputVal}
      />
      <List sx={{ width: "27rem", bgcolor: "white" }}>
        {ctx?.predictions &&
          ctx?.predictions.map((item: any) => {
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
