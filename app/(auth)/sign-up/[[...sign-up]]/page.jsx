import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-svh flex items-center justify-center p-4">
      <SignUp />
    </div>
  )
}