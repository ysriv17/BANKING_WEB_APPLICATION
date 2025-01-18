import { SignIn, useUser, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
export default function Home() {
  // const { user , isSignedIn , isLoaded} = useUser();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-[#2E2A47] text-[40px]">
            Welcome Back !!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get ack to your dashbaord
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/signin" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className=" h-full bg-blue-600 hidden lg:flex items-center justify-center">
         logo
      </div>
    </div>
  );
}
