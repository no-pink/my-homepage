# no-pink — Personal Homepage

A personal homepage built with React + Vite, featuring portfolio showcase and a structured learning plan manager.

## Pages

| Page | Path | Content |
|------|------|---------|
| Home | `/` | Hero section + quick navigation |
| About | `/about` | Personal bio & background |
| Skills | `/skills` | Technical skills by category |
| Projects | `/projects` | Project portfolio |
| Study Plan | `/plan` | Learning roadmap with CRUD management |
| Journey | `/timeline` | Education & experience timeline |
| Blog | `/blog` | Blog post listing |
| Contact | `/contact` | Contact info + social links |

## Tech Stack

- **Framework**: React 19 + React Router v7
- **Build Tool**: Vite 8
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (static site)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Root component + routing
├── index.css                # Global styles + CSS variables
├── components/
│   ├── Navbar/              # Top navigation bar
│   ├── Footer/              # Page footer
│   └── shared/              # Shared components
├── pages/
│   ├── Home/                # Home page
│   ├── About/               # About me
│   ├── Skills/              # Skills showcase
│   ├── Projects/            # Project portfolio
│   ├── Plan/                # Study plan (core feature)
│   ├── Timeline/            # Experience timeline
│   ├── Blog/                # Blog
│   └── Contact/             # Contact page
├── data/                    # Static data files
└── context/                 # React Context (auth, etc.)
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions. Pushing to the `main` branch triggers deployment.
