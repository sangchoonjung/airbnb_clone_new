import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";

type con = {
  setInputVal: (s: string) => void;
  inputVal: string;
  predictions: any[];
  placeDetailHandler: (s: string) => void;
};

function LocationSelect(props: con) {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          props.setInputVal(e.currentTarget.value);
        }}
        value={props.inputVal}
      />
      {props.predictions &&
        props.predictions.map((item) => {
          return (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.description}
                    key={item.description}
                    onClick={(i) => {
                      console.log(item.place_id);
                      props.placeDetailHandler(item.place_id);
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
