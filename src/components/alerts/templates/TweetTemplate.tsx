import React from 'react';
import { TweetTemplate as TweetTemplateType } from '../types';

interface Props extends TweetTemplateType {}

export const TweetTemplate: React.FC<Props> = ({
  dateTime,
  name,
  account,
  content,
  saveEnabled = true,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center border-b pb-4">
      <div className="flex items-center space-x-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">{account}</span>
      </div>
      <span className="text-sm text-gray-500">{dateTime}</span>
      <button className="text-sm text-blue-500 hover:text-blue-600">
        {saveEnabled ? 'Save' : 'Unsave'}
      </button>
      <div className="col-span-3">
        <p className="text-gray-800">{content}</p>
      </div>
    </div>
  );
};
