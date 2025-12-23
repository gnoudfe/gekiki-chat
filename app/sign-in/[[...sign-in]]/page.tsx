import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full bg-zinc-950 items-center justify-center">
      <SignIn forceRedirectUrl="/" />
    </div>
  )
}