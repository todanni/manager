import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Manager | ToDanni</title>
        <meta name="description" content="ToDanni Task Manager for optimising time and work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <div className="">
          <h1>Task Manager</h1>
          <h1>Scheduler</h1>
          <h1>Timer</h1>
        </div>
      </main>
    </>
  );
}