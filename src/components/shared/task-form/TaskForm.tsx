import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { EditIcon } from '../../../assets/icons/EditIcon'
import { Button } from '../../atoms/button/Button'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { InputField } from '../../atoms/input/Input'
import { Text } from '../../atoms/text/Text'
import { TextareaField } from '../../atoms/textarea/Textarea'
import { RadioGroup } from '../../molecules/radio-group/RadioGroup'

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
import type { Task } from '../../../api/apiTasks'

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Priority is required',
  }),
})

export type TaskFormValues = z.infer<typeof taskSchema>

type TaskFormProps = {
  task?: Task
  onClose?: () => void
}

export const TaskForm = ({ task, onClose }: TaskFormProps) => {
  const id = task?.id
  const values = task ? { ...task } : {}
  const isEditSession = Boolean(id)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TaskFormValues>({
    defaultValues: values,
    resolver: zodResolver(taskSchema),
  })

  const onSubmit = () => console.log('submit')

  return (
    <ResponsiveFormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <IconTextWrapper>
            <IconWrapper>
              <Icon icon={EditIcon} pallete="neutral" color="hue200" />
            </IconWrapper>
            <Heading as="h2" fontWeight="bold" fontSize="large" lineHeight="large">
              Create task
            </Heading>
          </IconTextWrapper>

          <Text
            fontWeight="regular"
            fontSize="small"
            lineHeight="small"
            pallete="neutral"
            color="hue200"
          >
            Please provide the required details to create the task.
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
                  { label: 'Low', value: 'low', status: ChipStatus.SUCCESS },
                  { label: 'Medium', value: 'medium', status: ChipStatus.WARNING },
                  { label: 'High', value: 'high', status: ChipStatus.DANGER },
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

        <Button type="submit" loading={false} fullWidth size="xlarge">
          Create task
        </Button>
      </Form>
    </ResponsiveFormWrapper>
  )
}
