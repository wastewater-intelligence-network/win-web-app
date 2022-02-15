import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

function PrintStickerList() {
  const qrStrings = useSelector((state) => state.qrCodeTexts.codes);
  console.log(
    "🚀 ~ file: PrintStickerList.js ~ line 15 ~ PrintStickerList ~ qrStrings",
    qrStrings
  );

  const barcodeText = {
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "5px",
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const QrList = [
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
    { id: 1, url: "./qr-code.jpg", code: "12A42Z" },
  ];
  return (
    <Box sx={{ ml: 10 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {/* {QrList.map((qr) => {
          return (
            <Grid
              xs={3}
              sx={{
                direction: "row",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                style={{ maxWidth: "100%", width: "165px" }}
                src={qr.url}
                alt="QR code"
              />
              <Box style={barcodeText}>
                {" "}
                <p>{qr.code}</p>{" "}
              </Box>
            </Grid>
          );
        })} */}

        {qrStrings.map((code) => {
          return (
            <Grid
              xs={3}
              sx={{
                direction: "row",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <QRCode id="qrCodeEl" size={150} value={code} />
              <Box style={barcodeText}>
                {" "}
                <p>{code}</p>{" "}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>

    /* <Box sx={{ml:10}}>
      <Stack direction="row" spacing={2}>
      {QrList.map(qr=>{
  return(
    <Item>
   <img style={{maxWidth:'100%'}}  src={qr.url} alt="QR code" />
   <Box style={barcodeText}> <p>{qr.code}</p> </Box>
  </Item>
  )
})}
        
        
      </Stack>
    </Box> */
  );
}

export default PrintStickerList;
