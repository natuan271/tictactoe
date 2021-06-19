import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
function BestOfRoundComboBox(props) {
const [select,setSect] = useState()
const options = [{title: 'Best of 1 (BO1)',type: 1}, {title: 'Best of 3 (BO3)',type: 3}, {title: 'Best of 5 (BO5)', type: 5}]
    return (
        <div style={{marginTop: '10%', marginBottom: '10%'}}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) => props.setBestOfRound(value.type)}
        renderInput={(params) =>
          <TextField {...params} label="Best Of Round" variant="outlined" style={{zIndex:1}} />}
      />
      
    </div>
  );
}

export default BestOfRoundComboBox
