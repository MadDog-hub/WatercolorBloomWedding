# Wedding Website Application

## Overview

This is a modern wedding website application built with React and Express, featuring a romantic design with countdown timer, photo gallery, FAQ section, and music player. The application uses a full-stack TypeScript architecture with Vite for development and Shadcn/UI for component styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Shadcn/UI components based on Radix UI primitives
- **Styling**: Tailwind CSS with custom wedding-themed color palette
- **Development**: Hot module replacement and error overlay for development

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: In-memory storage with extensible interface
- **API Structure**: RESTful API with `/api` prefix routing
- **Development**: TSX for TypeScript execution with hot reload

### Build and Deployment Strategy
- **Development**: Vite dev server with Express backend proxy
- **Production**: Vite builds static assets, esbuild bundles server code
- **Static Assets**: Served from `dist/public` directory
- **Environment**: Supports both development and production modes

## Key Components

### Frontend Components
1. **Core Pages**
   - Home page with wedding content and interactive elements
   - 404 Not Found page for unmatched routes

2. **Interactive Features**
   - Countdown timer to wedding date (September 18, 2025)
   - Photo gallery with lightbox functionality
   - FAQ accordion with wedding information
   - Background music player with toggle controls

3. **UI Framework**
   - Complete Shadcn/UI component library
   - Responsive design with mobile-first approach
   - Accessibility features with Radix UI primitives
   - Custom wedding color scheme implementation

### Backend Components
1. **Server Infrastructure**
   - Express application with middleware for JSON parsing
   - Request logging with response time tracking
   - Error handling middleware for graceful failures

2. **Data Layer**
   - Drizzle ORM with PostgreSQL dialect
   - User schema with username/password fields
   - In-memory storage implementation for development
   - Extensible storage interface for database operations

3. **Development Tools**
   - Vite integration for SSR and asset serving
   - Hot module replacement in development
   - TypeScript compilation and type checking

## Data Flow

### Client-Server Communication
1. **API Requests**: TanStack React Query manages server state and caching
2. **Error Handling**: Centralized error handling with user-friendly messages
3. **Authentication**: Cookie-based sessions with PostgreSQL session store
4. **Real-time Updates**: Query invalidation for data synchronization

### Asset Management
1. **Static Assets**: Images served from Cloudinary CDN
2. **Audio Files**: Background music streamed from external sources
3. **Fonts**: Web fonts loaded for custom typography
4. **Responsive Images**: Optimized delivery for different screen sizes

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, Shadcn/UI components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Development**: Vite, TypeScript, TSX runtime

### Database and ORM
- **Database**: Neon Database (PostgreSQL) via `@neondatabase/serverless`
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod schemas with Drizzle integration
- **Sessions**: PostgreSQL session store with connect-pg-simple

### Media and Content
- **Images**: Cloudinary for image hosting and optimization
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Dancing Script and Open Sans via CSS imports
- **Audio**: External MP3 hosting for background music

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle Kit handles schema migrations and updates
4. **Assets**: Static files served directly by Express in production

### Environment Configuration
- **Development**: NODE_ENV=development with hot reload
- **Production**: NODE_ENV=production with optimized builds
- **Database**: DATABASE_URL environment variable required
- **Sessions**: Secure cookie configuration for production

### Hosting Requirements
- **Node.js Runtime**: ES modules support required
- **PostgreSQL Database**: Neon Database or compatible PostgreSQL service
- **Static File Serving**: Express serves built assets in production
- **Environment Variables**: DATABASE_URL and session configuration