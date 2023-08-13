import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ResetPassword } from "@/components/Auth/ResetPassword";
import { NavBar } from "@/components/Nav/NavBar";

export default async function ResetPasswordPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ResetPassword />
      </main>
    </>
  );
}
