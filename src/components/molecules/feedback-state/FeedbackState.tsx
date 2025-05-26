import type { Pallete, RemSizeType } from '../../../styles/theme.types'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { Text } from '../../atoms/text/Text'

import { StateLayout, Wrapper, Illustration, ButtonWrapper } from './feedbackState.styles'

type FeedbackStateProps = {
  imageSrc: string
  title: string
  description: string
  buttonLabel?: string
  onClick?: () => void
  buttonVariant?: Pallete
  imageMaxWidth?: RemSizeType
}

export const FeedbackState = ({
  imageSrc,
  title,
  description,
  buttonLabel,
  onClick,
  buttonVariant,
  imageMaxWidth = '24.5rem',
}: FeedbackStateProps) => {
  return (
    <StateLayout>
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
    </StateLayout>
  )
}
