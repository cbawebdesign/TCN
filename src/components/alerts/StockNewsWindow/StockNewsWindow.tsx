import { FC } from 'react';
import {
  PressReleaseTemplate,
  TweetTemplate,
  TradeExchangeTemplate,
  FilingsTemplate
} from '../templates';

export const StockNewsWindow: FC = () => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Stock News Window</h2>
      <div className="space-y-4">
        <PressReleaseTemplate
          dateTime="2024-02-23 14:30"
          headline="Sample Press Release"
          url="#"
        />
        <TweetTemplate
          dateTime="2024-02-23 14:30"
          name="John Doe"
          account="@johndoe"
          content="Sample tweet content"
        />
        <TradeExchangeTemplate
          dateTime="2024-02-23 14:30"
          message="Sample trade message"
        />
        <FilingsTemplate
          dateTime="2024-02-23 14:30"
          form="10-K"
          userNotes=""
        />
      </div>
    </div>
  );
};
