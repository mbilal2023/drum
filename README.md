# RicoLive React Native App

A professional React Native application built with Expo, featuring secure authentication, Redux Saga state management, and a beautiful UI design that matches the provided mockups.

## Features

- 🔐 **Secure Authentication** - JWT token-based authentication with secure storage
- 🎨 **Beautiful UI** - Modern design matching the provided mockups
- 🔄 **Redux Saga** - Professional state management with side effects handling
- 📱 **Cross Platform** - Works on both iOS and Android
- 🎯 **Easy Rebranding** - Centralized theme system for quick customization
- 🚀 **Performance Optimized** - Built for 1000+ users with smooth performance
- 💾 **Secure Storage** - Tokens and sensitive data stored securely using Keychain

## Tech Stack

- **React Native** with Expo
- **Redux Toolkit** + **Redux Saga** for state management
- **React Navigation** for navigation
- **Axios** for API calls
- **React Native Keychain** for secure storage
- **Expo Linear Gradient** for beautiful gradients

## Project Structure

```
src/
├── components/           # Reusable components
│   └── common/          # Common components
├── navigation/          # Navigation configuration
├── redux/              # Redux store, actions, reducers, sagas
│   ├── actions/        # Action creators
│   ├── reducers/       # Reducers
│   └── sagas/          # Redux sagas
├── screens/            # Screen components
│   ├── auth/           # Authentication screens
│   └── main/           # Main app screens
├── services/           # API services
├── styles/             # Styling and themes
└── utils/              # Utilities and helpers
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- For Android: Android Studio
- For iOS: Xcode (macOS only)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Backend

Update the API base URL in `src/services/api.js`:

```javascript
const API_BASE_URL = 'https://your-backend-api.com/api';
```

### 3. Start Development Server

```bash
npm start
```

### 4. Run on Device/Emulator

**For Android:**
```bash
npm run android
```

**For iOS:**
```bash
npm run ios
```

**For Web:**
```bash
npm run web
```

## Building APK

### Development Build
```bash
npx eas build --platform android --profile development
```

### Production Build
```bash
npx eas build --platform android --profile production
```

## API Integration

The app expects your backend API to have the following endpoints:

### Authentication Endpoints

- `POST /auth/login` - Login with email and password
- `POST /auth/register` - Register new user
- `POST /auth/logout` - Logout user
- `GET /auth/verify` - Verify token
- `POST /auth/forgot-password` - Send password reset email
- `POST /auth/reset-password` - Reset password

### Expected Request/Response Format

**Login Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

## Theming & Rebranding

All styling is centralized in `src/styles/theme.js`. To rebrand the app:

1. Update colors in the theme file:
```javascript
colors: {
  primary: '#FF6B35',      // Change this to your brand color
  secondary: '#4ECDC4',    // Secondary brand color
  // ... other colors
}
```

2. Update fonts, spacing, and other design tokens as needed.

3. The entire app will automatically use the new theme!

## Security Features

- **Secure Token Storage**: Uses React Native Keychain for secure token storage
- **Token Expiration Handling**: Automatically handles expired tokens
- **Auto-login**: Secure automatic login with stored credentials
- **Input Validation**: Comprehensive input validation and error handling

## Performance Optimizations

- **Redux Persist**: Persists auth state across app restarts
- **Optimized Re-renders**: Uses React.memo and useCallback where appropriate
- **Lazy Loading**: Screens are loaded on-demand
- **Efficient State Management**: Redux Saga handles complex async flows

## Folder Structure Details

### `/src/styles/`
- `theme.js` - Main theme configuration (colors, fonts, spacing)
- `globalStyles.js` - Global styles using the theme

### `/src/redux/`
- `store.js` - Redux store configuration
- `actions/` - Action creators
- `reducers/` - Redux reducers
- `sagas/` - Redux saga effects

### `/src/services/`
- `api.js` - API service with axios configuration

### `/src/utils/`
- `storage.js` - Secure storage utilities

## Customization Guide

### Adding New Screens

1. Create screen component in appropriate folder
2. Add to navigation in `src/navigation/`
3. Add any required Redux actions/reducers

### Adding New API Endpoints

1. Add endpoint to `src/services/api.js`
2. Create corresponding Redux actions
3. Add saga to handle the async flow

### Modifying Styles

1. Update `src/styles/theme.js` for global changes
2. Use `globalStyles` for consistent styling
3. Create component-specific styles when needed

## Testing

The app includes comprehensive error handling and loading states. Test the following scenarios:

- Login with valid/invalid credentials
- Network connectivity issues
- Token expiration
- App state persistence

## Deployment

### Android APK

1. Configure `eas.json` for your needs
2. Run `eas build --platform android`
3. Download and distribute the APK

### App Stores

Follow Expo's guide for submitting to Google Play Store and Apple App Store.

## Support

For issues and questions:

1. Check the Redux DevTools for state debugging
2. Use console logs to trace API calls
3. Check network requests in debugging tools

## License

This project is created for your specific requirements and includes all necessary features for a production-ready authentication app.

---

**Note**: Remember to update the API base URL and add your actual app icon before building for production!