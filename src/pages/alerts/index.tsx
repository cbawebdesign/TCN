import React, { FC } from 'react';
import RouteShell from '~/components/RouteShell';
import { StockNewsWindow, AlertsWindow, CustomNoteLine, StockDataDisplay } from '~/components/alerts';

const AlertsPage: FC = () => {
  return (
    <RouteShell title="Alerts">
      <div className="p-4 space-y-6">
        <StockDataDisplay />
        <StockNewsWindow />
        <AlertsWindow />
        <CustomNoteLine />
      </div>
    </RouteShell>
  );
};

export default AlertsPage;
