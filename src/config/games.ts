interface GameMetadata {
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
}

export interface Game {
  id: string;
  name: string;
  path: string;
  description: string;
  category: string;
  tags: string[];
  thumbnailUrl: string;
  alt: string;
  metadata: GameMetadata;
  featured?: boolean;
}

export const games: Game[] = [
  {
    id: 'sand-tetris',
    name: 'Sand Tetris',
    path: '/',
    description: 'Classic tetris with realistic sand physics simulation',
    category: 'puzzle',
    tags: ['physics', 'tetris', 'puzzle'],
    featured: true,
    thumbnailUrl: '/images/games/sand-tetris.webp',
    alt: 'Sand Tetris - Physics based tetris game with realistic sand simulation',
    metadata: {
      difficulty: 'medium',
      estimatedTime: '5-10min'
    }
  },
  {
    id: 'chicken-run',
    name: 'Chicken Run',
    path: '/games/chicken-run',
    description: 'Help the chicken cross safely through obstacles',
    category: 'action',
    tags: ['arcade', 'action', 'casual'],
    thumbnailUrl: '/images/games/chicken-run.webp',
    alt: 'Chicken Run - Arcade game featuring a chicken avoiding obstacles',
    metadata: {
      difficulty: 'easy',
      estimatedTime: '2-5min'
    }
  },
  {
    id: 'mahjong-match',
    name: 'Mahjong Match',
    path: '/games/mahjong-match',
    description: 'Classic mahjong matching puzzle game',
    category: 'puzzle',
    tags: ['matching', 'puzzle', 'traditional'],
    thumbnailUrl: '/images/games/mahjong-match.webp',
    alt: 'Mahjong Match - Traditional tile matching puzzle game',
    metadata: {
      difficulty: 'medium',
      estimatedTime: '10-15min'
    }
  },
  {
    id: 'red-light-green-light',
    name: 'Red Light Green Light',
    path: '/games/red-light-green-light',
    description: 'Strategic stop and go challenge game',
    category: 'arcade',
    tags: ['reaction', 'timing', 'casual'],
    thumbnailUrl: '/images/games/red-light-green-light.webp',
    alt: 'Red Light Green Light - Strategic timing based arcade game',
    metadata: {
      difficulty: 'easy',
      estimatedTime: '3-5min'
    }
  },
  {
    id: 'room-sort',
    name: 'Room Sort',
    path: '/games/room-sort',
    description: 'Organize and sort rooms with strategy',
    category: 'strategy',
    tags: ['organization', 'puzzle', 'planning'],
    thumbnailUrl: '/images/games/room-sort.webp',
    alt: 'Room Sort - Strategic room organization puzzle game',
    metadata: {
      difficulty: 'medium',
      estimatedTime: '5-10min'
    }
  },
  {
    id: 'solitaire-winter',
    name: 'Winter Solitaire',
    path: '/games/solitaire-winter',
    description: 'Classic solitaire card game with a beautiful winter theme',
    category: 'cards',
    tags: ['cards', 'puzzle', 'winter'],
    thumbnailUrl: '/images/games/solitaire-winter.webp',
    alt: 'Winter Solitaire - Beautiful winter themed card game',
    metadata: {
      difficulty: 'medium',
      estimatedTime: '10-20min'
    }
  },
  {
    id: 'sprunki-coloring-book',
    name: 'Sprunki Coloring',
    path: '/games/sprunki-coloring-book',
    description: 'Creative music and coloring experience',
    category: 'creative',
    tags: ['music', 'coloring', 'creative'],
    thumbnailUrl: '/images/games/sprunki-coloring-book.webp',
    alt: 'Sprunki Coloring - Interactive music and coloring creative game',
    metadata: {
      difficulty: 'easy',
      estimatedTime: '5-15min'
    }
  }
];
