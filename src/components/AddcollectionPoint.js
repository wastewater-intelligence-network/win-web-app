import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

import axios from "axios";
import { TextareaAutosize } from '@mui/material';

function AddcollectionPoint() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const [age, setAge] = React.useState('');

    const handleSubmit = () => {
        const req = buildReq();
        submit(req);
    }

    const submit = (request) => {
        axios.post()
    }


    const buildReq = () => {
        return {}
    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450, mt: 7 }}
            role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >


            <Toolbar sx={{ backgroundColor: 'primary.main', color: '#fff' }} >
                Add Collection Point
            </Toolbar>
            <Box sx={{ p: 2 }}>
                <p>Enter the details of the collection point you want to configure</p>
                <Grid container spacing={2} style={{marginBottom:'16px'}}>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="Collection point type" />
                    </Grid>
                </Grid>
                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="Collection point name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="Zone" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextareaAutosize
                            minRows={3}
                            placeholder="Addreess"
                            style={{width:"100%"}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextareaAutosize
                            minRows={3}
                            placeholder="Comments"
                            style={{width:"100%"}}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="Pincode" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="City" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="State" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth label="X,Y Co-oridinates" />
                    </Grid>




                </Grid>

                <Box sx={{ position: 'fixed', boxShadow: '1', width: "420px", bottom: 8, p: '10px' }}>
                    <Box sx={{ float: 'right' }}>
                        <Button variant="outlined" style={{ marginRight: 5, height: '40' }}>Cancel</Button>
                        <Button variant="contained">Submit</Button>
                    </Box>


                </Box>
            </Box>
        </Box>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '5px' }}>

            <Button variant="contained" onClick={toggleDrawer("right", true)}>Add Collection Point</Button>
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

export default AddcollectionPoint;