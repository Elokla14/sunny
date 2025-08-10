# Sunny

##  Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful and accessible UI components built on Radix UI
- **Lucide React** - Beautiful icon library

### Backend & Database
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Robust relational database (Neon)
- **Clerk** - Complete authentication solution

### AI & Utilities
- **AI SDK** - AI integration framework
- **React Markdown** - Markdown rendering with syntax highlighting
- **KaTeX** - Mathematical notation rendering
- **Zod** - TypeScript-first schema validation

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- PostgreSQL database (we recommend [Neon](https://neon.tech))
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sunny
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Copy the environment file and configure your credentials:**
   ```bash
   cp .env.example .env.local
   ```

4. **Set up environment variables**
   
   Edit the `.env.local` file with your credentials:
   ```env
   # Database
   DATABASE_URL="your_postgresql_connection_string"
   NEXT_PUBLIC_DATABASE_URL="your_postgresql_connection_string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   
   # AI Services (if applicable)
   # Add your AI service API keys here
   ```

5. **Set up the database**
   ```bash
   # Generate migrations
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   ```

6. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Drizzle Studio

## 🎨 UI Components

This project includes a comprehensive set of Shadcn/ui components:

- **Layout**: Sidebar, Navigation, Breadcrumb
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group
- **Data Display**: Table, Card, Avatar, Badge
- **Feedback**: Alert, Dialog, Toast (Sonner)
- **Navigation**: Tabs, Pagination, Command Palette
- **AI Elements**: Conversation, Message, Code Block, Reasoning

##  Configuration

### Database Schema

The application uses a simple user schema:
- Users table with id, name, email, and subscription fields
- Email uniqueness constraint
- Auto-incrementing primary key

### Authentication

Protected routes are managed through Clerk middleware. Public routes include:
- `/sign-in/*` - Sign in pages
- `/sign-up/*` - Sign up pages

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
