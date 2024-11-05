# Spandan Magazine

## About

Spandan Magazine is a dynamic web application for JIPMER's annual fest, Spandan. This project showcases event details, sports standings, and results for South India's biggest medical college fest.

## Features

- Interactive home page with animated elements
- Comprehensive event listings across various categories
- Real-time sports standings and match results
- Responsive design for both desktop and mobile devices
- Admin dashboard for managing event data

## Tech Stack

- Next.js 13 with App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Shadcn UI components
- Neon postgreSQL database
- Vercel for deployment

## Getting Started 

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/aditya20-b/spandan-magazine-2024.git
   cd spandan-magazine-2024
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

### Running the Development Server

Run the development server:
```
npm run dev
```
or
```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js 13 app directory
- `components/`: React components
- `hooks/`: Custom React hooks
- `types/`: TypeScript type definitions
- `utils/`: Utility functions and constants
- `public/`: Static assets

## Key Components

- `HomePage`: The landing page with animated elements
- `SpandansMagazineComponent`: Main component for browsing events and results
- `AdminPage`: Dashboard for managing event data
- `CategorySelector` and `SportsSelector`: Components for navigating different event categories

## API Routes

- `/api/standings`: Get and update sports standings
- `/api/results`: Get and update match results

## Deployment

This project is designed to be deployed on Vercel. Follow these steps:

1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import the project from GitHub
4. Configure your environment variables in Vercel
5. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT](LICENSE) License.
