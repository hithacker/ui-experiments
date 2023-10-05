"use client";

import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Head>
        <title>UI Libraries Test</title>
        <meta name="description" content="Test all UI libraries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">UI Libraries Test</h1>
        <ul className="space-y-2">
          <li>
            <Link href="/headless" className="text-blue-500 hover:underline">
              Test Headless UI
            </Link>
          </li>
          <li>
            <Link href="/radix" className="text-blue-500 hover:underline">
              Test Radix UI
            </Link>
          </li>
          <li>
            <Link href="/aria" className="text-blue-500 hover:underline">
              Test Aria UI
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
