import { FC } from 'react';
import RouteShell from '~/components/RouteShell';
import { StockNewsWindow, AlertsWindow, CustomNoteLine } from '~/components/alerts';

const AlertsPage: FC = () => {
  return (
    <RouteShell title="Alerts">
      <div className="p-4 space-y-6">
        <StockNewsWindow />
        <AlertsWindow />

        <CustomNoteLine />
      </div>
    </RouteShell>
  );
};

export default AlertsPage;
