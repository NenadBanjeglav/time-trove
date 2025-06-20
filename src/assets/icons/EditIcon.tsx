import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export const EditIcon: React.FC<Props> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.27981 19.3845L3 21.1429L4.75835 14.8631L16.2574 3.41987C16.3873 3.28696 16.5426 3.18135 16.7138 3.10924C16.8852 3.03714 17.0693 3 17.2552 3C17.441 3 17.6251 3.03714 17.7965 3.10924C17.9677 3.18135 18.123 3.28696 18.253 3.41987L20.723 5.90389C20.8538 6.03361 20.9576 6.18797 21.0285 6.35801C21.0994 6.52807 21.1358 6.71048 21.1358 6.8947C21.1358 7.07892 21.0994 7.26133 21.0285 7.43139C20.9576 7.60144 20.8538 7.75579 20.723 7.88551L9.27981 19.3845Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
