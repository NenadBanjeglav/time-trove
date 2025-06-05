import { RemoveIcon } from '../../../assets/icons/RemoveIcon'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'

import { iconMap, palleteMap } from './helpers'
import { CloseButton, Content, Message, ToastHeader, ToastWrapper } from './toast.styles'
import type { ToastProps } from './toast.types'

export const Toast = ({ type, title, message, onClose }: ToastProps) => {
  return (
    <ToastWrapper
      layout
      $type={type}
      initial={{ y: -30, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -20, scale: 0.9, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 24,
        mass: 0.9,
        opacity: { duration: 0.2 },
        scale: { duration: 0.25 },
      }}
    >
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
