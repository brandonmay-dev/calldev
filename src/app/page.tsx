import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, Show } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Show when="signed-out">
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </main>
  );
}
