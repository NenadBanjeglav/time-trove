import type { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import { zodResolver } from '@hookform/resolvers/zod'
import type { TFunction } from 'i18next'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { useCreateTask } from '../../../api/apiTasks'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'
import { InputField } from '../../atoms/input/Input'
import { Text } from '../../atoms/text/Text'
import { TextareaField } from '../../atoms/textarea/Textarea'
import { RadioGroup } from '../../molecules/radio-group/RadioGroup'
import { TaskPriority } from '../../molecules/task-card/task.types'
import { TaskFormShell } from '../task-form-shell/TaskFormShell'
import { ErrorWrapper, PriorityWrapper } from '../task-form-shell/taskFormShell.styles'

type CreateTaskFormProps = {
  onChange?: () => void
  onReset?: () => void
}

const getSchema = (t: TFunction) =>
  z.object({
    title: z.string().min(1, t(T.TASK_FORM.TITLE_REQUIRED)),
    description: z.string().min(1, t(T.TASK_FORM.DESCRIPTION_REQUIRED)),
    priority: z.nativeEnum(TaskPriority, {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      required_error: t(T.TASK_FORM.PRIORITY_REQUIRED),
    }),
  })

export type CreateTaskFormValues = z.infer<typeof schema>

export const CreateTaskForm = ({ onChange, onReset }: CreateTaskFormProps) => {
  const { t } = useTranslation()
  const schema = getSchema(t)

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
      title={t(T.TASK_FORM.CREATE_TITLE)}
      description={t(T.TASK_FORM.CREATE_DESCRIPTION)}
      buttonLabel={t(T.TASK_FORM.CREATE_BUTTON)}
      isSubmitting={isCreating}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label={t(T.TASK_FORM.TITLE_LABEL)}
        {...register('title', {
          onChange: () => onChange?.(),
        })}
        error={errors.title?.message}
      />
      <TextareaField
        label={t(T.TASK_FORM.DESCRIPTION_LABEL)}
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
                {
                  label: t(T.TASK_FORM.PRIORITY.LOW),
                  value: TaskPriority.LOW,
                  status: ChipStatus.SUCCESS,
                },
                {
                  label: t(T.TASK_FORM.PRIORITY.MEDIUM),
                  value: TaskPriority.MEDIUM,
                  status: ChipStatus.WARNING,
                },
                {
                  label: t(T.TASK_FORM.PRIORITY.HIGH),
                  value: TaskPriority.HIGH,
                  status: ChipStatus.DANGER,
                },
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
