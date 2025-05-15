import { DeleteIcon } from '../assets/icons/DeleteIcon'
import { Button } from '../components/atoms/button/Button'
import { Icon } from '../components/atoms/icon/Icon'

export const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="medium" label="Click me" />
      <Button variant="success" size="large" label="Button" />

      <Icon pallete="primary" color="hue200" icon={DeleteIcon} iconSize={40} />
    </div>
  )
}
