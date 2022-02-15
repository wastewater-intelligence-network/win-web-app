import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import FormSteper from "./FormSteper";

function AddScheduleForm() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        mt: 7,
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar sx={{ backgroundColor: "primary.main", color: "#fff", mb: 2 }}>
        Create Schedule
      </Toolbar>

      <FormSteper />
    </Box>
  );

  return (
    <div
      style={{ display: "flex", justifyContent: "end", marginBottom: "5px" }}
    >
      <Button variant="contained" onClick={toggleDrawer("right", true)}>
        {" "}
        Add Schedule{" "}
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

export default AddScheduleForm;
