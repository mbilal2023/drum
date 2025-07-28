# Quick Setup Guide - RicoLive App

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Your Backend API
Open `src/services/api.js` and update line 6:
```javascript
const API_BASE_URL = 'https://your-backend-api.com/api'; // Replace with your API URL
```

### 3. Start the App
```bash
npm start
```

### 4. Test the App
- Scan QR code with Expo Go app on your phone
- Or press 'a' for Android emulator
- Or press 'i' for iOS simulator

## 🔑 API Endpoints Your Backend Needs

Your backend should have these endpoints:

**POST /auth/login**
```json
Request: { "email": "user@example.com", "password": "password123" }
Response: { "token": "jwt_token", "user": { "id": "1", "name": "User", "email": "user@example.com" } }
```

**POST /auth/register**
```json
Request: { "name": "User", "email": "user@example.com", "password": "password123" }
Response: { "token": "jwt_token", "user": { "id": "1", "name": "User", "email": "user@example.com" } }
```

## 📱 Build APK

### First Time Setup
```bash
npm install -g eas-cli
eas login
eas build:configure
```

### Build APK
```bash
eas build --platform android --profile production
```

## 🎨 Customize Theme

Edit `src/styles/theme.js` to change colors:
```javascript
colors: {
  primary: '#FF6B35',    // Your brand color
  secondary: '#4ECDC4',  // Secondary color
  // ... more colors
}
```

## 🔧 Troubleshooting

**Metro bundler issues:**
```bash
npx expo start --clear
```

**Package issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Can't connect to backend:**
- Make sure your API URL is correct
- Check if your backend is running
- Verify CORS settings on your backend

## 📁 Key Files to Know

- `src/services/api.js` - API configuration
- `src/styles/theme.js` - App theming
- `src/screens/auth/LoginScreen.js` - Login screen
- `src/redux/sagas/authSaga.js` - Authentication logic

## ✅ Production Checklist

Before releasing:
- [ ] Update API_BASE_URL
- [ ] Add real app icons in `/assets/`
- [ ] Test login/register flows
- [ ] Test on both Android and iOS
- [ ] Build and test APK

---

**Need Help?** Check the full README.md for detailed documentation!