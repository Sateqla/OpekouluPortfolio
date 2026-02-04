import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-white tracking-tight">Teacher Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">About</a>
            <a href="#timeline" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Journey</a>
            <a href="#themes" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Themes</a>
            <a href="#learnings" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Learning Log</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
