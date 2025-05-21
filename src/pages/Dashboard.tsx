import { useToast } from '../contexts/useToast'

export const Dashboard = () => {
  const { addToast } = useToast()

  return (
    <div style={{ padding: '2rem' }}>
      <button
        onClick={() =>
          addToast({
            type: 'success',
            title: 'Saved!',
            message: 'Your data was successfully saved.',
          })
        }
      >
        Show Success Toast
      </button>
    </div>
  )
}
