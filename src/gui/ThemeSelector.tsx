import { useMainTheme } from "../zustand/useMainTheme";
import { themes } from "../constants/themes";

const setTheme = useMainTheme.getState().setTheme;

export const ThemeSelector = () => {
  return (
    <details className="dropdown dropdown-bottom dropdown-end">
      <summary className="btn m-1">Тема</summary>

      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 h-[500px] flex-nowrap overflow-auto p-2 shadow">
        {themes.map((theme) => {
          return (
            <li key={theme} data-theme={theme} onClick={() => setTheme(theme)}>
              <div className="flex flex-row justify-between">
                <span className="shrink-0">{theme}</span>

                <div className="flex flex-row gap-1">
                  <div className="w-[10px] h-[10px] rounded bg-primary" />
                  <div className="w-[10px] h-[10px] rounded bg-secondary" />
                  <div className="w-[10px] h-[10px] rounded bg-neutral" />
                  <div className="w-[10px] h-[10px] rounded bg-neutral-content" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </details>
  );
};
