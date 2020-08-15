import React from 'react';
import {Select} from 'semantic-ui-react';

const weightOptions = [
    {key:'1',value:'small',text:'0-25 lbs'},
    {key:'2',value:'medium',text:'25-50 lbs'},
    {key:'3',value:'large',text:'50-100 lbs'},
    {key:'4',value:'extra',text:'100+ lbs'}
]

const WeightSelector = props =>
    <Select 
        placeholder='Select Weight'
        options={weightOptions}
        value={props.input.value}
        onChange={(parm,data)=>props.input.onChange(data.value)} />;

export default WeightSelector;