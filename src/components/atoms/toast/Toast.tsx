import { RemoveIcon } from '../../../assets/icons/RemoveIcon'
import { Heading } from '../heading/Heading'
import { Icon } from '../icon/Icon'

import { iconMap, palleteMap } from './helpers'
import { CloseButton, Content, Message, ToastHeader, ToastWrapper } from './toast.styles'
import type { ToastProps } from './toast.types'

export const Toast = ({ type, title, message, onClose }: ToastProps) => {
  return (
    <ToastWrapper $type={type}>
      <ToastHeader>
        <Icon icon={iconMap[type]} pallete={palleteMap[type]} iconSize="small" />
        <Content>
          <Heading
            pallete={palleteMap[type]}
            color="hue200"
            fontSize="base"
            fontWeight="bold"
            lineHeight="base"
          >
            {title}
          </Heading>
          <Message>{message}</Message>
        </Content>
        <CloseButton onClick={onClose}>
          <RemoveIcon />
        </CloseButton>
      </ToastHeader>
    </ToastWrapper>
  )
}
