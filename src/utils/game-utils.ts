import type { Game, GameCategory } from '~/types/game';
import { games } from '~/config/games';

export const getGameById = (id: string): Game | undefined => {
  return games.find(game => game.id === id);
};

export const getGameByPath = (path: string): Game | undefined => {
  return games.find(game => game.path === path);
};

export const getGamesByCategory = (category: GameCategory): Game[] => {
  return games.filter(game => game.category === category);
};

export const getGamesByTag = (tag: string): Game[] => {
  return games.filter(game => game.tags.includes(tag));
};

export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.featured);
};

export const getRelatedGames = (currentGame: Game, limit = 3): Game[] => {
  // 首先通过类别匹配
  const sameCategory = games.filter(
    game => game.id !== currentGame.id && game.category === currentGame.category
  );

  // 然后通过标签匹配
  const sameTags = games.filter(
    game => 
      game.id !== currentGame.id && 
      game.tags.some(tag => currentGame.tags.includes(tag))
  );

  // 合并结果并去重
  const related = Array.from(new Set([...sameCategory, ...sameTags]));
  
  // 返回指定数量的游戏
  return related.slice(0, limit);
};

export const getGamesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Game[] => {
  return games.filter(game => game.metadata?.difficulty === difficulty);
};
