import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import theme from '../../styles/theme';

const LoadingScreen = ({ text = 'Loading...' }) => {
  return (
    <View style={globalStyles.loadingContainer}>
      <ActivityIndicator 
        size="large" 
        color={theme.colors.primary} 
      />
      <Text style={globalStyles.loadingText}>
        {text}
      </Text>
    </View>
  );
};

export default LoadingScreen;