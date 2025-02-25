import React from 'react';
import { PressReleaseTemplate } from '../templates/PressReleaseTemplate';
import { TweetTemplate } from '../templates/TweetTemplate';
import { TradeExchangeTemplate } from '../templates/TradeExchangeTemplate';
import { FilingsTemplate } from '../templates/FilingsTemplate';

export const StockNewsWindow = () => {
  return (
    <div className="w-full max-w-6xl bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-wide">Stock News</h2>
      </div>
      <div className="space-y-4">
        <div className="transition duration-200 transform hover:scale-[1.01] hover:shadow-lg hover:rounded-lg hover:border-[2px] hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 p-4">
          <PressReleaseTemplate
            dateTime="2024-02-23 14:30"
            headline="Sample Press Release"
            url="#"
          />
        </div>
        <div className="transition duration-200 transform hover:scale-[1.01] hover:shadow-lg hover:rounded-lg hover:border-[2px] hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 p-4">
          <TweetTemplate
            dateTime="2024-02-23 14:30"
            name="John Doe"
            account="@johndoe"
            content="Sample tweet content"
          />
        </div>
        <div className="transition duration-200 transform hover:scale-[1.01] hover:shadow-lg hover:rounded-lg hover:border-[2px] hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 p-4">
          <TradeExchangeTemplate
            dateTime="2024-02-23 14:30"
            message="Sample trade message"
          />
        </div>
        <div className="transition duration-200 transform hover:scale-[1.01] hover:shadow-lg hover:rounded-lg hover:border-[2px] hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 p-4">
          <FilingsTemplate
            dateTime="2024-02-23 14:30"
            form="10-K"
            userNotes=""
          />
      </div>
    </div>
  );
};
