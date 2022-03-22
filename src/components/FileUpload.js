import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { Box, Button, Grid } from "@mui/material";
import Leftsidebar from "./Leftsidebar";
import Layout from "../components/app-layout/Layout";

function FileUpload() {
  const fileTypes = ["JPG", "PNG", "GIF", "DOC", "PDF"];
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const handleChange = (file) => {
    console.log(file);
    setFile(file);
  };

  async function uploadFile() {
    console.log(comment);
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData,'formdataaaaaaaaaaaaaaaaaaaaa')
    try {
      const response = await axios.post(
        //"https://win.niua.org:8081/fileupload",
        "https://v2.convertapi.com/upload",
        {
          body: {
            token: localStorage.getItem("login_token"),
            comment: comment,
            document: formData,
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
    <Layout />

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
              multiple={false}
            />

            <TextareaAutosize
              className="fileUploadTextarea"
              minRows={3}
              placeholder="Type Comments"
             // handleChange={handleComent}
              style={{width:'300px'}}
              onChange={event => {
                const { value } = event.target;
                console.log(value);
                setComment(value);
              }}
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
