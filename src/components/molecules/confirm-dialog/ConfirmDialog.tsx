import { Button } from '../../atoms/button/Button'
import { ChipStatus } from '../../atoms/chip/chip.types'
import { getChipPallete } from '../../atoms/chip/helpers'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { Text } from '../../atoms/text/Text'

import {
  ButtonRow,
  HeadingTextWrapper,
  IconWrapper,
  ResponsiveCardWrapper,
} from './confirmDialog.styles'
import { getDialogIcon } from './helpers'

type ConfirmDialogProps = {
  status?: ChipStatus
  title: string
  description: string
  primaryActionLabel?: string
  secondaryActionLabel?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
  loading?: boolean
}

export const ConfirmDialog = ({
  status = ChipStatus.SUCCESS,
  title,
  description,
  primaryActionLabel = 'Confirm',
  secondaryActionLabel = 'Cancel',
  onPrimaryAction,
  onSecondaryAction,
  loading = false,
}: ConfirmDialogProps) => {
  const pallete = getChipPallete(status)
  const icon = getDialogIcon(status)

  return (
    <ResponsiveCardWrapper>
      <IconWrapper $pallete={pallete}>
        <Icon icon={icon} iconSize="large" pallete="neutral" color="hue0" />
      </IconWrapper>

      <HeadingTextWrapper>
        <Heading as="h2" fontSize="h2" fontWeight="semiBold" pallete="neutral" color="hue500">
          {title}
        </Heading>
        <Text fontSize="small" fontWeight="regular" pallete="neutral" color="hue200">
          {description}
        </Text>
      </HeadingTextWrapper>
      <ButtonRow>
        {secondaryActionLabel && (
          <Button variant="neutral" onClick={onSecondaryAction} fullWidth>
            {secondaryActionLabel}
          </Button>
        )}
        {primaryActionLabel && (
          <Button variant={pallete} onClick={onPrimaryAction} loading={loading} fullWidth>
            {primaryActionLabel}
          </Button>
        )}
      </ButtonRow>
    </ResponsiveCardWrapper>
  )
}
