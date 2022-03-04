import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DetailsOutlinedIcon from "@mui/icons-material/DetailsOutlined";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Date from "./Date";

function ScheduleDetails(props) {
  // console.log(props);

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

  React.useEffect(() => {
    if (props.scheduledetails) {
      setState({ ...state, ["right"]: true });
    }
  }, [props.scheduledetails]);

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
      <Toolbar sx={{ backgroundColor: "primary.main", color: "#fff", mb: 2 }}>
        {props.scheduledetails === null
          ? ""
          : props.scheduledetails.row.scheduleId}
      </Toolbar>

      {/* Panle Code */}
      <Box sx={{ m: 2 }}>
        <Box sx={{ my: 2 }}>
          <Date />
        </Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel-content"
            id="panel-header"
          >
            <Typography>Team Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} style={{ marginBottom: "16px" }}>
              <Grid item xs={4}>
                <p>Collection Date</p>
                <h6> 14 jan 2022</h6>
              </Grid>
              <Grid item xs={4}>
                <p>Collected By</p>
                <h6>
                  {" "}
                  {props.scheduledetails === null
                    ? ""
                    : props.scheduledetails.row.team}{" "}
                </h6>
              </Grid>
              <Grid item xs={4}>
                <p>Status</p>
                <h6>
                  {" "}
                  {props.scheduledetails === null
                    ? ""
                    : props.scheduledetails.row.status}
                </h6>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ my: 2 }}>
          <p>Collection Point and their Status</p>
        </Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Collection Point 1 </Typography>
            <Box sx={{ ml: "auto" }}>
              <CheckCircleOutlineIcon color="primary" /> Sample Collected
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} style={{ marginBottom: "16px" }}>
              <Grid item xs={4}>
                <p>Address</p>
                <h6>
                  {" "}
                  Ghod Dod Road, Swami Vivekanand Marg, Athwa, Surat, Gujrat
                  395001{" "}
                </h6>
              </Grid>
              <Grid item xs={4}>
                <p>Collection Date & Time</p>
                <h6> </h6>
              </Grid>
              <Grid item xs={4}>
                <Button variant="outlined">Cancel Point</Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Collection Point 1 </Typography>
            <Box sx={{ ml: "auto" }}>
              <DetailsOutlinedIcon color="warning" /> Not Collected
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} style={{ marginBottom: "16px" }}>
              <Grid item xs={4}>
                <p>Collection Date</p>
                <h6> 14 jan 2022</h6>
              </Grid>
              <Grid item xs={4}>
                <p>Collection Date</p>
                <h6> 14 jan 2022</h6>
              </Grid>
              <Grid item xs={4}>
                <p>Collection Date</p>
                <h6> 14 jan 2022</h6>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
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
        {list("right")}
      </Drawer>
    </div>
  );
}

export default ScheduleDetails;
