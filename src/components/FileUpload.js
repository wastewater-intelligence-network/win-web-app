import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { Box, Button, Grid } from "@mui/material";
import Leftsidebar from "./Leftsidebar";

function FileUpload() {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const handleChange = (file) => {
    setFile(file);
  };

  const handleComent = (value) => {
    setComment(value);
  };

  async function uploadFile() {
    try {
      const response = await axios.post(
        "https://win.niua.org:8081/fileupload",
        {
          body: {
            token: localStorage.getItem("login_token"),
            comment: comment,
            document: file,
          },
        }
      );
      console.log(response);
    } catch (error) {}
  }

  const sendUploadedData = () => {
    uploadFile();
  };

  return (
    <>
      <Box sx={{ mt: 2, ml: "80px", mr: "10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h4>Sample Upload </h4>
        </Grid>
        
      </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Leftsidebar />
          </Grid>
          <Grid item xs={10} sx={{ pl: 0, boxShadow:1, mt:2 }} >
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />

            <TextareaAutosize
              className="fileUploadTextarea"
              minRows={3}
              placeholder="Type Comments"
              handleChange={handleComent}
              style={{width:'300px'}}
            />
    <Button sx={{ml:2}} variant="contained" onClick={sendUploadedData}>Upload</Button>
            {/* <input type="submit" onClick={sendUploadedData} /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FileUpload;
