import { FC } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '~/core/ui/DataTable';

interface StockData {
  symbol: string;
  percentageChange: number;
  lastPrice: number;
}

const mockData: StockData[] = [
  { symbol: 'MSTR', percentageChange: 5.9, lastPrice: 362.37 },
  { symbol: 'RGTI', percentageChange: 21.5, lastPrice: 10.87 }
];

const columns: ColumnDef<StockData>[] = [
  { 
    header: 'Symb',
    accessorKey: 'symbol',
    cell: (info) => info.getValue()
  },
  {
    header: '% Ch',
    accessorKey: 'percentageChange',
    cell: (info) => {
      const value = info.getValue() as number;
      return `${value}%`;
    }
  },
  {
    header: 'Last',
    accessorKey: 'lastPrice',
    cell: (info) => {
      const value = info.getValue() as number;
      return value.toFixed(2);
    }
  }
];

export const StockDataDisplay: FC = () => {
  return (
    <div className="w-full max-w-6xl bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-wide">Stock Data</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="w-full border-collapse [&_tr:hover]:scale-[1.01] [&_tr:hover]:shadow-lg [&_tr:hover]:rounded-lg [&_tr:hover]:border-[2px] [&_tr:hover]:border-transparent [&_tr:hover]:bg-gradient-to-r [&_tr:hover]:from-blue-500 [&_tr:hover]:via-cyan-500 [&_tr:hover]:to-purple-500 transition-all duration-200">
          <DataTable 
            data={mockData} 
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};
