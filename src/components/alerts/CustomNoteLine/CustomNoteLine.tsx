import { FC } from 'react';

export const CustomNoteLine: FC = () => {
  return (
    <div className="flex items-center space-x-2 border rounded-lg p-4">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded-lg"
        placeholder="Enter note..."
      />
      <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
        5
      </div>
    </div>
  );
};
