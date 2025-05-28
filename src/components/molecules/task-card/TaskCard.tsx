import type { FC } from 'react'

import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { Chip } from '../../atoms/chip/Chip'
import { ChipSize } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Text } from '../../atoms/text/Text'

import { getStatusLabel, priorityColorMap, statusColorMap } from './helpers'
import { TaskStatus, type TaskCardProps } from './task.types'
import {
  ButtonWrapper,
  Footer,
  FullWidthCard,
  PriorityWrapper,
  TaskBody,
  TaskHeader,
} from './taskCard.styles'

export const TaskCard: FC<TaskCardProps> = ({ id, title, description, done, priority }) => {
  const status = done ? TaskStatus.DONE : TaskStatus.INPROGRESS
  return (
    <FullWidthCard>
      <TaskHeader>
        <Heading as="h3" fontSize="base" lineHeight="base" fontWeight="bold">
          {title}
        </Heading>
        <Chip
          status={statusColorMap[status]}
          size={ChipSize.LARGE}
          label={getStatusLabel(status)}
        />
      </TaskHeader>
      <TaskBody>
        <Text
          fontSize="small"
          color="hue300"
          lineHeight="small"
          fontWeight="regular"
          textAlign="start"
        >
          {description}
        </Text>
      </TaskBody>
      <Footer>
        <PriorityWrapper>
          <Text fontSize="small" lineHeight="small" fontWeight="bold">
            Priority
          </Text>
          <Chip status={priorityColorMap[priority]} size={ChipSize.SMALL} label={priority} />
        </PriorityWrapper>
        <ButtonWrapper>
          <Modal.Open opens={`Details ${id}`}>
            <IconButton shape="square" variant="neutral" icon={EditIcon} />
          </Modal.Open>
          <Modal.Open opens={`Delete ${id}`}>
            <IconButton shape="square" variant="danger" color="hue0" icon={DeleteIcon} />
          </Modal.Open>
        </ButtonWrapper>
      </Footer>
    </FullWidthCard>
  )
}
