"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <section className="bg-white text-center py-20 px-4">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Websites That Work for Your Business
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We create fast, clean websites that help small businesses grow. No
          hassle. Just results.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Get a Free Quote
        </motion.a>
      </section>
    </div>
  );
}
