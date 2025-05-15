import { Button } from '../components/atoms/button/Button'
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
    </div>
  )
}
