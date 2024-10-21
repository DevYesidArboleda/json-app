# JSONPlaceholder Posts

This project is a React application built with Next.js that demonstrates CRUD operations using the JSONPlaceholder API. It features a multi-language interface (English and Spanish), pagination, and search functionality.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- View a list of posts with pagination
- Create new posts
- Update existing posts
- Delete posts
- Search posts by ID or title
- Multi-language support (English and Spanish)
- Responsive design

## Folder Structure

```
jsonplaceholder-posts/
│
├── app/
│   ├── [lang]/
│   │   ├── page.tsx
│   │   ├── posts/
│   │   │   └── page.tsx
│   │   └── create/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── CreatePostForm.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── PostsTable.tsx
│   └── UpdatePostForm.tsx
│
├── contexts/
│   └── LanguageContext.tsx
│
├── lib/
│   └── api.ts
│
├── types/
│   └── post.ts
│
├── public/
│
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/DevYesidArboleda/json-app.git
   cd json-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

The application will be available online on vercel at `https://json-5zfz0f1ro-yesid-bangueras-projects.vercel.app/`.

The application will be available online on vercel at `https://json-5zfz0f1ro-yesid-bangueras-projects.vercel.app/`.

To build the application for production:

```
npm run build
```

To start the production server:

```
npm start
```

## Usage

- The home page displays a brief description of the project and links to view posts and create a new post.
- The posts page shows a table of posts with options to update or delete each post.
- Use the search bar to filter posts by ID or title.
- Click on "Create Post" to add a new post.
- Click on "Update" next to a post to modify its content.
- Click on "Delete" to remove a post.
- Use the language switcher in the top right corner to change between English and Spanish.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- JSONPlaceholder API

## API Integration

The application uses a separate `api.ts` file to handle all API calls. This file contains functions for fetching, creating, updating, and deleting posts. The API integration is done using the Fetch API.

## Internationalization

The application supports both English and Spanish languages. The translations are managed using a custom `LanguageContext` that provides a `t` function for translating strings. The language can be switched using the LanguageSwitcher component.

## Components

- `PostsTable`: Displays the list of posts with pagination and search functionality.
- `CreatePostForm`: A modal form for creating new posts.
- `UpdatePostForm`: A modal form for updating existing posts.
- `Footer`: Displays the creator information and copyright notice.
- `LanguageSwitcher`: Allows users to switch between English and Spanish.

## State Management

The application uses React's built-in `useState` and `useEffect` hooks for state management. The `LanguageContext` is used to manage the current language state across the application.

## Styling

The application uses Tailwind CSS for styling, along with shadcn/ui components for a consistent and modern look.

## Error Handling

Error handling is implemented using try-catch blocks in API calls. Errors are displayed to the user using toast notifications.

## Future Improvements

- Implement server-side rendering for better SEO
- Add unit and integration tests
- Implement real-time updates using WebSockets
- Add user authentication and authorization
- Improve accessibility features

Feel free to contribute to this project by submitting pull requests or creating issues for any bugs or feature requests.
```

## Deployment

This application is deployed on Azure using GitHub Actions. You can view the live demo at:
[https://json-nextjs-ececb5f2bqdvfzer.canadacentral-01.azurewebsites.net/](https://json-nextjs-ececb5f2bqdvfzer.canadacentral-01.azurewebsites.net/)

The deployment process is automated using GitHub Actions. When changes are pushed to the main branch, the workflow defined in `.github/workflows/azure-deploy.yml` is triggered, which builds the application and deploys it to Azure.

To set up your own deployment:

1. Create an Azure Web App.
2. Set up the following secrets in your GitHub repository:
   - `AZURE_WEBAPP_NAME`: The name of your Azure Web App
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: The publish profile of your Azure Web App
3. Customize the `.github/workflows/azure-deploy.yml` file if needed.

## Future Improvements

- Implement server-side rendering for better SEO
- Add unit and integration tests
- Implement real-time updates using WebSockets
- Add user authentication and authorization
- Improve accessibility features
