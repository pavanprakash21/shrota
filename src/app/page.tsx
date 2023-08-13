import { NavBar } from "@/components/Nav/NavBar";

export default async function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hi</h1>
      </main>
    </>
  );
}
