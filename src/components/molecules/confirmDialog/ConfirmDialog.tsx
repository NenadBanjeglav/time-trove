import { ChipStatus } from '../../atoms/chip/chip.types'
import { getChipPallete } from '../../atoms/chip/helpers'
import { ButtonRow, HeadingTextWrapper, IconWrapper } from './confirmDialog.styles'
import { Icon } from '../../atoms/icon/Icon'

import { Heading } from '../../atoms/heading/Heading'
import { Text } from '../../atoms/text/Text'
import { Button } from '../../atoms/button/Button'

import { Card } from '../../atoms/card/Card'
import { getDialogIcon } from './helpers'

type ConfirmDialogProps = {
  status?: ChipStatus
  title: string
  description: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
  loading?: boolean
}

export const ConfirmDialog = ({
  status = ChipStatus.SUCCESS,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  loading = false,
}: ConfirmDialogProps) => {
  const pallete = getChipPallete(status)
  const icon = getDialogIcon(status)

  return (
    <Card width="520px" height="308px">
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
        {onCancel && (
          <Button variant="neutral" onClick={onCancel} fullWidth>
            {cancelLabel}
          </Button>
        )}
        {onConfirm && (
          <Button variant={pallete} onClick={onConfirm} loading={loading} fullWidth>
            {confirmLabel}
          </Button>
        )}
      </ButtonRow>
    </Card>
  )
}
