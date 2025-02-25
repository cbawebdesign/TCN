import React from 'react';
import { PressReleaseTemplate as PressReleaseTemplateType } from '../types';

interface Props extends PressReleaseTemplateType {}

export const PressReleaseTemplate: React.FC<Props> = ({
  dateTime,
  headline,
  url,
  saveEnabled = true,
}) => {
  return (
    <div className="border-b pb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">{dateTime}</span>
        {saveEnabled && (
          <button className="text-sm text-blue-500 hover:text-blue-600">
            Save
          </button>
        )}
      </div>
      <a
        href={url}
        className="text-blue-600 hover:text-blue-700 hover:underline"
      >
        {headline}
      </a>
    </div>
  );
};
