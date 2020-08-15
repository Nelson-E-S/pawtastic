import React, { Component } from 'react';
import DogIntakeForm from './DogIntakeForm';
import {Container as SemCt} from 'semantic-ui-react';

//for testing
import {Message} from 'semantic-ui-react';

export default class DogIntakePage extends Component{
    constructor(props){
        super(props);
        this.state = {data:''}
    }
    handleSubmit = vals =>{
        this.setState({data:vals})
    }
    render(){
        return(
            <SemCt>
                <DogIntakeForm onSubmit={this.handleSubmit} />
                <Message>
                    <Message.Header>DIP Data:</Message.Header>
                    <p>this.state.data: {this.state.data===''?'':JSON.stringify(this.state.data)}</p>
                </Message>
            </SemCt>
        );
    }
}