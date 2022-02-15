import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateScheduleStepOne from "./CreateScheduleStepOne";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  requirePropFactory,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Date from "./Date";
import Time from "./Time";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const steps = ["Collection Point & Date", "Choose Team"];

function FormSteper() {
  const [team, setTeam] = React.useState("team1");
  const [expanded, setExpanded] = React.useState("panel1");
  const [activeStep, setActiveStep] = React.useState(0);
  const [recuringValue, setRecuringValue] = React.useState("day");
  const CollectionPoint = ["MG Road", "KR Puram", "Medhahali"];

  const [collectionPoint, setCollectionPointValue] = React.useState("MG Road");
  // const [colectionpont, setColectionpont] = React.useState("");
  const [scheduleDate, setScheduleDate] = React.useState();
  const [scheduleTime, setScheduleTime] = React.useState("");
  const [frequency, setFrequencyValue] = React.useState("one time");
  // const [expanded, setExpanded] = React.useState("panel1");

  const [week, setWeek] = React.useState("web");
const [scheduleData,setSceduleData] = React.useState([]);

// React.useEffect(() => {
// const reqObject = {};
// axios.post ("url", )

// },[]);

React.useCallback(() => {

})

  function handleChangeTeam(event) {
    setTeam(event.target.value);
  }

  //TODO: Validation
  const isValidated = () => {
    return true;
  };
  const handleNext = () => {
    if (activeStep === 0 && isValidated) {
      const setp1Data = [
        {
          collectionPoint: collectionPoint,
          date: scheduleDate,
          time:scheduleTime,
          team,
          week,
          frequency
        },
      ];
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
if(activeStep === 1){
// prepare req object
// set team
const req = {}

saveData(req);
}
    
  };
const saveData = async (req) =>  {
try{
  await axios.post("url",req )
}catch (e){
  console.log("error", e);
}
  
}

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCollectionPointChange = (e) => {
    setCollectionPointValue(e.target.value);
    console.log(e.target.value);
  };

  //End//

  const handleRecuringChange = (event) => {
    setRecuringValue(event.target.value);
  };

  const handleExpanedChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleWeekChange = (event, newWeek) => {
    setWeek(newWeek);
  };

  const handleSelectedDate = (date) => {
    setScheduleDate(date);
  };
  const handleSelectedTime = (date) => {
    setScheduleTime(date);
  };

  const handleFrequencyChange = (freq) => {
    setFrequencyValue(freq);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 ? (
              <>
                <Box sx={{ m: 2 }}>
                  <p style={{ fontSize: 14 + "px" }}>
                    Add all the collection points & their collections
                    Time,Date(s)
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
                      <Grid
                        container
                        spacing={2}
                        style={{ marginBottom: "16px" }}
                      >
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
                          <Date
                            dateSelected={(date) => handleSelectedDate(date)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Time timeSelected={(time) => handleSelectedTime(time)} />
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
                            <p style={{ marginTop: "10px" }}>
                              on day 12th of every month
                            </p>
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
              </>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ minWidth: 120, px: 3 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Team
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={team}
                        label="Team"
                        onChange={handleChangeTeam}
                        size="small"
                      >
                        <MenuItem value={"team1"}>Team 1</MenuItem>
                        <MenuItem value={"team2"}>Team 2</MenuItem>
                        <MenuItem value={"team3"}>Team 3</MenuItem>
                        <MenuItem value={"team4"}>Team 4</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 3, mx: 2 }}
          >
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Cancel
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext} variant="contained">
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default FormSteper;
