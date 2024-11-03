import { LucideProps, User } from 'lucide-react'

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 32 32" width="32" height="32">
      <path
        d="M0 0 C10.56 0 21.12 0 32 0 C32 10.56 32 21.12 32 32 C21.44 32 10.88 32 0 32 C0 21.44 0 10.88 0 0 Z"
        fill="#070809"
        transform="translate(0,0)"
      />
      <path
        d="M0 0 C4.62 0 9.24 0 14 0 C14 1.98 14 3.96 14 6 C12.68 6 11.36 6 10 6 C10 7.65 10 9.3 10 11 C9.34 11 8.68 11 8 11 C8 8.69 8 6.38 8 4 C9.65 4 11.3 4 13 4 C13 3.34 13 2.68 13 2 C9.04 2 5.08 2 1 2 C0.67 2.66 0.34 3.32 0 4 C0 2.68 0 1.36 0 0 Z"
        fill="#1D4DB8"
        transform="translate(9,8)"
      />
    </svg>
  ),
}
