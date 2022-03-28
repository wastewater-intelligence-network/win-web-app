import * as React from "react";
import { useEffect } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import "./SampleStatusDetails.css";

function SampleStatusDetails(props) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("open --> ", open);

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // React.useEffect(() => {
  //   if (true) {
  //     setState({ ...state, ["right"]: true });
  //   }
  // }, [props.opendrawer]);

  useEffect(() => {
    if (props.opendrawer) {
      setState({ ...state, ["right"]: true });
    }
  }, [props.opendrawer]);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 600,
        mt: 7,
      }}
      role="presentation"
    >
      <h3 className="status-details-headers">Status Log Details </h3>
      <ul className="statuslog-block">
        {props.scheduledetails.length === 0 ? '' : props.scheduledetails[0].statusLog.map(item => {
          return (
            <li>
              {"status"} - {item.status}
              <br />
              {"timestamp"} - {item.timestamp}
            </li>
          )
        })}
      </ul>

      <h3 className="status-details-headers">Additional Data Details </h3>
      <table className="additionaldata-table-block">
        <tr>
          <td>Temperature</td> <td>{props.scheduledetails.length > 0 ? props.scheduledetails[0].additionalData && props.scheduledetails[0].additionalData.temperature : ""}</td>
        </tr>
        <tr>
          <td>Ph</td> <td>{props.scheduledetails.length > 0 ? props.scheduledetails[0].additionalData && props.scheduledetails[0].additionalData.ph : ""}</td>
        </tr>
        <tr>
          <td>Flow Rate</td> <td></td>
        </tr>
      </table>
      <Box sx={{ boxShadow: '1', width: "100%", bottom: 8, p: '10px', textAlign: "right" }}>
        <Button variant="outlined" style={{ marginRight: 5, height: '40' }} onClick={toggleDrawer("right", false)} >Close</Button>
    </Box>
    </Box>
  );

  return (
    <div
      style={{ display: "flex", justifyContent: "end", marginBottom: "5px" }}
    >
      {/* <Button variant="contained" onClick={toggleDrawer("right", true)}>
          Schedule Details
        </Button> */}
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div>
          {list("right")}
        </div>
      </Drawer>
    </div>
  );
}

export default SampleStatusDetails;
