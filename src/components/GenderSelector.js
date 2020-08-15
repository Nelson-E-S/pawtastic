import React from 'react';
import {Select} from 'semantic-ui-react';

const genderOptions = [
    {key:'male',value:'male',text:'Male'},
    {key:'female',value:'female',text:'Female'}
]

const GenderSelector = props =>
    <Select 
        placeholder='Select Gender' 
        options={genderOptions}
        value={props.input.value}
        onChange={(parm,data)=>props.input.onChange(data.value)} />;

export default GenderSelector;