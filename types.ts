export enum AspectRatio {
  SQUARE = '1:1',
  PORTRAIT = '9:16',
  LANDSCAPE = '16:9',
  FOUR_THREE = '4:3',
  THREE_FOUR = '3:4'
}

export type Mood = 'All' | 'Adventure' | 'Romantic' | 'Foodie' | 'Cultural' | 'Luxury' | 'Festive' | 'Nature';

export interface Activity {
  id: string;
  name: string;
  prompt: string;
  mood: Mood;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  bgImage: string;
  activities: Activity[];
}

export interface GeneratedAdventure {
  id: string;
  imageUrl: string;
  prompt: string;
  date: Date;
  location: string;
  activityName?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}