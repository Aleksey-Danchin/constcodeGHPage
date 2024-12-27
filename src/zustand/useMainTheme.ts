import { immer } from "zustand/middleware/immer";
import { createWithEqualityFn } from "zustand/traditional";
import { isEqual } from "lodash";
import { Theme } from "../constants/themes";
import { persist } from "zustand/middleware";

type MainThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useMainTheme = createWithEqualityFn<MainThemeStore>()(
  persist(
    immer((set) => ({
      theme: "forest",
      setTheme: (theme) => set({ theme }),
    })),
    { name: "MainThemeStore" }
  ),
  isEqual
);
