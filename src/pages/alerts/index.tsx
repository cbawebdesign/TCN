import React from 'react';
import { StockNewsWindow, AlertsWindow, CustomNoteLine, StockDataDisplay } from '~/components/alerts';

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-900">Alerts</h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-6 py-6 space-y-8">
              <StockDataDisplay />
              <StockNewsWindow />
              <AlertsWindow />
              <CustomNoteLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
