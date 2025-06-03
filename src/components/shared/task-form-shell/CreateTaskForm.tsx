import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateTask } from '../../../api/apiTasks'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { InputField } from '../../atoms/input/Input'
import { Text } from '../../atoms/text/Text'
import { TextareaField } from '../../atoms/textarea/Textarea'
import { RadioGroup } from '../../molecules/radio-group/RadioGroup'
import { TaskPriority } from '../../molecules/task-card/task.types'
import { TaskFormShell } from '../task-form-shell/TaskFormShell'
import { ErrorWrapper, PriorityWrapper } from '../task-form-shell/taskFormShell.styles'

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.nativeEnum(TaskPriority, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    required_error: 'Priority is required',
  }),
})

type CreateTaskFormProps = {
  onChange?: () => void
  onReset?: () => void
}

export type CreateTaskFormValues = z.infer<typeof schema>

export const CreateTaskForm = ({ onChange, onReset }: CreateTaskFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateTaskFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      priority: undefined,
    },
  })

  const { createTaskMutation, isCreating } = useCreateTask()

  const onSubmit = (values: CreateTaskFormValues) => {
    createTaskMutation(values, {
      onSuccess: () => {
        reset()
        onReset?.()
      },
    })
  }

  return (
    <TaskFormShell
      title="Create task"
      description="Please provide the required details to create the task."
      buttonLabel="Create task"
      isSubmitting={isCreating}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="Task title"
        {...register('title', {
          onChange: () => onChange?.(),
        })}
        error={errors.title?.message}
      />
      <TextareaField
        label="Description"
        {...register('description', {
          onChange: () => onChange?.(),
        })}
        error={errors.description?.message}
      />

      <PriorityWrapper>
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
              onChange={value => {
                field.onChange(value)
                onChange?.()
              }}
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
    </TaskFormShell>
  )
}
