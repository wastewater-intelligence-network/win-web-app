import * as React from "react";

import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Date from "./Date";
import Time from "./Time";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

function CreateScheduleStepOne(props) {
  const [recuringValue, setRecuringValue] = React.useState("day");
  const CollectionPoint = ["MG Road", "KR Puram", "Medhahali"];

  const [collectionPoint, setCollectionPointValue] = React.useState("MG Road");
  // const [colectionpont, setColectionpont] = React.useState("");
  const [scheduleDate, setScheduleDate] = React.useState();
  const [scheduleTime, setScheduleTime] = React.useState("");

  const handleCollectionPointChange = (e) => {
    setCollectionPointValue(e.target.value);
    console.log(e.target.value);
  };

  const [frequency, setFrequencyValue] = React.useState("one time");


  //End//

  const handleRecuringChange = (event) => {
    setRecuringValue(event.target.value);
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleExpanedChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [week, setWeek] = React.useState("web");

  const handleWeekChange = (event, newWeek) => {
    setWeek(newWeek);
  };

  const handleSelectedDate = (date) => {
    setScheduleDate(date);
  };

  const handleFrequencyChange = (freq) => {
    setFrequencyValue(freq);
  };

  return (
    <Box sx={{ m: 2 }}>
      <p style={{ fontSize: 14 + "px" }}>
        Add all the collection points & their collections Time,Date(s)
      </p>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleExpanedChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Collection Point 1</Typography>
          <Box sx={{ ml: "auto" }}>
            <DeleteIcon />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} style={{ marginBottom: "16px" }}>
            <Grid item xs={6}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="collection-point-select-label">
                    Collection Point
                  </InputLabel>
                  <Select
                    size="small"
                    labelId="collection-point-select-label"
                    id="collection-point-select"
                    label="Collection Point"
                    onChange={handleCollectionPointChange}
                    value={collectionPoint}
                  >
                    {CollectionPoint.map((collection, index) => {
                      return (
                        <MenuItem key={index} value={collection}>
                          {collection}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <a>View Address</a>
            </Grid>
            <Grid item xs={6}>
              <Date dateSelected={(date) => handleSelectedDate(date)} />
            </Grid>
            <Grid item xs={6}>
              <Time />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="frequency"> Frequency</InputLabel>
                  <Select
                    size="small"
                    value={frequency}
                    onChange={handleFrequencyChange}
                    labelId="frequency"
                    id="frequency-select"
                    label=" Frequency"
                  >
                    <MenuItem value="one time">One Time</MenuItem>
                    <MenuItem value="recurring">Recurring</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          {frequency === "recurring" ? (
            <Box sx={{ mt: 2 }}>
              <Grid container>
                <Grid item xs={2}>
                  <TextField
                    label="Repeat"
                    value="1"
                    size="small"
                    placeholder="1"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="">Every</InputLabel>
                    <Select
                      value={recuringValue}
                      size="small"
                      label="Every"
                      onChange={handleRecuringChange}
                    >
                      <MenuItem value="day">Day</MenuItem>
                      <MenuItem value="week">Week</MenuItem>
                      <MenuItem value="month">Month</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              {recuringValue === "month" ? (
                <p style={{ marginTop: "10px" }}>on day 12th of every month</p>
              ) : null}
              {recuringValue === "week" ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    mt: 2,
                  }}
                >
                  <ToggleButtonGroup
                    color="primary"
                    value={week}
                    exclusive
                    onChange={handleWeekChange}
                  >
                    <ToggleButton value="Monday">M</ToggleButton>
                    <ToggleButton value="Tuseday">T</ToggleButton>
                    <ToggleButton value="Wednseday">W</ToggleButton>
                    <ToggleButton value="Thursday">T</ToggleButton>
                    <ToggleButton value="Friday">F</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              ) : null}
              <Box sx={{ mt: 3 }}>
                <Date />
              </Box>
            </Box>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CreateScheduleStepOne;
