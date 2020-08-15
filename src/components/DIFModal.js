import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

function DIFModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='edit' content='Form Review' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
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
    gender:formValueSelector('DogIntakeForm')(state,'female'),
    spayed:formValueSelector('DogIntakeForm')(state,'spayed'),
    weight:formValueSelector('DogIntakeForm')(state,'weight')
})

DIFModal = connect(mapStateToPros)(DIFModal);

export default DIFModal