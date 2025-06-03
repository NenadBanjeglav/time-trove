import type { RemSizeType } from '../../../styles/theme.types'
import { Heading } from '../../atoms/heading/Heading'
import { Text } from '../../atoms/text/Text'

import { StateLayout, Wrapper, Illustration, ButtonWrapper } from './feedbackState.styles'

type FeedbackStateProps = {
  imageSrc?: string
  title: string
  description: string
  buttonElement?: React.ReactNode
  onClick?: () => void | null
  imageMaxWidth?: RemSizeType
}

export const FeedbackState = ({
  imageSrc,
  title,
  description,
  buttonElement,
  imageMaxWidth = '24.5rem',
}: FeedbackStateProps) => {
  return (
    <StateLayout>
      <Wrapper>
        {imageSrc && (
          <Illustration src={imageSrc} alt="empty-state-illustration" $maxWidth={imageMaxWidth} />
        )}
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
        {buttonElement && <ButtonWrapper>{buttonElement}</ButtonWrapper>}
      </Wrapper>
    </StateLayout>
  )
}
