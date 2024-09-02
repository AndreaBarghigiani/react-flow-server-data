import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-medium mb-8">Minimun React Flow Example</h1>

      <Link href="/company/1" className="text-blue-500 hover:underline">
        Check company
      </Link>
    </main>
  );
}
