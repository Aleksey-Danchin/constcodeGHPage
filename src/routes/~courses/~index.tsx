import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto p-6 h-full overflow-auto">
      <div className="bg-base-100 text-base-content">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-4xl font-bold text-primary">
              Курс "React Basic"
            </h1>

            <div className="alert alert-warning shadow-lg mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-.01M12 8h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                />
              </svg>
              <span>
                Внимание! Курс находится в активной разработке. Дата конечной
                публикации не известна. Курс доступен к покупке, после которой
                будет доступен весь текущий и будущий материал. НО данные курса,
                очередность уроков и сами уроки могут претерпевать значительную
                корректировку.
              </span>
            </div>

            <p>
              Этот курс по ReactJS отлично подойдёт для новичков в React,
              которые уверенно владеют JavaScript и имеют базовые знания
              TypeScript. Мы начинаем с самых основ React, шаг за шагом переходя
              к созданию сложных компонентов и проектов. Курс фокусируется
              исключительно на React, что позволяет глубже погрузиться в эту
              технологию без отвлечений на сторонние инструменты.
            </p>

            <h2 className="text-2xl font-semibold text-secondary">
              Формат курса
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-accent">
                Бесплатная часть
              </h3>
              <ul className="list-disc list-inside">
                <li>Видеоуроки для понимания основ React.</li>
                <li>Знакомство с компонентами, JSX, состоянием и пропсами.</li>
                <li>Инструкции по установке и настройке среды.</li>
                <li>Первое знакомство с хуками (useState, useEffect).</li>
                <li>Примеры работы с событиями и формами.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold">Платная часть</h3>
              <ul className="list-disc list-inside">
                <li>Расширенные уроки с более сложными примерами.</li>
                <li>Подробные объяснения для ключевых тем.</li>
                <li>Тесты после каждого модуля.</li>
                <li>Практические задания с эталонными решениями.</li>
                <li>Уроки по управлению состоянием и сложным хукам.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-secondary">
              Учебные проекты
            </h2>
            <ul className="list-decimal list-inside">
              <li>Игра "Крестики-нолики"</li>
              <li>Квиз</li>
              <li>To-Do List</li>
              <li>Список контактов</li>
              <li>Конвертер валют</li>
              <li>Таймер обратного отсчёта</li>
              <li>Мини-калькулятор</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary">
              Особенности курса
            </h2>
            <ul className="list-disc list-inside">
              <li>Полностью самостоятельное прохождение.</li>
              <li>Минимальная поддержка через форум.</li>
              <li>Цифровой сертификат после завершения курса.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary">
              Для кого этот курс?
            </h2>
            <ul className="list-disc list-inside">
              <li>Для тех, кто знает JavaScript и основы TypeScript.</li>
              <li>Для любителей самостоятельного обучения.</li>
              <li>Для тех, кто хочет освоить React в удобном темпе.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary">FAQ</h2>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
              >
                <input type="checkbox" />
                <div className="collapse-title font-bold">
                  {index + 1}. {item.question}
                </div>
                <div className="collapse-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "Какие темы покрываются в бесплатной и платной частях курса?",
    answer:
      "Бесплатная часть охватывает основы React. Платная часть углубляется в сложные темы и включает дополнительные задания и тесты.",
  },
  {
    question: "Почему курс только про React?",
    answer:
      "Мы сосредоточились на React, чтобы дать вам глубокие знания без отвлечений.",
  },
  {
    question: "Сколько времени занимает курс?",
    answer:
      "Вы можете пройти курс за 4-8 недель, в зависимости от вашего темпа. Доступ сохраняется на 6 месяцев.",
  },
  {
    question: "Какие преимущества я получу?",
    answer:
      "Вы изучите React на практике, создадите портфолио и получите цифровой сертификат.",
  },
  {
    question: "Справлюсь ли я с проектами?",
    answer:
      "Все проекты рассчитаны на новичков и сопровождаются эталонными решениями.",
  },
  {
    question: "Нужен ли TypeScript?",
    answer: "Да, вам нужно знать основы TypeScript.",
  },
  {
    question: "Что нужно для начала?",
    answer:
      "Редактор кода (например, VS Code), установленный Node.js и умение слепой печати будут большим плюсом.",
  },
  {
    question: "Можно ли начать в любое время?",
    answer: "Да, курс доступен для начала в любое время.",
  },
  {
    question: "Как работает форум?",
    answer:
      "Форум позволяет задавать вопросы и получать помощь от других студентов и преподавателей.",
  },
  {
    question: "Есть ли дедлайны?",
    answer: "Нет, вы учитесь в своём темпе.",
  },
  {
    question: "Как проверяются задания?",
    answer:
      "Вы сравниваете свой код с эталонными решениями. При необходимости можно задать вопросы на форуме.",
  },
  {
    question: "Что будет после истечения срока доступа?",
    answer: "Доступ к курсу, заданиям и проектам будет закрыт.",
  },
  {
    question: "Как я получу сертификат?",
    answer:
      "Сертификат предоставляется в цифровом формате после завершения курса.",
  },
  {
    question: "Признаётся ли сертификат?",
    answer:
      "Сертификат можно использовать для подтверждения навыков, но он не является документом государственного образца.",
  },
  {
    question: "Какова стоимость платной части?",
    answer: "Стоимость указана на сайте, иногда доступны скидки.",
  },
  {
    question: "Можно ли оплатить только часть курса?",
    answer: "Нет, доступ предоставляется ко всей платной части.",
  },
  {
    question: "Могу ли я вернуть деньги?",
    answer:
      "Да, если курс вам не подошёл, вы можете запросить возврат средств в течение 7 дней.",
  },
  {
    question: "Есть ли пробный доступ?",
    answer: "Нет, но бесплатная часть позволяет оценить формат курса.",
  },
  {
    question: "Можно ли учиться оффлайн?",
    answer: "На данный момент курс доступен только онлайн.",
  },
  {
    question: "Какие дополнительные материалы изучить?",
    answer:
      "Официальная документация React, Redux и React Router будут хорошим продолжением.",
  },
];
