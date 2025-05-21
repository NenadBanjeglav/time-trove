import { useState } from 'react'
import { useSignMutation } from '../api/apiAuth'

export const Dashboard = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { signUpMutation, isSigningUp } = useSignMutation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signUpMutation(
      { username, password },
      {
        onSuccess: () => console.log('Success', username, password),
        onError: error => console.error('Signup failed:', error),
      }
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto' }}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
        />
        <button type="submit" disabled={isSigningUp}>
          {isSigningUp ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}
