import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import { globalStyles } from '../../styles/globalStyles';

const ProfileScreen = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.title}>Profile</Text>
        
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>User Information</Text>
          <Text style={globalStyles.bodyText}>Name: {user?.name || 'N/A'}</Text>
          <Text style={globalStyles.bodyText}>Email: {user?.email || 'N/A'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;