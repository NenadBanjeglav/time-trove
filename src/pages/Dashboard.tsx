import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { Button } from '../components/atoms/button/Button'
import { Icon } from '../components/atoms/icon/Icon'
import { InputField } from '../components/atoms/input/Input'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormValues = z.infer<typeof schema>

export const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    console.log('Logging in with:', data)
    // TODO: login
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          maxWidth: 400,
          margin: '0 auto',
          padding: 32,
          borderRadius: 16,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Icon icon={LogoutIcon} pallete="neutral" iconSize="large" />
          <h2 style={{ margin: 0 }}>Log in</h2>
          <p style={{ fontSize: 14, color: '#888' }}>
            Use your email to log in to your TimeTrove Dashboard.
          </p>
        </div>

        <InputField
          label="Email"
          type="email"
          {...register('email')}
          name="email"
          error={errors.email?.message}
        />

        <InputField
          label="Password"
          type="password"
          {...register('password')}
          name="password"
          error={errors.password?.message}
        />

        <Button type="submit" size="large" disabled={isSubmitting} fullWidth>
          Log in
        </Button>
      </form>
    </div>
  )
}
