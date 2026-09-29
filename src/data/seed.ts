import { AppState, CategoryType, Difficulty, Quest, Reward, Routine, JourneyRegion } from '../types';

const today = new Date().toISOString();

const starterQuests: Quest[] = [
  {
    id: 'quest-water',
    name: 'Drink water',
    description: 'Hydrate and reset your energy.',
    type: 'daily',
    category: 'Health',
    difficulty: 'easy',
    xpReward: 20,
    coinReward: 8,
    progress: 0,
    target: 1,
    status: 'active',
    repeat: 'daily',
    timeEstimate: 2,
    subtasks: ['Fill water bottle', 'Drink 2 glasses'],
    notes: 'Small but important.
',
    createdAt: today,
  },
  {
    id: 'quest-walk',
    name: 'Take a 10 minute walk',
    description: 'Get moving and clear your head.',
    type: 'daily',
    category: 'Health',
    difficulty: 'moderate',
    xpReward: 35,
    coinReward: 12,
    progress: 0,
    target: 1,
    status: 'active',
    repeat: 'daily',
    timeEstimate: 10,
    subtasks: ['Step outside', 'Walk without phone'],
    notes: 'Walk and breathe deeply.',
    createdAt: today,
  },
  {
    id: 'quest-read',
    name: 'Read 10 pages',
    description: 'Build momentum in your learning.',
    type: 'quick',
    category: 'Learning',
    difficulty: 'easy',
    xpReward: 28,
    coinReward: 10,
    progress: 0,
    target: 1,
    status: 'active',
    repeat: 'daily',
    timeEstimate: 15,
    subtasks: ['Open your book', 'Read 10 pages'],
    notes: 'Keep the learning streak alive.',
    createdAt: today,
  },
  {
    id: 'quest-room',
    name: 'Tidy one zone',
    description: 'Reset your environment for calm focus.',
    type: 'weekly',
    category: 'Home',
    difficulty: 'moderate',
    xpReward: 45,
    coinReward: 18,
    progress: 0,
    target: 1,
    status: 'active',
    repeat: 'weekly',
    timeEstimate: 12,
    subtasks: ['Choose one area', 'Clear clutter', 'Put things away'],
    notes: 'Small wins matter.',
    createdAt: today,
  },
];

const starterRewards: Reward[] = [
  {
    id: 'reward-coffee',
    name: 'Coffee break',
    description: 'Treat yourself to a well-earned coffee.',
    price: 50,
    category: 'Lifestyle',
    redeemedCount: 0,
    createdAt: today,
  },
  {
    id: 'reward-gaming',
    name: 'Gaming time',
    description: 'A guilt-free gaming session.',
    price: 150,
    category: 'Leisure',
    redeemedCount: 0,
    createdAt: today,
  },
  {
    id: 'reward-movie',
    name: 'Movie night',
    description: 'Set aside time for a favorite film.',
    price: 250,
    category: 'Leisure',
    redeemedCount: 0,
    createdAt: today,
  },
];

const starterRoutines: Routine[] = [
  {
    id: 'routine-morning',
    name: 'Morning Quest',
    category: 'Health',
    description: 'A focused start to the day.',
    xpReward: 80,
    color: '#8b5cf6',
    createdAt: today,
    steps: [
      { id: 'm1', text: 'Wake up', done: false },
      { id: 'm2', text: 'Drink water', done: false },
      { id: 'm3', text: 'Shower', done: false },
      { id: 'm4', text: 'Get dressed', done: false },
      { id: 'm5', text: 'Eat breakfast', done: false },
      { id: 'm6', text: 'Check today\'s quests', done: false },
    ],
  },
  {
    id: 'routine-evening',
    name: 'Evening Reset',
    category: 'Home',
    description: 'Wind down and prepare for tomorrow.',
    xpReward: 70,
    color: '#f59e0b',
    createdAt: today,
    steps: [
      { id: 'e1', text: 'Tidy desk', done: false },
      { id: 'e2', text: 'Set out tomorrow\'s clothes', done: false },
      { id: 'e3', text: 'Plan next steps', done: false },
      { id: 'e4', text: 'Screen-free wind-down', done: false },
    ],
  },
];

const starterRegions: JourneyRegion[] = [
  { id: 'region-start', name: 'Starting Point', description: 'Your beginning', unlocked: true, progress: 100, icon: '🌱' },
  { id: 'region-forest', name: 'Habit Forest', description: 'Build small wins', unlocked: true, progress: 65, icon: '🌲' },
  { id: 'region-mountain', name: 'Challenge Mountains', description: 'Push through hard goals', unlocked: false, progress: 25, icon: '🏔️' },
  { id: 'region-castle', name: 'Achievement Castle', description: 'Celebrate victories', unlocked: false, progress: 0, icon: '🏰' },
  { id: 'region-outer', name: 'Mastery Realm', description: 'Ultimate progression', unlocked: false, progress: 0, icon: '🌌' },
];

