import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto h-full">
      <div className="hero bg-base-200 rounded">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col gap-5">
            <h1 className="text-5xl font-bold">ConstCode</h1>

            <p>
              Курсы web-программирования, повышения квалификации и введение в
              профессию "web-разработчик".
            </p>

            <div>
              <p className="text-left">Основатель школы: Алексей Данчин.</p>
              <p className="text-left">Авторы курсов: Алексей Данчин.</p>
              <p className="text-left">Преподаватели: Алексей Данчин.</p>
              <p className="text-left">
                Официальные тестировщики: Алексей Данчин.
              </p>
            </div>

            <button className="btn btn-primary">Смотреть курсы</button>
          </div>
        </div>
      </div>
    </div>
  );
}
