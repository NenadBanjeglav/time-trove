import { StyledCompactLogo, StyledFullLogo } from './logo.styles'

type LogoProps = {
  variant?: 'full' | 'small'
  width?: number
  height?: number
  alt?: string
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', width, height }) => {
  if (variant === 'small') {
    return <StyledCompactLogo width={width} height={height} alt="TimeTrove small logo" />
  }

  return <StyledFullLogo width={width} height={height} alt="TimeTrove Logo" />
}
