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
import GenderSelector from './GenderSelector';
import SpayedSelector from './SpayedSelector';
import WeightSelector from './WeightSelector';

let DogIntakeForm = props =>{
    const {handleSubmit} = props;
    return (
        <ReduxForm onSubmit={handleSubmit} className="ui form">
            <SemForm.Field>
                <label>Name</label>
                <ReduxField name="name" component="input" placeholder="Pet's Name" />
            </SemForm.Field>
            <SemForm.Field>
                <label>Breed</label>
                <ReduxField name="breed" component="input" placeholder="Pet's breed" />
            </SemForm.Field>
            <SemForm.Field>
                <label>Birthday</label>
                <ReduxField name="birth" component="input" placeholder="MM/DD/YYYY" />
            </SemForm.Field>
            <SemForm.Field>
                <label>Gender</label>
                <ReduxField name="gender" component={GenderSelector} />
            </SemForm.Field>
            <SemForm.Field>
                <label>Spayed or Neutered</label>
                <ReduxField name="spayed" component={SpayedSelector} />
            </SemForm.Field>
            <SemForm.Field>
                <label>Weight</label>
                <ReduxField name="weight" component={WeightSelector} />
            </SemForm.Field>
            <SemForm.Field>
                <SemBtn type="Submit">Submit</SemBtn>
            </SemForm.Field>
        </ReduxForm>
    );
}

DogIntakeForm = reduxForm({
    form: 'DogIntakeForm'
})(DogIntakeForm);

export default DogIntakeForm;