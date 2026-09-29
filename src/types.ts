export type ThemeMode = 'light' | 'dark' | 'system';
export type Difficulty = 'easy' | 'moderate' | 'hard' | 'epic' | 'legendary';
export type QuestType = 'daily' | 'weekly' | 'personal' | 'story' | 'challenge' | 'quick';
export type CategoryType = 'Mind' | 'Health' | 'Home' | 'Work' | 'Learning' | 'Relationships' | 'Finance' | 'Creativity' | 'Personal Growth';

export interface Quest {
  id: string;
  name: string;
  description: string;
  type: QuestType;
  category: CategoryType;
  difficulty: Difficulty;
  xpReward: number;
  coinReward: number;
  progress: number;
  target: number;
  status: 'active' | 'completed';
  repeat: 'daily' | 'weekly' | 'monthly' | 'custom';
  deadline?: string;
  reminder?: string;
  timeEstimate?: number;
  subtasks: string[];
  notes?: string;
  createdAt: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  redeemedCount: number;
  createdAt: string;
}

export interface RewardRedemption {
  id: string;
  rewardId: string;
  rewardName: string;
  price: number;
  redeemedAt: string;
}

export interface RoutineStep {
  id: string;
  text: string;
  done: boolean;
}

export interface Routine {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  steps: RoutineStep[];
  xpReward: number;
  color: string;
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  coinReward: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface JourneyRegion {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  progress: number;
  icon: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  title: string;
  theme: ThemeMode;
  focusAreas: CategoryType[];
  availableTime: '15 min' | '30 min' | '1 hour' | '2+ hours';
  firstGoal: string;
  createdAt: string;
}

export interface AppState {
  profile: UserProfile;
  quests: Quest[];
  rewards: Reward[];
  rewardHistory: RewardRedemption[];
  routines: Routine[];
  achievements: Achievement[];
  regions: JourneyRegion[];
  coins: number;
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  lastCheckIn?: string;
  mood?: string;
  focusOfDay?: string;
  quickWins: string[];
  activityLog: { id: string; title: string; xp: number; coins: number; date: string }[];
}
