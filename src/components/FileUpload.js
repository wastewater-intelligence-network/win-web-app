import * as React from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";


function FileUpload() {

    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const [comment, setComment] = useState('');
    const handleChange = (file) => {
        setFile(file);
    };

    const handleComent = (value) => {
        setComment(value);
    };

    async function uploadFile() {
        try {
            const response = await axios.post("https://win.niua.org:8081/fileupload", {
              body: {
                  token: localStorage.getItem('login_token'),
                  comment: comment,
                  document: file
              } 
            });
            console.log(response);
          } catch (error) { }

    }

    const sendUploadedData = () => {
      uploadFile();
    };

    return (
        <>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

         
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
                handleChange={handleComent}
            />

            <input type="submit" onClick={sendUploadedData} />
        </>
    );
}

export default FileUpload;
