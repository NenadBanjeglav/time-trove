import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

const EclipseIcon: React.FC<Props> = props => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.6987 12.3178C18.8953 11.5783 19 10.8014 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C10.6267 19 11.2384 18.9359 11.829 18.814"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default EclipseIcon
