export interface BaseTemplate {
  dateTime: string;
  saveEnabled?: boolean;
}

export interface PressReleaseTemplate extends BaseTemplate {
  headline: string;
  url: string;
  companyTitle?: string;
  symbol?: string;
}

export interface TweetTemplate extends BaseTemplate {
  name: string;
  account: string;
  content: string;
}

export interface TradeExchangeTemplate extends BaseTemplate {
  message: string;
}

export interface FilingsTemplate extends BaseTemplate {
  form: string;
  userNotes: string;
}

export interface AlertsWindowTemplate extends PressReleaseTemplate {
  message: string;
  flagEnabled?: boolean;
  tagEnabled?: boolean;
  deleteEnabled?: boolean;
}
