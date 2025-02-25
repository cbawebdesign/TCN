import React, { useState } from 'react';
import RouteShellWithSidebar from '~/components/layouts/sidebar/RouteShellWithSidebar';
import { AlertTrigger } from '~/components/dashboard/DashboardDemo';
import { StockNewsWindow, AlertsWindow, CustomNoteLine, StockDataDisplay } from '~/components/alerts';

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<AlertTrigger[]>([
    { time: "10:00 AM", alert: "Price Drop", alertName: "Alert 1", watchlist: "Watchlist A", message: "Price dropped", symbol: "AAPL" },
    { time: "11:00 AM", alert: "Price Rise", alertName: "Alert 2", watchlist: "Watchlist B", message: "Price rose", symbol: "MSFT" }
  ]);

  return (
    <RouteShellWithSidebar
      title="Alerts"
      description="Monitor your stock alerts and notifications"
    >
      <div className="space-y-6">
        <StockDataDisplay />
        <StockNewsWindow />
        <AlertsWindow alerts={alerts} />
        <CustomNoteLine />
      </div>
    </RouteShellWithSidebar>
  );
}
