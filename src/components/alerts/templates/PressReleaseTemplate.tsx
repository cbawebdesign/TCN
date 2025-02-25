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
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center border-b pb-4">
      <span className="text-sm text-gray-500">{dateTime}</span>
      <a href={url} className="text-blue-600 hover:text-blue-700 hover:underline">
        {headline}
      </a>
      <button className="text-sm text-blue-500 hover:text-blue-600">
        {saveEnabled ? 'Save' : 'Unsave'}
      </button>
    </div>
  );
};
