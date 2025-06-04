import { RemoveIcon } from '../../../assets/icons/RemoveIcon'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'

import { iconMap, palleteMap } from './helpers'
import {
  AnimatedToastWrapper,
  CloseButton,
  Content,
  Message,
  ToastHeader,
  ToastWrapper,
} from './toast.styles'
import type { ToastProps } from './toast.types'

export const Toast = ({ type, title, message, onClose }: ToastProps) => {
  return (
    <AnimatedToastWrapper
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        opacity: { duration: 0.2 },
      }}
    >
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
    </AnimatedToastWrapper>
  )
}
