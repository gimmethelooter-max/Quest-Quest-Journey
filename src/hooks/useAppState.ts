import { useState, useEffect, useCallback } from 'react';
import { AppState } from '../types';
import { initialState } from '../data/seed';

const STORAGE_KEY = 'qqj-app-state';

export const useAppState = () => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addXp = useCallback((amount: number, source: string) => {
    setState((prev) => {
      const newXp = prev.xp + amount;
      return {
        ...prev,
        xp: newXp,
        activityLog: [
          { id: `log-${Date.now()}`, title: source, xp: amount, coins: 0, date: new Date().toISOString() },
          ...prev.activityLog,
        ].slice(0, 50),
      };
    });
  }, []);

  const addCoins = useCallback((amount: number, source: string) => {
    setState((prev) => ({
      ...prev,
      coins: prev.coins + amount,
      activityLog: [
        { id: `log-${Date.now()}`, title: source, xp: 0, coins: amount, date: new Date().toISOString() },
        ...prev.activityLog,
      ].slice(0, 50),
    }));
  }, []);

  const completeQuest = useCallback((questId: string) => {
    setState((prev) => {
      const quest = prev.quests.find((q) => q.id === questId);
      if (!quest || quest.status === 'completed') return prev;

      const xpGain = quest.xpReward;
      const coinGain = quest.coinReward;

      return {
        ...prev,
        quests: prev.quests.map((q) =>
          q.id === questId ? { ...q, status: 'completed', progress: q.target } : q
        ),
        xp: prev.xp + xpGain,
        coins: prev.coins + coinGain,
        activityLog: [
          { id: `log-${Date.now()}`, title: `Completed: ${quest.name}`, xp: xpGain, coins: coinGain, date: new Date().toISOString() },
          ...prev.activityLog,
        ].slice(0, 50),
      };
    });
  }, []);

  const createQuest = useCallback((quest: any) => {
    setState((prev) => ({
      ...prev,
      quests: [...prev.quests, quest],
    }));
  }, []);

  const updateQuest = useCallback((questId: string, updates: Partial<any>) => {
    setState((prev) => ({
      ...prev,
      quests: prev.quests.map((q) =>
        q.id === questId ? { ...q, ...updates } : q
      ),
    }));
  }, []);

  const deleteQuest = useCallback((questId: string) => {
    setState((prev) => ({
      ...prev,
      quests: prev.quests.filter((q) => q.id !== questId),
    }));
  }, []);

  const createReward = useCallback((reward: any) => {
    setState((prev) => ({
      ...prev,
      rewards: [...prev.rewards, reward],
    }));
  }, []);

  const redeemReward = useCallback((rewardId: string) => {
    setState((prev) => {
      const reward = prev.rewards.find((r) => r.id === rewardId);
      if (!reward || prev.coins < reward.price) return prev;

      return {
        ...prev,
        coins: prev.coins - reward.price,
        rewards: prev.rewards.map((r) =>
          r.id === rewardId ? { ...r, redeemedCount: r.redeemedCount + 1 } : r
        ),
        rewardHistory: [
          {
            id: `redemption-${Date.now()}`,
            rewardId,
            rewardName: reward.name,
            price: reward.price,
            redeemedAt: new Date().toISOString(),
          },
          ...prev.rewardHistory,
        ].slice(0, 100),
      };
    });
  }, []);

  const createRoutine = useCallback((routine: any) => {
    setState((prev) => ({
      ...prev,
      routines: [...prev.routines, routine],
    }));
  }, []);

  const completeRoutine = useCallback((routineId: string) => {
    setState((prev) => {
      const routine = prev.routines.find((r) => r.id === routineId);
      if (!routine) return prev;

      const xpGain = routine.xpReward;
      const coinGain = Math.round(routine.xpReward * 0.25);

      return {
        ...prev,
        routines: prev.routines.map((r) =>
          r.id === routineId
            ? {
                ...r,
                steps: r.steps.map((s) => ({ ...s, done: false })),
              }
            : r
        ),
        xp: prev.xp + xpGain,
        coins: prev.coins + coinGain,
        activityLog: [
          { id: `log-${Date.now()}`, title: `Routine complete: ${routine.name}`, xp: xpGain, coins: coinGain, date: new Date().toISOString() },
          ...prev.activityLog,
        ].slice(0, 50),
      };
    });
  }, []);

  const toggleRoutineStep = useCallback((routineId: string, stepId: string) => {
    setState((prev) => ({
      ...prev,
      routines: prev.routines.map((r) =>
        r.id === routineId
          ? {
              ...r,
              steps: r.steps.map((s) =>
                s.id === stepId ? { ...s, done: !s.done } : s
              ),
            }
          : r
      ),
    }));
  }, []);

  const updateProfile = useCallback((updates: Partial<any>) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...updates },
    }));
  }, []);

  const unlockAchievement = useCallback((achievementId: string) => {
    setState((prev) => {
      const achievement = prev.achievements.find((a) => a.id === achievementId);
      if (!achievement || achievement.unlocked) return prev;

      return {
        ...prev,
        achievements: prev.achievements.map((a) =>
          a.id === achievementId
            ? { ...a, unlocked: true, unlockedAt: new Date().toISOString() }
            : a
        ),
        xp: prev.xp + achievement.xpReward,
        coins: prev.coins + achievement.coinReward,
        activityLog: [
          {
            id: `log-${Date.now()}`,
            title: `Achievement: ${achievement.title}`,
            xp: achievement.xpReward,
            coins: achievement.coinReward,
            date: new Date().toISOString(),
          },
          ...prev.activityLog,
        ].slice(0, 50),
      };
    });
  }, []);

  const unlockRegion = useCallback((regionId: string) => {
    setState((prev) => ({
      ...prev,
      regions: prev.regions.map((r) =>
        r.id === regionId ? { ...r, unlocked: true } : r
      ),
    }));
  }, []);

  const updateRegionProgress = useCallback((regionId: string, progress: number) => {
    setState((prev) => ({
      ...prev,
      regions: prev.regions.map((r) =>
        r.id === regionId ? { ...r, progress: Math.min(progress, 100) } : r
      ),
    }));
  }, []);

  return {
    state,
    setState,
    addXp,
    addCoins,
    completeQuest,
    createQuest,
    updateQuest,
    deleteQuest,
    createReward,
    redeemReward,
    createRoutine,
    completeRoutine,
    toggleRoutineStep,
    updateProfile,
    unlockAchievement,
    unlockRegion,
    updateRegionProgress,
  };
};
