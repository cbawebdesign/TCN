import React from 'react';
import { TradeExchangeTemplate as TradeExchangeTemplateType } from '../types';

interface Props extends TradeExchangeTemplateType {}

export const TradeExchangeTemplate: React.FC<Props> = ({
  dateTime,
  message,
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
      <p className="text-gray-800">{message}</p>
    </div>
  );
};
