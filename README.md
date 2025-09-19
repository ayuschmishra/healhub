# HealHub

A comprehensive digital platform combining event management and mental health support, featuring two main applications:

1. **TEDx Website** - Event management platform for TEDx events
2. **Healiosa.com** - Mental health companion application

## 🌟 Project Overview

HealHub serves as an umbrella project hosting two distinct but complementary applications focused on education, inspiration, and mental wellness.

### TEDx Website
A modern React-based website for managing and showcasing TEDx events, featuring:
- React Router DOM for navigation
- Event pages (Home, Events, About, Get Involved)
- Responsive design with Tailwind CSS
- Component-based architecture
- Framer Motion animations

### Healiosa.com
A mental health companion application built with React and TypeScript, offering:
- Personal mental health tracking
- Journal entries with mood tracking
- User authentication via Supabase
- Dashboard for personal insights
- Secure data management

## 🏗️ Project Structure

```
healhub/
├── src/                    # TEDx Website source code
│   ├── App.jsx            # Main TEDx application component with routing
│   ├── main.jsx           # Application entry point
│   ├── App.css            # Application styles
│   └── index.css          # Global styles
├── healiosa.com/          # Mental health application
│   ├── src/               # Healiosa source code
│   │   ├── components/    # UI components
│   │   │   └── layout/    # Layout components
│   │   ├── pages/         # Application pages (Home, Features, Login, etc.)
│   │   ├── hooks/         # Custom React hooks (useAuth)
│   │   ├── store/         # State management (Zustand)
│   │   ├── lib/           # Utilities and Supabase client
│   │   ├── types/         # TypeScript type definitions
│   │   └── styles/        # Global styles
│   ├── package.json       # Healiosa dependencies
│   └── index.html         # HTML entry point
├── package.json           # TEDx website dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration for TEDx site
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## 🚨 Current Status

**This project is in active development.** Both applications have some build and linting issues that need to be addressed:

### Known Issues
- **TEDx Website**: Missing `index.html` file prevents builds from completing
- **Healiosa.com**: TypeScript errors with missing `initAuthListener` export
- **Linting**: Some ESLint warnings about unused variables and TypeScript `any` types

### Development Priority
1. Fix missing `index.html` for TEDx website
2. Implement missing `initAuthListener` function in authStore
3. Address TypeScript typing issues
4. Complete UI components and pages

## 🚀 Technology Stack

### TEDx Website
- **Frontend**: React 19, JavaScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Linting**: ESLint

### Healiosa.com
- **Frontend**: React 19, TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Authentication**: Supabase
- **Database**: Supabase PostgreSQL
- **Build Tool**: Vite
- **Type Checking**: TypeScript

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### TEDx Website Setup

**Note**: The TEDx website is currently in development and missing an `index.html` file. The build process may fail until this file is created.

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayuschmishra/healhub.git
   cd healhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production** (requires index.html)
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Healiosa.com Setup

**Note**: There's currently a TypeScript error with missing `initAuthListener` export. This will need to be fixed for successful builds.

1. **Navigate to the Healiosa directory**
   ```bash
   cd healiosa.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the `healiosa.com` directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production** (requires fixing TypeScript errors)
   ```bash
   npm run build
   ```

## 🔧 Available Scripts

### TEDx Website Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Healiosa.com Scripts
```bash
npm run dev      # Start development server
npm run build    # TypeScript compilation + Vite build
npm run lint     # Run ESLint with TypeScript
npm run preview  # Preview production build
```

## 🌐 Deployment

### Vercel Deployment
Both applications are configured for Vercel deployment:

1. **TEDx Website**: Deploy from root directory
2. **Healiosa.com**: Deploy from `/healiosa.com` directory

The `vercel.json` configuration handles SPA routing for both applications.

### Environment Variables (Healiosa.com)
Set up the following environment variables in your deployment platform:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## 📱 Features

### TEDx Website Features
- **Event Management**: Browse and discover TEDx events
- **Community Engagement**: Connect with speakers and attendees
- **Responsive Design**: Mobile-first responsive interface
- **Modern UI**: Clean, professional design with smooth animations

### Healiosa.com Features
- **Mental Health Tracking**: Monitor and track mental wellness
- **Journal Entries**: Record thoughts with mood indicators
- **User Authentication**: Secure login and registration
- **Personal Dashboard**: Visualize personal mental health data
- **Privacy Focused**: Secure data handling with Supabase

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add TypeScript types for new features (Healiosa.com)
- Test your changes thoroughly
- Update documentation as needed
- Run linting before submitting PRs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Support

For support, please:
1. Check existing issues on GitHub
2. Create a new issue with detailed information
3. Contact the development team

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the fast build tool
- **Supabase Team** - For the backend-as-a-service platform
- **Tailwind CSS Team** - For the utility-first CSS framework


---

Built with ❤️ by the HealHub team
