import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      
    },
  },
};

const names = [
  'Tusar',
  'Atal',
  'Lokesh',
  'Josep',
  'Prasant',
  'Murli',
  'Abhijit',
  'Bijay kuamr',
  
];

 function Member() {
  const [memberName, setmemberName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setmemberName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="memberCheckbox">Add Members</InputLabel>
        <Select
          labelId="memberCheckbox"
          id="demo-multiple-checkbox"
          multiple
          value={memberName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={memberName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Member;