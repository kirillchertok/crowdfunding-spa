# Crowdfunding SPA

A single-page React application for searching and viewing agricultural and land investment opportunities. The project is built in a crowdfunding style: users can view the landing page, log in, search for listings, apply filters, sort results, and see them on an interactive map.

## Deployment link

https://task5-innowise.netlify.app/

## Tech stack

- React 19
- React Router
- Redux Toolkit
- RTK Query
- Leaflet + React Leaflet
- Webpack 5
- CSS Modules / native CSS
- DummyJSON API

## Brief functionality

- User authentication via a login form
- Protected routes: home page, locations, shop
- Home page with a hero section and a call-to-action flow
- Search for listings by title, region, city, or category
- Filtering and sorting of results
- Simultaneous display of the list and map
- Map markers for each listing
- Saving user state and modal state with Redux Persist

## Routes

- `/login` — public login page
- `/` — home page
- `/locations` — page for searching and viewing locations
- `/shop` — protected shop page

## Test login credentials

To verify authentication, you can use the standard DummyJSON credentials:

- Username: `emilys`
- Password: `emilyspass`

## Project structure

```text
.
├── .env.example                 # environment variable example
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
└── dist/                         # project build output (after build)
```

## Dependencies

### Main dependencies

- `react` — UI framework
- `react-dom` — application rendering
- `react-router-dom` — routing
- `@reduxjs/toolkit` — global state management
- `react-redux` — Redux integration for React
- `redux-persist` — persistence of state after page refresh
- `leaflet` — interactive map library
- `react-leaflet` — React components for Leaflet
- `classnames` — class name handling
- `react-icons` — interface icons

### Dev dependencies

- `webpack`, `webpack-cli`, `webpack-dev-server` — project build and local run
- `babel-loader`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react` — JavaScript transpilation
- `eslint`, `prettier`, `stylelint` — linting and formatting
- `html-webpack-plugin`, `mini-css-extract-plugin`, `css-loader`, `style-loader` — HTML/CSS build support
- `dotenv-webpack` — environment variable loading
- `husky`, `@commitlint/cli` — git hooks and commit validation

## Environment setup

Create a `.env` file based on `.env.example`:

```bash
copy .env.example .env
```

or on Linux/macOS:

```bash
cp .env.example .env
```

Then set the variables:

```env
AUTH_API_URL=
PLACES_API_URL=
```

> The project uses environment variables to connect to the API, so you need to fill in the correct values before running it.

## Running the project

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm start
```

Then open the app at:

```text
http://localhost:3000
```

Build the production version:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

## Notes

- Protected pages are only available after successful authentication.
- Authentication state is saved in Redux and managed through `redux-persist`.
- DummyJSON data is not used for demonstration and adapted to the crowdfunding project theme.
