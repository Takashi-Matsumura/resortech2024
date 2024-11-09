"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_EMBED_TOKEN;
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

    if (token && baseurl) {
      const script = document.createElement("script");
      script.src = "/scripts/embed.min.js?token=${token}&baseurl=${baseurl}";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to Next.js!</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
        <div>footer</div>
      </footer>
    </div>
  );
}
