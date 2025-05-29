import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateTask, useEditTask, type Task } from '../../../api/apiTasks'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { Button } from '../../atoms/button/Button'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { InputField } from '../../atoms/input/Input'
import { Text } from '../../atoms/text/Text'
import { TextareaField } from '../../atoms/textarea/Textarea'
import { RadioGroup } from '../../molecules/radio-group/RadioGroup'
import { TaskPriority } from '../../molecules/task-card/task.types'

import {
  ErrorWrapper,
  Form,
  FormHeader,
  IconTextWrapper,
  IconWrapper,
  PriorityWrapper,
  ResponsiveFormWrapper,
  Section,
} from './taskForm.styles'

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.nativeEnum(TaskPriority, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    required_error: 'Priority is required',
  }),
})

export type TaskFormValues = z.infer<typeof taskSchema>

type TaskFormProps = {
  onClose?: () => void
  task?: Partial<Task>
}

export const TaskForm = ({ task, onClose }: TaskFormProps) => {
  const isEditSession = Boolean(task?.id)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: isEditSession
      ? {
          title: task?.title ?? '',
          description: task?.description ?? '',
          priority: task?.priority ?? undefined,
        }
      : {},
  })

  const { createTaskMutation, isCreating } = useCreateTask()
  const { editTaskMutation, isEditing } = useEditTask()

  const isWorking = isCreating || isEditing

  const onSubmit = (values: TaskFormValues) => {
    if (isEditSession && task?.id) {
      editTaskMutation(
        {
          id: task.id,
          values,
        },
        {
          onSuccess: () => {
            reset()
            onClose?.()
          },
        }
      )
    } else {
      createTaskMutation(
        {
          ...values,
          priority: values.priority as TaskPriority,
        },
        {
          onSuccess: () => {
            reset()
            onClose?.()
          },
        }
      )
    }
  }

  return (
    <ResponsiveFormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <IconTextWrapper>
            <IconWrapper>
              <Icon icon={EditIcon} pallete="neutral" color="hue200" />
            </IconWrapper>
            <Heading as="h2" fontWeight="bold" fontSize="large" lineHeight="large">
              {isEditSession ? 'Edit task' : 'Create task'}
            </Heading>
          </IconTextWrapper>

          <Text
            fontWeight="regular"
            fontSize="small"
            lineHeight="small"
            pallete="neutral"
            color="hue200"
          >
            {isEditSession ? '' : ' Please provide the required details to create the task.'}
          </Text>
        </FormHeader>

        <Section>
          <Heading as="h3" fontWeight="bold" fontSize="base" lineHeight="base" textAlign="start">
            Task details
          </Heading>

          <InputField label="Task title" {...register('title')} error={errors.title?.message} />
          <TextareaField
            label="Description"
            {...register('description')}
            error={errors.description?.message}
          />
        </Section>

        <PriorityWrapper>
          <Heading as="h3" fontWeight="bold" fontSize="base" lineHeight="base" textAlign="start">
            Priority
          </Heading>

          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <RadioGroup
                name={field.name}
                options={[
                  { label: 'Low', value: 'Low', status: ChipStatus.SUCCESS },
                  { label: 'Medium', value: 'Medium', status: ChipStatus.WARNING },
                  { label: 'High', value: 'High', status: ChipStatus.DANGER },
                ]}
                value={field.value}
                onChange={field.onChange}
                size={ChipSize.SMALL}
                error={!!errors.priority}
              />
            )}
          />

          <ErrorWrapper>
            <Text fontSize="xSmall" pallete="danger" color="hue200">
              {errors.priority?.message || '\u00A0'}
            </Text>
          </ErrorWrapper>
        </PriorityWrapper>

        <Button type="submit" loading={isWorking} fullWidth size="xlarge">
          {isEditSession ? 'Edit task' : 'Create task'}
        </Button>
      </Form>
    </ResponsiveFormWrapper>
  )
}
