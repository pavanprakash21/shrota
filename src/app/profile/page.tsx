import { NavBar } from "@/components/Nav/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  type GetUserResponse = {
    data: {
      user: User | null;
    };
  };

  const response: GetUserResponse = await supabase.auth.getUser();

  const user = response.data.user;

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Details of the user</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex">
              <p className="text-sm font-medium">Email:&nbsp;</p>
              <p className="text-sm">{user?.email}</p>
            </div>
            <div className="flex mb-2">
              <p className="text-sm font-medium">Last signed in at:&nbsp;</p>
              <p className="text-sm">{user.last_sign_in_at}</p>
            </div>

            <Card className="p-3">
              <pre className="text-xs">
                <code className="highlight">
                  {JSON.stringify(user, null, 2)}
                </code>
              </pre>
            </Card>
          </CardContent>
          <CardFooter>Enjoy</CardFooter>
        </Card>
      </main>
    </>
  );
}
