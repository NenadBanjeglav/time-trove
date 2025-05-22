import type { HTMLAttributes, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { Spinner } from '../../atoms/icon/Spinner'

import { EmptyState } from './EmptyState'
import { CenteredState, StyledContainer } from './container.styles'

type ContainerVariant = 'default' | 'notFound' | 'maintance'

type ContainerProps<T> = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  isLoading?: boolean
  error?: unknown
  data?: T
  isDataEmpty?: (data: T) => boolean
  variant?: ContainerVariant
  dynamicHeightOffset?: number
}

export const Container = <T,>({
  children,
  isLoading,
  error,
  data,
  isDataEmpty = data => Array.isArray(data) && data.length === 0,
  variant = 'default',
  dynamicHeightOffset,
  ...rest
}: ContainerProps<T>) => {
  const navigate = useNavigate()
  const heightOffset = variant === 'default' ? dynamicHeightOffset : undefined

  let content: ReactNode = children

  if (variant === 'notFound') {
    content = (
      <EmptyState
        imageSrc="/images/notFound.png"
        title="Page not found!"
        description="The page you are attempting to access is currently unavailable or does not exist."
        buttonLabel="Back home"
        onClick={() => navigate('/')}
        imageMaxWidth="372px"
      />
    )
  }

  if (variant === 'maintance') {
    content = (
      <EmptyState
        imageSrc="/images/maintance.png"
        title="We’ll be right back!"
        description="This service is temporarily down for a bit of maintenance."
        imageMaxWidth="392px"
      />
    )
  }

  if (variant === 'default' && error) {
    content = (
      <EmptyState
        imageSrc="/images/error.png"
        title="Something went wrong"
        description="An error occurred while attempting to retrieve data from the server."
        buttonLabel="Try again"
        buttonVariant="neutral"
        onClick={() => window.location.reload()}
        imageMaxWidth="244px"
      />
    )
  }

  if (variant === 'default' && isLoading) {
    content = (
      <CenteredState>
        <Spinner />
      </CenteredState>
    )
  }

  if (variant === 'default' && data && isDataEmpty(data)) {
    content = (
      <EmptyState
        imageSrc="/images/empty.png"
        title="Nothing here yet!"
        description="There are no tasks created"
        buttonLabel="Create task"
        onClick={() => {}}
        imageMaxWidth="180px"
      />
    )
  }

  return (
    <StyledContainer $heightOffset={heightOffset} {...rest}>
      {content}
    </StyledContainer>
  )
}
