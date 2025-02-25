import React, { useState, useEffect } from 'react';
import RouteShellWithSidebar from '~/components/layouts/sidebar/RouteShellWithSidebar';
import { StockNewsWindow, AlertsWindow, CustomNoteLine, StockDataDisplay } from '~/components/alerts';

export default function AlertsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkMode ? "dark" : "light");
  }, []);

  return (
    <RouteShellWithSidebar
      title="Alerts"
      description="Monitor your stock alerts and notifications"
    >
      <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
        <div className="w-full max-w-6xl mx-auto bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-lg p-6">
          <div className="space-y-6">
            <StockDataDisplay />
            <StockNewsWindow />
            <AlertsWindow />
            <CustomNoteLine />
          </div>
        </div>
      </div>
    </RouteShellWithSidebar>
  );
}