export const initialState: AppState = {
  profile: {
    name: 'Avery',
    avatar: '🧙',
    title: 'Pathfinder',
    theme: 'system',
    focusAreas: ['Health', 'Learning', 'Work'],
    availableTime: '30 min',
    firstGoal: 'Build a calm, consistent daily rhythm.',
    createdAt: today,
  },
  quests: starterQuests,
  rewards: starterRewards,
  rewardHistory: [],
  routines: starterRoutines,
  achievements: [
    { id: 'ach-1', title: 'First Quest', description: 'Complete your first quest.', icon: '🏆', xpReward: 25, coinReward: 10, unlocked: true, unlockedAt: today },
    { id: 'ach-2', title: 'On Fire', description: 'Complete 7 consecutive days.', icon: '🔥', xpReward: 100, coinReward: 30, unlocked: false },
    { id: 'ach-3', title: 'Quest Master', description: 'Complete 100 quests.', icon: '⚔️', xpReward: 200, coinReward: 80, unlocked: false },
    { id: 'ach-4', title: 'Level Up', description: 'Reach level 10.', icon: '🌟', xpReward: 150, coinReward: 60, unlocked: false },
    { id: 'ach-5', title: 'Explorer', description: 'Unlock your first new region.', icon: '🗺️', xpReward: 120, coinReward: 50, unlocked: false },
    { id: 'ach-6', title: 'Legendary', description: 'Complete an epic quest.', icon: '💎', xpReward: 300, coinReward: 100, unlocked: false },
  ],
  regions: starterRegions,
  coins: 140,
  xp: 180,
  level: 3,
  streak: 4,
  longestStreak: 12,
  lastCheckIn: today,
  mood: 'Motivated',
  focusOfDay: 'Finish my top priorities without rushing.',
  quickWins: ['Drink water', 'Reply to one message', 'Clear one surface', 'Stretch for 2 minutes'],
  activityLog: [
    { id: 'log-1', title: 'Morning Quest completed', xp: 80, coins: 20, date: today },
    { id: 'log-2', title: 'Read 10 pages', xp: 28, coins: 10, date: today },
  ],
};

export const difficultyTiers: Record<Difficulty, { label: string; stars: string; xpMultiplier: number; coinMultiplier: number }> = {
  easy: { label: 'Easy', stars: '⭐', xpMultiplier: 1, coinMultiplier: 1 },
  moderate: { label: 'Moderate', stars: '⭐⭐', xpMultiplier: 1.5, coinMultiplier: 1.5 },
  hard: { label: 'Hard', stars: '⭐⭐⭐', xpMultiplier: 2, coinMultiplier: 2 },
  epic: { label: 'Epic', stars: '⭐⭐⭐⭐', xpMultiplier: 3, coinMultiplier: 3 },
  legendary: { label: 'Legendary', stars: '⭐⭐⭐⭐⭐', xpMultiplier: 4, coinMultiplier: 4 },
};

export const categoryMeta: Record<CategoryType, { color: string; accent: string }> = {
  Mind: { color: '#8b5cf6', accent: '#e9d5ff' },
  Health: { color: '#22c55e', accent: '#dcfce7' },
  Home: { color: '#f59e0b', accent: '#fef3c7' },
  Work: { color: '#3b82f6', accent: '#dbeafe' },
  Learning: { color: '#14b8a6', accent: '#ccfbf1' },
  Relationships: { color: '#ec4899', accent: '#fce7f3' },
  Finance: { color: '#f97316', accent: '#ffedd5' },
  Creativity: { color: '#a855f7', accent: '#f3e8ff' },
  'Personal Growth': { color: '#0ea5e9', accent: '#e0f2fe' },
};

export const xpForNextLevel = (level: number) => Math.round(150 + level * 80);

export const levelFromXp = (xp: number) => {
  let level = 1;
  let total = 0;
  while (total + xpForNextLevel(level) <= xp) {
    total += xpForNextLevel(level);
    level += 1;
  }
  return { level, xpIntoLevel: xp - total, xpToNext: xpForNextLevel(level) };
};

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const getDifficultyLabel = (difficulty: Difficulty) => difficultyTiers[difficulty].label;

export const categoryList: CategoryType[] = ['Mind', 'Health', 'Home', 'Work', 'Learning', 'Relationships', 'Finance', 'Creativity', 'Personal Growth'];
