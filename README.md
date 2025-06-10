# OIA Medicaps University Website

This is the official website for the Office of International Affairs (OIA) at Medicaps University. The website showcases international programs, student exchanges, global partnerships, and other international initiatives of the university.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **Backend**: FastAPI (to be implemented)
- **Database**: MongoDB (to be implemented)

## Features

- Responsive design for all device sizes
- Dynamic UI with animations
- Interactive world map showing partner countries
- Showcase of international programs and partnerships
- Latest news and events section
- Student testimonials

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd oia-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
oia-website/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/           # React components
│   ├── Header.jsx        # Navigation header
│   ├── HeroSection.jsx   # Hero banner
│   ├── ...               # Other components
├── public/               # Static files
│   ├── images/           # Images used in the website
│   └── world-110m.json   # World map data for the interactive map
└── ...                   # Configuration files
```

## Upcoming Features

- Backend integration with FastAPI
- MongoDB database for dynamic content
- User authentication for admin panel
- Application forms for international programs
- Event registration system

## License

This project is proprietary and owned by Medicaps University.

## Contact

For any inquiries, please contact:
- Office of International Affairs - oia@medicaps.ac.in 