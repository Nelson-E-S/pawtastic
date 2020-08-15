import React, { Component } from 'react';
import DogIntakeForm from './DogIntakeForm';
import {
    Divider as SemDiv,
    Grid as SemGrid,
    Segment as SemSeg,
    Icon as SemIcon
} from 'semantic-ui-react';

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
            <SemSeg>
                <SemGrid columns={2} relaxed='very'>
                    <SemGrid.Column>
                        <h2>Enter Your dog's details</h2>
                    </SemGrid.Column>
                    <SemGrid.Column>
                        <DogIntakeForm onSubmit={this.handleSubmit} />
                    </SemGrid.Column>
                </SemGrid>
                <SemDiv vertical><SemIcon name='chevron right' /></SemDiv>
            </SemSeg>
        );
    }
}