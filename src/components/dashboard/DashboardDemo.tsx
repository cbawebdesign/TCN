import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import LogoImage from '~/core/ui/Logo/LogoImage';

export interface AlertTrigger {
    time: string;
    alert: string;
    alertName: string;
    watchlist: string;
    message: string;
    symbol: string;
}

export default function DashboardDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkMode ? "dark" : "light");
  }, []);

  return (
    <div
      className={`relative min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
            : "bg-gradient-to-br from-blue-50 via-blue-100 to-purple-200"
        } z-0`}
        style={{
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Dashboard Content */}
      <div className="relative z-10 flex flex-col items-center p-6 space-y-6">
        {/* Logo and Header */}
        <LogoImage style={{ width: "160px", height: "100px" }} />
        <h1 className="text-4xl font-extrabold tracking-tight text-center">
          Welcome to your Trade Companion Dashboard
        </h1>
        <p className="text-center max-w-prose text-lg italic">
          Monitor your trading activity below.
        </p>

        {/* Dashboard content will be added here */}

        <Link href="/anotherPage">
          <a className="text-blue-500 hover:underline">Go to another page</a>
        </Link>
      </div>
    </div>
  );
}
