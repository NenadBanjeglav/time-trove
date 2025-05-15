import { AlertIcon } from '../assets/icons/AlertIcon'
import { DeleteIcon } from '../assets/icons/DeleteIcon'
import { Button } from '../components/atoms/button/Button'
import { Icon } from '../components/atoms/icon/Icon'
import { Text } from '../components/atoms/text/Text'

export const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="medium" label="Click me" />
      <Button variant="success" size="large" label="Button" />
      <Text pallete="primary" color="hue200" fontSize="xSmall" fontWeight="medium" as="span">
        Random text
      </Text>
      <Text pallete="neutral" color="hue500" as="span">
        Success
      </Text>
      <Text>Default</Text>

      <Icon pallete="primary" color="hue200" icon={DeleteIcon} iconSize="small" />

      <Icon pallete="danger" color="hue200" icon={AlertIcon} iconSize="large" />
    </div>
  )
}
