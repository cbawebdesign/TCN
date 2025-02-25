import { FC } from 'react';
import { AlertTrigger } from '~/components/dashboard/DashboardDemo';
import { PressReleaseTemplate } from '../templates';

interface Props {
  alerts: AlertTrigger[];
}

export const AlertsWindow: FC<Props> = ({ alerts }) => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Alerts Window</h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <PressReleaseTemplate
            key={index}
            dateTime={alert.time}
            headline={alert.alert}
            url="#"
            companyTitle={alert.watchlist}
            symbol={alert.symbol}
          />
        ))}
      </div>
    </div>
  );
};
