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
    <div className="border rounded-lg p-4">
      <DataTable data={mockData} columns={columns} />
    </div>
  );
};
