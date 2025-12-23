import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen w-full bg-zinc-950 items-center justify-center">
      <SignUp />
    </div>
  );
}
