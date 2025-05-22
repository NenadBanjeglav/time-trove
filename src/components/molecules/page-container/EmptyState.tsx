import styled from 'styled-components'

import type { Pallete } from '../../../styles/theme.types'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { Text } from '../../atoms/text/Text'

import { CenteredState } from './container.styles'

type EmptyStateProps = {
  imageSrc: string
  title: string
  description: string
  buttonLabel?: string
  onClick?: () => void
  buttonVariant?: Pallete
  imageMaxWidth?: string
}

const Wrapper = styled.div`
  max-width: 716px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
`

const Illustration = styled.img<{ $maxWidth?: string }>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '372px'};
  height: auto;
`

const ButtonWrapper = styled.div`
  width: 320px;
`

export const EmptyState = ({
  imageSrc,
  title,
  description,
  buttonLabel,
  onClick,
  buttonVariant,
  imageMaxWidth = '392px',
}: EmptyStateProps) => {
  return (
    <CenteredState>
      <Wrapper>
        <Illustration src={imageSrc} alt="empty-state-illustration" $maxWidth={imageMaxWidth} />
        <Heading
          as="h1"
          pallete="neutral"
          color="hue500"
          fontSize="h1"
          fontWeight="bold"
          lineHeight="h1"
        >
          {title}
        </Heading>
        <Text
          as="p"
          pallete="neutral"
          color="hue200"
          fontSize="base"
          fontWeight="regular"
          lineHeight="base"
        >
          {description}
        </Text>
        {buttonLabel && onClick && (
          <ButtonWrapper>
            <Button fullWidth size="large" onClick={onClick} variant={buttonVariant ?? 'primary'}>
              {buttonLabel}
            </Button>
          </ButtonWrapper>
        )}
      </Wrapper>
    </CenteredState>
  )
}
