import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export const GermanyFlagIcon: React.FC<Props> = props => (
  <svg
    width="32"
    height="24"
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <mask
        id="mask0"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 16H32V24H0V16Z" fill="#FFD018" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 8H32V16H0V8Z" fill="#E31D1C" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V8H0V0Z" fill="#272727" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="24" rx="4" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
