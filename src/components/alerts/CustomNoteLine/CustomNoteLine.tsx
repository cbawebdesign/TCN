import React, { FC, useState } from 'react';

export const CustomNoteLine: FC = () => {
  const [count, setCount] = useState(5);
  const [note, setNote] = useState('');

  return (
    <div className="flex items-center space-x-4 border rounded-lg p-4">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter note..."
      />
      <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 font-medium">
        {count}
      </div>
    </div>
  );
};
