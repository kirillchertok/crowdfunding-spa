# Crowdfunding SPA

Одностраничное React-приложение для поиска и просмотра инвестиционных предложений в сфере сельского хозяйства и земли. Проект реализован в стиле crowdfunding-платформы: пользователь может просматривать стартовую страницу, логиниться, искать объекты, применять фильтры, сортировку и видеть результаты на интерактивной карте.

## Основной стек

- React 19
- React Router
- Redux Toolkit
- RTK Query
- Leaflet + React Leaflet
- Webpack 5
- CSS Modules / native CSS
- DummyJSON API

## Краткая функциональность

- Аутентификация пользователя через форму логина
- Защищённые маршруты: главная страница, локации, магазин
- Главная страница с hero-блоком и запуском пользовательского сценария
- Поиск объектов по названию/региону/городу/категории
- Фильтрация и сортировка результатов
- Отображение списка объектов и карты одновременно
- Маркеры на карте для каждого объекта
- Сохранение состояния пользователя и модальных окон через Redux Persist

## Маршруты

- `/login` — публичная страница входа
- `/` — главная страница
- `/locations` — страница поиска и просмотра локаций
- `/shop` — защищённая страница магазина

## Тестовые данные для входа

Для проверки работы аутентификации можно использовать стандартные учетные данные DummyJSON:

- Username: `emilys`
- Password: `emilyspass`

## Структура проекта

```text
.
├── .env.example                 # пример переменных окружения
├── .gitignore
├── .prettierrc
├── babel.config.js
├── commitlint.config.cjs
├── crowdfunding-spa-practical-task.md
├── eslint.config.js
├── jsconfig.json
├── package.json
├── webpack.config.js
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── api/
│   │   ├── authApi.js
│   │   └── placesApi.js
│   ├── app/
│   │   └── App.jsx
│   ├── components/
│   │   ├── AuthProvider/
│   │   ├── ErrorBoundary/
│   │   ├── FilterModal/
│   │   ├── HomeInfo/
│   │   ├── Map/
│   │   ├── Modal/
│   │   ├── PlaceCard/
│   │   ├── PlaceMarker/
│   │   ├── Places/
│   │   ├── ProtectedRoute/
│   │   ├── ResultCard/
│   │   ├── SearchResults/
│   │   └── ui/
│   ├── constants/
│   │   ├── baseCoordinates.jsx
│   │   ├── buttonStyle.jsx
│   │   ├── fetchLimit.jsx
│   │   ├── filters.jsx
│   │   ├── homeInfo.jsx
│   │   ├── icons.jsx
│   │   ├── inputStyle.jsx
│   │   ├── mapStyles.jsx
│   │   ├── modals.jsx
│   │   ├── routes.jsx
│   │   ├── sortOptions.jsx
│   │   └── tokens.jsx
│   ├── data/
│   │   └── places.js
│   ├── hooks/
│   │   └── useClickOutside.js
│   ├── pages/
│   │   ├── Home/
│   │   ├── Locations/
│   │   ├── Login/
│   │   ├── NotFound/
│   │   └── Shop/
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── modalSlice.js
│   │   │   └── userSlice.js
│   │   └── store.js
│   ├── services/
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── utils/
│   │   ├── getUserCoordinates.js
│   │   ├── removeEmptyParams.js
│   │   └── tokenStorage.js
│   └── index.jsx
└── dist/                         # сборка проекта (после build)
```

## Зависимости

### Основные зависимости

- `react` — UI-фреймворк
- `react-dom` — рендеринг приложения
- `react-router-dom` — маршрутизация
- `@reduxjs/toolkit` — глобальное состояние
- `react-redux` — интеграция Redux с React
- `redux-persist` — сохранение состояния после обновления страницы
- `leaflet` — интерактивная карта
- `react-leaflet` — React-компоненты для Leaflet
- `classnames` — работа с className
- `react-icons` — иконки интерфейса

### Dev зависимости

- `webpack`, `webpack-cli`, `webpack-dev-server` — сборка и локальный запуск
- `babel-loader`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react` — транспиляция JavaScript
- `eslint`, `prettier`, `stylelint` — линтинг и форматирование
- `html-webpack-plugin`, `mini-css-extract-plugin`, `css-loader`, `style-loader` — работа с HTML/CSS сборкой
- `dotenv-webpack` — загрузка переменных окружения
- `husky`, `@commitlint/cli` — git-хуки и проверка коммитов

## Подготовка окружения

Создайте файл `.env` на основе `.env.example`:

```bash
copy .env.example .env
```

или на Linux/macOS:

```bash
cp .env.example .env
```

После этого задайте значения переменных:

```env
AUTH_API_URL=
PLACES_API_URL=
```

> В проекте используются переменные окружения для подключения к API, поэтому перед запуском нужно заполнить `.env` корректными значениями.

## Запуск проекта

Установка зависимостей:

```bash
npm install
```

Запуск в режиме разработки:

```bash
npm start
```

После этого приложение откроется на:

```text
http://localhost:3000
```

Сборка продакшн-версии:

```bash
npm run build
```

Проверка кода линтером:

```bash
npm run lint
```

Автоматическое исправление линтера:

```bash
npm run lint:fix
```

## Примечания

- Защищённые страницы доступны только после успешной авторизации.
- Состояние аутентификации сохраняется в Redux и поддерживается через `redux-persist`.
- Для демонстрации используются данные DummyJSON, адаптированные под тематику crowdfunding-проекта.
