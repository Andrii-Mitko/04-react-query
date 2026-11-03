# 04-react-query

Movie search app built with React, TypeScript and TanStack Query. Search for movies via The Movie Database (TMDB) API, browse results with pagination and open details in a modal.

**Live demo:** https://04-react-query-lyart-chi.vercel.app

## Features

- Movie search by title
- Pagination with preserved previous results while loading (`keepPreviousData`)
- Movie details in a modal window (close on Escape / backdrop click)
- Loading and error states
- Toast notification when nothing is found

## Tech stack

- React 19, TypeScript, Vite
- TanStack Query v5
- Axios
- react-paginate
- react-hot-toast
- CSS Modules, modern-normalize

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/Andrii-Mitko/04-react-query.git
cd 04-react-query
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your TMDB Read Access Token:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

4. Start the dev server:

```bash
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server            |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |

## Project structure

```text
src/
├── components/
│   ├── App/
│   ├── ErrorMessage/
│   ├── Loader/
│   ├── MovieGrid/
│   ├── MovieModal/
│   ├── Pagination/
│   └── SearchBar/
├── services/       # API requests (TMDB)
├── types/          # TypeScript types
└── main.tsx
```

## Deployment

The app is deployed on Vercel. Add the `VITE_TMDB_TOKEN` environment variable in **Project → Settings → Environment Variables** before deploying.

## Author

**Andrii Mitko**

- Portfolio: https://andrii-mitko-brand.vercel.app
- GitHub: https://github.com/Andrii-Mitko
