"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductList from "@/components/ProductList";
import CTASection from "@/components/CTASection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <Features />
      <CTASection />
    </main>
  );
}
