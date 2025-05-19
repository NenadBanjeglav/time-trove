import { Modal } from '../components/atoms/modal/Modal'
import { Text } from '../components/atoms/text/Text'

export const Dashboard = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="text">
          <button>Text</button>
        </Modal.Open>
        <Modal.Window name="text">
          <div>
            <Text>Random text</Text>
          </div>
        </Modal.Window>
      </Modal>
    </div>
  )
}
