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

DogIntakeForm = reduxForm({
    form: 'DogIntakeForm'
})(DogIntakeForm);

export default DogIntakeForm;