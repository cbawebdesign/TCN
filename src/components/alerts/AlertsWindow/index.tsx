import React from 'react';

interface AlertData {
  time: string;
  alert: string;
  watchlist: string;
  symbol: string;
  message: string;
}

const mockAlerts: AlertData[] = [
  { time: "10:00 AM", alert: "Price Drop", watchlist: "Watchlist A", message: "Price dropped", symbol: "AAPL" },
  { time: "11:00 AM", alert: "Price Rise", watchlist: "Watchlist B", message: "Price rose", symbol: "MSFT" }
];

export const AlertsWindow = () => {
  return (
    <div className="w-full max-w-6xl bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-wide">Alerts</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Time</th>
              <th className="px-6 py-3 text-left">Alert</th>
              <th className="px-6 py-3 text-left">Watchlist</th>
              <th className="px-6 py-3 text-left">Symbol</th>
              <th className="px-6 py-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {mockAlerts.map((alert, index) => (
              <tr
                key={index}
                className="transition duration-200 transform hover:scale-[1.01] hover:shadow-lg hover:rounded-lg hover:border-[2px] hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500"
              >
                <td className="px-6 py-3 font-medium">{alert.time}</td>
                <td className="px-6 py-3">{alert.alert}</td>
                <td className="px-6 py-3">{alert.watchlist}</td>
                <td className="px-6 py-3">{alert.symbol}</td>
                <td className="px-6 py-3">{alert.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
