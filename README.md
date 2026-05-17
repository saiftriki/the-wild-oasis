# The Wild Oasis

A full-featured hotel internal management system for staff to manage cabins, bookings, and guest check-ins/check-outs.

Built as the main project in [Jonas Schmedtmann's Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/).

## Features

- **Dashboard** — real-time stats (bookings, sales, check-ins, occupancy rate) with activity charts and filters by time range
- **Bookings** — full lifecycle management: view, filter, sort, delete bookings, and manage booking details
- **Check-in / Check-out** — check guests in and out, with optional breakfast add-on at check-in
- **Cabin management** — create, edit, and delete cabins with image uploads
- **User management** — staff can create new employee accounts and update their own profile and password
- **Settings** — configure global hotel settings (breakfast price, booking limits, etc.)
- **Dark mode** — syncs with OS preference and persists across sessions

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6 |
| Server state | TanStack React Query v4 |
| Backend / DB | Supabase (PostgreSQL + Storage + Auth) |
| Forms | React Hook Form |
| Charts | Recharts |
| Styling | Styled Components |
| Notifications | React Hot Toast |
| Build tool | Vite |

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs on `http://localhost:3000`.

## Project Structure

```
src/
├── features/          # Feature-based modules (bookings, cabins, dashboard, ...)
├── hooks/             # Shared custom hooks
├── pages/             # Route-level page components
├── services/          # Supabase API calls
├── context/           # React context providers (dark mode)
├── styles/            # Global styles
└── utils/             # Helpers and constants
```

## Live Demo

[The Wild Oasis on Netlify](https://app-the-wild-oasis.netlify.app)
