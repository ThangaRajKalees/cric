
# CricketPredict

A small web application for predicting cricket match outcomes and joining contests. Built with React, TypeScript, and Tailwind CSS.

## Features

- View upcoming cricket matches
- Join prediction contests for matches
- View your wallet balance and transaction history
- See all contests you have joined
- A simple admin panel to add and edit matches

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation & Running

1.  **Install dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server. Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## How to Wire Firebase

This project is set up with mock data. To connect it to a real Firebase backend, follow these steps:

1.  **Create a Firebase Project:**
    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Go to Project Settings and add a new Web App. Copy the Firebase configuration object.

2.  **Set up Firestore:**
    - In the Firebase Console, go to Firestore Database and create a new database in production mode.
    - Create collections for `matches`, `users`, `contests`, and `transactions`.
    - Secure your data by setting up Firestore Security Rules. For example, users should only be able to read their own wallet and transaction documents.

3.  **Set up Firebase Authentication:**
    - Go to Authentication and enable the sign-in methods you want to support (e.g., Google, Email/Password).

4.  **Update Firebase Config in the App:**
    - Create a file `src/lib/firebase.ts`.
    - Paste your Firebase config into this file and export the initialized Firebase app, Firestore, and Auth instances.
    - **Example `src/lib/firebase.ts`:**
      ```typescript
      import { initializeApp } from "firebase/app";
      import { getFirestore } from "firebase/firestore";
      import { getAuth } from "firebase/auth";
      import { getFunctions } from "firebase/functions";

      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
      };

      const app = initializeApp(firebaseConfig);
      export const db = getFirestore(app);
      export const auth = getAuth(app);
      export const functions = getFunctions(app);
      ```

5.  **Deploy Firebase Functions:**
    - The app expects a callable function named `joinContest`.
    - Set up Firebase Functions in your project.
    - Deploy a function that handles the server-side logic for joining a contest (e.g., checking user balance, creating an entry, and updating the balance atomically).

6.  **Replace Mock Data with Firestore Listeners:**
    - Go through the components in `src/pages` and `src/components`.
    - Find the `// TODO: Replace with Firestore listener` comments.
    - Use `onSnapshot` from the Firebase SDK to listen for real-time updates to your data collections.
