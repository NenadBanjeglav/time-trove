import { Button } from '../components/atoms/button/Button'
import { Text } from '../components/atoms/text/Text'

export const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="medium" label="Click me" />
      <Button variant="success" size="large" label="Button" />
      <Text pallete="primary" color="hue200">
        Random text
      </Text>
      <Text pallete="success" color="hue100">
        Success
      </Text>
      <Text>Default</Text>
    </div>
  )
}
