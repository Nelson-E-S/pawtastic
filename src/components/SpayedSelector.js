import React from 'react';
import {Select} from 'semantic-ui-react';

const spayedOptions = [
    {key:'yes',value:'yes',text:'Yes'},
    {key:'no',value:'no',text:'No'}
]

const SpayedSelector = props =>
    <Select 
        placeholder='Select Answer' 
        options={spayedOptions}
        value={props.input.value}
        onChange={(parm,data)=>props.input.onChange(data.value)} />;

export default SpayedSelector;