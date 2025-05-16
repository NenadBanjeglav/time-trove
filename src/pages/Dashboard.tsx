import { AlertIcon } from '../assets/icons/AlertIcon'
import { DeleteIcon } from '../assets/icons/DeleteIcon'
import { EditIcon } from '../assets/icons/EditIcon'
import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { Button } from '../components/atoms/button/Button'
import { Icon } from '../components/atoms/icon/Icon'
import { Input } from '../components/atoms/input/Input'
import { Text } from '../components/atoms/text/Text'

export const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="xlarge" color="hue50" />
      <Button variant="success" size="large" />
      <Button />
      <Text pallete="primary" color="hue200" fontSize="xSmall" fontWeight="medium" as="span">
        Random text
      </Text>
      <Text pallete="neutral" color="hue500" as="span">
        Success
      </Text>
      <Text>Default</Text>
      <Icon pallete="primary" color="hue200" icon={DeleteIcon} iconSize="small" />
      <Icon pallete="danger" color="hue200" icon={AlertIcon} iconSize="large" />
      <Text>DEFAULT</Text>
      <Button variant="warning" loading>
        <Text as="span" pallete="neutral" color="hue0">
          Random btn text
        </Text>
        <Icon icon={AlertIcon} pallete="danger" color="hue0" iconSize="small" />
      </Button>

      <Button isIconButton shape="circle">
        <LogoutIcon />
      </Button>

      <Button shape="square" variant="primary" color="hue50" isIconButton>
        <EditIcon />
      </Button>

      <Button fullWidth variant="danger">
        Log out
      </Button>

      <Button variant="neutral" />

      <div style={{ maxWidth: '400px' }}>
        <Input name="assignee" placeholder="Text" label="Email" />
        <Input name="assignee" placeholder="Text" error="Error text" />
        <Input name="assignee" placeholder="Text" />
        <Input name="assignee" placeholder="Text" />
        <Input name="assignee" placeholder="Text" />
      </div>
    </div>
  )
}
