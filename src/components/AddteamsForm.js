import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Member from '../Shared/Member';

 function AddteamsForm() {
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


            <Toolbar sx={{backgroundColor: 'primary.main', color:'#fff'}} >
               Add Team
            </Toolbar>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                       <p>Enter the details of the team you want to configure</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Team Name" />
                    </Grid>
                    
                    <Grid item xs={12}>
                       <Member />
                    </Grid>
                


                </Grid>

                <Box sx={{ position: 'fixed', boxShadow:'1', width: "420px", bottom: 8, p:'10px' }}>
                   <Box sx={{float:'right'}}>
                   <Button variant="outlined" style={{ marginRight: 5, height: '40' }}>Cancel</Button>
                        <Button variant="contained">Submit</Button>
                   </Box> 
                        
                    
                </Box>
            </Box>
        </Box>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'end', marginBottom:'5px' }}>

            <Button variant="contained" onClick={toggleDrawer("right", true)}>Add Team</Button>
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

export default AddteamsForm;