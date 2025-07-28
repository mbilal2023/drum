// Theme Configuration - Change this file for complete app rebranding
export const theme = {
  // Colors
  colors: {
    primary: '#FF6B35',        // Main brand color (orange from the cat icon)
    secondary: '#4ECDC4',      // Secondary brand color
    accent: '#45B7D1',         // Accent color
    
    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    backgroundDark: '#2C3E50',
    
    // Text colors
    textPrimary: '#2C3E50',
    textSecondary: '#7F8C8D',
    textLight: '#BDC3C7',
    textWhite: '#FFFFFF',
    
    // Status colors
    success: '#27AE60',
    error: '#E74C3C',
    warning: '#F39C12',
    info: '#3498DB',
    
    // UI colors
    border: '#E1E8ED',
    shadow: '#000000',
    overlay: 'rgba(0,0,0,0.5)',
    
    // Google button
    google: '#4285F4',
    
    // Input colors
    inputBackground: '#F8F9FA',
    inputBorder: '#E1E8ED',
    inputFocus: '#FF6B35',
    
    // Card colors
    cardBackground: '#FFFFFF',
    cardShadow: 'rgba(0,0,0,0.1)',
  },
  
  // Typography
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    light: 'System',
  },
  
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    title: 36,
  },
  
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  
  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
  
  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    round: 50,
  },
  
  // Shadows
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  
  // Layout
  layout: {
    containerPadding: 20,
    screenPadding: 16,
    cardPadding: 16,
    buttonHeight: 48,
    inputHeight: 48,
  },
  
  // Animation
  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
  },
};

export default theme;