export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo",
  GPT_4_O_MINI = "gpt-4o-mini",
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";
