import React from 'react';
import { TradeExchangeTemplate as TradeExchangeTemplateType } from '../types';

interface Props extends TradeExchangeTemplateType {}

export const TradeExchangeTemplate: React.FC<Props> = ({
  dateTime,
  message,
  saveEnabled = true,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center border-b pb-4">
      <span className="text-sm text-gray-500">{dateTime}</span>
      <p className="text-gray-800">{message}</p>
      <button className="text-sm text-blue-500 hover:text-blue-600">
        {saveEnabled ? 'Save' : 'Unsave'}
      </button>
    </div>
  );
};
