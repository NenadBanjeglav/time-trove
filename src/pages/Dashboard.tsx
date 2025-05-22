import { useOutletContext } from 'react-router-dom'

import { Heading } from '../components/atoms/heading/Heading'
import { Container } from '../components/molecules/page-container/Container'
import { useAppStatus } from '../contexts/AppStatusContext'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintance } = useAppStatus()
  return (
    <Container
      variant={maintance ? 'maintance' : 'default'}
      isLoading={false}
      error={false}
      dynamicHeightOffset={navHeight}
    >
      <Heading>Welcome to dashboard</Heading>
    </Container>
  )
}
