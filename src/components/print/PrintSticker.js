import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { randomStringGenerator } from "../utils";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import Layout from "../app-layout/Layout";
import {
  addQrCodeTexts,
  clearQrCodeTexts,
} from "../../features/qr-code-text-slice";

function PrintSticker() {
  const [numberOfSticker, setNumberOfSticker] = React.useState("20");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangePrintSticker = (event) => {
    setNumberOfSticker(event.target.value);
  };

  const generateQRTextsAndPrint = () => {
    dispatch(clearQrCodeTexts());
    const qrStrings = randomStringGenerator(+numberOfSticker, 5);
    dispatch(addQrCodeTexts(qrStrings));
    console.log(qrStrings);
    navigate("/print-list");
  };
  // console.log("_______________", qrCodeTexts);
  return (
    <>
    <Layout />
    <Box sx={{ p: 3, ml: 8 }}>
      <p className="textBold">Print Stickers</p>
      <p>Bar code stickers to be placed on the collected sample bottles</p>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Number Of Sticker to print
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={numberOfSticker}
              label="Number Of Sticker to print"
              onChange={handleChangePrintSticker}
            >
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="40">40</MenuItem>
              <MenuItem value="60">60</MenuItem>
              <MenuItem value="80">80</MenuItem>
              <MenuItem value="100">100</MenuItem>
            </Select>
          </FormControl>

          {/* <TextField fullWidth label="Number of sticker to print" id="fullWidth" /> */}
        </Grid>
      </Grid>
      {/* <Button variant="contained">Contained</Button> */}
      <Box sx={{ mt: 3, mb: 3 }}>
        <Button variant="contained" onClick={generateQRTextsAndPrint}>
          Generate/Print
        </Button>
      </Box>

      {/* <QRCode value="hey" /> */}

      {/* <div className="qr-input">
        <input
          type="text"
          placeholder="Enter input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input type="button" value="Generate" onClick={generateQRCode} />
      </div> */}
      {/* <QRCode id="qrCodeEl" size={150} value={qrCodeText} />
      <h5>{qrCodeText}</h5> */}
    </Box>
    </>
  );
}

export default PrintSticker;
