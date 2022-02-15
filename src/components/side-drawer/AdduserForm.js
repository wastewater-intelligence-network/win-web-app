import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import axios from "axios";
function AdduserForm(props) {


    const [username, setUsername] = React.useState('');
    const [useremail, setUseremail] = React.useState('');
    const [usertitle, setUsertitle] = React.useState('');
    const [userteam, setUserteam] = React.useState('');

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
        setUsername(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setUseremail(event.target.value);
    };

    const handleChangeTitle = (event) => {
        setUsertitle(event.target.value);
    };

    const handleChangeTeam = (event) => {
        setUserteam(event.target.value);
    };


    async function addUser() {
        console.log("add uesr ");
        try {
            const response = await axios.post("http://10.92.51.129:3030/users", {
                name: username,
                email: useremail,
                title: usertitle,
                team: userteam
            });
            //const { data } = response;
            console.log(response, 'responseeeeeeeeeeeeeeeeeeeeee');
           // setData(response.data);
        }
        catch (error) {
        }
    };

    const submitAddUser = () => {
        addUser();
        }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450, mt: 7 }}
            role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >


            <Toolbar sx={{ backgroundColor: 'primary.main', color: '#fff' }} >
                Add User
            </Toolbar>
            <Box sx={{ p: 2 }}>
            <form>
                <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <TextField fullWidth label="User Name" value={username} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Email" value={useremail} onChange={handleChangeEmail} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>job Title</InputLabel>
                                <Select
                                    label="job Title"
                                    onChange={handleChangeTitle}
                                >
                                    <MenuItem value={0}>Select Job Title</MenuItem>
                                    {
                                        props.jobtitle && props.jobtitle.map((val, i) => {
                                            return <MenuItem value={i}>{val.jobTitle}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Assign Team</InputLabel>
                                <Select
                                    label="Assign Team"
                                    onChange={handleChangeTeam}
                                >
                                    <MenuItem value={0}>Select Team</MenuItem>

                                    {
                                        props.team &&  props.team.map((val, i) => {
                                            return <MenuItem value={i}>{val.team}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    
                </Grid>
                </form>
                <Box sx={{ position: 'fixed', boxShadow: '1', width: "420px", bottom: 8, p: '10px' }}>
                    <Box sx={{ float: 'right' }}>
                        <Button variant="outlined" style={{ marginRight: 5, height: '40' }}>Cancel</Button>
                        <Button variant="contained" onClick={submitAddUser}>Submit</Button>
                    </Box>


                </Box>
            </Box>
        </Box>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '5px' }}>

            <Button variant="contained" onClick={toggleDrawer("right", true)}>Add User</Button>
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

export default AdduserForm;