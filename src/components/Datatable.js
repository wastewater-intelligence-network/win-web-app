import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Grid } from "@mui/material";
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function QuickSearchToolbar(props) {
  return (
    <Box sx={{ borderBottom:1,borderColor: 'grey.500' }}>
    <Box sx={{ mx: 3, marginTop: 2,marginBottom:0 }}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <h5>{props.title} ({props.dataCount})</h5>
        </Grid>
        <Grid>
          <Box>
            <TextField
              value={props.value}
              onChange={props.onChange}
              placeholder="Search for name"
              size="small"
              label="Search"
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" />,
                endAdornment: (
                  <IconButton
                    title="Clear"
                    aria-label="Clear"
                    size="small"
                    style={{ visibility: props.value ? "visible" : "hidden" }}
                    onClick={props.clearSearch}
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                ),
              }}
              sx={{
                width: {
                  xs: 1,
                  sm: "auto",
                },
                m: (theme) => theme.spacing(1, 0.5, 1.5),
                "& .MuiSvgIcon-root": {
                  mr: 0.5,
                },
                "& .MuiInput-underline:before": {
                  borderBottom: 1,
                  borderColor: "divider",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // dataCount: PropTypes.string.isRequired
};
// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
export default function Datatable(props) {
  // const [error, setError] = useState(null);
 //  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [rowsOnClear, setRowsOnClear] = React.useState([]);

  
  // console.log("🚀 ~ file: Datatable.js ~ line 89 ~ Datatable ~ data", data)
  
  useEffect(()=>{
    const data=  props.rows.map((row) => {return {...row, id: row._id}});
    console.log("🚀 ~ file: Datatable.js ~ line 95 ~ useEffect ~ data", data)
    
    setRowsOnClear(data);
    setRows(data);
  },[props.rows])
   
  // setColumns(props.columns)
  console.log(props.columns);
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    if (searchValue !== "") {
      const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
      const filteredRows = rows.filter((row) => {
        return Object.keys(row).some((field) => {
          return searchRegex.test(row[field]);
        });
      });
      setRows(filteredRows);
    } else {
      setRows(rowsOnClear);
    }
  };
  return (
    <Box sx={{ display:"flex", height: 500, width: 100 + "%" }}>
     <div style={{ flexGrow: 1 }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={props.rows}
        columns={props.columns}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
      </div>
    </Box>
  );
}
