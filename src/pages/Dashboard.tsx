import { Chip } from '../components/atoms/chip/Chip'

export const Dashboard = () => {
  const variants = ['low', 'medium', 'high', 'inProgress', 'done'] as const
  const sizes = ['small', 'large'] as const
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {sizes.map(size => (
        <div key={size} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {variants.map(variant => (
            <Chip key={`${variant}-${size}`} variant={variant} size={size} />
          ))}
        </div>
      ))}
    </div>
  )
}
