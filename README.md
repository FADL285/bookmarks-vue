# Nuxt Bookmarks App

## Overview

Welcome to the Nuxt Bookmarks App, a front-end application designed as part of the CyberDefenders recruitment task for a front-end developer position. This application allows authenticated users to add available labs and challenges to their bookmarks and remove them as needed.

> [!NOTE]  
> This application requires the corresponding backend to be fully functional. The backend can be found at [Bookmarks Vue Backend](https://github.com/FADL285/bookmarks-vue).

## Getting Started

Before you begin, ensure you have the backend server running and Node.js version 18 or above installed. Follow the instructions provided in the backend repository to set it up.

### Prerequisites

- Node.js (v18 or above) and npm installed
- Backend server running ([Bookmarks Vue Backend](https://github.com/FADL285/bookmarks-vue))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FADL285/bookmarks-vue-frontend.git
   cd bookmarks-vue-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Copy `.env.example` to `.env` and modify the variables as needed to match your setup.

### Development

To start the development server, run:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production

To build the application for production, use:

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

for more information see [Nuxt.js docs](https://nuxt.com/)
