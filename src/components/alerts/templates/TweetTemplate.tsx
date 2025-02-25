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
    <div className="border-b pb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="font-medium">{name}</span>
          <span className="text-gray-500 ml-2">{account}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{dateTime}</span>
          {saveEnabled && (
            <button className="text-sm text-blue-500 hover:text-blue-600">
              Save
            </button>
          )}
        </div>
      </div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};
