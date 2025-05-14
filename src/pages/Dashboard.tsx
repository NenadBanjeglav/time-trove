import { Button } from '../components/atoms/button/Button'
import { Text } from '../components/atoms/text/Text'

export const Dashboard = () => {
  return (
    <div>
      <Button variant="primary" size="medium" label="Click me" />
      <Button variant="success" size="large" label="Button" />
      <Text as="p" fontSize="large" fontWeight="bold" lineHeight="small">
        Random Text
      </Text>
    </div>
  )
}
