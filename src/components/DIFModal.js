import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleCloseIcon() {
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

export default ModalExampleCloseIcon