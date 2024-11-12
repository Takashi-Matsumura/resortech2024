"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const token1 = process.env.NEXT_PUBLIC_EMBED_TOKEN1;
    const token2 = process.env.NEXT_PUBLIC_EMBED_TOKEN2;
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

    if (baseurl) {
      if (token1) {
        const script1 = document.createElement("script");
        script1.src = "/scripts/embed.difyL.js";
        script1.defer = true;
        script1.dataset.token = token1;
        script1.dataset.baseurl = baseurl;
        document.body.appendChild(script1);
      }

      if (token2) {
        const script2 = document.createElement("script");
        script2.src = "/scripts/embed.difyR.js";
        script2.defer = true;
        script2.dataset.token = token2;
        script2.dataset.baseurl = baseurl;
        document.body.appendChild(script2);
      }

      return () => {
        if (token1) {
          const script1 = document.querySelector(
            `script[src="/scripts/embed.difyL.js"]`
          );
          if (script1) {
            document.body.removeChild(script1);
          }
        }
        if (token2) {
          const script2 = document.querySelector(
            `script[src="/scripts/embed.difyR.js"]`
          );
          if (script2) {
            document.body.removeChild(script2);
          }
        }
      };
    }
  }, []);

  const imageVariants1 = {
    animate: {
      y: [0, -20, 20, 0],
      transition: {
        duration: 15, // アニメーションの持続時間を長く設定
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-10 row-start-2 items-center sm:items-start w-full h-full">
        <motion.div
          className="relative flex-1 h-full"
          variants={imageVariants1}
          animate="animate"
        >
          <Image
            src="/images/recruit.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-2xl border-2 border-blue-700"
          />
        </motion.div>
        <div className="relative flex-1 h-full">
          <Image
            src="/images/dify.jpg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-2xl border-2 border-blue-700"
          />
        </div>
      </main>
    </div>
  );
}
