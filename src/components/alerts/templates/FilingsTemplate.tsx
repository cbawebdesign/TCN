import React from 'react';
import { FilingsTemplate as FilingsTemplateType } from '../types';

interface Props extends FilingsTemplateType {}

export const FilingsTemplate: React.FC<Props> = ({
  dateTime,
  form,
  userNotes,
  saveEnabled = true,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center border-b pb-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">{dateTime}</span>
        <span className="font-medium">{form}</span>
      </div>
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="Add notes..."
        value={userNotes}
        readOnly
      />
      <button className="text-sm text-blue-500 hover:text-blue-600">
        {saveEnabled ? 'Save' : 'Unsave'}
      </button>
    </div>
  );
};
