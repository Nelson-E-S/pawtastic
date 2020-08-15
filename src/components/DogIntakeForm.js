import React from 'react';
import {
    Field as ReduxField,
    reduxForm,
    Form as ReduxForm
} from 'redux-form';
import {
    Form as SemForm,
    Button as SemBtn
} from 'semantic-ui-react';

const setGenderField = (e) =>{
    const genderField = document.querySelector('#gender');
    genderField.value = e.value
}

let DogIntakeForm = props =>{
    const {handleSubmit} = props;
    return (
        <ReduxForm onSubmit={handleSubmit} className="ui form">
            <SemForm.Field>
                <label>Gender</label>
                <ReduxField name="gender" id="gender" component="input" />
                <SemBtn.Group>
                    <SemBtn>Male</SemBtn>
                    <SemBtn>Female</SemBtn>
                </SemBtn.Group>
            </SemForm.Field>
        </ReduxForm>
    );
}