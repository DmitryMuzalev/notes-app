import { themeReducer } from '@/features/theme-switcher/model';

export const rootReducer = {
  theme: themeReducer,
};

export type RootState = {
  theme: ReturnType<typeof themeReducer>;
};
