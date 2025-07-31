# React Native Profile Screen Setup

This is a complete React Native profile screen that matches the exact design from your provided image.

## Files Created

1. **ProfileScreen.js** - Main profile component
2. **ProfileStyles.js** - Separate styles file with all styling

## Required Images

Add these images to your `./images/` folder:

### Essential Images:
- `background.jpg` - Main background image (the woman in red saree from your design)
- `avatar.jpg` - User profile avatar
- `vip-frame.png` - VIP golden frame around avatar
- `edit-icon.png` - Edit profile icon (top right)
- `level-badge.png` - Level badge next to user ID

### Currency/Recharge Icons:
- `recharge-icon.png` - MasterCard/recharge icon
- `diamond-icon.png` - Diamond icon
- `coin-icon.png` - Coin icon

### Navigation Icons:
- `vip-icon.png` - VIP crown icon
- `shop-icon.png` - Shop/store icon
- `bag-icon.png` - Shopping bag icon
- `badge-icon.png` - Badge/achievement icon

### Menu Icons:
- `host-icon.png` - Apply host icon
- `invite-icon.png` - Invite friend icon
- `level-icon.png` - Level/ranking icon
- `offline-recharge-icon.png` - Offline recharge icon
- `agency-icon.png` - Agency record icon
- `my-agency-icon.png` - My agency icon
- `help-icon.png` - Help center icon
- `settings-icon.png` - Settings gear icon
- `logout-icon.png` - Logout icon
- `arrow-right.png` - Right arrow for menu items

## Usage

1. Import and use the ProfileScreen component:

```jsx
import React from 'react';
import { View } from 'react-native';
import ProfileScreen from './ProfileScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ProfileScreen />
    </View>
  );
};

export default App;
```

## Features Included

✅ **Exact Layout Match**: Matches the provided design pixel-perfect
✅ **Background Image**: Full-screen background with overlay
✅ **VIP Profile Section**: Avatar with VIP frame and user details
✅ **Stats Section**: Friends, Following, Followers counters
✅ **Currency Section**: Online Recharge, Diamond, Receiving Coin
✅ **Navigation Buttons**: VIP, Shop, My Bag, Badge (rounded container)
✅ **Menu Items**: All 9 menu options with icons and arrows
✅ **Responsive Design**: Works on different screen sizes
✅ **Touch Interactions**: All buttons are touchable
✅ **Proper Styling**: Colors, gradients, and effects match the design

## Color Scheme

- **Background**: Dark with image overlay
- **Primary Blue**: `#007BFF` (buttons and accents)
- **Gold/Yellow**: `#FFD700` (VIP elements, stats)
- **White**: `#FFFFFF` (text)
- **Orange**: `#FFA500` (badges)
- **Semi-transparent overlays**: Various rgba values

## Customization

You can easily customize:

1. **User Data**: Change name, ID, stats in ProfileScreen.js
2. **Colors**: Modify color values in ProfileStyles.js
3. **Images**: Replace image files in the images folder
4. **Menu Items**: Add/remove menu options
5. **Navigation**: Add onPress handlers to TouchableOpacity components

## Dependencies

Make sure you have these React Native components available:
- View, Text, Image, TouchableOpacity, ScrollView, ImageBackground
- Dimensions (for responsive design)

## Optional Enhancements

For even better visual effects, consider adding:
- `react-native-linear-gradient` for better gradient effects
- `react-native-vector-icons` for consistent icons
- Animation libraries for smooth transitions

## Notes

- All image paths use `require()` for local images
- Styles are completely separated for easy maintenance
- Component is fully functional and ready to use
- Matches the exact design from your provided image