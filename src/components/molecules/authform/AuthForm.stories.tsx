import type { Meta, StoryObj } from '@storybook/react'
import { z } from 'zod'

import { LogoutIcon } from '../../../assets/icons/LogoutIcon'

import { AuthForm } from './AuthForm'

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
})

type LoginFormValues = z.infer<typeof loginSchema>

const meta: Meta<typeof AuthForm<LoginFormValues>> = {
  title: 'Components/Forms/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
    schema: {
      control: false,
    },
    onSubmit: {
      control: false,
    },
  },
}

export default meta

type Story = StoryObj<typeof AuthForm<LoginFormValues>>

export const Login: Story = {
  args: {
    schema: loginSchema,
    onSubmit: data => console.log('Login', data),
    icon: LogoutIcon,
    title: 'Log in',
    subtitle: 'Use your email to log in.',
    buttonLabel: 'Log in',
  },
}

export const Signup: Story = {
  args: {
    schema: signupSchema,
    onSubmit: data => console.log('Signup', data),
    icon: LogoutIcon,
    title: 'Sign up',
    subtitle: 'Create an account to get started with TimeTrove.',
    buttonLabel: 'Create account',
  },
}
