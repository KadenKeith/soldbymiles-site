"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900">
      {children}
    </div>
  );
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-8">{children}</div>;
}

function Button({
  children,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition border";
  const styles =
    variant === "outline"
      ? "bg-transparent border-neutral-700 text-neutral-100 hover:bg-neutral-900"
      : "bg-neutral-100 border-neutral-100 text-neutral-950 hover:bg-neutral-200";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Keith Miles
            <span className="block text-neutral-400 text-2xl mt-3">
              Luxury Real Estate · Orlando, Kissimmee, ChampionsGate, Davenport
            </span>
          </h1>

          <p className="text-neutral-400 mb-8 text-lg">
            High-intent buyer, seller, and investor representation built on strategy,
            leverage, and results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Get Home Value</Button>
            <Button variant="outline">Search Homes</Button>
          </div>

          <p className="text-xs text-neutral-500 mt-6">
            Call/Text: (407) 235-6746 · Keith@PropertiesInTown.com
          </p>
        </motion.div>
      </section>

      {/* Authority */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Why Work With Keith Miles
            </h2>
            <p className="text-neutral-400">
              A focused, aggressive approach built to protect leverage, maximize
              value, and move decisively in competitive Central Florida markets.
            </p>
          </div>

          <Card>
            <CardContent>
              <ul className="space-y-4 text-neutral-200">
                <li>• Strategic pricing & positioning</li>
                <li>• Strong negotiation backed by data</li>
                <li>• Buyer, seller & investor expertise</li>
                <li>• Orlando, Kissimmee, ChampionsGate, Davenport</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Contact</h2>
        <div className="grid md:grid-cols-3 gap-8 text-neutral-200">
          <div className="flex items-center gap-3">
            <Phone size={18} /> (407) 235-6746
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} /> Keith@PropertiesInTown.com
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} /> Orlando, FL
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Keith Miles Real Estate
      </footer>
    </div>
  );
}
