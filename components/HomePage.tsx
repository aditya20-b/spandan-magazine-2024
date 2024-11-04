"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

export function HomePage() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "home/jipmerspandan-04112024-0001.jpeg",
    "home/jipmerspandan-04112024-0010.jpeg",
    "home/jipmerspandan-04112024-0011.jpeg",
    "home/Spandan-small-logo.png",
    "home/jipmerspandan-04112024-0027.jpeg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-red-50 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <img
            src={images[currentImageIndex]}
            alt="Spandan Background"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
          className="relative mb-12"
        >
          <img
            src="home/Spandan-small-logo.png"
            alt="JIPMER SPANDAN - Beyond the Veil"
            className="w-full max-w-2xl mx-auto"
          />
        </motion.div>

        <motion.p
          className="text-lg mb-8 text-red-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          A weeklong spectacle where reality and mystery intertwine, where
          excitement and thrill take center stage, and where medicos from all
          over the country come together for South India&apos;s biggest medical
          college fest. Enter the unknown on the 4th of November, and unravel
          the enigma on November 9th.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-xl font-semibold text-red-400">
            Experience the Excitement:
          </p>
          <ul className="list-none text-left space-y-2">
            {[
              "Les Jeux",
              "Les Beaux-Arts",
              "Les Litteraires",
              "La Lutte",
              "House Informals",
            ].map((item, index) => (
              <motion.li
                key={item}
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
              >
                <span className="text-red-500 mr-2">&#9733;</span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          className="text-xl font-semibold mt-6 mb-4 text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          Don&apos;t miss our captivating highlights:
        </motion.p>
        <motion.ul
          className="list-none text-left mb-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {["Pro Shows", "Spandan's iconic ramp walk, the Dernier Cri"].map(
            (item, index) => (
              <motion.li
                key={item}
                className="flex items-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 + index * 0.2, duration: 0.5 }}
              >
                <span className="text-red-500 mr-2">&#9734;</span> {item}
              </motion.li>
            )
          )}
        </motion.ul>

        <motion.p
          className="text-lg mb-8 text-red-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          Join us as we go &apos;Beyond the Veil&apos; and create unforgettable memories.
          After all, it&apos;s the thrill of discovery that makes the journey
          special.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.3 }}
          className="space-y-8"
        >
          <Button
            onClick={() => router.push("/magazine")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transform transition-transform duration-200 hover:scale-105"
          >
            Explore Spandan Magazine
          </Button>

          <div className="text-sm text-red-400/80 space-y-2">
            <p>Presented by the Literary and Debating Committee</p>
            <a
              href="https://github.com/aditya20-b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400/60 hover:text-red-400 transition-colors"
            >
              Developed with ❤️ by Aditya B<Github className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
