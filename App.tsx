import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { TeachingThemes } from "./components/TeachingThemes";
import { LearningGrid } from "./components/LearningGrid";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <TeachingThemes />
        <LearningGrid />
      </main>
      <Footer />
    </div>
  );
}