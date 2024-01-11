import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl ">Bankmonitor Pet Frontend</h1>

        <p>There is only one route implemented:</p><Link className="text-sky-400" href='/pet/123456'>/pet/123456</Link>

      </div>
    </main>
  )
}
