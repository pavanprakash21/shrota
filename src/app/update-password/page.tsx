import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UpdatePassword } from "@/components/Auth/UpdatePassword";
import { NavBar } from "@/components/Nav/NavBar";

export default async function UpdatePasswordPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <UpdatePassword />
      </main>
    </>
  );
}
