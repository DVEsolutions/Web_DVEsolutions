export interface ChatMessage {
  text: string;
  isBot: boolean;
}

export interface ChatLabels {
  messages: ChatMessage[];
  badge: string;
  businessName?: string;
  accentColor?: string;
}
