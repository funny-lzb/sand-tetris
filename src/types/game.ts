export type GameCategory = 'puzzle' | 'action' | 'arcade' | 'strategy' | 'creative';

export interface Game {
  id: string;
  name: string;
  path: string;
  description: string;
  category: GameCategory;
  tags: string[];
  thumbnailUrl?: string;
  alt: string;
  iframeUrl?: string;
  featured?: boolean;
  metadata?: {
    difficulty?: 'easy' | 'medium' | 'hard';
    estimatedTime?: string;
    multiplayer?: boolean;
    [key: string]: any;
  };
}
