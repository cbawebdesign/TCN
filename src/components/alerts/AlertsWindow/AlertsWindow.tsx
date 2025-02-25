import { FC } from 'react';
import { PressReleaseTemplate } from '../templates';

export const AlertsWindow: FC = () => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Alerts Window</h2>
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <PressReleaseTemplate
            key={index}
            dateTime="2024-02-23 14:30"
            headline="Sample Alert"
            url="#"
            companyTitle="Company Name"
            symbol="SYMB"
          />
        ))}
      </div>
    </div>
  );
};
