import React from 'react'
import { Button, Header, Icon, Modal,List } from 'semantic-ui-react'
import {formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

let DIFModal= (props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button type="Submit">Submit</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='edit' content='Form Review' />
      <Modal.Content>
        <List animated verticalAlign='middle'>
            <List.Item>
                <List.Icon name='heart' />
                <List.Content>{props.name}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='star' />
                <List.Content>{props.breed}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='calendar alternate' />
                <List.Content>{props.birth}</List.Content>
            </List.Item>
            <List.Item>
                {props.gender===undefined?<List.Icon name='genderless' />:props.gender==='male'?<List.Icon name='man' />:<List.Icon name='woman' />}
                <List.Content>{props.gender}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='cut' />
                <List.Content>{props.spayed}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='weight' />
                <List.Content>{props.weight}</List.Content>
            </List.Item>
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button color="purple" onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Submit
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

const mapStateToPros = state =>({
    name:formValueSelector('DogIntakeForm')(state,'name'),
    breed:formValueSelector('DogIntakeForm')(state,'breed'),
    birth:formValueSelector('DogIntakeForm')(state,'birth'),
    gender:formValueSelector('DogIntakeForm')(state,'gender'),
    spayed:formValueSelector('DogIntakeForm')(state,'spayed'),
    weight:formValueSelector('DogIntakeForm')(state,'weight')
})

DIFModal = connect(mapStateToPros)(DIFModal);

export default DIFModal