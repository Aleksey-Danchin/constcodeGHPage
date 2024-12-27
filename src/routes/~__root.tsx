import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useMainTheme } from "../zustand/useMainTheme";
import { Header } from "../gui/Header";

export const Route = createRootRoute({
  component: Component,
});

function Component() {
  const theme = useMainTheme((state) => state.theme);

  return (
    <div
      data-theme={theme}
      className="w-screen h-screen overflow-hidden flex flex-col gap-5"
    >
      <Header />

      <div className="grow w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
