import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

function Time(props) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Time"
        value={value}
        onChange={(selectTime) => {
          setValue(selectTime);
          props.timeSelected(selectTime);
        }}
        renderInput={(params) => <TextField size='small' {...params} />}
      />
    </LocalizationProvider>
  );
}

export default  Time;