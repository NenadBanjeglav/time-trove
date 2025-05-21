import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export const UnitedKingdomFlagIcon: React.FC<Props> = props => (
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="#2E42A5" />
        <mask
          id="mask1"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="white" />
        </mask>
        <g mask="url(#mask1)">
          <mask
            id="mask2"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="32"
            height="24"
          >
            <rect width="32" height="24" fill="white" />
          </mask>
          <g mask="url(#mask2)">
            <path
              d="M-3.563 22.285L3.479 25.264L32.16 3.238L35.874 -1.188L28.344 -2.183L16.646 7.309L7.23 13.704L-3.563 22.285Z"
              fill="white"
            />
            <path
              d="M-2.599 24.372L0.989 26.1L34.541 -1.599H29.503L-2.599 24.372Z"
              fill="#F50100"
            />
            <path
              d="M35.563 22.285L28.521 25.264L-0.16 3.238L-3.874 -1.188L3.656 -2.183L15.354 7.309L24.77 13.704L35.563 22.285Z"
              fill="white"
            />
            <path
              d="M35.323 23.783L31.736 25.511L17.449 13.652L13.213 12.327L-4.231 -1.172H0.806L18.24 12.006L22.871 13.595L35.323 23.783Z"
              fill="#F50100"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.778 -2H12.222V8H-1.972V16H12.222V26H19.778V16H34.028V8H19.778V-2Z"
              fill="#F50100"
            />
            <path
              d="M12.222 -2V-4H10.222V-2H12.222ZM19.778 -2H21.778V-4H19.778V-2ZM12.222 8V10H14.222V8H12.222Z"
              fill="white"
            />
            <path
              d="M-1.972 8V6H-3.972V8H-1.972ZM-1.972 16H-3.972V18H-1.972V16ZM12.222 16H14.222V14H12.222V16Z"
              fill="white"
            />
            <path
              d="M12.222 26H10.222V28H12.222V26ZM19.778 26V28H21.778V26H19.778ZM19.778 16V14H17.778V16H19.778Z"
              fill="white"
            />
            <path
              d="M34.028 16V18H36.028V16H34.028ZM34.028 8H36.028V6H34.028V8ZM19.778 8H17.778V10H19.778V8Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="24" rx="4" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
