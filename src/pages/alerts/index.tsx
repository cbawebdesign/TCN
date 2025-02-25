import React, { useState, useEffect, Suspense } from 'react';
import RouteShellWithSidebar from '~/components/layouts/sidebar/RouteShellWithSidebar';
import { StockNewsWindow, AlertsWindow, CustomNoteLine, StockDataDisplay } from '~/components/alerts';

function LoadingFallback() {
  return <div className="p-4">Loading...</div>;
}

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
      <Suspense fallback={<LoadingFallback />}>
        <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
          <div className="w-full max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <StockDataDisplay />
              <StockNewsWindow />
            </div>
            <div className="grid grid-cols-1 gap-8">
              <AlertsWindow />
              <CustomNoteLine />
            </div>
          </div>
        </div>
      </Suspense>
    </RouteShellWithSidebar>
  );
}
