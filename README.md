# Wordle App

A React-based Wordle clone that interfaces with a custom REST backend for word validation and generation. Built with Object-Oriented Programming principles and modern React practices.

## 🎮 Live Demo

Visit the live application at: [http://mohsinriaz.ca/wordle-app](http://mohsinriaz.ca/wordle-app)
Browse the backend at: [https://github.com/Mohsin-Riaz/wordle-backend](https://github.com/Mohsin-Riaz/wordle-backend)

## 🚀 Features

-   Custom REST API integration for word validation and generation
-   Real-time guess validation
-   Visual feedback for correct/incorrect letters
-   QR code sharing functionality
-   Loading and error states handling
-   Mobile-friendly design

## 🛠️ Tech Stack

-   **Frontend Framework:** React 18
-   **Build Tool:** Vite
-   **HTTP Client:** Axios
-   **QR Code Generation:** qrcode.react
-   **Deployment:** GitHub Pages

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/mohsin-riaz/wordle-app.git
cd wordle-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── api/           # API integration layer
├── assets/        # Static assets
├── components/    # React components
│   ├── Board.jsx
│   ├── Button.jsx
│   ├── CurrentGuess.jsx
│   ├── Dialog.jsx
│   ├── Error.jsx
│   ├── GuessRow.jsx
│   ├── Key.jsx
│   ├── Keyboard.jsx
│   └── Loading.jsx
├── functions/     # Utility functions
└── styles/        # CSS styling files
```

## 📝 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run deploy` - Deploy to GitHub Pages
-   `npm run lint` - Run ESLint

## 🚀 Deployment

The app is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch will trigger the deployment workflow.

To deploy manually:

```bash
npm run deploy
```

## 💻 Development

1. The app follows OOP principles for better code organization and maintainability
2. Components are modular and reusable
3. API calls are centralized in the `api` directory
4. Styling is managed through CSS modules for better scoping
