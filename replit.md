# Portfolio Website - Replit.md

## Overview

This is a modern portfolio website built with React and Express.js, showcasing the work and skills of Margam Vishwateja, a MERN Stack Developer. The application features a responsive design with a contact form that stores submissions in a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **API Design**: RESTful API endpoints with JSON responses

## Key Components

### Frontend Components
1. **Portfolio Sections**: Hero, About, Skills, Experience, Projects, Contact
2. **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
3. **Navigation**: Fixed navigation with smooth scrolling to sections
4. **Contact Form**: Interactive form with validation and submission handling

### Backend Components
1. **Express Server**: Main application server with middleware for logging and error handling
2. **Route Handlers**: API endpoints for contact form submission and data retrieval
3. **Storage Layer**: Abstract storage interface with in-memory implementation (designed for easy database integration)
4. **Development Tools**: Vite integration for development mode

### Database Schema
- **Users Table**: Basic user management structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, subject, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data is validated using Zod schemas
   - TanStack Query sends POST request to `/api/contact`
   - Backend validates data and stores in database
   - Success/error response sent back to frontend
   - UI updates with toast notification

2. **Contact Retrieval**:
   - Admin can access `/api/contacts` endpoint
   - Backend retrieves all contact submissions
   - Data returned as JSON response

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS, Radix UI components, class-variance-authority
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **Utilities**: date-fns, clsx, cmdk

### Backend Dependencies
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Runtime error overlay and cartographer plugins

## Deployment Strategy

### Development Mode
- Frontend served by Vite development server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled by Drizzle Kit
- Environment variables loaded from .env files

### Production Build
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: esbuild bundles server code with external dependencies
3. **Database Setup**: Drizzle migrations applied to PostgreSQL database
4. **Deployment**: Single Node.js process serving both API and static files

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string for Neon Database
- **NODE_ENV**: Environment mode (development/production)
- **Port Configuration**: Express server with configurable port

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared TypeScript configuration and schema definitions
2. **Type Safety**: Full TypeScript implementation with shared types between frontend and backend
3. **Database Abstraction**: Storage interface allows easy swapping between in-memory and database implementations
4. **Component Architecture**: Modular React components with shadcn/ui for consistent design system
5. **Build Optimization**: Separate build processes for frontend and backend with appropriate bundling strategies